# Jiangyan Zhao — academic website

A lightweight, responsive academic website for GitHub Pages. Plain HTML and CSS; no build dependencies or third-party tracking.

## Publish

Create the public repository `Jiangyan-Zhao/jiangyan-zhao.github.io`, then put these files in its root on `main`. In **Settings → Pages**, select **Deploy from a branch**, **main**, and **/(root)**. The site address is https://jiangyan-zhao.github.io/.

The `.nojekyll` file keeps this a plain static site.

## Edit

- `index.html`: biography, research, publications, software, experience, teaching interests, contact.
- `assets/styles.css`: responsive layout and typography.
- `files/publications.bib`: bibliography. The accepted JSS paper uses `Zhao2026BKP`.
- `files/cv.html`: source for the concise public academic CV.
- `files/Jiangyan_Zhao_CV.pdf`: printable CV; update when its source changes.
- `robots.txt` and `sitemap.xml`: indexing metadata.

Serve locally with `python3 -m http.server 8000` from this folder.

## Content notes

Content checked on 4 October 2026. JSS acceptance is based on the author's update and the current BKP repository; no journal volume, page range, or final DOI is invented. Preprints are labeled separately. Research visits appear within the ECNU graduate program. Teaching topics are interests, not claims of past teaching appointments.

Publication links: https://arxiv.org/abs/2508.10447; https://doi.org/10.1080/00401706.2024.2315937; https://doi.org/10.1177/09622802261449367; https://arxiv.org/abs/2605.25043; https://arxiv.org/abs/2603.08276.
