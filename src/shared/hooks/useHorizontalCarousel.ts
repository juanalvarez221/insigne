"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_SELECTOR = ".carousel-slide";

type Options = {
  itemCount: number;
  autoPlayMs?: number;
  loop?: boolean;
  paused?: boolean;
};

export function useHorizontalCarousel({
  itemCount,
  autoPlayMs = 5500,
  loop = true,
  paused = false,
}: Options) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startScroll: 0, pointerId: -1 });

  const getSlides = useCallback(() => {
    const node = viewportRef.current;
    if (!node) return [] as HTMLElement[];
    return Array.from(node.querySelectorAll<HTMLElement>(SLIDE_SELECTOR));
  }, []);

  const syncActiveIndex = useCallback(() => {
    const node = viewportRef.current;
    const slides = getSlides();
    if (!node || slides.length === 0) return;

    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;
    const scrollLeft = node.scrollLeft;

    slides.forEach((slide, index) => {
      const distance = Math.abs(scrollLeft - slide.offsetLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, [getSlides]);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const node = viewportRef.current;
      const slides = getSlides();
      if (!node || slides.length === 0) return;

      const next = loop
        ? ((index % slides.length) + slides.length) % slides.length
        : Math.max(0, Math.min(index, slides.length - 1));

      const target = slides[next];
      if (!target) return;

      node.scrollTo({ left: target.offsetLeft, behavior });
      setActiveIndex(next);
    },
    [getSlides, loop],
  );

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const onScroll = () => syncActiveIndex();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, [syncActiveIndex]);

  useEffect(() => {
    if (!autoPlayMs || paused || isDragging || itemCount <= 1) return;
    const id = window.setInterval(() => {
      goNext();
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, goNext, isDragging, paused, itemCount]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const node = viewportRef.current;
    if (!node) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startScroll: node.scrollLeft,
      pointerId: e.pointerId,
    };
    node.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragRef.current.pointerId !== e.pointerId) return;
    const node = viewportRef.current;
    if (!node) return;
    const delta = e.clientX - dragRef.current.startX;
    node.scrollLeft = dragRef.current.startScroll - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const node = viewportRef.current;
    if (!node) return;
    if (dragRef.current.pointerId === e.pointerId) {
      try {
        node.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    }
    setIsDragging(false);
    syncActiveIndex();
    const slides = getSlides();
    if (slides.length === 0) return;
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const distance = Math.abs(node.scrollLeft - slide.offsetLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });
    scrollToIndex(closest);
  };

  return {
    viewportRef,
    activeIndex,
    isDragging,
    goNext,
    goPrev,
    scrollToIndex,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onPointerLeave: (e: React.PointerEvent<HTMLDivElement>) => {
        if (isDragging) endDrag(e);
      },
    },
  };
}
