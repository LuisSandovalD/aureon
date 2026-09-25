import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AUREON", template: "%s | AUREON" },
  description: "Sistema Operativo Personal Digital local-first"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
