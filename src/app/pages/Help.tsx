import { Link } from "react-router";
import Logo from "../components/Logo";
import { Printer, Smartphone, Wifi, RefreshCw, AlertCircle } from "lucide-react";

const faqs = [
  {
    icon: Printer,
    question: "Which printers does it work with?",
    answer: "Any ESC/POS-compatible 58mm or 80mm thermal receipt printer on your local network. The Epson TM-M30, Star TSP143, MUNBYN IMP001, and Phomemo M02 are all safe bets."
  },
  {
    icon: Wifi,
    question: "How do I connect my printer?",
    answer: "Open Settings, tap Add Printer, and pick yours from the list. Phone and printer need to be on the same Wi-Fi. USB-only printers need a network adapter in the middle."
  },
  {
    icon: Smartphone,
    question: "Does it work offline?",
    answer: "Yes. Tasks queue on the device. Hit print and they wait patiently for the printer to come back online — then they finish themselves. No internet required at any point."
  },
  {
    icon: RefreshCw,
    question: "My printer won't show up",
    answer: "Check it's powered on and on the same Wi-Fi as your phone. Restart both, wait 30 seconds, try again. A few USB-only models genuinely don't do network printing — worth double-checking the spec sheet."
  },
  {
    icon: AlertCircle,
    question: "Nothing is printing",
    answer: "Paper loaded? No error light on the printer? Still connected to Wi-Fi? If all three are yes, remove the printer in Settings and pair it again."
  }
];

export default function Help() {
  return (
    <div className="min-h-screen bg-background">
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

      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Help &amp; support</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Getting set up, staying set up, and a few things people ask.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Frequently asked</h2>
          <div className="space-y-5 sm:space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-5 sm:p-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">When something goes wrong</h2>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Printer not found</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; Phone and printer on the same Wi-Fi</li>
                <li>&bull; Restart the printer, wait 30 seconds</li>
                <li>&bull; Confirm it has a valid IP address</li>
                <li>&bull; Turn off any VPN on your phone</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Faint or patchy prints</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; Clean the thermal print head</li>
                <li>&bull; Use fresh, decent thermal paper</li>
                <li>&bull; Check the roll is loaded the right way up</li>
                <li>&bull; Nudge the print density up in Settings</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Queue is stuck</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; Force quit and reopen the app</li>
                <li>&bull; Glance at the printer status lights</li>
                <li>&bull; Clear the queue and try one ticket</li>
                <li>&bull; Re-pair the printer in Settings</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">App feels sluggish</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>&bull; Update to the latest version</li>
                <li>&bull; Archive old completed tickets</li>
                <li>&bull; Restart your phone</li>
                <li>&bull; Check you&rsquo;ve got storage to spare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still stuck?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
            Drop us a line. A human reads it, usually within a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="mailto:support@tickerprinter.com"
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Email support
            </a>
            <Link
              to="/"
              className="border border-border px-6 sm:px-8 py-3 rounded-lg hover:bg-accent transition-colors text-center"
            >
              Back home
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 border-t border-border py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Ticker Printer. Made for people who like paper.</p>
        </div>
      </footer>
    </div>
  );
}
