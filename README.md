# Safety Controls — Light Yellow Theme

**What changed**
- Light theme using **#FFCD11** (yellow), white, and black variants.
- Removed the “Learn • Play • Score” tagline (gone).
- **All-or-nothing scoring** (exact match only).
- Fun **titles** + randomized **comment** on the results screen (no letter grade).
- “Next” button appears only after **Submit**.
- Learning module is **gated** and the **Play** button appears only on the final screen after acknowledgment.

**Add your Progress Rail logo**
1. Save your logo file as **SVG** or **PNG**.
2. Put it here: `assets/images/logo.svg` (recommended) or `assets/images/logo.png`.
3. If you used PNG, update the `<img>` `src` in:
   - `index.html` → `assets/images/logo.png`
   - `learn/index.html` → `../assets/images/logo.png`
   - `game/index.html` → `../assets/images/logo.png`

> Using the same filename (`logo.svg`) means you can just replace the file and **no code changes** are needed.

**Where to add scenarios**
- Edit `game/questions.js` (multiple correct supported). Images go in `assets/images`, videos in `assets/video`.
