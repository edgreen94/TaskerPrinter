import { Link } from "react-router";
import Logo from "../components/Logo";
import RouteMeta from "../components/RouteMeta";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <RouteMeta
        title="Page not found — Print-It"
        description="This page didn't make the queue. Head back to the Print-It homepage."
        path="/404"
      />
      <header className="w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex justify-between items-center gap-3">
          <Link to="/" className="min-w-0" aria-label="Print-It home">
            <Logo />
          </Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap flex-shrink-0">
            <span className="sm:hidden">Home</span>
            <span className="hidden sm:inline">Back to home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-700 mb-4">Error 404</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 md:mb-6">
            This page didn&rsquo;t make the queue
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            The link you followed leads somewhere we haven&rsquo;t built yet. Happens. Head back and we&rsquo;ll pretend it never happened.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-primary/95 transition-all duration-200 text-center font-medium"
            >
              Back home
            </Link>
            <Link
              to="/help"
              className="border border-border/90 bg-background px-6 sm:px-8 py-3.5 rounded-xl hover:bg-accent/80 transition-all duration-200 text-center font-medium"
            >
              Visit help
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-muted/25 border-t border-border/80 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Print-It. Made for people who like paper.</p>
        </div>
      </footer>
    </div>
  );
}
