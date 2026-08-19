import React, { useId } from 'react';

/**
 * Generative, theme-aware placeholder artwork for projects that don't have a
 * real screenshot on file. Each "kind" is a small hand-built abstract scene
 * chosen to represent what that project actually does, using the site's live
 * primary/secondary/tertiary color tokens so it re-themes automatically
 * between light and dark. Rendered under a real BrowserBar (see
 * Components/BrowserBar.jsx) in Projects.jsx, so the scene itself no longer
 * draws its own illustrated chrome strip.
 */

const Stop = ({ offset, colorClass, opacity }) => (
  <stop offset={offset} stopColor="currentColor" stopOpacity={opacity} className={colorClass} />
);

const Dashboard = ({ gid }) => (
  <>
    <rect x="16" y="40" width="70" height="184" rx="12" className="fill-on-surface/10" />
    {[58, 84, 110, 136, 162].map((y) => (
      <rect key={y} x="28" y={y} width="46" height="8" rx="4" className="fill-on-surface/20" />
    ))}
    {[0, 1, 2].map((i) => (
      <rect key={i} x={102 + i * 96} y="40" width="82" height="42" rx="10" className="fill-on-surface/10" />
    ))}
    <rect x="102" y="94" width="272" height="130" rx="14" className="fill-on-surface/10" />
    <polyline
      points="118,190 150,160 182,175 214,130 246,150 278,110 310,140 342,120 358,132"
      fill="none"
      className="stroke-primary"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="118" y="196" width="18" height="18" rx="3" className="fill-secondary/60" />
    <rect x="150" y="186" width="18" height="28" rx="3" className="fill-secondary/40" />
    <rect x="182" y="176" width="18" height="38" rx="3" className="fill-secondary/60" />
    <rect x="214" y="196" width="18" height="18" rx="3" className="fill-secondary/40" />
  </>
);

const Booking = () => (
  <>
    <rect x="130" y="46" width="140" height="150" rx="16" className="fill-on-surface/10" />
    <rect x="130" y="46" width="140" height="30" rx="16" className="fill-primary/40" />
    {Array.from({ length: 21 }).map((_, i) => {
      const col = i % 7;
      const row = Math.floor(i / 7);
      const x = 144 + col * 16;
      const y = 92 + row * 18;
      const isActive = i === 10;
      return (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={isActive ? 7 : 5}
          className={isActive ? 'fill-tertiary' : 'fill-on-surface/15'}
        />
      );
    })}
    <circle cx="292" cy="70" r="22" className="fill-secondary/25" />
    <path d="M292 58v14l10 6" fill="none" className="stroke-secondary" strokeWidth="3" strokeLinecap="round" />
  </>
);

const Store = () => (
  <>
    <circle cx="352" cy="46" r="16" className="fill-tertiary/30" />
    <path d="M344 42h16l-3 12h-10z" fill="none" className="stroke-tertiary" strokeWidth="2.5" />
    {[0, 1, 2].map((col) =>
      [0, 1].map((row) => (
        <g key={`${col}-${row}`} transform={`translate(${28 + col * 96} ${44 + row * 90})`}>
          <rect width="80" height="56" rx="12" className="fill-on-surface/10" />
          <circle cx="40" cy="28" r="16" className="fill-primary/25" />
          <rect x="10" y="64" width="60" height="8" rx="4" className="fill-on-surface/20" />
          <rect x="10" y="76" width="30" height="8" rx="4" className="fill-secondary/50" />
        </g>
      ))
    )}
  </>
);

const TryOn = () => (
  <>
    <circle cx="200" cy="132" r="86" className="fill-primary/10" />
    <g className="stroke-primary" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="200" cy="82" r="20" />
      <path d="M164 224v-46c0-24 16-40 36-40s36 16 36 40v46" />
      <path d="M150 150l-14 34" />
      <path d="M250 150l14 34" />
    </g>
    <line x1="140" y1="108" x2="264" y2="108" className="stroke-secondary/70" strokeWidth="2" strokeDasharray="6 6" />
    <line x1="140" y1="168" x2="264" y2="168" className="stroke-secondary/70" strokeWidth="2" strokeDasharray="6 6" />
    <path d="M296 60l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" className="fill-tertiary" />
  </>
);

const Chat = () => (
  <>
    <g>
      <rect x="26" y="48" width="150" height="34" rx="16" className="fill-on-surface/10" />
      <circle cx="14" cy="65" r="12" className="fill-secondary/40" />
    </g>
    <g>
      <rect x="224" y="92" width="150" height="34" rx="16" className="fill-primary/80" />
      <circle cx="386" cy="109" r="12" className="fill-primary" />
    </g>
    <g>
      <rect x="26" y="136" width="190" height="34" rx="16" className="fill-on-surface/10" />
      <circle cx="14" cy="153" r="12" className="fill-secondary/40" />
    </g>
    <g>
      <rect x="254" y="180" width="120" height="34" rx="16" className="fill-primary/80" />
      <circle cx="386" cy="197" r="12" className="fill-primary" />
    </g>
  </>
);

const Marketing = () => (
  <>
    <rect x="40" y="60" width="200" height="16" rx="8" className="fill-on-surface/25" />
    <rect x="40" y="86" width="140" height="16" rx="8" className="fill-on-surface/15" />
    <rect x="40" y="122" width="110" height="34" rx="17" className="fill-primary" />
    <circle cx="320" cy="150" r="60" className="fill-secondary/20" />
    <circle cx="330" cy="80" r="26" className="fill-tertiary/30" />
    <rect x="40" y="182" width="320" height="2" className="fill-on-surface/10" />
  </>
);

const Social = () => (
  <>
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(30 ${44 + i * 62})`}>
        <rect width="340" height="50" rx="14" className="fill-on-surface/10" />
        <circle cx="28" cy="25" r="14" className="fill-primary/40" />
        <rect x="52" y="14" width="140" height="8" rx="4" className="fill-on-surface/25" />
        <rect x="52" y="28" width="220" height="8" rx="4" className="fill-on-surface/15" />
      </g>
    ))}
  </>
);

const Quiz = () => (
  <>
    <rect x="40" y="40" width="320" height="10" rx="5" className="fill-on-surface/10" />
    <rect x="40" y="40" width="210" height="10" rx="5" className="fill-tertiary" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(40 ${72 + i * 36})`}>
        <rect width="320" height="26" rx="13" className={i === 1 ? 'fill-primary/25' : 'fill-on-surface/10'} />
        <circle cx="18" cy="13" r="7" className={i === 1 ? 'fill-primary' : 'fill-on-surface/20'} />
      </g>
    ))}
  </>
);

const Chart = () => (
  <>
    <circle cx="90" cy="132" r="46" className="fill-tertiary/15" />
    <path d="M68 140q22 26 44 0" fill="none" className="stroke-tertiary" strokeWidth="4" strokeLinecap="round" />
    <circle cx="72" cy="118" r="4" className="fill-tertiary" />
    <circle cx="108" cy="118" r="4" className="fill-tertiary" />
    {[38, 66, 48, 82, 60, 94].map((h, i) => (
      <rect
        key={i}
        x={182 + i * 30}
        y={214 - h}
        width="18"
        rx="4"
        height={h}
        className={i % 2 === 0 ? 'fill-primary/70' : 'fill-secondary/60'}
      />
    ))}
  </>
);

const Circuit = () => (
  <>
    <g className="stroke-secondary/50" strokeWidth="2" fill="none">
      <path d="M40 60h60v40h50" />
      <path d="M40 140h40v50h80" />
      <path d="M340 60h-60v60h-40" />
      <path d="M340 190h-70v-40h-40" />
    </g>
    {[[40, 60], [100, 100], [40, 140], [120, 190], [340, 60], [280, 120], [340, 190], [270, 190]].map(
      ([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" className="fill-secondary" />
      )
    )}
    <rect x="164" y="96" width="72" height="72" rx="10" className="fill-on-surface/10" />
    <rect x="182" y="114" width="36" height="36" rx="4" className="fill-primary/60" />
    <path d="M200 122v-14M200 168v-14M182 132h-14M236 132h-14" className="stroke-primary/60" strokeWidth="3" strokeLinecap="round" />
    <path d="M300 40l10 20h-20z" className="fill-tertiary" />
  </>
);

const SCENES = {
  dashboard: Dashboard,
  booking: Booking,
  store: Store,
  tryon: TryOn,
  chat: Chat,
  marketing: Marketing,
  social: Social,
  quiz: Quiz,
  chart: Chart,
  circuit: Circuit,
};

const ProjectArt = ({ kind = 'dashboard', className = '' }) => {
  const gid = useId();
  const Scene = SCENES[kind] || Dashboard;

  return (
    <svg
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full text-on-surface ${className}`}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" colorClass="text-primary" opacity="0.28" />
          <Stop offset="100%" colorClass="text-secondary" opacity="0.14" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" className="fill-surface-container-low" />
      <rect width="400" height="240" fill={`url(#bg-${gid})`} />
      <Scene gid={gid} />
    </svg>
  );
};

export default ProjectArt;
