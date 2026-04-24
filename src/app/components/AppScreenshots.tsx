import screenshotQueue from "../../imports/screenshot-queue.webp";
import screenshotPrint from "../../imports/screenshot-print.webp";
import screenshotSettings from "../../imports/screenshot-settings.webp";
import { SectionShell, SectionHeading } from "./Section";

type Shot = {
  src: string;
  alt: string;
  heading: string;
  body: string;
  blur: string;
};

const shots: Shot[] = [
  {
    src: screenshotPrint,
    alt: "Ticker Printer compose screen with a task being written",
    heading: "Write the ticket",
    body: "A single calm canvas. Type, preview, print.",
    blur: "from-green-500/20 to-emerald-500/20",
  },
  {
    src: screenshotQueue,
    alt: "Ticker Printer print queue listing pending and completed tickets",
    heading: "Nothing goes missing",
    body: "Prints wait in a local queue. Turn the printer on \u2014 they finish themselves.",
    blur: "from-emerald-500/20 to-teal-500/20",
  },
  {
    src: screenshotSettings,
    alt: "Ticker Printer printer settings and pairing screen",
    heading: "Set it once",
    body: "Pair your printer over local Wi-Fi. No accounts, no cloud.",
    blur: "from-lime-500/20 to-green-500/20",
  },
];

export default function AppScreenshots() {
  return (
    <SectionShell className="bg-gradient-to-b from-background to-muted/30">
      <SectionHeading
        title="Three screens, on purpose"
        subtitle={
          <>
            We kept it small. Write the task, watch the queue, point it at your printer. That&rsquo;s the whole app.
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
        {shots.map(({ src, alt, heading, body, blur }) => (
          <div key={heading} className="flex flex-col items-center">
            <div className="relative w-full max-w-[260px]">
              <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${blur} blur-3xl`} />
              <div className="relative bg-gray-900 rounded-[2.25rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-[6px] md:border-8 border-gray-800">
                <img
                  src={src}
                  alt={alt}
                  className="rounded-[1.5rem] md:rounded-[2.2rem] w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-6 text-center">
              <h3 className="font-semibold mb-2">{heading}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
