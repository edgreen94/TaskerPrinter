import { Link } from "react-router";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex justify-between items-center gap-3">
          <Link to="/" className="min-w-0" aria-label="Print-It home">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium lg:gap-7">
            <a href="#screens" className="text-muted-foreground hover:text-foreground transition-colors duration-200">The app</a>
            <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors duration-200">The workflow</a>
            <a href="#founder" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Why Print-It</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Setup</a>
            <a href="#availability" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Availability</a>
            <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors duration-200">Help</Link>
          </nav>
          <a
            href="#availability"
            className="bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:bg-primary/95 transition-all duration-200 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
          >
            <span className="sm:hidden">Early access</span>
            <span className="hidden sm:inline">Get early access</span>
          </a>
        </div>
      </header>

      <div className="flex-1 flex items-center px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)] 2xl:grid-cols-[minmax(22rem,30rem)_minmax(0,1fr)]">
          <div className="text-center lg:text-left space-y-6 md:space-y-7 order-2 lg:order-1 lg:max-w-xl 2xl:max-w-[28rem] lg:justify-self-start">
            <div className="inline-flex items-center rounded-full border border-border/70 bg-secondary/90 px-4 py-2 shadow-sm ring-1 ring-black/[0.03]">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">Productivity you can pick up</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-bold leading-[1.06] tracking-tight">
              A to-do list<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500">
                you can hold
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Print-It turns each task into a physical ticket on a thermal receipt printer. Built for people who think better with paper than push notifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center pt-1 md:pt-2">
              <a
                href="#availability"
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-sm hover:shadow-md hover:bg-primary/95 transition-all duration-200 text-base sm:text-lg text-center font-medium"
              >
                Get early access
              </a>
              <a
                href="#compatibility"
                className="border border-border/90 bg-background px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-accent/80 hover:border-border transition-all duration-200 text-base sm:text-lg text-center font-medium text-foreground"
              >
                Check printer compatibility
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full min-w-0 lg:justify-self-stretch">
            <div className="relative mx-auto w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none lg:mx-0">
              <div aria-hidden="true" className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-br from-emerald-200/35 via-lime-100/25 to-transparent blur-3xl rounded-[3rem]" />
              <picture>
                <source media="(max-width: 640px)" srcSet="/hero-workflow-sm.webp" />
                <img
                  src="/hero-workflow.webp"
                  alt="Print-It workflow: phone showing Sharpen pencils ticket and Print ticket button, thermal printer outputting a ticket, and a spike stacked with printed tasks including Wash car and Call Mum."
                  className="relative w-full rounded-2xl md:rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]"
                  width={1024}
                  height={546}
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
