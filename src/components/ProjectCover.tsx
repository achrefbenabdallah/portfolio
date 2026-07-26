import type { ProjectCover as CoverKey } from "@/lib/data";

/** Faint background grid shared by every cover. */
function Grid({ id }: { id: string }) {
  return (
    <g stroke="rgba(255,255,255,0.05)" strokeWidth={1}>
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`${id}-v${i}`} x1={i * 64} y1={0} x2={i * 64} y2={360} />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`${id}-h${i}`} x1={0} y1={i * 60} x2={640} y2={i * 60} />
      ))}
    </g>
  );
}

/** Shared gradient + background defs. `k` keeps ids unique per cover. */
function Defs({ k }: { k: string }) {
  return (
    <defs>
      <linearGradient id={`${k}-line`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#34d399" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
      <linearGradient id={`${k}-bg`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#13131b" />
        <stop offset="1" stopColor="#0a0a0e" />
      </linearGradient>
      <linearGradient id={`${k}-fill`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#34d399" stopOpacity="0.32" />
        <stop offset="1" stopColor="#34d399" stopOpacity="0" />
      </linearGradient>
      <radialGradient id={`${k}-glow`} cx="0.5" cy="0.4" r="0.6">
        <stop offset="0" stopColor="#22d3ee" stopOpacity="0.18" />
        <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

const svgProps = {
  viewBox: "0 0 640 360",
  preserveAspectRatio: "xMidYMid slice",
  className: "h-full w-full",
  "aria-hidden": true,
} as const;

/** Synexio — real-time production dashboard: area + line chart. */
function Analytics() {
  const k = "cov-analytics";
  const pts = [
    [40, 288],
    [140, 236],
    [240, 256],
    [340, 168],
    [440, 198],
    [540, 108],
    [604, 132],
  ];
  const line = pts.map((p) => p.join(",")).join(" ");
  const area = `M40,288 ${pts
    .slice(1)
    .map((p) => `L${p[0]},${p[1]}`)
    .join(" ")} L604,320 L40,320 Z`;
  return (
    <svg {...svgProps}>
      <Defs k={k} />
      <rect width="640" height="360" fill={`url(#${k}-bg)`} />
      <rect width="640" height="360" fill={`url(#${k}-glow)`} />
      <Grid id={k} />
      {/* window chrome */}
      <g>
        <circle cx="40" cy="40" r="6" fill="#34d399" />
        <circle cx="62" cy="40" r="6" fill="rgba(255,255,255,0.18)" />
        <circle cx="84" cy="40" r="6" fill="rgba(255,255,255,0.18)" />
        <rect x="470" y="30" width="130" height="20" rx="10" fill="rgba(255,255,255,0.05)" />
      </g>
      <path d={area} fill={`url(#${k}-fill)`} />
      <polyline
        points={line}
        fill="none"
        stroke={`url(#${k}-line)`}
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {pts.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={5} fill="#0a0a0e" stroke={`url(#${k}-line)`} strokeWidth={2.5} />
      ))}
      {/* small bars */}
      <g fill="rgba(255,255,255,0.10)">
        <rect x="40" y="250" width="16" height="40" rx="3" />
        <rect x="66" y="230" width="16" height="60" rx="3" />
        <rect x="92" y="264" width="16" height="26" rx="3" />
      </g>
    </svg>
  );
}

/** CliniSeven — clinical: ECG pulse line + medical cross badge. */
function Health() {
  const k = "cov-health";
  const ecg =
    "40,200 200,200 230,200 250,150 268,200 286,250 300,120 316,270 332,200 360,200 410,200 430,200 448,168 466,200 640,200";
  return (
    <svg {...svgProps}>
      <Defs k={k} />
      <rect width="640" height="360" fill={`url(#${k}-bg)`} />
      <rect width="640" height="360" fill={`url(#${k}-glow)`} />
      <Grid id={k} />
      <polyline
        points={ecg}
        fill="none"
        stroke={`url(#${k}-line)`}
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="316" cy="270" r="6" fill="#34d399" />
      {/* medical cross badge */}
      <g transform="translate(56 56)">
        <rect x="0" y="0" width="96" height="96" rx="22" fill="rgba(52,211,153,0.10)" stroke={`url(#${k}-line)`} strokeWidth={2.5} />
        <g fill={`url(#${k}-line)`}>
          <rect x="40" y="22" width="16" height="52" rx="5" />
          <rect x="22" y="40" width="52" height="16" rx="5" />
        </g>
      </g>
    </svg>
  );
}

/** TomorrowChamp — sports: pitch + player/recruiter network. */
function Sports() {
  const k = "cov-sports";
  const nodes = [
    [150, 110],
    [260, 220],
    [400, 130],
    [470, 250],
    [320, 300],
  ];
  return (
    <svg {...svgProps}>
      <Defs k={k} />
      <rect width="640" height="360" fill={`url(#${k}-bg)`} />
      <rect width="640" height="360" fill={`url(#${k}-glow)`} />
      <Grid id={k} />
      {/* pitch */}
      <g stroke="rgba(255,255,255,0.14)" strokeWidth={2} fill="none">
        <rect x="40" y="40" width="560" height="280" rx="16" />
        <line x1="320" y1="40" x2="320" y2="320" />
        <circle cx="320" cy="180" r="54" />
      </g>
      {/* network links */}
      <g stroke={`url(#${k}-line)`} strokeWidth={2.5} opacity="0.8">
        <line x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[1][0]} y2={nodes[1][1]} />
        <line x1={nodes[1][0]} y1={nodes[1][1]} x2={nodes[2][0]} y2={nodes[2][1]} />
        <line x1={nodes[2][0]} y1={nodes[2][1]} x2={nodes[3][0]} y2={nodes[3][1]} />
        <line x1={nodes[1][0]} y1={nodes[1][1]} x2={nodes[4][0]} y2={nodes[4][1]} />
        <line x1={nodes[3][0]} y1={nodes[3][1]} x2={nodes[4][0]} y2={nodes[4][1]} />
      </g>
      {nodes.map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={i === 1 ? 13 : 9}
          fill="#0a0a0e"
          stroke={`url(#${k}-line)`}
          strokeWidth={3}
        />
      ))}
    </svg>
  );
}

/** Dhayefni — travel: hotel building + location pin. */
function Travel() {
  const k = "cov-travel";
  return (
    <svg {...svgProps}>
      <Defs k={k} />
      <rect width="640" height="360" fill={`url(#${k}-bg)`} />
      <rect width="640" height="360" fill={`url(#${k}-glow)`} />
      <Grid id={k} />
      {/* building */}
      <g>
        <rect x="220" y="150" width="200" height="170" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.16)" strokeWidth={2} />
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <rect
              key={`w-${r}-${c}`}
              x={244 + c * 40}
              y={176 + r * 42}
              width={22}
              height={26}
              rx={3}
              fill={r === 0 && c === 1 ? "#34d399" : "rgba(52,211,153,0.28)"}
            />
          )),
        )}
        <rect x="300" y="290" width="40" height="30" rx="4" fill="rgba(255,255,255,0.14)" />
      </g>
      {/* location pin */}
      <g transform="translate(320 40)">
        <path
          d="M0 0 C-30 0 -46 22 -46 46 C-46 82 0 118 0 118 C0 118 46 82 46 46 C46 22 30 0 0 0 Z"
          fill={`url(#${k}-line)`}
        />
        <circle cx="0" cy="46" r="17" fill="#0a0a0e" />
      </g>
      {/* stars */}
      <g fill="rgba(255,255,255,0.22)">
        <circle cx="120" cy="90" r="3" />
        <circle cx="520" cy="120" r="3" />
        <circle cx="500" cy="70" r="2" />
        <circle cx="150" cy="150" r="2" />
      </g>
    </svg>
  );
}

/** Fashion Tool — commerce: sales bars + price tag. */
function Commerce() {
  const k = "cov-commerce";
  const bars = [
    [70, 250],
    [140, 210],
    [210, 228],
    [280, 172],
    [350, 150],
    [420, 108],
  ];
  return (
    <svg {...svgProps}>
      <Defs k={k} />
      <rect width="640" height="360" fill={`url(#${k}-bg)`} />
      <rect width="640" height="360" fill={`url(#${k}-glow)`} />
      <Grid id={k} />
      {/* baseline */}
      <line x1="50" y1="300" x2="470" y2="300" stroke="rgba(255,255,255,0.14)" strokeWidth={2} />
      {/* sales bars */}
      {bars.map(([x, y]) => (
        <rect key={x} x={x} y={y} width={40} height={300 - y} rx={6} fill={`url(#${k}-fill)`} stroke={`url(#${k}-line)`} strokeWidth={2} />
      ))}
      {/* trend line over bars */}
      <polyline
        points={bars.map(([x, y]) => `${x + 20},${y}`).join(" ")}
        fill="none"
        stroke={`url(#${k}-line)`}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* price tag */}
      <g transform="translate(486 66) rotate(-16)">
        <path
          d="M30 6 L92 6 Q98 6 98 12 L98 64 Q98 70 92 70 L30 70 L8 38 Z"
          fill="rgba(52,211,153,0.10)"
          stroke={`url(#${k}-line)`}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        <circle cx="30" cy="38" r="8" fill="#0a0a0e" stroke={`url(#${k}-line)`} strokeWidth={2.5} />
      </g>
    </svg>
  );
}

const covers: Record<CoverKey, () => React.ReactElement> = {
  commerce: Commerce,
  analytics: Analytics,
  health: Health,
  sports: Sports,
  travel: Travel,
};

export default function ProjectCover({ cover }: { cover: CoverKey }) {
  const Cover = covers[cover];
  return <Cover />;
}
