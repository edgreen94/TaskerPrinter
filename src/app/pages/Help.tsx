import { Link } from "react-router";
import Logo from "../components/Logo";
import { Printer, Smartphone, Wifi, RefreshCw, AlertCircle } from "lucide-react";

const faqs = [
  {
    icon: Printer,
    question: "Which printers are compatible?",
    answer: "Ticker Printer works with most standard 58mm and 80mm thermal receipt printers that support ESC/POS commands. We recommend the Epson TM-M30, Star TSP143, MUNBYN IMP001, and Phomemo M02."
  },
  {
    icon: Wifi,
    question: "How do I connect my printer?",
    answer: "Go to Settings in the app, tap 'Add Printer', and select your printer from the list of available devices on your local network. The printer must be on the same WiFi network as your phone. For USB printers, connect via a compatible adapter."
  },
  {
    icon: Smartphone,
    question: "Does the app work offline?",
    answer: "Yes! Tasks queue locally on your device. When you add a task and hit print, it queues automatically. Once your printer reconnects to the local network, queued tasks will print in order. No internet connection required."
  },
  {
    icon: RefreshCw,
    question: "My printer isn't appearing in the app",
    answer: "Make sure your printer is powered on and connected to the same WiFi network as your phone. Restart both your printer and phone, then try again. Check that your printer supports network printing (not all USB-only models do)."
  },
  {
    icon: AlertCircle,
    question: "Tasks aren't printing",
    answer: "Check that your printer has paper loaded and is not in an error state (check the status lights). Verify the printer is still connected to your local network. Try removing and re-adding the printer in app settings."
  }
];

export default function Help() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full px-6 py-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to get the most out of Ticker Printer
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Troubleshooting Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Printer Not Found</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Ensure printer is on the same WiFi network</li>
                <li>• Restart your printer and wait 30 seconds</li>
                <li>• Check printer has a valid IP address</li>
                <li>• Disable VPN on your phone if active</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Print Quality Issues</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Clean the thermal print head</li>
                <li>• Use fresh, high-quality thermal paper</li>
                <li>• Check paper is loaded correctly</li>
                <li>• Adjust print density in app settings</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Queue Not Processing</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Force quit and restart the app</li>
                <li>• Check printer status lights</li>
                <li>• Clear queue and try single task</li>
                <li>• Verify printer connection in settings</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">App Performance</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Update to latest app version</li>
                <li>• Clear completed tasks regularly</li>
                <li>• Restart your device</li>
                <li>• Check available storage space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Can't find what you're looking for? Get in touch with our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@tickerprinter.com"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Email Support
            </a>
            <Link
              to="/"
              className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Ticker Printer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
