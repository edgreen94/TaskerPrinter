import { useEffect, useRef, useState } from "react";
import WorkflowPanelHeader from "./WorkflowPanelHeader";
import { workflowPairPanelClass } from "./workflowPairPanel";

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
    <div className={workflowPairPanelClass}>
      <WorkflowPanelHeader
        metaLeft="Sample printed ticket"
        metaRight="80mm thermal layout"
        title="Your ticket on paper"
      />
      <div className="mt-6 flex min-h-0 flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-[386px]">
          <div className="rounded-2xl border border-stone-200/90 bg-gradient-to-b from-stone-50 to-stone-100/80 p-2.5 shadow-sm ring-1 ring-stone-200/40">
            <div className="rounded-xl bg-gradient-to-b from-stone-700 to-stone-800 p-[3px] shadow-inner">
              <div className="rounded-[10px] bg-stone-100 px-6 py-6 sm:px-7 text-stone-900 font-mono">
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
                <p
                  role="status"
                  aria-live="polite"
                  className="text-center text-lg sm:text-xl font-black uppercase tracking-[0.08em] leading-tight transition-opacity duration-300"
                  style={{ opacity: visible ? 1 : 0 }}
                >
                  {ticket.task}
                </p>
                <div className="my-4 border-t border-dashed border-stone-400" aria-hidden="true" />
                <p className="text-center text-xs uppercase tracking-[0.25em] text-stone-500">
                  Created by &mdash; Alex
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
