export default function FoundersNote() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-3xl border border-border bg-card px-6 sm:px-10 py-8 sm:py-12 shadow-sm">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-800 mb-4 sm:mb-5">
            A note from the desk
          </p>
          <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              I built Ticker Printer because my to-do list kept drowning in the same phone that was supposed to help me get through it. Every notification was a small tug in the wrong direction.
            </p>
            <p>
              The fix, it turned out, was old-fashioned: get the next task onto a piece of paper and put the phone down. A thermal printer on the desk, one ticket at a time, a satisfying little tear when it&rsquo;s done.
            </p>
            <p>
              It&rsquo;s early days &mdash; iPhone beta first, Android soon after. If any of this sounds like it&rsquo;d suit how you think, I&rsquo;d love to hear from you.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" aria-hidden="true" />
            <p className="font-mono text-sm text-stone-600">&mdash; Alex, founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
