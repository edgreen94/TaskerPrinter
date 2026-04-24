export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-green-300 via-emerald-400 to-emerald-600 flex items-center justify-center p-1.5 shadow-md">
        <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" fill="none">
          <rect x="60" y="30" width="80" height="70" rx="3" fill="white" />
          <text x="100" y="52" fontSize="12" fill="#1f2937" fontWeight="600" textAnchor="middle">To Do</text>
          <circle cx="70" cy="65" r="2" fill="#1f2937" />
          <line x1="76" y1="65" x2="130" y2="65" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="70" cy="75" r="2" fill="#1f2937" />
          <line x1="76" y1="75" x2="125" y2="75" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
          <rect x="40" y="95" width="120" height="60" rx="8" fill="#2d3748" />
          <rect x="45" y="100" width="110" height="25" rx="4" fill="#4a5568" />
          <circle cx="60" cy="135" r="4" fill="#48bb78" />
          <circle cx="75" cy="135" r="4" fill="#ecc94b" />
          <circle cx="90" cy="135" r="4" fill="#f56565" />
          <rect x="50" y="145" width="20" height="8" rx="2" fill="#1a202c" />
        </svg>
      </div>
      <span className="font-semibold text-xl text-foreground">Ticker Printer</span>
    </div>
  );
}
