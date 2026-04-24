import { Mail, ArrowUpRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./Section";

export default function CTA() {
  return (
    <SectionShell id="availability">
      <SectionHeading
        title="Get Ticker Printer"
        subtitle={
          <>
            It&rsquo;s early. Drop us a line and we&rsquo;ll bring you in when the queue&rsquo;s your size &mdash; no spam, just the emails that actually matter.
          </>
        }
        className="mb-10 md:mb-12"
      />

      <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 mb-4 md:mb-5">
        <a
          href="mailto:support@tickerprinter.com?subject=Ticker%20Printer%20iPhone%20Beta&body=Hi%20%E2%80%94%20I%27d%20like%20to%20join%20the%20iPhone%20beta."
          className="group rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-emerald-400 hover:shadow-md transition-all flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center shadow-sm">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-1">
              <p className="font-semibold">Request the iPhone beta</p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors flex-shrink-0" aria-hidden="true" />
            </div>
            <p className="text-sm text-muted-foreground">Opens your email app. A hello is enough &mdash; we&rsquo;ll reply.</p>
          </div>
        </a>

        <a
          href="mailto:support@tickerprinter.com?subject=Ticker%20Printer%20Android%20Updates&body=Hi%20%E2%80%94%20please%20keep%20me%20posted%20on%20the%20Android%20build."
          className="group rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-emerald-400 hover:shadow-md transition-all flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-sm">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3 mb-1">
              <p className="font-semibold">Join the Android list</p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600 transition-colors flex-shrink-0" aria-hidden="true" />
            </div>
            <p className="text-sm text-muted-foreground">Opens your email app. We&rsquo;ll shout when the build&rsquo;s ready.</p>
          </div>
        </a>
      </div>

      <p className="text-center text-xs text-muted-foreground mb-10 md:mb-12">
        Or email <a href="mailto:support@tickerprinter.com" className="underline hover:text-foreground">support@tickerprinter.com</a> directly.
      </p>

      <div className="max-w-5xl mx-auto mb-10 md:mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground mb-2">Right now</p>
          <p className="font-semibold">iPhone beta, actively testing</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground mb-2">Next up</p>
          <p className="font-semibold">Android build, planning underway</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 sm:col-span-2 md:col-span-1">
          <p className="text-sm text-muted-foreground mb-2">Best setup</p>
          <p className="font-semibold">Home Wi-Fi and an ESC/POS printer</p>
        </div>
      </div>

      <div id="compatibility" className="max-w-5xl mx-auto bg-muted p-6 sm:p-8 rounded-2xl scroll-mt-20">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Printer compatibility</h3>
        <p className="text-muted-foreground mb-6">
          Built for ESC/POS thermal receipt printers on your local network &mdash; 58mm and 80mm rolls. These are the ones we&rsquo;d reach for first:
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
          <span className="bg-background px-3 sm:px-4 py-2 rounded-lg border border-border">Epson TM-M30</span>
          <span className="bg-background px-3 sm:px-4 py-2 rounded-lg border border-border">Star TSP143</span>
          <span className="bg-background px-3 sm:px-4 py-2 rounded-lg border border-border">MUNBYN IMP001</span>
          <span className="bg-background px-3 sm:px-4 py-2 rounded-lg border border-border">Phomemo M02</span>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Not sure? Email your printer model and we&rsquo;ll check fit before you buy one.
        </p>
      </div>
    </SectionShell>
  );
}
