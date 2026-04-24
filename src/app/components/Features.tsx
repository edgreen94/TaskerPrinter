import { Printer, Smartphone, Zap, Wifi } from "lucide-react";

const features = [
  {
    icon: Printer,
    title: "Thermal Printing",
    description: "Compatible with standard thermal receipt printers. No ink, no hassle—just crisp, clear task lists."
  },
  {
    icon: Smartphone,
    title: "Simple Mobile App",
    description: "A clean, minimal app that gets out of your way. Add tasks and print—that's it."
  },
  {
    icon: Zap,
    title: "Local Queue",
    description: "Tasks queue automatically on your device. Prints process when your printer is ready—no cloud needed."
  },
  {
    icon: Wifi,
    title: "Bluetooth & USB",
    description: "Connect wirelessly or via USB. Works with most thermal printers out of the box."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ticker Printer bridges the digital and physical worlds, making your to-do list something you can hold.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradients = [
              'from-green-400 to-emerald-500',
              'from-emerald-500 to-teal-500',
              'from-lime-400 to-green-500',
              'from-teal-500 to-emerald-600'
            ];
            const gradient = gradients[index % gradients.length];
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-transparent hover:shadow-2xl transition-all group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
