# PROGRAMOVANIE — Final content integration and QA report

**Date:** 2026-10-27  
**Design baseline:** `WEB-PROGRAMOVANIE-FINAL-2026(1).zip`  
**Educational-content baseline:** `Programovanie-main (1).zip`  
**Delivered root:** `PROGRAMOVANIE-COMPLETE-FINAL-2026/`

## Result

- Kept the premium homepage, `premium.css`, `motion.js`, original graphics, visual design and four-course order: **Git → Python → C/C++ → Win32 API**.
- C++ is now linked from C/C++ to **`cpp.html`**, showing exact original C++ overview points and local documentation/source examples.
- Recreated **`win32-api.html`** in the premium design with its five exact original outline points, original local README link and original Microsoft Learn link.
- Restored the five Git lesson points and original GitHub documentation reference in `git.html`.
- Restored the original C and C++ descriptions and all eight overview topic points in `c-cpp.html`, plus the original external C++ reference. Git remains separate.
- Restored original Git/C++ homepage descriptions, the original Win32 GitHub outline link, and a homepage link from the Python footer.
- Added `materialy/index.html`, **59 local HTML renderings of the original module Markdown READMEs**, **8 HTML source-code renderings** and project-source indexes. The original raw sources are still included. Short README placeholders are marked explicitly as outlines.
- Repaired the pre-existing broken `02_C/README.md` link: `../03_C++/Welcome` → `../03_C++/README.md`.
- Preserved the original `style.css` for completeness but retained modern CSS as the applied design. The source README's pre-existing merge markers remain resolved in the modern README.

## File and content integrity

| Check | Result |
|---|---|
| Original source files accounted for | **139 / 139** at original relative paths |
| Original HTML pages | **34 / 34** present, including Win32 |
| Final HTML pages (includes generated readers) | **107** |
| Final total files, including this report | **217** |
| Original PDFs, image assets, scripts and C/Python/C++ source code | SHA-equivalent / byte identical |
| Existing `theme.js` and `quiz.js` | Byte identical |
| `motion.js` | Byte identical to modern baseline |
| `premium.css` | Original modern stylesheet preserved, with additive recovery CSS appended |
| Git, C/C++ and Win32 original topic lists | Compared exactly against source text; PASS |
| Local HTML references | **1114**, 0 missing targets |
| Local Markdown references | **68**, 0 missing targets |
| Total local references | **1182**, 0 missing targets |

Original-file SHA-256 values, recovered file inventory and intentional exceptions are included in `INTEGRATION_MANIFEST.json`.

## Changed labels or navigation (intentional)

- Homepage Win32 changes from inactive **„Pripravujeme / Čoskoro“** to active **„Úvod a osnova / Otvoriť Win32 API“**. The original explanatory course paragraph remains unchanged.
- C++ changes from inactive **„Pripravujeme / Čoskoro“** in the modern C/C++ page back to the original **„Jazyk C++“** and its original overview, now linking locally to `cpp.html` instead of only GitHub.
- Restored original homepage Git description **„Verzovanie kódu: úvod do Gitu, commity, vetvy a správa zmien v repozitári.“**.
- Restored original homepage C/C++ description **„Základy jazyka C, interaktívny test a pripravované témy jazyka C++.“**.
- The C-category navigation no longer incorrectly labels Git as part of C/C++. Original Git educational material remains on its standalone page.
- Other original educational copy, examples and resources were not intentionally rewritten. Markdown is rendered separately as HTML without overwriting original raw source files.

## Browser / behavior QA

Actual Chromium inline rendering was run in the isolated test environment; screenshots were captured for dark-theme desktop (1440px) and mobile (360px).

- Homepage: all four correct cards and destinations, with no horizontal overflow at 360, 768, 1024 and 1440 px — **PASS**.
- Git five-point lesson outline — **PASS**.
- C/C++ has two cards, eight original topic bullets, local clickable C++ anchor — **PASS** (static destination and browser DOM checks).
- C++ local page, outline, source-code viewers and Markdown table — **PASS** (individually rendered).
- Win32 original outline and original local documentation path — **PASS**.
- Five module resource-index groups, example code viewers — **PASS**.
- Quiz: 13 questions, tested empty-submit and all-correct behavior, result **13 z 13 (100 %)** — **PASS**.
- Theme controls: switching between light, dark and system settings — **PASS** in a rendered page. **Cross-document persistence: NOT VERIFIED**, because the test browser blocks local navigation.
- `prefers-reduced-motion` disables home animation — **PASS**.
- Individually tested secondary pages at mobile width — **PASS** (no horizontal overflow in the selected pages).
- No uncaught JavaScript errors recorded in the completed targeted inline tests — **PASS**.
- `theme.js`, `motion.js`, `quiz.js` syntax validation (`node --check`) — **PASS**.
- Python source files (`ast.parse`), C (`gcc -fsyntax-only`), C++ (`g++ -std=c++17 -fsyntax-only`) — **PASS**.
- Compiling/running Windows-specific Win32 code: **NOT VERIFIED** on Linux.
- Direct multi-page navigation via `file://` and `localhost`: **NOT VERIFIED**. Chromium in this environment returns `ERR_BLOCKED_BY_ADMINISTRATOR` for those navigation schemes; inline rendering plus deterministic local path resolution were used instead.
- External GitHub, Microsoft Learn and YouTube URLs: retained, **live reachability NOT VERIFIED**. YouTube video playback requires network access.
- Original source contains **49 short README files under 200 bytes**, many representing outlines/placeholders. They are included, not misrepresented as finished lessons.

## Independent acceptance checklist

1. Extract the ZIP; open `PROGRAMOVANIE-COMPLETE-FINAL-2026/index.html` in Chrome/Edge.
2. Check 4 cards in order: Git, Python, C/C++, Win32 API.
3. Open `Git`: confirm five original outline bullet points and the video section.
4. Open `C/C++ → Jazyk C++`: confirm the local `cpp.html` page; open its C++ documentation and code example.
5. Open `Win32 API`: confirm five original bullet points, README link and example programs.
6. Open `Python`, a lesson, the PDF from C, and complete the 13-question C quiz.
7. Change `Nastavenia vzhľadu` across pages and refresh to confirm real persistence.
8. Inspect mobile layout and reduce-motion setting; verify YouTube videos with a live internet connection.

**Production deployment was not performed.** No Git push, DB, infrastructure or paid API operations were performed.
