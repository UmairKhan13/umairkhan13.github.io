# Muhammad Umair Khan — Personal Portfolio

Personal portfolio site built with React. Live at [muhammadumairkhan.com](https://www.muhammadumairkhan.com).

Content is driven entirely from `src/resume.json` — no backend, no CMS.

---

## Local development

```bash
npm install
npm start
```

Opens at `http://localhost:3000` with hot reload. Edit files and the browser updates instantly.

---

## Making changes

### Content (text, dates, job entries, skills, etc.)

Edit `src/resume.json`. All sections — headline, experience, education, skills, projects, certificates — pull from this file.

```bash
# After editing resume.json, preview locally:
npm start
```

### Styles and layout

Edit `src/styles.css`. This is the single stylesheet — all component styles, spacing, typography, and responsive breakpoints live here.

### React components

Components are in `src/components/`. The main sections map directly to files:

```
src/components/elements/
  Hero.js        ← homepage / header section
  Experience.js  ← work history timeline
  Projects.js    ← project cards
  Skills.js      ← skills grid
  Education.js   ← education cards
  Contact.js     ← contact section
```

---

## Deploying to GitHub Pages

The site deploys to the `gh-pages` branch. The `main` branch holds source code only.

**Single command to build and deploy:**

```bash
npm run deploy
```

This automatically:
1. Runs `npm run build` to compile the React app into `build/`
2. Pushes the contents of `build/` to the `gh-pages` branch
3. GitHub Pages serves that branch at your domain

> Changes are live within 1–2 minutes of running deploy.

### Typical workflow

```bash
# 1. Make your edits (resume.json, styles.css, components, etc.)

# 2. Preview locally
npm start

# 3. Commit your source changes to main
git add src/resume.json          # or whichever files changed
git commit -m "your message"
git push origin main

# 4. Deploy to GitHub Pages
npm run deploy
```

Committing to `main` and deploying are separate steps — `npm run deploy` does **not** push anything to `main`.

---

## Project structure

```
src/
  resume.json        ← all site content lives here
  styles.css         ← all styles in one file
  components/        ← React components by section
public/
  index.html         ← HTML shell
  images/            ← static images and favicon
```

---

## Stack

- React 18 (Create React App)
- Vanilla CSS with custom properties
- Font Awesome icons
- `gh-pages` npm package for deployment
- Node 16.15.1 / npm 8.11.0

---

## License

MIT
