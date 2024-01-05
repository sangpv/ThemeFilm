'use client';

import { useEffect, useRef } from "react";

export function useHorizontalScroll<T extends HTMLElement>() {
    const elRef = useRef<T>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const maxLeft = el.scrollWidth - el.clientWidth;
            const box = document.querySelector('html') as HTMLDivElement | null;
            const onWheel = (e: WheelEvent) => {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
                if (el.scrollLeft == 0 && box) {
                    box.scrollTop += e.deltaY;
                }
                if (el.scrollLeft == maxLeft && box) {
                    box.scrollTop += e.deltaY;
                }
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);
    return elRef;
}