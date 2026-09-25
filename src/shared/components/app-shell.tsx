import Link from "next/link";
import { CalendarDays, CheckSquare2, CircleDollarSign, FileText, Gauge, Goal, NotebookText, Search, Settings2 } from "lucide-react";

const navigation = [
  { href: "/", label: "Inicio", icon: Gauge },
  { href: "/tasks", label: "Tareas", icon: CheckSquare2 },
  { href: "/projects", label: "Proyectos", icon: Goal },
  { href: "/notes", label: "Notas", icon: NotebookText },
  { href: "/documents", label: "Documentos", icon: FileText },
  { href: "/calendar", label: "Calendario", icon: CalendarDays },
  { href: "/finance", label: "Finanzas", icon: CircleDollarSign },
  { href: "/settings", label: "Configuración", icon: Settings2 }
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="hidden border-r bg-[var(--surface)] p-4 lg:flex lg:flex-col">
        <div className="mb-8 px-2">
          <p className="text-lg font-semibold tracking-[0.18em]">AUREON</p>
          <p className="mt-1 text-xs text-[var(--muted)]">Personal Operating System</p>
        </div>
        <nav className="space-y-1" aria-label="Navegación principal">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">
              <Icon aria-hidden="true" className="size-4" />{label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-[color:var(--background)]/95 px-5 backdrop-blur md:px-8">
          <div><p className="font-medium">Sistema personal</p><p className="text-xs text-[var(--muted)]">Local-first · Privado · Sin SaaS</p></div>
          <button type="button" className="flex items-center gap-2 rounded-lg border bg-[var(--surface)] px-3 py-2 text-sm" aria-label="Abrir búsqueda global">
            <Search className="size-4" aria-hidden="true" /><span className="hidden sm:inline">Buscar</span><kbd className="text-xs text-[var(--muted)]">Ctrl K</kbd>
          </button>
        </header>
        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
