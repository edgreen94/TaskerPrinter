import { Sunrise, Focus, Layers } from "lucide-react";

export default function WorkflowVisual() {
  return (
    <section id="workflow" className="py-16 md:py-24 px-4 sm:px-6 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why It Feels Different
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ticker Printer takes a digital list and turns it into something physical, visible, and satisfying to finish.
          </p>
        </div>

        <div className="bg-black rounded-3xl p-5 sm:p-6 md:p-12 shadow-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-5 md:gap-8">
            {/* Step 1: Print tasks */}
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center mb-4 md:mb-6 md:h-40">
                <svg className="w-32 h-32 md:w-[140px] md:h-[140px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="60" y="20" width="80" height="85" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                  <text x="100" y="42" fontSize="11" fill="#1f2937" fontWeight="600" textAnchor="middle">To Do</text>
                  <circle cx="70" cy="55" r="2" fill="#1f2937" />
                  <line x1="76" y1="55" x2="130" y2="55" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="70" cy="65" r="2" fill="#1f2937" />
                  <line x1="76" y1="65" x2="125" y2="65" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="70" cy="75" r="2" fill="#1f2937" />
                  <line x1="76" y1="75" x2="120" y2="75" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
                  <rect x="40" y="100" width="120" height="60" rx="8" fill="#2d3748" />
                  <rect x="45" y="105" width="110" height="25" rx="4" fill="#4a5568" />
                  <circle cx="60" cy="140" r="4" fill="#48bb78" />
                  <circle cx="75" cy="140" r="4" fill="#ecc94b" />
                  <circle cx="90" cy="140" r="4" fill="#f56565" />
                  <rect x="50" y="150" width="20" height="8" rx="2" fill="#1a202c" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-green-400 mb-2 md:h-5">1. Print tasks</div>
              <p className="text-gray-400 text-sm md:h-10">
                Each task prints as an individual ticket
              </p>
            </div>

            {/* Connector: down on mobile, right on desktop */}
            <div className="flex items-center justify-center text-gray-600 flex-shrink-0 md:pt-16">
              <svg className="w-8 h-8 rotate-90 md:w-10 md:h-10 md:rotate-0" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 L45 30 M35 20 L45 30 L35 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2: Single tasks as tickets */}
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center mb-4 md:mb-6 md:h-40">
                <div className="grid grid-cols-2 gap-2 md:flex md:gap-2">
                  {['Wash\ncar', 'Change\nbedding', 'Dry\nclean', 'Wrap\ngift'].map((task, i) => (
                    <div
                      key={i}
                      className="bg-white border-2 border-gray-200 rounded p-2 w-16 h-20 md:w-14 md:h-16 flex items-center justify-center shadow-sm"
                    >
                      <div className="text-[8px] md:text-[7px] text-gray-700 font-mono text-center whitespace-pre-line leading-tight font-semibold">
                        {task}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-sm font-semibold text-emerald-400 mb-2 md:h-5">2. Single tasks as tickets</div>
              <p className="text-gray-400 text-sm md:h-10">
                One task per ticket keeps you focused
              </p>
            </div>

            {/* Connector: down on mobile, right on desktop */}
            <div className="flex items-center justify-center text-gray-600 flex-shrink-0 md:pt-16">
              <svg className="w-8 h-8 rotate-90 md:w-10 md:h-10 md:rotate-0" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 L45 30 M35 20 L45 30 L35 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3: Push over the spike when done */}
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center mb-4 md:mb-6 md:h-40">
                <svg className="w-32 h-32 md:w-[140px] md:h-[140px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="100" cy="165" rx="35" ry="8" fill="#1a202c" />
                  <rect x="97" y="80" width="6" height="85" fill="#4a5568" />
                  <polygon points="100,70 95,80 105,80" fill="#4a5568" />
                  <g transform="translate(0, 0)">
                    <rect x="65" y="150" width="70" height="8" rx="1" fill="white" stroke="#e5e7eb" strokeWidth="1" opacity="0.9" transform="rotate(2, 100, 154)" />
                  </g>
                  <g transform="translate(0, -8)">
                    <rect x="65" y="145" width="70" height="8" rx="1" fill="white" stroke="#e5e7eb" strokeWidth="1" opacity="0.8" transform="rotate(-2, 100, 149)" />
                  </g>
                  <g transform="translate(0, -16)">
                    <rect x="65" y="140" width="70" height="8" rx="1" fill="white" stroke="#e5e7eb" strokeWidth="1" opacity="0.7" transform="rotate(4, 100, 144)" />
                  </g>
                  <g transform="translate(0, -24)">
                    <rect x="65" y="135" width="70" height="8" rx="1" fill="white" stroke="#e5e7eb" strokeWidth="1" opacity="0.6" transform="rotate(-4, 100, 139)" />
                  </g>
                  <g transform="translate(0, -32)">
                    <rect x="65" y="130" width="70" height="8" rx="1" fill="white" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" transform="rotate(6, 100, 134)" />
                  </g>
                </svg>
              </div>
              <div className="text-sm font-semibold text-lime-400 mb-2 md:h-5">3. Stack when done</div>
              <p className="text-gray-400 text-sm md:h-10">
                Build a visible pile of accomplishments
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid gap-6 md:gap-8 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
              <span>Sample printed ticket</span>
              <span>58mm thermal layout</span>
            </div>
            <div className="mx-auto max-w-sm rounded-2xl bg-black p-3 shadow-md">
              <div className="rounded-xl bg-stone-100 px-5 py-6 text-stone-900 font-mono">
                <div className="text-center space-y-1.5">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-700">Rosewood Cottage</p>
                  <p className="text-xs tracking-wider text-stone-500">Mon 27 Apr, 08:45</p>
                </div>
                <div className="my-4 border-t border-dashed border-stone-400" />
                <h3 className="text-center text-lg sm:text-xl font-black uppercase tracking-[0.08em] leading-tight">
                  Post office run
                </h3>
                <div className="my-4 border-t border-dashed border-stone-400" />
                <p className="text-center text-xs uppercase tracking-[0.25em] text-stone-500">
                  Created by &mdash; Alex
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-to-br from-emerald-50 to-lime-50 p-6 sm:p-8 shadow-sm flex flex-col">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-700 mb-3">Three things you&rsquo;ll notice</p>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-7">A calmer shape for the day</h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center shadow-sm">
                  <Sunrise className="w-5 h-5 text-emerald-600" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1">A stack instead of a scroll</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Tomorrow&rsquo;s tickets print and wait on your desk before you&rsquo;ve had coffee.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center shadow-sm">
                  <Focus className="w-5 h-5 text-emerald-600" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1">One ticket at a time</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">The rest of the list stays in your pocket until this one is done.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-emerald-200 flex items-center justify-center shadow-sm">
                  <Layers className="w-5 h-5 text-emerald-600" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1">Proof, not a notification</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">A visible pile of finished tickets at day&rsquo;s end &mdash; not a badge that fades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
