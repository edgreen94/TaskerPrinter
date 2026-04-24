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

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-block bg-secondary px-4 py-2 rounded-full mb-2 md:mb-4">
            <span className="text-xs sm:text-sm">Productivity you can pick up</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Your to-do list,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500">
              printed &amp; tangible
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ticker Printer turns each task into a physical ticket on a thermal receipt printer. Built for people who think better with paper than push notifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 md:pt-6">
            <a href="#availability" className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg text-center">
              Get early access
            </a>
            <a href="#compatibility" className="border border-border px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-accent transition-colors text-base sm:text-lg text-center">
              Check printer compatibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
