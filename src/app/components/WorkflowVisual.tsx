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
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
            {/* Step 1: Print tasks */}
            <div className="flex-1 text-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="text-sm font-semibold text-green-400 mb-2 h-5">1. Print tasks</div>
              <p className="text-gray-400 text-sm h-10">
                Each task prints as an individual ticket
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-gray-600 flex-shrink-0 pt-16">
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 L45 30 M35 20 L45 30 L35 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2: Single tasks as tickets */}
            <div className="flex-1 text-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <div className="flex gap-2">
                  {['Wash\ncar', 'Change\nbedding', 'Dry\nclean', 'Wrap\ngift'].map((task, i) => (
                    <div
                      key={i}
                      className="bg-white border-2 border-gray-200 rounded p-2 w-14 h-16 flex items-center justify-center shadow-sm"
                    >
                      <div className="text-[7px] text-gray-700 font-mono text-center whitespace-pre-line leading-tight font-semibold">
                        {task}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-sm font-semibold text-emerald-400 mb-2 h-5">2. Single tasks as tickets</div>
              <p className="text-gray-400 text-sm h-10">
                One task per ticket keeps you focused
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-gray-600 flex-shrink-0 pt-16">
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 L45 30 M35 20 L45 30 L35 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3: Push over the spike when done */}
            <div className="flex-1 text-center">
              <div className="h-40 flex items-center justify-center mb-6">
                <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="text-sm font-semibold text-lime-400 mb-2 h-5">3. Stack when done</div>
              <p className="text-gray-400 text-sm h-10">
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
            <div className="mx-auto max-w-sm rounded-2xl border border-stone-200 bg-stone-50 px-6 py-7 text-stone-900 shadow-md">
              <div className="border-b border-dashed border-stone-300 pb-3 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-500">Ticker Printer</p>
                <h3 className="mt-3 text-2xl font-semibold">Post office run</h3>
              </div>
              <div className="space-y-4 py-5 font-mono text-sm leading-6 text-stone-700">
                <p>Priority: Today</p>
                <p>Notes: Return parcel and buy stamps</p>
                <p>Printed: 08:45 AM</p>
              </div>
              <div className="border-t border-dashed border-stone-300 pt-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 rounded-full border border-stone-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Done</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-to-br from-emerald-50 to-lime-50 p-6 sm:p-8 shadow-sm flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">What You Can Expect</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Real tasks print as clean, single-purpose tickets instead of disappearing into another app tab.
              </p>
              <p>
                The result is simple: fewer vague lists, more visible next actions, and a stack of finished tasks you can actually see grow.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="rounded-2xl bg-white/70 px-4 py-3">One task per ticket for sharper focus</li>
              <li className="rounded-2xl bg-white/70 px-4 py-3">A local queue so prints wait instead of disappearing</li>
              <li className="rounded-2xl bg-white/70 px-4 py-3">A visible record of what you completed today</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
