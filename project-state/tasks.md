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

## Phase B — Split the HTML file ⬜ NEXT

- [ ] Extract CSS → `site/style.css`
- [ ] Extract JS → `site/main.js`
- [ ] `site/index.html` links to both files
- [ ] Confirm site still looks correct in browser
- [ ] Commit: `Phase B: Extract CSS to style.css and JS to main.js`

---

## Phase C — Content verified ✅ ALREADY DONE

- [x] Real food photos already in `site/`
- [x] Real menu with prices already in HTML
- [x] Real business info (address, phone, email, hours) already in HTML

---

## Phase D — Legal pages ⬜ NOT STARTED

- [ ] Generate privacy policy → save as `site/privacy-policy.html`
- [ ] Generate terms of service → save as `site/terms-of-service.html`
- [ ] Add footer links in `site/index.html` pointing to both pages
- [ ] Commit: `Phase D: Privacy policy and terms of service added`

---

## Phase E — Domain + Hosting ⬜ NOT STARTED

- [ ] Create GitHub repo and push
- [ ] Create Netlify project → connect repo → set publish directory to `site`
- [ ] Confirm site goes live on a `.netlify.app` URL
- [ ] Register custom domain (TBD) at Namecheap
- [ ] Connect custom domain to Netlify
- [ ] Confirm SSL (`https://`) is active
- [ ] Log all accounts in a `docs/accounts.md` file

---

## Phase F — SEO & Analytics ⬜ NOT STARTED

- [ ] Verify `<title>` and `<meta name="description">` are accurate and keyword-rich
- [ ] Add Open Graph tags
- [ ] Add JSON-LD LocalBusiness structured data
- [ ] Create `site/sitemap.xml`
- [ ] Create `site/robots.txt`
- [ ] Set up Google Analytics 4 → add tracking script to all pages
- [ ] Set up Google Search Console → verify → submit sitemap
- [ ] Commit: `Phase F: SEO and analytics added`

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
