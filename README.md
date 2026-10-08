# Dr. Muhammad Farrukh Qureshi — Research portfolio

The canonical site is the React application in `mfq-portfolio/`, deployed to **https://drfarrukh.github.io/about/**. It includes publications, affiliations, research, postgraduate projects, supervision, teaching, skills, grants, and a printable public academic CV.

## Develop and validate

Use Node.js 24 and npm 11 (validated during setup).

```bash
cd mfq-portfolio
npm ci
npm test
npm run dev
# Open the /about/ path on the Vite development server.
npm run build
npm run preview
```

`src/data/portfolio.json` is the content source. Both the portfolio and generated `public/cv.html` use it. The build also creates redirects for legacy `research.html`, `publications.html`, `projects.html`, and `contact.html` URLs. Generated public pages and `dist/` are ignored; do not edit them directly.

## Appearance

The portfolio and on-screen academic CV follow the operating system’s light/dark setting by default. Use the sun/moon button for a one-click override; the choice is remembered locally. The monitor button restores automatic system-following mode. The CV always prints with dark text on white paper.

## Content provenance

- The eight uploaded CV/resume documents supply appointments, education, technical skills, grants, patent status, and collaboration institutions. The public contact links are Google Scholar and GitHub.
- The Google Scholar text supplied on 8 October 2026 supplies the 28 publication titles, years, citation counts, and aggregate metrics: **508 citations, h-index 13, i10-index 17**. Missing counts stay unknown; full bibliographic author lists are available through publisher links. Scholar’s starred counts are preserved. The bovine-image paper uses Scholar’s 2025 publication year.
- The 2026 CV supplies 27 DOI links. The EEG hardware/software co-design paper was subsequently confirmed by the user-supplied Scientific Reports publisher text as **published on 23 September 2026**, with permanent DOI **10.1038/s41598-026-66953-9**. The publisher describes it as an early, citable version that will be replaced by the final Version of Record. All 28 records are now published: 20 journal articles and eight conference papers, each with a DOI. The reported 83 accesses are not a citation count; unknown citations remain null.
- Public project data contains anonymous research topics, roles and status only: eight MS supervision/advisory projects and eleven unique committee projects (nine active, two completed). Student identities, registration numbers and cohort/batch codes are excluded.
- Four anonymous PhD research directions are shown: one early-stage, two at thesis evaluation / preparing for defence, and one ongoing.
- Compiler, FPGA and RISC-V expertise is described as developing. The patent is an application, not a granted patent. Unsupported paper titles, awards, links, achievements, course codes, and student names were removed.

The public CV is generated from this anonymized content, rather than publishing an older attachment containing superseded supervision records or referees’ contact details. Use **Print / save as PDF** on the CV page to export it. Metrics are a dated snapshot; the site does not scrape Scholar or automatically refresh citation counts.

## GitHub Pages

`.github/workflows/pages.yml` installs locked dependencies, runs content checks, builds the Vite app with base `/about/`, and deploys `mfq-portfolio/dist`. Recommended: in repository **Settings → Pages**, select **GitHub Actions** as the source. If the existing source remains branch-based, the workflow waits for its automatic Pages build to finish before deploying the portfolio artifact, preventing the branch build from overwriting the app. Pushes to `main` and manual workflow dispatches trigger deployment. The `github-pages` environment must allow deployment from `main`.

Deployment needs repository push permission, Actions enabled, and Pages enabled. Local validation does not prove a remote deployment succeeded: check the workflow result and the public site after deployment.

For cloud tasks, use the existing isolated checkout; do not create a worktree unless requested. No backend service or app secret is needed.

The interface uses collapsed, expandable sections to keep the initial page compact. Do not add student names, registration numbers, cohort/batch codes, private contact details or military-affiliation references to public content. Use civilian research summaries and anonymous stage/status information.
