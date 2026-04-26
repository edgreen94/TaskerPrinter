import { Sunrise, Focus, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import WorkflowPanelHeader from "./WorkflowPanelHeader";
import { workflowPairPanelClass } from "./workflowPairPanel";

const moments: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Sunrise,
    title: "A stack instead of a scroll",
    body: "Tomorrow\u2019s tickets print and wait on your desk before you\u2019ve had coffee.",
  },
  {
    icon: Focus,
    title: "One ticket at a time",
    body: "The rest of the list stays in your pocket until this one is done.",
  },
  {
    icon: Layers,
    title: "Proof, not a notification",
    body: "A visible pile of finished tickets at day\u2019s end \u2014 not a badge that fades.",
  },
];

export default function ExpectationsCard() {
  return (
    <section
      aria-labelledby="expectations-heading"
      className={`${workflowPairPanelClass} relative overflow-hidden`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/55 via-transparent to-lime-50/25"
      />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <WorkflowPanelHeader
          metaLeft="Three things you&rsquo;ll notice"
          metaRight="—"
          title="A calmer shape for the day"
          titleId="expectations-heading"
        />
        <ol className="mt-6 min-h-0 flex-1 list-none space-y-0">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <li
                key={moment.title}
                className={
                  index > 0
                    ? "border-t border-border/50 pt-5 sm:pt-6"
                    : ""
                }
              >
                <div className="grid grid-cols-[1.5rem_2.75rem_1fr] gap-x-3 sm:grid-cols-[1.75rem_3rem_1fr] sm:gap-x-4">
                  <div className="flex justify-end pt-2.5 sm:pt-2">
                    <span className="font-mono text-[11px] font-semibold tabular-nums text-emerald-700/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200/60 bg-white/95 shadow-sm sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-emerald-800 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-semibold leading-snug tracking-tight text-stone-900">
                      {moment.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem] sm:leading-[1.65]">
                      {moment.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
