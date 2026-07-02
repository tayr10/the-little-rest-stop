# Tasks

> Add to this file. Never erase what's here.
> Mark tasks ✅ the moment they're done and commit the change.

---

## Phase A — Clean up & commit existing files ✅ DONE

- [x] Move project from Desktop to `~/projects/the-little-rest-stop`
- [x] Rename `index_5.html` → `site/index.html`
- [x] Move all photos and logo into `site/`
- [x] Initialize Git and make first commit
- [x] Add `.gitignore`
- [x] Set up `project-state/` folder

---

## Phase B — Split the HTML file ✅ DONE

- [x] Extract CSS → `site/style.css`
- [x] Extract JS → `site/main.js`
- [x] `site/index.html` links to both files — down from 929 lines to 460
- [x] Commit: `Phase B: Extract CSS to style.css and JS to main.js`

---

## Phase C — Content verified ✅ ALREADY DONE

- [x] Real food photos already in `site/`
- [x] Real menu with prices already in HTML
- [x] Real business info (address, phone, email, hours) already in HTML

---

## Phase D — Legal pages ✅ DONE

- [x] Privacy policy → `site/privacy-policy.html`
- [x] Terms of service → `site/terms-of-service.html`
- [x] Footer links added in `site/index.html`

---

## Phase E — Domain + Hosting ⬜ PARTIAL

- [x] Create GitHub repo and push → github.com/tayr10/the-little-rest-stop
- [x] Create Netlify project → publish directory `site`
- [x] Site live at `the-little-rest-stop.netlify.app` — auto-deploys on every push
- [ ] Register custom domain at Namecheap (TBD — needs decision on domain name)
- [ ] Connect custom domain to Netlify
- [ ] Confirm SSL (`https://`) is active on custom domain
- [ ] Update sitemap.xml, robots.txt, OG tags, and structured data to real domain

---

## Phase F — SEO & Analytics ✅ DONE (one item to revisit after custom domain)

- [x] `<title>` and `<meta name="description">` verified — accurate and keyword-rich
- [x] Open Graph tags added
- [x] JSON-LD Restaurant structured data added (includes hours, address, cuisine type)
- [x] `site/sitemap.xml` created
- [x] `site/robots.txt` created
- [x] Google Analytics 4 set up → Measurement ID `G-MZHRJQL07S` → script added to all three pages
- [x] Google Search Console verified via GA4 → sitemap submitted
- [ ] Update domain URLs in sitemap, robots.txt, OG tags, GA4 stream once custom domain is live

---

## Phase G — Pre-launch testing ⬜ NOT STARTED

- [ ] Site loads at live domain without errors
- [ ] `https://` padlock shows — no warnings
- [ ] Click-to-call works on a real phone
- [ ] Every nav link works — nothing 404s
- [ ] Menu tabs all work
- [ ] Map loads correctly
- [ ] Mobile menu opens and closes
- [ ] PageSpeed Insights score ≥ 80 on mobile
- [ ] Privacy Policy and Terms footer links work
- [ ] No placeholder content anywhere

---

## Phase H — Launch ⬜ NOT STARTED

- [ ] All Phase G boxes checked
- [ ] Confirm live domain resolves correctly
- [ ] Submit sitemap in Search Console
- [ ] Announce on Facebook, Google Business Profile
- [ ] Ask regulars for a Google review
- [ ] Tag the release: `git tag v1.0-launch && git push --tags`
