# Website — CLAUDE.md

This is the Vance Digital company landing page. It is a Next.js app deployed to Vercel or Netlify, not a Go High Level page.

---

## Purpose

Cold outreach landing page. When someone asks "what do you do?" this is what you send them. It should do three things: name their pain specifically, show we audit before we build, and get them to book a call.

The site itself is proof of capability: Vance Digital builds custom software, so this page needs to read as one, not a template or a page-builder export.

Target: wholesale food and produce business owners in Australia, 2 to 20 people, owner operated. The pain is order intake chaos and manual reconciliation.

---

## Rules for This Page

- No pricing. Ever. Pricing is built per client after the audit.
- List capabilities only. Not packages. Not tiers.
- Follow the brand voice from Business/CLAUDE.md. No banned words (automate, workflow, streamline, AI-powered, seamless, etc.).
- CTA is always the Calendly link: https://calendly.com/inigop-vancedigital-s_ae/30min
- No dashes (em dash, en dash, or hyphen as punctuation) in any copy.

---

## Design Audit Persona (for site/design review requests)

When asked to audit, critique, or review this site's design: adopt this persona and process.

**Persona:** You are a senior website developer and designer with 15+ years shipping production sites for real brands. You have a sharp eye for what separates a professionally built site from a templated, AI generated one. You've reviewed hundreds of sites and immediately spot generic patterns: predictable hero layouts, default spacing rhythms, stock icon sets, cookie cutter card grids, overused gradient backgrounds, bento box grids, and typography choices that scream "built fast with an AI tool."

**Process:**
- Full freedom to research. Browse the live site directly (Playwright screenshots at 1440px and 390px, not just the codebase) rather than relying only on the file contents.
- Look at comparable sites in this space (B2B wholesale, ordering portals, food and produce logistics, small operator tools) and outside it (best in class product and marketing sites) for reference points. Pull in real examples, name names.
- Don't limit yourself to what's asked. Actively seek out better answers, even ones not requested.

**Job:** Audit the site section by section and flag everything that needs to change for it to read as built by a real, skilled human developer and designer, not assembled layer by layer with AI assistance.

**Constraints specific to this codebase:** stay inside the honesty rules already locked in this file (no invented testimonials, stats, logos, or clients; no pricing on the page; no dashes in copy). Flag generic patterns and propose fixes, but don't propose fabricating proof to solve them.

---

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS.
- Deployed to Vercel or Netlify (not decided yet as of July 2026).
- Run locally: `npm run dev`. Build: `npm run build`.

---

## Brand

### Design audit fixes (2026-08-04)

A first-time-visitor design audit (senior-dev persona, Playwright screenshots at 1440px/390px) found and fixed five issues, plus one correction to this file:

- **Fixed a real mobile bug**: the fixed centered "Menu" edge tab (`Header.tsx`'s `EdgeTab`, z-60) painted on top of the header's "Book Audit" button on scroll at mobile widths, covering roughly the left half of the button text. A `relative z-[65]` wrapper on the button did not fix it, nested z-index cannot escape a `fixed` ancestor's stacking context. Fixed instead by giving the top `EdgeTab` a lower vertical position on mobile only (`top-[58px] sm:top-0`), so the pill hangs below the header row instead of overlapping it. Desktop/tablet position (`top-0`, centered) is unchanged.
- **`CapabilityRow.tsx`'s leading glyph changed from a bare "+" to a real numeral** (`01`–`05`, matching `ScrollStepCard.tsx`'s numeral system). The "+" read as a broken accordion toggle since Capabilities' rows don't expand, unlike the FAQ's `<details>` rows which correctly use "+" as a real disclosure control. The FAQ's "+" is unchanged.
- **Hero proof chips restored** (`Hero.tsx`): three small pills under the CTA ("Two founders, no account managers", "Gold Coast, Australia", "Twenty minute audit, no pitch, no price") plus a "Try the live portal demo ↓" link to `#inside-the-portal`. These facts already existed elsewhere on the page (Proof, FAQ); the hero previously had no differentiating proof above the fold and read as swappable onto any B2B services site.
- **`AcceleratorTeaser.tsx`'s `LogoMarquee` gained a one-line caption**: "San Marino Mantenimiento: website delivered." San Marino is a real, confirmed-delivered site (see [[project_san_marino_status]] memory); the logo row previously carried no attribution beyond Adlees, so this was the one place a second honest, specific outcome could be added without inventing anything.
- **Considered and deliberately not changed**: adding a second dark/ink section to break up the light-toned run from Capabilities through Faq. The page already alternates `bg-raised`/`bg-deep`/default cream through that stretch, and the "Product is the page's one dark section" rule is a locked decision from the v2.1 contract below, not something this pass should override.
- **Correction to this file**: the "Hero proof chips" and "4th stat" bullets under the 2026-07-25 "Bold rebuild" note further down describe hero content that no longer existed in `Hero.tsx` as of this audit (the file had been simplified to headline/subhead/button/integrations-line only, undocumented). That content is restored per the bullet above, so those older notes are now accurate again, but flagging the drift here since it meant the doc and the code disagreed for some period.

**Design system v3, light editorial. Decided 2026-07-24, superseding the 2026-07-20 dark "v2.1/v2.2" pass documented below.** History: dark-with-glow was tried in June and rejected for being an empty template. Light editorial (v1) replaced it and read as "a brochure done as a side project." Dark v2/v2.1/v2.2 (Naxia-informed, Linear reference) fixed the emptiness by making the interactive PortalDemo the page's identity. v3 kept everything from v2.1/v2.2 (structure, the product-everywhere rule, the PortalDemo, the calculator, the FAQ, the honesty constraints) and re-themed the whole tree from dark to a cream/ink light palette. **The v2.1/v2.2 sections further down this file describe the dark palette and are historical only, kept for the structural/motion/honesty rules they still document. For actual current colors, read the v3 palette below and `src/app/globals.css`, not the v2.1 palette block.**

- The interactive PortalDemo is still the identity of the page. Visitors click a working order dashboard with sample data (clearly labeled) instead of reading claims.
- **Superseded 2026-07-27: stock photography and stock video are now allowed, used deliberately, not as filler.** The old "no stock photography, ever" rule (written while waiting on a real Adlees shoot) no longer holds. `Hero.tsx` now uses a real, licensed stock video (a produce box moving on a conveyor, `public/videos/hero/produce-line.mp4` + `public/images/hero/produce-line-poster.jpg`) as its background, muted/looped/reduced-motion-gated. Still no invented testimonials, stats, logos, or clients, that constraint is unchanged. A real Adlees shoot is still the long-term direction; stock fills the gap honestly in the meantime.

### v4 redesign (2026-07-27): dark section, animated seam, mid-page CTAs, proof gallery

Renzo's reaction to the live v3 page: it read as monotone (one background colour), had no felt animation, told the visitor's pain like a brochure, and didn't push the solution or the "why book a call" hard enough. Reference: patagonia.com.au (full-bleed bands, alternating light/dark, short bold headlines paired directly with a CTA). Full scope and reasoning: see the plan this session left in `.claude/plans/` if still present; summary of what shipped:

- **`Product.tsx` is now the page's one dark section**, via `data-tone="ink"` and the new `--color-ink-*` variable set in `globals.css` (`--color-ink-bg #1c1811`, `--color-ink-text #faf7f2`, `--color-ink-accent #ff7a42`, etc., additive, opt-in per section, not a site-wide dark mode). `PortalDemo.tsx` itself was deliberately left untouched and still light, it now reads as a bright screen glowing in a dark room, which is the effect, not a bug. Proof.tsx stays on the existing `--color-bg-deep` band, only Product went dark this pass.
- **Every real section-to-section boundary is now a `.seam`**, not a plain `border-t`: a static 1px hairline (unchanged fallback, zero layout shift) plus a thin accent-colored streak that drifts across it on a slow 7s loop, pure CSS `::before`/`::after` + `@keyframes`, no JS, gated to a static line under `prefers-reduced-motion`. This is the page's one recurring animated motif, applied at Pain, Product, IntegrationsStrip (top+bottom), Proof, HowItWorks, Calculator (top+bottom), Faq, FinalCta, Footer. In-section decorative borders (inside PortalDemo, HowItWorks' mobile divider, Proof's founder rows) were deliberately left as plain static hairlines, `.seam` is reserved for real section boundaries only.
- **New `SectionCta.tsx`**, a small heading/subhead/`Button` block (`tone: "light" | "ink"`), inserted at the end of `Product.tsx` (ink) and `Proof.tsx` (light). The page previously only had a CTA in Hero and FinalCta, nothing after the demo or the case study.
- **New `ProofGallery.tsx`**, a click-to-open modal triggered from the Adlees logo in `Proof.tsx` (now wrapped in a `<button>` with a visible "View the build →" hint, never a bare silent click target). Brings back the 5 real Adlees portal screenshots that existed in `public/images/portal/` but were unused since the 2026-07-21 screenshot-crops removal (`admin-dashboard.png`, `admin-orders.png`, `customer-shop.png`, `details/detail-cutoff.png`, `details/detail-notices.png`), alongside the already-shown `detail-orders-tall.png`, in a horizontally scrollable `.gallery-strip` (native CSS `scroll-snap`, no JS carousel). This does not reverse the "one interactive demo only" rule below, that rule is about `PortalDemo`'s live simulation specifically; this is a static screenshot viewer for proof, not a second interactive product demo.
- **`Pain.tsx` trimmed**: the second paragraph ("You did not build this business to manage paperwork...") was cut, it was aspirational filler that didn't name a specific broken process. **`ChaosFeed.tsx` trimmed** from 7 message rows to 5, still covering all four channels (Phone/Text/Email/Fax).

Doc corrections made alongside this pass, since the audit that informed it found several stale claims below: `Ribbon.tsx` and `icons.tsx`, described at length further down, do not exist in the codebase and never shipped, see the corrected notes inline where they're mentioned. Product's callouts were, at the time, flat lists, not the boxed card grid the 2026-07-25 "Bold rebuild" note below claims (**this changed for HowItWorks 2026-07-28, see below**). `Proof.tsx` has no scroll-linked parallax (a v2.2 claim that referred to the old, now-merged `Founders.tsx`). The real page order is `... Calculator → Faq → FinalCta → Footer`, not `Calculator → FinalCta → Faq → Footer`. Also note: `AcceleratorTeaser.tsx` sits between `Proof.tsx` and `HowItWorks.tsx` in the real page order, undocumented above.

**`HowItWorks.tsx` reworked 2026-07-28** to feel unified with `AcceleratorTeaser.tsx` directly above it (which uses bordered `bg-raised` cards) and to carry more felt motion. The 4 process steps (Audit/Proposal/Build/Prove it, there is no separate 6-item capability menu in the current file, unlike what older notes below imply) are now a `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` of boxed cards, same recipe as Product's callouts (`border border-[var(--color-line)] bg-[var(--color-bg-raised)] rounded-xl p-6`) — a second confirmed, scoped exception to the page's "no bento boxes" rule, approved by Renzo when asked directly rather than assumed. The old absolute-positioned left-side timeline line + dots was removed (it doesn't read as a line once steps are cards); replaced with a thin horizontal line above the card row on `md:` and up, scroll-filled left-to-right via the same `useScroll`/`scaleX` pattern the old version used for `scaleY`. Each card's own border color, box-shadow (a soft accent glow), and number badge (soft-tint → solid accent fill, subtle scale-up) animate independently as the visitor scrolls past its position, computed per-card in a new `StepCard` subcomponent (`useTransform` + `useSpring` off the shared `scrollYProgress`, one threshold per step at `(index + 0.5) / STEPS.length`). Follows the established no-JS-content-hidden rule: with JS disabled every card renders at its default state (`--color-line` border, `--color-accent-soft` badge) fully visible, nothing depends on the animation to be readable. Gated by the existing `useReducedMotion()` check (thresholds simply never fire, so cards stay static).

**New `Capabilities.tsx` section added 2026-07-29**, split out of Product's former "What comes next" block (the 01-04 capability-menu card grid: custom pricing, invoicing, debt collection and holds, remittance matching) so it stands as its own section with its own nav entry, rather than living inside Product. Sits right after `Product.tsx` and before `IntegrationsStrip.tsx`, `id="capabilities"`, background `--color-bg-raised` (matches the tone already used by `AcceleratorTeaser.tsx`, chosen to keep the page's existing light/deep/raised/ink alternation rather than introduce a new colour). Heading changed from "What comes next" to "Once the portal is trusted, we add capability one piece at a time," with a "Added as you need it" eyebrow, kept short (eyebrow + one headline + the 4-card grid, no extra copy). `Header.tsx`'s `NAV_ITEMS` gained a "Capabilities" entry (`#capabilities`) between "Portal" and "Proof". **Current real page order: Header → Hero → Pain(ChaosFeed) → Product(PortalDemo + 4 callouts + SectionCta, ink) → Capabilities(4-card capability menu, bg-raised) → IntegrationsStrip → Proof → AcceleratorTeaser → HowItWorks → Calculator → Faq → FinalCta → Footer.**

**Correction: `Capabilities.tsx` is a 5-item flat divider-row list (Custom pricing, Invoicing, Debt collection, Account holds, Remittance matching), not a "4-card grid"** as the paragraph above says — that description was already wrong when written; the file has always rendered `CapabilityRow`s in a single column, never a card grid. See the "generic template" pass directly below for what its numeral treatment looks like now.

### "Generic template" visual pass (2026-07-29)

A visual audit (Playwright screenshots at 1440px/390px, compared against a client-picked GHL-template reference site) found the page's biggest "looks like an AI/template build" offenders were **`HowItWorks.tsx`**'s bordered-rounded-card + solid-fill numbered-circle-badge + connecting-line grid (the single most reused SaaS-template "process steps" pattern), sitting one section away from **`Capabilities.tsx`**'s completely different flat-row grammar for conceptually similar content, plus **`LogoMarquee.tsx`**'s client logos reading at wildly inconsistent apparent sizes. Fixed as one coordinated pass, not three separate patches:

- **New shared idiom: "ghost numeral, single rule."** Both `ScrollStepCard.tsx` (HowItWorks' tiles) and `CapabilityRow.tsx` (Capabilities' rows) dropped their old solid-fill circle badge and 4-sided bordered box in favor of an oversized `font-display font-bold tabular-nums` numeral rendered as plain text (no background shape), animating color from a "ghost" ink tint (`color-mix(in srgb, var(--color-ink) 22%, transparent)`) to solid `--color-accent` as the item scrolls into its "reached" state, paired with a single `border-t-2` rule instead of a box. HowItWorks kept its `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` tile arrangement (scannability preserved) but the tiles no longer read as cards: no `border`, `rounded-xl`, `box-shadow`, or `bg-[var(--color-bg-raised)]`. HowItWorks' connecting progress line (the static hairline + `scaleX` accent overlay) was removed entirely, it's redundant once each tile's own numeral carries the reveal, and removing it is also a real perf win (box-shadow/badge-fill MotionValue interpolation isn't GPU-accelerated). Capabilities' row shape and its vertical `scaleY` accent rail were left alone (that's a document-margin device, not the offending pattern) — only its numeral was scaled up (`13px` → `26px/30px`) and given the same ghost→accent color transform as HowItWorks' tiles, so the two sections visibly rhyme as one system without forcing a 4-item grid and a 5-item list into the same layout.
- **Shared `src/lib/useScrollReached.ts` hook** extracted from the identical `threshold`/`reachedRaw`/`useSpring` boilerplate that used to be duplicated verbatim in both `ScrollStepCard.tsx` and `CapabilityRow.tsx`. Under `prefers-reduced-motion`, it stays permanently at its resting/ghost value by design (motion is enhancement only, matching `Reveal.tsx`'s own contract) — commented inline so a future edit doesn't "fix" this into a mid-scroll stutter.
- **`Product.tsx`'s "what this solves" list** (previously 4 bare, unstyled `<p>` tags) got a light-touch static ghost numeral (01–04) added as a leading column, so it doesn't read as an orphaned leftover next to two now-numeral-driven sections. No scroll-linked motion here on purpose, it's 4 co-equal reasons, not a sequence. Uses `color-mix(in srgb, var(--color-ink-text) 22%, transparent)` for the ghost tint, not the light-mode `--color-ink`/`--color-muted` vars, since this section is `data-tone="ink"` and arbitrary light-mode values don't auto-swap under that attribute (see the ink-section comment in `globals.css`).
- **`LogoMarquee.tsx`**: logos now render `grayscale` by default with `hover:grayscale-0` (same precedent as `Proof.tsx`'s founder-photo treatment), which absorbs the fact that the 8 real client logos span unrelated source color palettes. Also added a per-logo `scale` field (hand-tuned, not derived): source aspect ratios range from 0.78:1 to 2.58:1, so `object-contain` inside the shared `h-14 w-20`/`md:h-16 w-24` box left very wide logos (Tierra Digna, Eco Solar) reading noticeably smaller than square/tall ones (Scorpius Scapes, Pathfinder, DJ's, Iciar Ochoa) even though the box itself was already consistent. This is a visual-weight correction to look right, not a real logo size, and needs re-tuning if a logo file is ever swapped.
- **Fixed a live bug**: `--space-section-sm` was referenced by `AcceleratorTeaser.tsx`'s inline padding but never defined in `globals.css`'s `:root`, so that section's top/bottom padding was silently resolving to 0. Added `--space-section-sm: 5rem;` between the existing `-tight` (4rem) and `-md` (6rem) tokens.
- **Hero was deliberately left untouched this pass** (a separate future redesign, not covered here). A floating "..." mark seen near the headline in the original audit screenshot did not reproduce on reload and has no corresponding markup in `Hero.tsx` — most likely a transient video-buffering indicator caught mid-load, not a code bug.

### v3 palette (current, `src/app/globals.css`)

- `--color-bg:#faf7f2` page base (cream), `--color-bg-deep:#f0ebe1` for banded sections, `--color-bg-raised:#ffffff` for cards.
- `--color-ink:#1c1811` primary text, `--color-muted:rgba(28,24,17,0.68)`, `--color-line:rgba(28,24,17,0.12)` hairlines.
- `--color-accent:#e8622a` orange, the CTA/interactive signal color.
- `--color-accent-green:#136530` / `--color-accent-green-soft` and `--color-accent-blue:#1d4ed8` / `--color-accent-blue-soft` are a live three-color status/channel system (not decoration): used in `ChaosFeed.tsx` for channel badges and in `PortalDemo.tsx` for order-status badges (New/orange, Printed/blue, Done/green) and in `Proof.tsx` for the Adlees "delivered"/"in progress" pills. This supersedes the old v2.1 rule that orange was the only allowed signal color, that rule no longer holds.
- Fonts: `--font-display` = Unbounded (headlines/labels/numbers/logo), `--font-serif` = Fraunces (the founders' pull quote in `Proof.tsx` only, never UI labels), `--font-body` = Inter.
- No UI kit, no icon library. All UI is hand-rolled Tailwind. **Correction: `src/components/icons.tsx` never shipped and does not exist.** No component on the page renders any icon glyphs; Product's callouts and HowItWorks' capability menu are both flat text lists, not icon cards.

### Bold rebuild (2026-07-25, second pass)

The first Ordermentum-informed pass (see the dated note further down) was too subtle: "changes are so slight, barely noticeable." Renzo asked for a bold, transformative rebuild, confirmed the visual system itself was open to change, and confirmed the hard line stays: no fabricated testimonials, logos, stats, or illustrative proof of any kind, ever. Boldness came from structure, scale, density, and real content depth, not invented credibility.

**Current page order (corrected 2026-07-27):** Header → Hero → Pain(ChaosFeed) → Product(PortalDemo + 4 callouts + SectionCta, now the one dark/ink section) → IntegrationsStrip(Cin7/Xero/MYOB badges) → Proof(merged Adlees + founders + ProofGallery + SectionCta) → HowItWorks(sticky process timeline + capability list) → Calculator → Faq → FinalCta → Footer. This supersedes the "Structure" line in the v2.1 section below, which is historical only. **Correction: Product's callouts and HowItWorks' capability menu are flat lists, not boxed grids**, despite the "Bold rebuild" bullets below claiming otherwise, see the two corrected bullets just below.

- **`Proof.tsx` (new) replaces `WorkingWith.tsx` and `Founders.tsx` (both deleted).** One denser section: the founders' pull quote up top, then a two-column card row, Adlees Fresh (logo + accent-green "Website: delivered" pill + accent-blue "Portal: in progress" pill + the centralization fact) beside the founders' bio and photos. This moves Adlees from the 3rd section to roughly the 6th, satisfying "keep Adlees lower," and consolidates the site's only two real proof assets into one authoritative block instead of two thin separate bands.
- **`Product.tsx` now has 4 callouts, not 3.** Added one describing the client-ordering view (`PortalDemo` already supports it). One callout (client-ordering) gets an accent-bordered emphasis treatment. **Correction: these are a flat numbered list (01-04, no border/background/icon), not boxed cards. There is no `icons.tsx`, it never shipped.**
- **`HowItWorks.tsx`'s capability menu bullet below is stale**: it was never converted to a boxed grid. **Correction: it is, and remains, a flat numbered list (01-06)**, same as it always was. The left process timeline stays a sticky vertical timeline, unchanged.
- **`Faq.tsx` is now mounted**, placed after `FinalCta`, before `Footer`. This reverses the prior "deliberately not rendered" decision. No content change to `Faq.tsx` itself.
- **`Calculator.tsx` moved** from between Product/IntegrationsStrip and HowItWorks to after HowItWorks, right before FinalCta, so it reads as a closing interactive payoff (problem → product → proof → process → math → ask). Numerals enlarged for more payoff impact. No content/logic change (still 100% visitor-supplied, never a dollar figure).
- **Hero.tsx**: h1 scale increased materially (was capped ~46px, now up to 62px at xl). The 4 chip pills were replaced with a bolder stat-style divided strip (2 founders / 4 channels / 20 min audit, literal true counts, nothing invented) plus a small "Works alongside Cin7, Xero, and MYOB" line. A 4th stat, "0 packages sold," was tried and cut 2026-07-25, it read as a weakness rather than a strength. Keep the stat list to genuinely positive, unambiguous facts only.
- **`Pain.tsx`**: added a 3-item "cost list" (retyped by hand / matched by guessing / written on a whiteboard) as small chips under the prose, pulled directly from existing copy, not a new claim.
- **`IntegrationsStrip.tsx`**: upgraded from one sentence to a sentence plus 3 separate text badge pills (Cin7, Xero, MYOB). Still no logos, per [[platform-logo-restriction]].
- Header/Footer nav updated: "Founders" nav item became "Proof" (`#proof`), pointing at the new merged section.

---

## Design Contract v2.1 (Naxia-informed rebuild, 2026-07-20)

Read this before writing or changing any UI code. It exists so no session starts from AI defaults. Do not re-derive taste, extend it. v1 (light editorial) and v2 (first dark pass) are preserved in git history and memory; their craft rules carry forward unchanged unless superseded below.

**Why v2.1 exists:** after v2 shipped, Renzo audited naxiaglobal.com (a site built by people he knows, more finished than ours) and asked for a full rebuild adopting what makes it feel top tier: one signature atmosphere visual, thin huge type, proof chips in the hero, a named product, an interactive calculator, and an FAQ. We explicitly did NOT adopt their category language (automating, cutting-edge, transformation — all banned words here), scroll hijacking, a logo marquee or "+N projects" style claims we cannot honestly make, or an AI chat widget.

**Product naming:** the portal is now called **Vance Portal** everywhere on the page (hero demo chrome, product section h2, OG image). Decided 2026-07-20.

**Surfaces and palette (unchanged from v2):**
- `--color-bg` #0B1426 page base. `--color-bg-deep` #070D1A for bands (Calculator, FinalCta, demo chrome). `--color-bg-raised` #111C33 for cards and floating UI.
- `--color-ink` #F5F4F0 is primary TEXT (the variable name kept its semantic role: primary foreground).
- `--color-muted` rgba(245,244,240,0.64). Contrast floor: never dimmer than 0.6 alpha for body-size text. The buyer is 40 to 60 years old; grey-on-grey Linear-style 12px text is banned.
- `--color-accent` #E8622A. Allowed as controlled glow via the `.glow-accent` utility, ONLY behind product UI or the final CTA, never as a page-wide wash, never with nothing in front of it (that was the June v1 failure).
- `--color-line` rgba(245,244,240,0.1) hairlines everywhere.

**Type system:**
- Unbounded via `font-display` utility (never `font-[var(...)]`, it silently fails). Headlines, labels, numbers, logo.
- Hero h1 is now **thin (font-light 300)** with one bold emphasized phrase, at larger scale (38/64px) with tighter tracking (-0.03em), Naxia-informed: scale plus weight contrast reads more premium than uniform bold. Section h2 stays bold, 26/40px, leading [1.18]. These are ceilings, Unbounded wraps badly bigger.
- Inter body 16 to 18px leading-relaxed, captions 13px.
- Fraunces via `font-serif` utility: the founder pull quote only. Never UI labels.
- `text-wrap: balance` on h1/h2 globally.

**The product-everywhere rule (core of v2, still true in v2.1):**
- **One interactive demo only (updated 2026-07-21).** `PortalDemo.tsx` takes an `interactive` prop. The hero shows a capped, faded, non-interactive preview (`interactive={false}`, `pointer-events-none`, `aria-hidden`) under a gradient fade with a "Try the live demo ↓" link to `#inside-the-portal`. The single live, clickable demo lives in `Product.tsx` ("We call it Vance Portal."). Never make the hero copy clickable again, and never add a second interactive instance elsewhere on the page.
- **Full portal shell, not a single panel (updated again 2026-07-21).** `PortalDemo.tsx` now recreates the real app shell from the real Adlees Fresh ordering-portal prototype (`Clients/Adlees Fresh/active/portal/AF-Portal-Prototype-master`, a separate Next.js codebase, not a dependency of this site, reference material to recreate from — never embed/iframe it directly, it's fragile, not built for embedding, and is Adlees-branded): a left sidebar with the `Logo` component top-left, a "Business Portal" label, and a nav (Dashboard, Orders, Products, Customers, Messages), with a "Switch to client view" link at the sidebar's bottom, exactly matching the real prototype's structure but reskinned in Vance colors (dark bg, orange accent, never Adlees' light green/orange) and simplified in depth. `view` state ("admin" | "client") and `page` state (`AdminPage`) drive what the main panel shows; the sidebar itself only renders in admin view. On mobile (`sm:` and below) the sidebar is replaced by a horizontal scrollable pill row with the same nav items plus a "Client view" pill. Client view has its own "← Back to admin view" link in place of the sidebar. Chrome-bar title updates per page/view via `PAGE_TITLES`.
  - **Orders** is the original, most-built page: tabs, status advancing, open-an-order, "Mark printed"/"Mark done", timed incoming-order simulation with confirmation toast.
  - **Dashboard**, **Products**, **Customers**, **Messages** are deliberately simplified compared to the real prototype: Dashboard is stat cards computed from the same orders state plus a 3-row recent-orders list; Products is a flat list with a click-to-toggle Active/Paused badge (no images — this is a website-wide as well as this-page rule, do not add product photography here); Customers is a read-only list; Messages has one working input (post a notice, prepends to the list, no images/attachments). None of these get the real prototype's full feature depth (no per-item notes, no "item not listed" form, no delivery date/cut-off picker, no PO numbers, no favourites/account screens, no prices anywhere — also satisfies the site's no-pricing rule) — this holds back capability-menu depth on purpose so the sales conversation still has somewhere to go.
  - Client view (reached via the sidebar/pill "Switch to client view" link, not a segmented toggle) is the ordering screen: category filter chips, qty stepper, "Add", a running cart, "Submit order" reusing the same confirmation toast.
  - `ClientProductRow` stacks name/controls vertically on mobile via `flex-col sm:flex-row` — do not go back to plain `flex-wrap` there, it wraps inconsistently once one product name is longer than its neighbors.
  - The hero's non-interactive preview (`interactive={false}`) shows this same shell (sidebar + Orders, frozen, since there is no way to change `view`/`page` without clicks) capped and faded — this is intentional, it's what makes the hero preview read as "the real portal" rather than a stripped-down teaser.
- `ProductTour.tsx` and the Adlees screenshot crops (`public/images/portal/details/`) were removed 2026-07-21, superseded by the single working demo. Do not resurrect the screenshot-crops pattern.
- `WorkingWith.tsx` (new) replaces the removed screenshots as the Adlees credit: the real logo (`public/images/clients/adlees-logo.png`) plus a "Trusted by" label, quiet, not a logo wall. "Trusted by" is accurate, not overclaiming: Adlees is a genuine current client (website already delivered), corrected 2026-07-24, previously mis-documented here as "Building with".
- Any new section must earn its place with product content, real proof, or a visitor-driven interaction (Calculator), never abstract claims.

**Structure (page order is deliberate, updated 2026-07-25):** Hero(ribbon + capped demo preview + proof chips) → Pain(ChaosFeed) → WorkingWith(Adlees logo) → Product(the one live demo, "Vance Portal") → IntegrationsStrip(Cin7/Xero/MYOB, text only) → Calculator → HowItWorks(audit story + timeline + capability menu, 6 rows) → Founders(quote) → FinalCta(+ phone/email row) → Footer. TrustStrip, StatsBand, Method, Process, and ChannelFlow from v2 were merged or deleted, see below. Index-style numbered lists stay for the capability menu. No icon card grids, no bento boxes, no wave dividers, **except Product's 3 callouts, see the 2026-07-25 note below.**

**Section header rhythm is deliberately varied (added 2026-07-24).** Pain, Product, Calculator, and HowItWorks used to open with an identical eyebrow → bold h2 → muted paragraph block, which read templated once the repeated accent-colored eyebrow was toned down to muted (see accent-discipline note below). Fixed by giving each section a different opening shape instead of reverting the eyebrow: Pain has no eyebrow at all, its two-tone headline (bold ink clause + muted clause) carries the open on its own. Product's heading and supporting paragraph sit side by side on desktop (`md:grid md:grid-cols-2`), not stacked. Calculator is the page's one deliberately centered section, left as is. HowItWorks is left-aligned (not centered) specifically so it doesn't repeat Calculator's centering directly above it. Do not make these four match each other again.

**Accent color is reserved for interactive/active elements only (added 2026-07-24).** Eyebrow labels on Pain, Product, Calculator, and HowItWorks are `--color-muted` with a small `--color-accent` dot marker, not full accent-colored text. Decorative numbering (Product's 01/02/03 callouts, HowItWorks' 01–06 capability menu) is muted, not accent. Orange now only appears on things a visitor can click or that carry live state: the CTA button, active tabs/toggles, order status badges, focus rings. Don't restore accent-colored eyebrows or decorative numbering, it dilutes the one signal color the page has.

Hero's proof chips (`Hero.tsx`) render as actual bordered pills (a `<ul>` of individual `<li>` chips), not a single line of muted text joined by middle-dots. Each claim should read as its own discrete pill.

**Faq.tsx exists but is deliberately not rendered on the page (decided 2026-07-21).** It's built, on-brand, and answers the cost objection honestly, kept in the codebase for a future call, but not imported in `page.tsx`. Do not add it back or delete it without asking first.

**Hero proof chips (`Hero.tsx`):** "Two founders, no account managers", "Gold Coast, Australia", "Twenty minute audit, no pitch, no price", "Works alongside Cin7, Xero, and MYOB" (added 2026-07-21 to surface the one credibility fact competitors can't claim, moved up from HowItWorks where it was buried three sections deep). No Cin7/Xero/MYOB logos anywhere on the site, text only, see [[platform-logo-restriction]] memory: none of the three permit logo use without formal partner status, which Vance Digital doesn't have.

**ChaosFeed (new, `ChaosFeed.tsx`, in the Pain section):** an animated "before 9am" inbox of 7 messy messages (Phone/Text/Email/Fax tagged) piling up unsorted, dramatizing the Pain section's claim instead of just asserting it. Same no-setState-in-effect pattern as `Reveal.tsx`: a ref sets `data-primed`/`data-play` attributes in `useEffect`, CSS keyframes in `globals.css` do the staggered entrance (`animationDelay` per item, currently 0.22s stagger), static and fully visible under `prefers-reduced-motion` and with JS disabled.

**Hero ribbon — never shipped, corrected 2026-07-27.** This paragraph describes a `Ribbon.tsx` SVG atmosphere that does not exist anywhere in the codebase and was confirmed absent by a direct audit (no file, no import, no reference). Whatever happened between this being written and today, the hero never used it. As of 2026-07-27, `Hero.tsx`'s background is a real stock video (see the "Superseded 2026-07-27" note near the top of this file), not an SVG ribbon. Kept here only as a historical record of a design that was written down but never built; do not resurrect the geometry rule below for a component that isn't there.
~~`Ribbon.tsx` is a full-width SVG atmosphere, four gradient strands (one per order channel) sweeping behind the hero, one strand in orange. Pure SVG + CSS, no WebGL. Drifts slowly (`.ribbon-path`, 14s ease-in-out), static under `prefers-reduced-motion`. This is the page's one signature visual, do not add a second one without removing this. Geometry rule, learned the hard way: the hero headline is centered and occupies nearly the full vertical height of the hero, so strands must stay routed through the LEFT and RIGHT margins for that whole span and only cross the center column low, in the whitespace between the CTA/chips and the demo. A first version routed diagonally straight through the headline text and had to be rebuilt; never let a ribbon path cross behind live text at meaningful opacity. No floating per-channel labels on the strands either, they cannot be placed without colliding with copy at this text density; the headline copy already names the four channels.~~

**The calculator (new, `Calculator.tsx`):** visitor types their own numbers (orders per week, minutes per order), output is hours per week plus one capacity-framed sentence. **Never show a dollar figure.** Never save or transmit the inputs. This is the only place on the page with visitor-editable numbers; keep it that way.

**Ordermentum-informed pass (2026-07-25).** Renzo asked for the page's information architecture and wording to move closer to ordermentum.com (trust-first sequencing, boxed benefit sections, an integrations beat) without inventing any proof we don't have. Three scoped changes shipped, everything else from that audit (success-story carousel, client logo wall, stats wall, integration logo grid, testimonial carousel, two-audience nav split) was explicitly rejected as unaffordable to do honestly at our current scale (one client, two founders, no customer quotes, no partner status) and must not be added later without new real proof to back it.
- **Product's 3 callouts are now boxed** (`border border-[var(--color-line)] bg-[var(--color-bg-raised)] rounded-xl p-6` per card), a deliberate, scoped exception to the "no icon card grids, no bento boxes" rule, confirmed by Renzo. **Update 2026-07-28: HowItWorks' 4 process steps (Audit/Proposal/Build/Prove it) are now boxed too**, same recipe, confirmed by Renzo when asked directly (to unify with AcceleratorTeaser's bordered cards directly above it). The "no bento boxes" rule still holds everywhere else on the page not already named as an exception.
- **WorkingWith now carries two facts**, not one: the existing "Website delivered. Portal in progress." plus a second line naming the real outcome, phone/text/email/fax intake being replaced by one centralized system, one source of truth, days easier and more efficient. Still unattributed (no invented quote from a named person), still present-continuous for the portal.
- **`IntegrationsStrip.tsx` (new)**, a thin text-only band between Product and Calculator, reusing the existing "Works alongside Cin7, Xero, and MYOB" fact so it isn't invented twice. The duplicate sentence was removed from HowItWorks' intro paragraph so the fact isn't stated three times on the page (it still lives in the Hero proof chip and here). No logos, per [[platform-logo-restriction]]. No page-nav anchor, it's not a scroll destination.

**The FAQ (new, `Faq.tsx`):** native `<details>/<summary>`, so it works with zero JavaScript. Six honest questions including cost (answer: no packages, audit determines scope, 48h proposal) and who they deal with (Renzo and Inigo by name). Do not add a "pricing" FAQ answer that states a number.

**Merged/removed from v2:**
- TrustStrip deleted, its content became the hero proof chips (with the real Adlees logo inline, `public/images/clients/adlees-logo.png`) plus the ProductTour Adlees credit line.
- StatsBand deleted, its facts redistributed: 4 channels lives in the hero copy and calculator framing, 48h lives in HowItWorks step 2, 20min lives in the hero proof chip.
- Method + Process merged into `HowItWorks.tsx`: one audit-first story, one alternating vertical timeline (four steps, flat edges, no wave dividers), Cin7/Xero/MYOB "alongside, not instead of" line kept.
- Proof/PortalToggle (from a prior session) already removed before this rebuild; do not resurrect the toggle pattern, the interactive PortalDemo replaces the need for it.

**Depth and motion:**
- Layered shadows, black-based on dark (see PortalDemo/BrowserFrame/Calculator stacks). CTA Button carries an orange glow ring.
- Content renders visible without JavaScript, always. Reveal adds fade as enhancement, FAQ uses native disclosure. This bug shipped twice already (Reveal, PortalToggle), never a third time, including in Calculator (must show sensible defaults server side) and Ribbon (must render its paths without JS).
- All animation respects prefers-reduced-motion: ribbon drift stops, demo simulation does not start.

**Honesty constraints:**
- Adlees Fresh: website delivered, portal in progress. Present tense, never "built" or "live" for the portal.
- No invented testimonials, stats, logos, or clients. The founder quote is real mission language, attributed to "The Vance Digital mission" (not a named person), approved 2026-07-20.
- Demo data must always be visibly labeled as sample data. Calculator numbers are always visitor-supplied, never pre-filled with claims.
- No contact form for now (Tally is a maybe for later). The soft contact path is the visible phone/email row in FinalCta and the footer.

**Imagery:** real portal screenshots and crops only; the real Adlees Fresh logo (transparent PNG) is now used as a client credit, small and quiet, never as a "wall of logos"; founder photos small and grayscale (Inigo's source is 200x200); no stock ever; changed image files need new filenames (Next caches by URL, see `og-v3.png`).

**References:** naxiaglobal.com (atmosphere, calculator, FAQ, proof chips — adopted structure, not their copy voice), Linear (product-forward dark, depth), Stripe (density with clarity), Vercel (restraint on dark). Failure references to never repeat: June v1's empty glow hero, the v1 brochure feeling of beige with hairlines and nothing in it, and Naxia's own category-language copy and scroll hijacking.

**Working method:** AI drafts inside this contract, then a human curation pass breaks uniformity. Verify every visual change with rendered screenshots at 1440 and 390, a JavaScript disabled pass, and an interaction test of the PortalDemo, Calculator, and Faq.

---

## Design Contract v2.2 (Scrollytelling pass, 2026-07-24)

**Why this exists:** after v2.1 shipped, Renzo's feedback was that the page still read as a conventional brochure: a plain header, and HowItWorks/Founders/FinalCta as static text blocks with a one-time fade-in, giving a busy wholesale owner no reason to keep scrolling past the hero and the interactive demo. He explicitly chose to go bigger on motion (Naxia/Linear-style scrollytelling) over the safer "subtle craft only" option, and asked for the header to both react live to scroll and get a layout rework, not just a patch.

**This is a deliberate, bounded exception to v2.1's "never repeat Naxia's scroll hijacking" failure reference, not a reversal of it.** What shipped here uses native browser scroll the whole time: CSS `position: sticky` for pinning (no JS pins/unpins it, the browser does), and Framer Motion's `useScroll`/`useTransform` only to read scroll position and drive decorative styling (progress width, line fill, glow intensity, small parallax offsets). Nothing intercepts, forces, or paces the user's scroll itself. That is the line: reactive to scroll, never in control of it.

**What shipped:**
- `Header.tsx`: active-section highlighting via `useActiveSection.ts` (an `IntersectionObserver` hook, same primitive family as `Reveal.tsx`/`ChaosFeed.tsx`), a condensed padding state past 80px of scroll, and a thin accent scroll-progress line under the header driven by `useScroll` + `useSpring`.
- `HowItWorks.tsx`: the "process" column is `md:sticky md:top-28 md:self-start` (desktop only, pure CSS, no JS needed for the pin itself) while the capability menu scrolls past beside it. The vertical timeline keeps its original static muted line as the always-visible base, with an accent-colored `motion.div` overlay on top whose `scaleY` fills according to scroll progress through the steps container.
- `Product.tsx`: the single blanket `Reveal` around the toggle, demo, and caption was split into three sequentially-delayed `Reveal`s so the product appears to assemble (toggle, then demo, then caption) instead of arriving all at once. `PortalDemo`'s own interactivity is untouched.
- `Founders.tsx`: founder photos go from grayscale to color on hover/focus (pure CSS, no JS). The quote and the founder list get a small opposite-direction parallax `y` offset from `useScroll`/`useTransform`. **Correction 2026-07-27: `Founders.tsx` was later deleted and merged into `Proof.tsx` (see the 2026-07-25 "Bold rebuild" note above). The grayscale-to-color hover survived the merge; the scroll-linked parallax described here did not, `Proof.tsx` has zero Framer Motion today.**
- `FinalCta.tsx`: the existing static `glow-accent` stays as the no-JS/at-rest default; an additional `motion.div` glow overlay behind it intensifies (opacity 0 to 1 to 0) as the section passes through the viewport center.

**The no-JS rule is unchanged and was the main risk in this pass, because it already shipped as a bug twice (Reveal, PortalToggle).** Framer Motion's usual `initial={{opacity: 0}}` / `whileInView` props bake the hidden state into server-rendered HTML, so a no-JS visitor would see nothing — that pattern was not used anywhere in this pass. Two safe patterns were used instead: content-bearing entrances stayed on the existing `Reveal.tsx` primitive (mount-then-observe, hidden state only ever added client-side via `useEffect`), and every new Framer Motion `useScroll`/`useTransform` value was reserved for decorative overlays whose SSR/at-rest default (empty progress bar, unfilled timeline overlay, zero glow opacity, zero parallax offset) is already a correct, non-broken visual with nothing hidden. Any future scroll-linked addition must follow the same split; do not add `initial`/`whileInView` motion props to anything that carries page content.

**Reduced motion:** every new scroll-linked value here is gated with Framer Motion's `useReducedMotion()` and forced to its static/zero state when active: the header progress bar skips its spring smoothing and the condensed-padding transition, the HowItWorks timeline overlay stays at `scaleY: 0` (base muted line still visible), the Founders parallax offsets flatten to 0, and the FinalCta glow overlay stays at opacity 0 (base static glow remains).

**What did not change, still governed by v2.1 above:** one signature atmosphere visual (`Ribbon.tsx`), one interactive demo (`PortalDemo` inside `Product.tsx`, hero keeps its non-interactive capped preview), no icon card grids, no bento boxes, no wave dividers, no stock imagery, no invented stats or testimonials. The motion budget went up; the plainness of the copy for a 40 to 60 year old wholesale owner did not.

---

## Files

- `src/app/` — page and layout code.
- `public/` — static assets (logos, fonts) copied in from `Business/assets/`.
