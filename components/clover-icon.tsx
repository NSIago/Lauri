export function CloverIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold-clover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe68a" />
          <stop offset="50%" stopColor="#d49e2a" />
          <stop offset="100%" stopColor="#b37c17" />
        </linearGradient>
        <filter id="clover-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#clover-shadow)">
        {/* Top Left Leaf */}
        <path d="M50 50 C 35 30, 15 25, 20 45 C 25 60, 45 55, 50 50 Z" fill="url(#gold-clover)" />
        {/* Top Right Leaf */}
        <path d="M50 50 C 65 30, 85 25, 80 45 C 75 60, 55 55, 50 50 Z" fill="url(#gold-clover)" />
        {/* Bottom Left Leaf */}
        <path d="M50 50 C 35 70, 15 75, 20 55 C 25 40, 45 45, 50 50 Z" fill="url(#gold-clover)" />
        {/* Bottom Right Leaf */}
        <path d="M50 50 C 65 70, 85 75, 80 55 C 75 40, 55 45, 50 50 Z" fill="url(#gold-clover)" />
        {/* Stem */}
        <path d="M50 50 Q 60 70 75 85 Q 70 85 65 75 Q 55 60 50 50 Z" fill="url(#gold-clover)" />
      </g>
    </svg>
  );
}
