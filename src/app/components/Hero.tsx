import { Link } from "react-router";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col">
      <header className="w-full px-4 sm:px-6 py-6 flex justify-between items-center gap-3 max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex gap-8">
          <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors">The workflow</a>
          <a href="#availability" className="text-muted-foreground hover:text-foreground transition-colors">Availability</a>
          <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help</Link>
        </nav>
        <a
          href="#availability"
          className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base whitespace-nowrap flex-shrink-0"
        >
          <span className="sm:hidden">Early access</span>
          <span className="hidden sm:inline">Get early access</span>
        </a>
      </header>

      <div className="flex-1 flex items-center px-4 sm:px-6 py-10 md:py-16">
        <div className="w-full max-w-7xl mx-auto grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="text-center lg:text-left space-y-6 md:space-y-7 order-2 lg:order-1">
            <div className="inline-block bg-secondary px-4 py-2 rounded-full">
              <span className="text-xs sm:text-sm">Productivity you can pick up</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              A to-do list<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500">
                you can hold
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Ticker Printer turns each task into a physical ticket on a thermal receipt printer. Built for people who think better with paper than push notifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center pt-2 md:pt-3">
              <a href="#availability" className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg text-center">
                Get early access
              </a>
              <a href="#compatibility" className="border border-border px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-accent transition-colors text-base sm:text-lg text-center">
                Check printer compatibility
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div aria-hidden="true" className="absolute -inset-6 sm:-inset-10 bg-gradient-to-br from-emerald-200/40 via-lime-100/30 to-transparent blur-3xl rounded-[3rem]" />
              <picture>
                <source media="(max-width: 640px)" srcSet="/hero-tickets-desk-sm.webp" />
                <img
                  src="/hero-tickets-desk.webp"
                  alt="Four printed thermal receipt tickets on a warm wooden desk: Post office run, Water the plants, Call Mum, Sharpen pencils."
                  className="relative w-full rounded-2xl md:rounded-3xl shadow-2xl ring-1 ring-black/5"
                  width={1376}
                  height={768}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
