# Deployment Guide

Your site is already live on Vercel. This guide covers all three free options, how to push updates, custom domains, HTTPS, and common mistakes.

## Vercel (what you're using)

1. Push your code to GitHub (already done — [github.com/Pranjalgit1/Portfolio](https://github.com/Pranjalgit1/Portfolio)).
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, click "Import" next to the repo.
3. Vercel auto-detects Vite: build command `npm run build`, output directory `dist`. Click Deploy.
4. You get a live URL like `portfolio-yourname.vercel.app` within about a minute.

**Updating the live site:** just `git push` to `main`. Vercel automatically re-runs the build and redeploys — no manual redeploy step, ever.

## Netlify

1. Push your code to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project" → connect GitHub → pick the repo.
3. Netlify should auto-detect the build command (`npm run build`) and publish directory (`dist`) via `vite`. If it doesn't, set them manually in the site's build settings.
4. Deploy. Netlify gives you a URL like `your-site.netlify.app`.

**Updating the live site:** same as Vercel — push to `main`, Netlify auto-rebuilds.

## GitHub Pages

GitHub Pages needs a bit more manual setup for a Vite SPA because it serves from a subpath (`username.github.io/repo-name`) by default, not the domain root.

1. In `vite.config.js`, add a `base` option matching your repo name:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Portfolio/', // must match your GitHub repo name exactly
   })
   ```
2. Install the deploy helper: `npm install --save-dev gh-pages`.
3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`. This builds the site and pushes the `dist` folder to a `gh-pages` branch.
5. In the GitHub repo → Settings → Pages, set the source to the `gh-pages` branch.

**Updating the live site:** you must manually run `npm run deploy` again after each change — unlike Vercel/Netlify, there's no automatic rebuild on push unless you also set up a GitHub Actions workflow.

## How to update the live website after editing

- **Vercel / Netlify:** `git add`, `git commit`, `git push` — that's the entire process. The platform watches your GitHub repo and rebuilds automatically.
- **GitHub Pages:** commit and push your source changes as usual, *then* additionally run `npm run deploy` to publish the built output.

## How to connect a custom domain later

1. Buy a domain (e.g. from Namecheap, Google Domains, GoDaddy).
2. **Vercel:** Project → Settings → Domains → add your domain. Vercel gives you DNS records (usually an `A` record or `CNAME`) to add at your domain registrar.
3. **Netlify:** Site → Domain settings → Add custom domain → same idea, add the DNS records Netlify shows you.
4. **GitHub Pages:** add a `CNAME` file to your repo's `public/` folder containing just your domain name, then add a `CNAME` DNS record at your registrar pointing to `yourusername.github.io`.
5. DNS changes can take a few minutes to 48 hours to propagate worldwide.

## How HTTPS works (and why you don't need to configure it)

HTTPS encrypts traffic between the visitor's browser and the server using an SSL/TLS certificate. All three platforms (Vercel, Netlify, GitHub Pages) automatically issue and renew a free certificate (via Let's Encrypt) for both their default subdomain and any custom domain you connect — there's no manual setup. This is one of the main reasons to deploy on a managed platform instead of a plain VPS, where you'd have to configure this yourself.

## Common deployment mistakes

- **Committing `node_modules`.** It's huge and regenerable — make sure `.gitignore` excludes it (it already does in this project).
- **Forgetting the `base` path on GitHub Pages.** Without it, all your asset URLs (JS/CSS) resolve incorrectly and the page loads blank — a very common Vite + GitHub Pages mistake.
- **Hardcoding `localhost` URLs.** If any code references `http://localhost:5173`, it'll break in production — this project doesn't, since there's no backend to call yet.
- **Case-sensitive file paths.** Windows/Mac file systems ignore case; Linux servers (which is what Vercel/Netlify/GitHub Pages run) don't. `Public/Favicon.svg` referenced as `public/favicon.svg` works locally but 404s in production.
- **Expecting instant DNS propagation.** Custom domain changes can take time — don't assume a misconfiguration just because it isn't live within a minute.
- **Not testing the production build locally.** Run `npm run build && npm run preview` before pushing — it serves the actual `dist` output, catching bugs that only appear in the optimized build (not the dev server).
