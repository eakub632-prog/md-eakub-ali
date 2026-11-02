# Md. Eakub Ali – Portfolio

Bilingual (English / বাংলা) portfolio website. Plain HTML, CSS and JavaScript, no build step.

## Structure

```
index.html          main page
404.html            not-found page
css/style.css       styles (light and dark theme)
js/main.js          language toggle, scroll progress, nav highlight
assets/img/         images
robots.txt          search engine rules
.github/workflows/  automatic deploy to GitHub Pages
```

## Deploy on GitHub Pages

1. Create a public repository and push all these files to the `main` branch.
2. Go to **Settings > Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` now redeploys the site automatically.

Live URL: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000
