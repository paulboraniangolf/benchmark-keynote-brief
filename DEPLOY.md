# Deploying this brief

The site is plain static HTML in the repo root. No build step.

## Live now — GitHub Pages
Deployed from the `benchmark-keynote-brief` repo. Any push to `main` republishes.

## Vercel (Paul's preferred host) — one command
Vercel CLI needs an interactive login, which couldn't be done overnight.
When you want it on a vercel.app domain:

```bash
cd "06-team-brief"
npx vercel@latest login     # one time, opens a browser
npx vercel@latest --prod    # deploys; vercel.json is already configured
```

That's it — `vercel.json` already points at the repo root with asset caching set.

## Updating content
Everything on the page is driven by `data.js`:
- `SECTIONS` — the timeline beats
- `PACKS` — the motion-graphics gallery
- `OWNERS` — the three lanes

Edit that file and push. No rebuild.
