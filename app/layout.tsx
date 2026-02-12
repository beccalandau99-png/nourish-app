import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nourish",
  description: "A supportive nourishment tracker focused on practical wellness goals."
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/today", label: "Today" },
  { href: "/log-meal", label: "Log Meal" },
  { href: "/food", label: "Food" },
  { href: "/insights", label: "Insights" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <header className="top-nav">
            <div className="brand">Nourish</div>
            <nav aria-label="Main navigation">
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
