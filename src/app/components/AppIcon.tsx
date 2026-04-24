import appIcon from "../../imports/task-printer-icon.webp";

export default function AppIcon() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="order-2 max-w-2xl mx-auto text-center lg:order-1 lg:mx-0 lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6">
              Built To Keep You Moving
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Ticker Printer is intentionally minimal. Capture the task, print the ticket, and get on with it.
              The app is designed to feel quick, calm, and physical from the very first tap.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">A distraction-free interface that keeps the next task front and center</span>
              </li>
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">A reliable print queue so tasks do not disappear when your printer is busy</span>
              </li>
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">A simple setup that feels personal, private, and close at hand</span>
              </li>
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-lime-500/20 blur-3xl"></div>
              <img
                src={appIcon}
                alt="Ticker Printer app icon"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[28%] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
