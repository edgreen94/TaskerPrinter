import appIcon from "../../imports/task-printer-icon.webp";

export default function AppIcon() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple By Design
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ticker Printer is intentionally minimal. Add a task, hit print, done.
              Everything stays on your local network—no cloud, no accounts.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Clean, distraction-free interface—just your tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Local queue ensures your prints never get lost</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Direct connection to your printer—no internet needed</span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-lime-500/20 blur-3xl"></div>
              <img
                src={appIcon}
                alt="Ticker Printer App Icon"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-[28%] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
