## Deploy Jekyll to S3 using GitHub Actions

* See the [wiki](https://github.com/afomi/jekyll-with-tailwind-to-s3-via-github-actions/wiki) for instructions
* See https://jekyll.afomi.com/ for the results

## Development

Tailwind 4.x uses the tailwindcss/cli to build assets.
`npm run build:css` generates `assets/css/main.css`,
based on the Tailwind classes that are used in the project.

### Option 1: Simple (build CSS once, then serve)

```bash
npm run build:css
bundle exec jekyll serve --livereload
```

### Option 2: Watch for CSS changes (two terminals)

**Terminal 1** - Watch and rebuild CSS on changes:
```bash
npx @tailwindcss/cli -i ./assets/css/tailwind.css -o ./assets/css/main.css --watch
```

**Terminal 2** - Serve Jekyll with live reload:
```bash
bundle exec jekyll serve --livereload
```

This setup watches for changes to your CSS and HTML files, rebuilds the CSS, and auto-refreshes the browser.