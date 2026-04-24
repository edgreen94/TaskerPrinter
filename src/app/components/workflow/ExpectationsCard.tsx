import { Sunrise, Focus, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    <div className="rounded-3xl border border-border bg-gradient-to-br from-emerald-50 to-lime-50 p-6 sm:p-8 shadow-sm flex flex-col text-stone-900">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-800 mb-3">
        Three things you&rsquo;ll notice
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-7">A calmer shape for the day</h3>

      <div className="space-y-5 sm:space-y-6">
        {moments.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center shadow-sm">
              <Icon className="w-5 h-5 text-emerald-700" strokeWidth={2.25} aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold mb-1">{title}</p>
              <p className="text-sm text-stone-700 leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
