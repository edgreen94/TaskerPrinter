export default function CTA() {
  return (
    <section id="availability" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            Get Ticker Printer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12">
            It&rsquo;s early. Drop us a line and we&rsquo;ll bring you in when the queue&rsquo;s your size &mdash; no spam, just the emails that actually matter.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 mb-8 md:mb-10">
          <a
            href="mailto:support@tickerprinter.com?subject=Ticker%20Printer%20iPhone%20Beta"
            className="bg-black text-white px-6 py-5 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Request access</div>
              <div className="font-semibold text-base">iPhone beta</div>
            </div>
          </a>
          <a
            href="mailto:support@tickerprinter.com?subject=Ticker%20Printer%20Android%20Updates"
            className="bg-black text-white px-6 py-5 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Stay informed</div>
              <div className="font-semibold text-base">Android updates</div>
            </div>
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground mb-10 md:mb-12">
          Both buttons open your email app. Reply with anything &mdash; a hello is enough.
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
      </div>
    </section>
  );
}
