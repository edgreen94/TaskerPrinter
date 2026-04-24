import { Link } from "react-router";
import Logo from "../components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full px-4 sm:px-6 py-5 md:py-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
          <Link to="/" className="min-w-0">
            <Logo />
          </Link>
          <Link to="/" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap flex-shrink-0">
            <span className="sm:hidden">Home</span>
            <span className="hidden sm:inline">Back to home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-700 mb-4">Error 404</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6">
            This page didn&rsquo;t make the queue
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            The link you followed leads somewhere we haven&rsquo;t built yet. Happens. Head back and we&rsquo;ll pretend it never happened.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Back home
            </Link>
            <Link
              to="/help"
              className="border border-border px-6 sm:px-8 py-3 rounded-lg hover:bg-accent transition-colors text-center"
            >
              Visit help
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-muted/30 border-t border-border py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Ticker Printer. Made for people who like paper.</p>
        </div>
      </footer>
    </div>
  );
}
