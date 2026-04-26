import { useEffect, useRef, useState } from "react";

const TICKETS = [
  { task: "Post office run", time: "Mon 27 Apr 2026, 08:45" },
  { task: "Water the plants", time: "Mon 27 Apr 2026, 09:12" },
  { task: "Call Mum", time: "Mon 27 Apr 2026, 10:30" },
  { task: "Sharpen pencils", time: "Mon 27 Apr 2026, 14:05" },
];

export default function SampleTicket() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const swapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const cycle = setInterval(() => {
      if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
      setVisible(false);
      swapTimeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % TICKETS.length);
        setVisible(true);
        swapTimeoutRef.current = null;
      }, 280);
    }, 4200);

    return () => {
      clearInterval(cycle);
      if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
    };
  }, []);

  const ticket = TICKETS[index];

  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>Sample printed ticket</span>
        <span>58mm thermal layout</span>
      </div>
      <div className="mx-auto max-w-sm rounded-2xl bg-black p-3 shadow-md">
        <div className="rounded-xl bg-stone-100 px-5 py-6 text-stone-900 font-mono">
          <div className="text-center space-y-1.5">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-700">Rosewood Cottage</p>
            <p
              className="text-xs tracking-wider text-stone-500 transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {ticket.time}
            </p>
          </div>
          <div className="my-4 border-t border-dashed border-stone-400" aria-hidden="true" />
          <h3
            className="text-center text-lg sm:text-xl font-black uppercase tracking-[0.08em] leading-tight transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
            aria-live="polite"
          >
            {ticket.task}
          </h3>
          <div className="my-4 border-t border-dashed border-stone-400" aria-hidden="true" />
          <p className="text-center text-xs uppercase tracking-[0.25em] text-stone-500">
            Created by &mdash; Alex
          </p>
        </div>
      </div>
    </div>
  );
}
