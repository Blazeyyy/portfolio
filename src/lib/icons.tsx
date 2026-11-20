import {
  Activity,
  BarChart3,
  CalendarClock,
  Cloud,
  Code2,
  Cpu,
  Gauge,
  GitBranch,
  ShieldCheck,
  Shuffle,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  code: Code2,
  cpu: Cpu,
  cloud: Cloud,
  workflow: Workflow,
  activity: Activity,
  chart: BarChart3,
  git: GitBranch,
  shuffle: Shuffle,
  shield: ShieldCheck,
  gauge: Gauge,
  calendar: CalendarClock,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Code2
  return <C className={className} aria-hidden="true" />
}
