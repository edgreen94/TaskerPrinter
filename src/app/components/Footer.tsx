import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground max-w-sm">
              Transform your digital tasks into physical receipts.
              Productivity you can hold in your hands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#workflow" className="hover:text-foreground transition-colors">See the Workflow</a></li>
              <li><a href="#availability" className="hover:text-foreground transition-colors">Availability</a></li>
              <li><a href="#compatibility" className="hover:text-foreground transition-colors">Printer Compatibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/help" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><a href="mailto:support@tickerprinter.com" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Ticker Printer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
