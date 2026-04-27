import { Mail, ArrowUpRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./Section";

export default function CTA() {
  return (
    <SectionShell id="availability" className="bg-gradient-to-b from-muted/20 to-background">
      <SectionHeading
        title="Get Print-It"
        subtitle={
          <>
            It&rsquo;s early. Drop us a line and we&rsquo;ll bring you in when the queue&rsquo;s your size &mdash; no spam, just the emails that actually matter.
          </>
        }
      />

      <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 mb-4 md:mb-5">
        <a
          href="mailto:support@print-it-app.com?subject=Print-It%20iPhone%20Beta&body=Hi%20%E2%80%94%20I%27d%20like%20to%20join%20the%20iPhone%20beta."
          className="group rounded-2xl border border-border/90 bg-card p-5 sm:p-6 shadow-sm hover:border-emerald-400/70 hover:shadow-md transition-all duration-200 flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center shadow-sm ring-1 ring-white/20">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-1">
              <p className="font-semibold text-foreground tracking-tight">Request the iPhone beta</p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors duration-200 flex-shrink-0" aria-hidden="true" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Opens your email app. A hello is enough &mdash; we&rsquo;ll reply.</p>
          </div>
        </a>

        <a
          href="mailto:support@print-it-app.com?subject=Print-It%20Android%20Updates&body=Hi%20%E2%80%94%20please%20keep%20me%20posted%20on%20the%20Android%20build."
          className="group rounded-2xl border border-border/90 bg-card p-5 sm:p-6 shadow-sm hover:border-emerald-400/70 hover:shadow-md transition-all duration-200 flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-sm ring-1 ring-white/20">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-1">
              <p className="font-semibold text-foreground tracking-tight">Join the Android list</p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors duration-200 flex-shrink-0" aria-hidden="true" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Opens your email app. We&rsquo;ll shout when the build&rsquo;s ready.</p>
          </div>
        </a>
      </div>

      <p className="text-center text-sm text-muted-foreground mb-10 md:mb-12">
        Or email{" "}
        <a href="mailto:support@print-it-app.com" className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-emerald-600/60 transition-colors">
          support@print-it-app.com
        </a>{" "}
        directly.
      </p>

      <div className="max-w-5xl mx-auto mb-10 md:mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
        <div className="rounded-2xl border border-border/90 bg-card p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">Right now</p>
          <p className="font-semibold text-foreground tracking-tight">iPhone beta, actively testing</p>
        </div>
        <div className="rounded-2xl border border-border/90 bg-card p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">Next up</p>
          <p className="font-semibold text-foreground tracking-tight">Android build, planning underway</p>
        </div>
        <div className="rounded-2xl border border-border/90 bg-card p-5 shadow-sm sm:col-span-2 md:col-span-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">Best setup</p>
          <p className="font-semibold text-foreground tracking-tight">Home Wi-Fi and an ESC/POS printer</p>
        </div>
      </div>

      <div id="compatibility" className="max-w-5xl mx-auto bg-muted/60 border border-border/80 p-6 sm:p-9 rounded-3xl scroll-mt-24 md:scroll-mt-28 shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-3">Printer compatibility</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
          Built for ESC/POS thermal receipt printers on your local network &mdash; 58mm and 80mm rolls. These are the ones we&rsquo;d reach for first:
        </p>
        <div className="flex flex-wrap gap-2.5 sm:gap-3 text-sm">
          {["Epson TM-M30", "Star TSP143", "MUNBYN IMP001", "Phomemo M02"].map((name) => (
            <span
              key={name}
              className="bg-background px-3 sm:px-4 py-2 rounded-lg border border-border/90 font-medium text-foreground/90 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Not sure? Email your printer model and we&rsquo;ll check fit before you buy one.
        </p>
      </div>
    </SectionShell>
  );
}
