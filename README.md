# Safety Controls — Yellow Light Theme (v3)

**What’s in this build**
- Light, fun theme using **#FFCD11** with white/black accents and subtle gradients.
- **All‑or‑nothing** scoring (exact match only).
- **Submit → Next** flow: Next appears only after Submit. No auto‑advance.
- **No inline Play Again** during questions; it appears only on the **end screen**.
- **No mid‑game results**; score/title/comment show **only** at the end.
- **Back to Learning** button at the top of the game.
- Learning is **gated**; the Play button appears only on the last learning page after acknowledgment.
- Home page has **no tagline**, and only shows **Play the Game** after learning is complete.

**Add the Progress Rail logo**
1) Put your logo at `assets/images/logo.svg` (recommended).  
2) That’s it—the `<img>` tags already point to `logo.svg`. If you prefer PNG, place `logo.png` and change the three paths in `index.html`, `learn/index.html`, and `game/index.html`.

**Add scenarios**
Edit `game/questions.js`. Use local images in `assets/images` or videos in `assets/video`.
