
# Safety Controls — Learning + Game

This starter implements:

- A **Learning module** (`/learn/`) with forward/back navigation, progress bar, and a gated **Proceed to Game** button that unlocks only after acknowledgment. Completion is stored in `localStorage`.
- A **Game** (`/game/`) with multi-answer questions, **Submit** to reveal feedback, and a **Next** button that only appears after submit. No auto‑advance. Includes score, end‑screen titles, and placeholders for images/videos.
- A **Landing page** (`/index.html`) tying it together.

## How to use

1. Copy the contents of this folder to your GitHub repo (or clone and replace).
2. In `/game/questions.js`, replace the sample questions with your scenarios.
   - Put images in `assets/images/` and videos in `assets/video/`.
   - Keep video files small (< 100 MB for GitHub; preferably < 10 MB for mobile).
3. Turn on GitHub Pages (Settings → Pages → Branch: `main` → Folder: `/`), then visit your published URL.

## Notes
- If a learner skips learning and goes directly to `/game/`, they will be redirected back to `/learn/` until completion is recorded.
- Scoring: 1 point per question for exactly correct selections (no partial credit). Ask if you want partial scoring.
- Styling: edit `assets/css/styles.css` for colors/spacing/fonts.

