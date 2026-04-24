import screenshotQueue from "../../imports/screenshot-queue.webp";
import screenshotPrint from "../../imports/screenshot-print.webp";
import screenshotSettings from "../../imports/screenshot-settings.webp";

export default function AppScreenshots() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Proof In The Product
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A focused mobile experience for creating tasks, previewing tickets, and managing a local print queue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto">
          {/* Screenshot 1 - Print */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[260px] sm:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2.25rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-[6px] sm:border-8 border-gray-800">
                <img
                  src={screenshotPrint}
                  alt="Print screen"
                  className="rounded-[1.5rem] sm:rounded-[2.2rem] w-full"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">Create &amp; Preview</h3>
              <p className="text-sm text-muted-foreground">
                See exactly how your task will print
              </p>
            </div>
          </div>

          {/* Screenshot 2 - Queue */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[260px] sm:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2.25rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-[6px] sm:border-8 border-gray-800">
                <img
                  src={screenshotQueue}
                  alt="Queue screen"
                  className="rounded-[1.5rem] sm:rounded-[2.2rem] w-full"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">Local Queue</h3>
              <p className="text-sm text-muted-foreground">
                Tasks queue automatically until printer is ready
              </p>
            </div>
          </div>

          {/* Screenshot 3 - Settings */}
          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
            <div className="relative w-full max-w-[260px] sm:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-green-500/20 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-[2.25rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-[6px] sm:border-8 border-gray-800">
                <img
                  src={screenshotSettings}
                  alt="Settings screen"
                  className="rounded-[1.5rem] sm:rounded-[2.2rem] w-full"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">Simple Setup</h3>
              <p className="text-sm text-muted-foreground">
                Connect to your local network printer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
