import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
const data = JSON.parse(
  readFileSync(new URL("../src/data/portfolio.json", import.meta.url), "utf8"),
);
const out = new URL("../public/", import.meta.url);
mkdirSync(out, { recursive: true });
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const para = (value) => `<p>${escape(value)}</p>`;
const section = (title, content) =>
  `<section><h2>${escape(title)}</h2>${content}</section>`;
const list = (values) =>
  `<ul>${values.map((value) => `<li>${value}</li>`).join("")}</ul>`;
const p = data.personal;
const cv = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="color-scheme" content="light dark"><script src="./theme.js"></script><meta name="viewport" content="width=device-width,initial-scale=1"><title>Academic CV — ${escape(p.name)}</title><meta name="description" content="Academic CV, publications and corrected supervision records for Dr. Muhammad Farrukh Qureshi."><style>:root{--cv-bg:#f4f6f7;--cv-paper:#fff;--cv-ink:#182932;--cv-muted:#596c72;--cv-line:#b6c9c6;--cv-accent:#176958;--cv-button-ink:#fff}:root[data-theme="dark"]{--cv-bg:#0b1118;--cv-paper:#111b25;--cv-ink:#dce2e7;--cv-muted:#91a0ae;--cv-line:#26313c;--cv-accent:#75dec5;--cv-button-ink:#0c2220}body{font:14px/1.6 system-ui,sans-serif;color:var(--cv-ink);background:var(--cv-bg);margin:0}main{max-width:900px;margin:30px auto;padding:50px;background:var(--cv-paper)}h1{font-size:30px;line-height:1.25}h2{font-size:19px;border-bottom:1px solid var(--cv-line);padding-bottom:8px;margin-top:30px}h3{font-size:15px;margin-bottom:5px}a{color:var(--cv-accent)}li{margin-bottom:12px}p{margin:5px 0}.note{color:var(--cv-muted);font-size:12px}nav{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:30px}button{font:inherit;background:var(--cv-accent);color:var(--cv-button-ink);border:0;border-radius:4px;padding:9px 14px;cursor:pointer}.record{break-inside:avoid;margin:16px 0}.record span{color:var(--cv-muted)}@media(max-width:600px){main{margin:0;padding:24px}h1{font-size:26px}}@media print{:root,:root[data-theme]{--cv-ink:#182932;--cv-muted:#596c72;--cv-line:#b6c9c6}body{background:white}main{padding:0;margin:0;max-width:none}nav{display:none}h2{break-after:avoid}a{color:inherit;text-decoration:none}@page{size:A4;margin:17mm}}</style></head><body><main><nav><a href="./">← Research portfolio</a><button id="cv-theme-toggle" type="button">Switch theme</button><button id="cv-theme-system" type="button" aria-label="Use system theme">System</button><button onclick="window.print()">Print / save as PDF</button></nav><h1>${escape(p.name)}</h1>${para(p.title)}${para(p.department)}${para(`${p.college} · ${p.institution} · ${p.location}`)}<p><a href="mailto:${escape(p.email)}">${escape(p.email)}</a> · <a href="${escape(p.googleScholar)}">Google Scholar</a> · <a href="${escape(p.github)}">GitHub</a></p><p class="note">PEC ${escape(p.pec)} · WoS ${escape(p.wos)}</p>
${section("Research profile", para(p.bio) + para(`Scholar snapshot supplied on 8 October 2026: ${data.metrics.citations} citations; h-index ${data.metrics.hIndex}; i10-index ${data.metrics.i10Index}.`))}
${section("Appointments & education", data.academicJourney.map((j) => `<div class="record"><h3>${escape(j.title)}</h3><p>${escape(j.period)} · ${escape(j.institution)}</p>${para(j.description)}</div>`).join(""))}
${section("Technical skills", list(data.skills.map((s) => `<strong>${escape(s.title)}</strong> (${escape(s.level)}): ${escape(s.items.join(", "))}`)))}
${section("Teaching & leadership", para(data.teaching.philosophy) + para(`Documented courses: ${data.teaching.courses.join("; ")}.`) + para(data.teaching.leadership))}
${section("Awards & grants", list(data.awards.map((a) => `<strong>${a.year} · ${escape(a.title)}</strong>${a.amount ? ` · ${escape(a.amount)}` : ""}. ${escape(a.description)}`)))}
${section("Patent application", `<h3>${escape(data.patent.title)}</h3>${para(data.patent.status)}${para(data.patent.authors)}${para(data.patent.description)}`)}
${section("MS supervision / advisory — current confirmed list", list(data.projects.filter((p) => p.role === "Supervisor / Advisor").map((p) => `<strong>${escape(p.name)}</strong> — ${escape(p.title)}. ${escape(p.batch)}. ${escape(p.role)}; ${escape(p.status)}.`)))}
${section("PhD supervision", list(data.phdSupervisions.map((p) => `<strong>${escape(p.name)}</strong> — ${escape(p.topic)}. ${escape(p.degree)}, ${escape(p.institution)}; ${escape(p.role)}; ${escape(p.status)}.`)))}
${section("Guidance and Evaluation Committee (GEC) service", list(data.projects.filter((p) => p.role === "GEC Member").map((p) => `<strong>${escape(p.name)}</strong> — ${escape(p.title)}. ${escape(p.batch)}; GEC Member; ${escape(p.status)}.`)))}
${section("Selected undergraduate supervision", list(data.undergraduateProjects.map((p) => `${escape(p.period)} — ${escape(p.title)}`)))}
${section("International research collaborations", list(data.collaborations.map((c) => `${escape(c.institution)} — ${escape(c.country)}`)))}
${section(
  "Publications — 28 records",
  `<p class="note">Titles, author previews, years and citation counts from the supplied Scholar snapshot; DOI details from the 2026 CV and publisher updates. Ellipses indicate incomplete author lists. * preserves Scholar’s combined-citation marker. The EEG co-design paper was published by Scientific Reports on 23 September 2026 as an early, citable version with a permanent DOI.</p><ol>${[
    ...data.publications,
  ]
    .sort((a, b) => b.year - a.year || a.id - b.id)
    .map(
      (p) =>
        `<li class="record"><strong>${escape(p.title)}</strong>${para(p.authors.join(", "))}<p>${escape(p.scholarVenue)} · ${p.year} · ${escape(p.status)} · ${escape(p.contribution)}</p>${p.doi ? `<a href="https://doi.org/${escape(p.doi)}">doi:${escape(p.doi)}</a>` : "DOI not provided in CV"}${p.publishedDate ? para(`Published ${p.publishedDate} · ${p.publicationStage}`) : ""}${p.publisherUrl ? `<p><a href="${escape(p.publisherUrl)}">Publisher article</a></p>` : ""}${p.citations !== null ? ` · ${p.citations}${p.citationsCombined ? "*" : ""} citations` : ""}</li>`,
    )
    .join("")}</ol>`,
)}
</main><script>
const themeButton = document.getElementById("cv-theme-toggle");
const systemButton = document.getElementById("cv-theme-system");
const renderThemeControls = () => {
  const {theme, preference} = window.portfolioTheme.getSnapshot();
  const label = "Switch to " + (theme === "dark" ? "light" : "dark") + " mode";
  themeButton.textContent = theme === "dark" ? "☀ Light mode" : "☾ Dark mode";
  themeButton.setAttribute("aria-label", label);
  systemButton.setAttribute("aria-pressed", String(preference === "system"));
};
themeButton.addEventListener("click", () => window.portfolioTheme.setPreference(window.portfolioTheme.getSnapshot().theme === "dark" ? "light" : "dark"));
systemButton.addEventListener("click", () => window.portfolioTheme.setPreference("system"));
window.portfolioTheme.subscribe(renderThemeControls);
renderThemeControls();
</script></body></html>`;
writeFileSync(new URL("cv.html", out), cv);
for (const [file, anchor] of [
  ["research.html", "research"],
  ["publications.html", "publications"],
  ["projects.html", "projects"],
  ["contact.html", "contact"],
]) {
  writeFileSync(
    new URL(file, out),
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=./#${anchor}"><title>${anchor} — Farrukh Qureshi</title><link rel="canonical" href="https://drfarrukh.github.io/about/#${anchor}"></head><body><a href="./#${anchor}">Continue to ${anchor}</a></body></html>`,
  );
}
writeFileSync(new URL(".nojekyll", out), "");
console.log(
  "Generated public academic CV and redirects from the canonical portfolio data.",
);
