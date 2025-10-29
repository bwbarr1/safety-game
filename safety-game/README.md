
# Safety Game (Starter)

A lightweight, mobile-friendly training game for safety scenarios with multiple-correct answers, offline support (PWA), and GitHub Pages hosting.

## Quick Start

1. **Open GitHub Desktop** → *File* → **New repository** → Name it `safety-game` and choose your local path.
2. Copy these files/folders into your repo folder.
3. In GitHub Desktop: **Commit to main** → **Push origin**.
4. On GitHub.com: Repo **Settings → Pages** → Source: `main` + `/ (root)` → **Save**.
5. Visit your Pages URL (e.g., `https://<username>.github.io/safety-game/`).

> After first load, the site works offline. You can add it to the home screen on mobile (PWA).

## Project Structure

```
.
├─ index.html                # Home + progress
├─ intro.html                # Control types explainer
├─ scenarios/
│  └─ scenario-01.html      # Sample scenario (multi-select)
├─ css/
│  └─ styles.css            # Minimal, accessible styles
├─ js/
│  ├─ app.js                # Progress/localStorage helpers
│  └─ sw-register.js        # Service worker registration
├─ assets/
│  ├─ images/
│  │  ├─ icons/
│  │  │  ├─ icon-192.png
│  │  │  └─ icon-512.png
│  │  └─ logo.svg           # (optional placeholder)
│  └─ video/
│     └─ sample.mp4         # Put your short clips here
├─ manifest.webmanifest     # PWA metadata
├─ sw.js                    # Offline caching
├─ .nojekyll                # Disable Jekyll processing on Pages
└─ README.md
```

## Add Your Own Videos

1. Place MP4 files under `assets/video/` (720p H.264 is a good balance). Keep each file well under 100 MB (preferably <10 MB).
2. Update the `<source src="...">` path in each scenario page.

## Create More Scenarios

- Duplicate `scenarios/scenario-01.html` → rename to `scenario-02.html`, etc.
- Update the title, question, options, and the `ANSWER_KEY` set inside the page script.
- Change the `data-scenario-id` attribute to a unique id (e.g., `scenario-02`).

## Edit Control Types

Open `intro.html` and update the details. Replace **Fourth Control (TBD)** once your safety lead confirms the label and description.

## Reset Progress

On **Home**, click **Reset Progress** to clear saved results on the device (localStorage only).

## PWA Notes

- Service worker caches core files for offline use and uses a *stale-while-revalidate* strategy for updates.
- If you change core files widely, bump the `CACHE_NAME` in `sw.js` (e.g., `sg-cache-v2`) to force clients to refresh.
- GitHub Pages serves over HTTPS, so PWA works without extra config.

## Accessibility

- Semantic HTML, visible focus styles, and form labels are included. Keep color contrast when customizing.

## License

This starter is yours to adapt internally.
