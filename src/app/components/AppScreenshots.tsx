import screenshotQueue from "../../imports/screenshot-queue.webp";
import screenshotPrint from "../../imports/screenshot-print.webp";
import screenshotSettings from "../../imports/screenshot-settings.webp";

export default function AppScreenshots() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Three screens, on purpose
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We kept it small. Write the task, watch the queue, point it at your printer. That&rsquo;s the whole app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[260px]">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2.25rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-[6px] md:border-8 border-gray-800">
                <img
                  src={screenshotPrint}
                  alt="Ticker Printer compose screen with a task being written"
                  className="rounded-[1.5rem] md:rounded-[2.2rem] w-full"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">Write the ticket</h3>
              <p className="text-sm text-muted-foreground">
                A single calm canvas. Type, preview, print.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[260px]">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2.25rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-[6px] md:border-8 border-gray-800">
                <img
                  src={screenshotQueue}
                  alt="Ticker Printer print queue listing pending and completed tickets"
                  className="rounded-[1.5rem] md:rounded-[2.2rem] w-full"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">Nothing goes missing</h3>
              <p className="text-sm text-muted-foreground">
                Prints wait in a local queue. Turn the printer on &mdash; they finish themselves.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[260px]">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-green-500/20 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2.25rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-[6px] md:border-8 border-gray-800">
                <img
                  src={screenshotSettings}
                  alt="Ticker Printer printer settings and pairing screen"
                  className="rounded-[1.5rem] md:rounded-[2.2rem] w-full"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">Set it once</h3>
              <p className="text-sm text-muted-foreground">
                Pair your printer over local Wi-Fi. No accounts, no cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
