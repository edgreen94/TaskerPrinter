import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-muted/25 border-t border-border/80 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4" aria-label="Print-It home">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A calmer to-do list that lives on your desk, not your lock screen.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#screens" className="hover:text-foreground transition-colors duration-200">The app</a></li>
              <li><a href="#workflow" className="hover:text-foreground transition-colors duration-200">The workflow</a></li>
              <li><a href="#founder" className="hover:text-foreground transition-colors duration-200">Why Print-It</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors duration-200">Setup</a></li>
              <li><a href="#availability" className="hover:text-foreground transition-colors duration-200">Availability</a></li>
              <li><a href="#compatibility" className="hover:text-foreground transition-colors duration-200">Printer compatibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-foreground transition-colors duration-200">Help centre</Link></li>
              <li><a href="mailto:support@print-it-app.com" className="hover:text-foreground transition-colors duration-200">Email us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/80 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Print-It. Made for people who like paper.
          </p>
        </div>
      </div>
    </footer>
  );
}
