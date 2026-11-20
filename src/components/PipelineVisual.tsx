// Abstract animated pipeline: sources -> Spark compute -> curated layers -> consumers.
// Purely decorative, so it is hidden from assistive technology.

const nodes = [
  { x: 40, y: 60, label: 'ADLS Gen2' },
  { x: 40, y: 150, label: 'Cosmos DB' },
  { x: 40, y: 240, label: 'ADF' },
  { x: 210, y: 105, label: 'Spark' },
  { x: 210, y: 195, label: 'PySpark' },
  { x: 380, y: 60, label: 'Bronze' },
  { x: 380, y: 150, label: 'Silver' },
  { x: 380, y: 240, label: 'Gold' },
]

const edges: [number, number][] = [
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 5],
  [3, 6],
  [4, 6],
  [4, 7],
]

const W = 120
const H = 36

export function PipelineVisual() {
  return (
    <svg viewBox="0 0 540 300" className="h-full w-full" aria-hidden="true" role="presentation">
      <defs>
        <linearGradient id="edge" x1="0" x2="1">
          <stop offset="0" stopColor="#5eead4" stopOpacity="0.9" />
          <stop offset="1" stopColor="#818cf8" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = nodes[a]
        const to = nodes[b]
        const x1 = from.x + W
        const y1 = from.y + H / 2
        const x2 = to.x
        const y2 = to.y + H / 2
        const mx = (x1 + x2) / 2
        return (
          <path
            key={i}
            d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`}
            fill="none"
            stroke="url(#edge)"
            strokeWidth="1.5"
            className="flow-line"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        )
      })}

      {nodes.map((n, i) => (
        <g key={n.label} className="pulse-node" style={{ animationDelay: `${i * 0.4}s` }}>
          <rect x={n.x} y={n.y} width={W} height={H} rx="9" fill="#161923" stroke="#2c3145" />
          <circle cx={n.x + 16} cy={n.y + H / 2} r="3.5" fill={i < 3 ? '#5eead4' : i < 5 ? '#818cf8' : '#e8eaf0'} />
          <text
            x={n.x + 30}
            y={n.y + H / 2 + 4}
            fill="#c9cedd"
            fontSize="12"
            fontFamily="'JetBrains Mono Variable', monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
