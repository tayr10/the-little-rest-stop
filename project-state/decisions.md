# Decisions

> Append-only. Write down why you chose something. Future-you will thank present-you.

---

## 2026-07-01 — Plain HTML/CSS/JS, no framework

Same approach as the Ironclad project. No React, no build tools, no npm.
**Why:** This is a simple marketing site. A framework adds complexity with zero benefit here.
Fast to build, easy to maintain, and anyone can open the files and understand them.

---

## 2026-07-01 — Netlify for hosting

Free tier is more than enough for a static site this size.
**Why:** Auto-deploys from GitHub on every push, free SSL, fast CDN. No ongoing cost.

---

## 2026-07-01 — Kept real food photos as-is

Photos were already in the folder at reasonable sizes.
**Why:** No need to run them through TinyPNG for now — they're PNGs/JPEGs of food photos,
already sized for web use. Can optimize later if PageSpeed flags them.
