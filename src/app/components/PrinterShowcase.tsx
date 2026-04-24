export default function PrinterShowcase() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Local First, Always Private
            </h2>
            <p className="text-xl text-white/90">
              Everything runs on your local network. Tasks queue on your device and print directly
              to your printer—no cloud servers, no accounts, complete privacy.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <span>One task per receipt—focused and uncluttered</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <span>Completely local—your data never leaves your network</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <span>Queue ensures prints complete when printer is ready</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="space-y-4">
                <div className="bg-white text-gray-800 p-6 rounded-lg font-mono text-sm shadow-2xl">
                  <div className="text-center border-b-2 border-dashed border-gray-300 pb-3 mb-4">
                    <div className="font-bold">House Name</div>
                    <div className="text-xs text-gray-600">Thursday, April 23, 2026 • 8:00 AM</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="font-semibold">Wash the car</div>
                  </div>
                  <div className="flex justify-center gap-1 pt-3 border-t-2 border-dashed border-gray-300">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-white text-gray-800 p-6 rounded-lg font-mono text-sm shadow-2xl opacity-75 scale-95">
                  <div className="text-center border-b-2 border-dashed border-gray-300 pb-3 mb-4">
                    <div className="font-bold">House Name</div>
                    <div className="text-xs text-gray-600">Thursday, April 23, 2026 • 8:00 AM</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="font-semibold">Wrap birthday present</div>
                  </div>
                  <div className="flex justify-center gap-1 pt-3 border-t-2 border-dashed border-gray-300">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-white text-gray-800 p-6 rounded-lg font-mono text-sm shadow-2xl opacity-50 scale-90">
                  <div className="text-center border-b-2 border-dashed border-gray-300 pb-3 mb-4">
                    <div className="font-bold">House Name</div>
                    <div className="text-xs text-gray-600">Thursday, April 23, 2026 • 8:00 AM</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="font-semibold">Collect shopping</div>
                  </div>
                  <div className="flex justify-center gap-1 pt-3 border-t-2 border-dashed border-gray-300">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
