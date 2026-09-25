import { AppShell } from "@/shared/components/app-shell";
import { AlertTriangle, CalendarDays, CheckCircle2, CircleDollarSign, FolderKanban, Target } from "lucide-react";

const cards = [
  { title: "Hoy", value: "0", detail: "tareas pendientes", icon: CheckCircle2 },
  { title: "Agenda", value: "0", detail: "eventos próximos", icon: CalendarDays },
  { title: "Proyectos", value: "0", detail: "proyectos activos", icon: FolderKanban },
  { title: "Objetivos", value: "0%", detail: "progreso global", icon: Target },
  { title: "Balance", value: "S/ 0.00", detail: "mes actual", icon: CircleDollarSign },
  { title: "Alertas", value: "0", detail: "requieren atención", icon: AlertTriangle }
];

export default function DashboardPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-[var(--muted)]">Viernes, 25 de septiembre</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Buenos días</h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">Tu espacio central para organizar trabajo, conocimiento, finanzas y actividades personales.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ title, value, detail, icon: Icon }) => (
            <article key={title} className="rounded-xl border bg-[var(--surface)] p-5">
              <div className="mb-6 flex items-center justify-between"><h2 className="text-sm font-medium">{title}</h2><Icon className="size-4 text-[var(--muted)]" aria-hidden="true" /></div>
              <p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
            </article>
          ))}
        </div>
        <section className="mt-6 rounded-xl border bg-[var(--surface)] p-6">
          <h2 className="font-semibold">Inteligencia</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">AUREON analizará prioridades, riesgos y pendientes con reglas locales. La funcionalidad principal no dependerá de IA externa.</p>
        </section>
      </section>
    </AppShell>
  );
}
