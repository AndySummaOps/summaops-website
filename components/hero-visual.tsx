import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

export function HeroVisual() {
  return (
    <div className="relative w-full">
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_70%_20%,oklch(0.72_0.16_215/0.22),transparent_70%),radial-gradient(50%_50%_at_20%_80%,oklch(0.62_0.18_280/0.2),transparent_70%)] blur-2xl"
      />

      <div className="glow-ring relative overflow-hidden rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xl sm:p-6">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-primary/70" />
            <span className="size-2.5 rounded-full bg-accent/60" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            Van chaos naar overzicht
          </span>
        </div>

        {/* before / after */}
        <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Nu
            </p>
            <div className="mt-3 flex flex-col items-start gap-2">
              <span className="inline-flex -rotate-2 items-center gap-2 rounded-lg border border-dashed border-border bg-background/50 px-3 py-2 text-xs text-muted-foreground">
                <FileSpreadsheet className="size-3.5 shrink-0" />
                Losse spreadsheets
              </span>
              <span className="inline-flex rotate-1 items-center gap-2 rounded-lg border border-dashed border-border bg-background/50 px-3 py-2 text-xs text-muted-foreground">
                <MessageCircle className="size-3.5 shrink-0" />
                WhatsApp &amp; mail
              </span>
              <span className="inline-flex -rotate-1 items-center gap-2 rounded-lg border border-dashed border-border bg-background/50 px-3 py-2 text-xs text-muted-foreground">
                <HelpCircle className="size-3.5 shrink-0" />
                Wie deed dit ook alweer?
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex items-center justify-center text-primary"
          >
            <ArrowRight className="size-5 rotate-90 sm:rotate-0" />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">
              Met SummaOps
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {[
                'Eén centraal overzicht',
                'Automatische opvolging',
                'Altijd actuele data',
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-medium text-foreground"
                >
                  <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* flow row */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-background/50 p-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-2.5 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" /> AI-agent verwerkt
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-accent/50" />
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/15 px-2.5 py-1.5 text-xs font-medium text-accent-foreground">
            Klaar, geen handwerk
          </span>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-4 hidden animate-[float_6s_ease-in-out_infinite] items-center gap-2.5 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-xl sm:flex">
        <span className="flex size-9 items-center justify-center rounded-lg bg-warm/15">
          <Sparkles className="size-4.5 text-warm" />
        </span>
        <div>
          <p className="text-sm font-semibold leading-none">Minder handwerk</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Elke week tijd terug
          </p>
        </div>
      </div>
    </div>
  )
}
