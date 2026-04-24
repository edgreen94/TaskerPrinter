import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <nav className="hidden md:flex gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#setup" className="text-muted-foreground hover:text-foreground transition-colors">Download</a>
          <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">Help</Link>
        </nav>
        <a href="#how-it-works" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Get Started
        </a>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block bg-secondary px-4 py-2 rounded-full mb-4">
            <span className="text-sm">Physical productivity, digitally connected</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your To-Do List,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500">
              Printed & Tangible
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple app with a local queue that prints your tasks to a thermal printer.
            No cloud, no complexity—just you, your phone, and your printer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a href="#how-it-works" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg">
              Get Started
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Local network only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>No account needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-lime-500" />
              <span>Privacy first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
