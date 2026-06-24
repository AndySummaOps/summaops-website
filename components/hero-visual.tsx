import { Activity, ArrowUpRight, Bot, Workflow, Zap } from 'lucide-react'

export function HeroVisual() {
  return (
    <div className="relative w-full">
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_20%,oklch(0.72_0.16_215/0.25),transparent_70%),radial-gradient(50%_50%_at_20%_80%,oklch(0.62_0.18_280/0.22),transparent_70%)] blur-2xl"
      />

      <div className="glow-ring relative overflow-hidden rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xl sm:p-5">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary/70" />
            <span className="size-2.5 rounded-full bg-accent/60" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            SummaOps · overzicht
          </span>
        </div>

        {/* stat cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="size-4 text-primary" />
              <span className="text-xs">Tijd bespaard</span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight">18u</p>
            <p className="text-xs text-muted-foreground">deze week</p>
          </div>
          <div className="rounded-xl border border-border bg-background/50 p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Workflow className="size-4 text-primary" />
              <span className="text-xs">Taken automatisch</span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight">94%</p>
            <p className="text-xs text-muted-foreground">van het proces</p>
          </div>
        </div>

        {/* chart */}
        <div className="mt-3 rounded-xl border border-border bg-background/50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Handmatig werk
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
              <ArrowUpRight className="size-3.5 -rotate-90" />
              dalend
            </span>
          </div>
          <div className="mt-4 flex h-24 items-end gap-1.5">
            {[60, 52, 58, 44, 40, 33, 30, 22, 26, 18, 14, 10].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary"
              />
            ))}
          </div>
        </div>

        {/* flow row */}
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-background/50 p-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-2.5 py-1.5 text-xs font-medium text-primary">
            <Activity className="size-3.5" /> Trigger
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-accent/50" />
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/15 px-2.5 py-1.5 text-xs font-medium text-accent-foreground">
            <Bot className="size-3.5" /> AI verwerkt
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-accent/50 to-primary/50" />
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-2.5 py-1.5 text-xs font-medium text-primary">
            Klaar
          </span>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-4 hidden animate-[float_6s_ease-in-out_infinite] items-center gap-2.5 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-xl sm:flex">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15">
          <Bot className="size-4.5 text-primary" />
        </span>
        <div>
          <p className="text-sm font-semibold leading-none">AI-agent actief</p>
          <p className="mt-1 text-xs text-muted-foreground">3 taken afgerond</p>
        </div>
      </div>
    </div>
  )
}
