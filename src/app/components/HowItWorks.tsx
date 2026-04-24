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

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 relative">
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
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${gradient} text-white rounded-2xl mb-5 md:mb-6 shadow-xl`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold text-muted/20 mb-2">{step.number}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
