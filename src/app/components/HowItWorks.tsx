import { Download, Cable, CheckSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Get Access",
    description: "Start with the iPhone beta or join the Android interest list. The app stays focused on one job: printing tasks cleanly."
  },
  {
    number: "02",
    icon: Cable,
    title: "Connect Your Printer",
    description: "Add an ESC/POS-compatible receipt printer on the same local Wi-Fi network and save it for quick printing."
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Print & Complete",
    description: "Create tasks, hit print, and enjoy the satisfaction of physically checking them off."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Setup In Three Steps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A quick path from app install to your first printed ticket.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const gradients = [
              'from-green-400 to-emerald-500',
              'from-emerald-500 to-teal-500',
              'from-lime-400 to-green-500'
            ];
            const gradient = gradients[index];
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400"
                       style={{ zIndex: 0 }} />
                )}
                <div className="relative z-10 flex flex-row items-start gap-5 text-left md:flex-col md:items-center md:text-center md:gap-0">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br ${gradient} text-white rounded-2xl shadow-xl md:mb-6`}>
                    <Icon className="w-7 h-7 md:w-10 md:h-10" />
                  </div>
                  <div className="flex-1 min-w-0 md:w-full">
                    <div className="text-xs font-semibold tracking-[0.2em] text-muted-foreground mb-1 md:hidden">STEP {step.number}</div>
                    <div className="hidden md:block text-6xl font-bold text-muted/20 mb-2">{step.number}</div>
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
