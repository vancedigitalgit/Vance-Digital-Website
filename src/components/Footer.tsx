import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

const SITEMAP_LINKS = [
  { label: "Order Intake", href: "#the-problem" },
  { label: "Portal", href: "#inside-the-portal" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Proof", href: "#proof" },
  { label: "Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vancedigital/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.63c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578510435063",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13.5 21v-7.5H16l.5-3.5h-3V7.9c0-1 .3-1.7 1.7-1.7H16.6V3.1C16.3 3 15.3 3 14.2 3c-2.3 0-3.9 1.4-3.9 4v2.9H7.8v3.5h2.5V21h3.2Z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-tone="ink" className="seam" style={{ background: "var(--color-ink-bg-raised)" }}>
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo tone="ink" />
          <p className="mt-4 max-w-[26ch] text-[13px] leading-relaxed text-[var(--color-ink-muted)]">
            Ordering portals for wholesale food and produce businesses in
            Australia.
          </p>
        </div>

        <div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            Site
          </div>
          <ul className="mt-4 space-y-2.5">
            {SITEMAP_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            Contact
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-[var(--color-ink-muted)]">
            <li>
              <a
                href="tel:+61405683743"
                className="transition-colors hover:text-[var(--color-ink-text)]"
              >
                0405 683 743
              </a>
            </li>
            <li>
              <a
                href="mailto:inigop@vancedigital.com.au"
                className="transition-colors hover:text-[var(--color-ink-text)]"
              >
                inigop@vancedigital.com.au
              </a>
            </li>
            <li>Gold Coast, Australia</li>
          </ul>
        </div>

        <div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            Legal
          </div>
          <ul className="mt-4 space-y-2.5">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-text)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--color-ink-line)]">
        <Container className="flex flex-col gap-4 py-6 text-[12px] text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            &copy; {year} Vance Digital. ABN 17 423 231 414. Built by Renzo
            Bozzo and Inigo Pennequin.
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink-text)]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
