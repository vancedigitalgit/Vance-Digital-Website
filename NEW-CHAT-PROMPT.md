Audit the Vance Digital website in this folder, research how to make it genuinely excellent, and come back with a concrete plan before touching any code.

## Context

Vance Digital builds B2B ordering portals for wholesale food and produce businesses in Australia (2 to 20 people, owner operated). Full business context is in `Business/CLAUDE.md` and `Business/brand-voice.md`, read both before doing anything else. This folder's own `CLAUDE.md` has the page-specific rules (no pricing, no dashes, banned words, brand colors, current stack).

The site is a Next.js app (not Go High Level, that's outdated in some older notes). Run it with `npm run dev` in this folder and actually look at it, don't just read the source.

**This is not a rebuild from zero.** What's here now is the base: real photography decisions, a working component structure, real screenshots from the Adlees Fresh client portal (`public/images/portal/`), and several rounds of design direction already fought through (dark navy SaaS style was tried and rejected, light editorial style was tried and is currently in place but the person running this project is not happy with it). Don't erase that work or start over blind, understand why each decision was made before proposing to change it.

## Step 1: Audit what exists

- Run the site, screenshot every section on desktop and mobile.
- Read every component in `src/components/`.
- Identify what's actually wrong: be specific (file, section, exact problem), not vague ("needs more polish").
- Check it against the rules in this folder's `CLAUDE.md` (no dashes, no banned words, no pricing).

## Step 2: Research, don't guess

Go to the web and build real, current knowledge across four areas before proposing anything:

1. **Web design/development standards.** What do genuinely top tier sites do in 2026, both boutique agency portfolios (Work & Co, Build in Amsterdam, Koto are references already explored, worth re-checking and expanding on) and premium product sites (Linear, Retool, Ramp, Arc were already checked). Look at layout structure, typography systems, motion/interaction design, how real depth and craft get communicated, not just decoration.
2. **Copywriting.** Research what makes B2B cold-outreach copy convert: how top copywriters structure a landing page, headline formulas, how to write for a skeptical, time-poor, non-technical buyer (the ICP here is a 40 to 60 year old wholesale business owner, not a tech buyer).
3. **Marketing.** Research positioning and funnel theory relevant to a two-person agency selling a custom build to a small traditional business: how do small agencies without case studies or scale build credibility fast.
4. **Business/consumer psychology.** Trust signals, cognitive biases relevant to B2B purchase decisions from cautious traditional buyers, how specificity and real proof beat polish, loss aversion vs aspiration framing, etc.

Cite what you find. Bring back sources, not just conclusions.

## Step 3: Bring back a plan, not code

Do not start rebuilding until this is reviewed. Produce a plan covering:

- What's kept from the current build and why.
- What changes: structure, copy, visual direction, interaction, specific to specific.
- Which research findings drove each recommendation.
- Open questions you need a decision on before building.

**Ask questions.** Where there's a real fork (e.g. light vs dark, how bold the interactivity should be, tone of voice tradeoffs), stop and ask rather than picking silently. This project has had several expensive direction reversals already from decisions made without checking first.

## Constraints that don't change

- No pricing anywhere on the page.
- No dashes (em, en, or hyphen as punctuation) in any copy, anywhere, including code comments in copy strings.
- No banned words: automate, automation, workflow, streamline, AI-powered, efficiency, transform, seamless, solutions, leverage, etc. Full list in `Business/brand-voice.md`.
- Real proof only. The only real client work is Adlees Fresh (portal screenshots already in the repo). Do not invent testimonials, stats, or case studies.
- CTA is always the Calendly link already used in the codebase, never a placeholder.
