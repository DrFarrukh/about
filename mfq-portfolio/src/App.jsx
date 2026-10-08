import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Brain,
  Cpu,
  FileDown,
  GitBranch as Github,
  Menu,
  Search,
  Signal,
  X,
} from "lucide-react";
import { portfolioData as data } from "./data/portfolioData.js";

const external = { target: "_blank", rel: "noopener noreferrer" };
const nav = [
  ["Research", "research"],
  ["Publications", "publications"],
  ["Projects", "projects"],
  ["Group", "group"],
  ["CV", "cv"],
  ["Contact", "contact"],
];
const publicFile = (file) => `${import.meta.env.BASE_URL}${file}`;
const published = data.publications.filter((p) => p.status === "Published");

function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <header className="section-heading">
      <div>
        <span className="eyebrow">
          <span>{number}</span> {eyebrow}
        </span>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </header>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Farrukh Qureshi home">
          FQ<span>.</span>
          <span className="brand-label">RESEARCH & INTELLIGENCE</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-scholar"
            href={data.personal.googleScholar}
            {...external}
          >
            Scholar <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const p = data.personal;
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="live-dot" /> SENSING. LEARNING. INTELLIGENCE.
        </p>
        <p className="hero-name">Dr. Muhammad Farrukh Qureshi</p>
        <h1>
          Intelligence,
          <br />
          from signal
          <br />
          to <em>system.</em>
        </h1>
        <p className="hero-description">{p.researchStatement}</p>
        <p className="hero-affiliation">
          {p.title}
          <br />
          <span>{p.college} · NUST, Karachi</span>
        </p>
        <div className="actions">
          <a className="button primary" href="#publications">
            Explore my research <ArrowRight size={17} />
          </a>
          <a className="button secondary" href={publicFile("cv.html")}>
            Academic CV <FileDown size={17} />
          </a>
        </div>
      </div>
      <div
        className="system-visual"
        aria-label="Research connects sensing, representation, learning, optimization and deployment"
      >
        <div className="visual-top">
          <span>HARDWARE-AWARE INTELLIGENCE</span>
          <span className="visual-dot" />
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="core">
          <Cpu size={44} strokeWidth={1} />
          <span>EDGE AI</span>
        </div>
        <div className="signal-node node-one">
          <Signal size={22} />
          <span>
            PHYSICAL
            <br />
            SENSING
          </span>
        </div>
        <div className="signal-node node-two">
          <Brain size={22} />
          <span>
            LEARNED
            <br />
            REPRESENTATIONS
          </span>
        </div>
        <div className="signal-node node-three">
          <Cpu size={22} />
          <span>
            EMBEDDED
            <br />
            DEPLOYMENT
          </span>
        </div>
        <div className="visual-bottom">
          <span>ACCURACY · LATENCY · MEMORY · ENERGY</span>
          <span>01 — 05</span>
        </div>
      </div>
      <div className="hero-stats">
        {[
          [published.length, "Published papers"],
          [
            data.publications.filter((p) => p.status === "Accepted").length,
            "Accepted paper",
          ],
          [data.metrics.citations, "Citations · Scholar snapshot"],
          [data.metrics.hIndex, "h-index · Scholar snapshot"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section container">
      <SectionHeading
        number="01"
        eyebrow="RESEARCH DIRECTION"
        title={
          <>
            Real-world signals.
            <br />
            Reliable intelligence.
          </>
        }
      >
        <p>{data.personal.bio}</p>
      </SectionHeading>
      <div className="research-grid">
        {data.researchAreas.map((area, i) => (
          <article className="research-card" key={area.title}>
            <span className="card-index">0{i + 1}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <div className="tags">
              {area.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="pipeline">
        <span className="eyebrow">THE RESEARCH WORKFLOW</span>
        <ol>
          {data.researchPipeline.map((stage, i) => (
            <li key={stage}>
              <span>0{i + 1}</span>
              {stage}
              {i < 4 && <ArrowRight size={15} />}
            </li>
          ))}
        </ol>
        <p>
          Joint optimization of accuracy, latency, memory and energy. FPGA and
          RISC-V acceleration are developing research directions.
        </p>
      </div>
    </section>
  );
}

function Publications() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("year");
  const years = [...new Set(data.publications.map((p) => p.year))].sort(
    (a, b) => b - a,
  );
  const records = data.publications
    .filter(
      (p) =>
        (year === "all" || String(p.year) === year) &&
        (type === "all" || p.type === type) &&
        (status === "all" || p.status === status) &&
        `${p.title} ${p.venue} ${p.area} ${p.doi ?? ""}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
    )
    .sort((a, b) =>
      sort === "citations"
        ? (b.citations ?? -1) - (a.citations ?? -1) || b.year - a.year
        : b.year - a.year || a.id - b.id,
    );
  return (
    <section id="publications" className="section section-shaded">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="PUBLICATIONS"
          title="Work in the literature."
        >
          <p>
            {published.filter((p) => p.type === "journal").length} published
            journal articles,{" "}
            {published.filter((p) => p.type === "conference").length} conference
            papers and 1 accepted journal paper in the supplied 2026 CV.
          </p>
          <a
            className="text-link"
            href={data.personal.googleScholar}
            {...external}
          >
            View Google Scholar <ArrowUpRight size={16} />
          </a>
        </SectionHeading>
        <div className="publication-toolbar">
          <label className="search-field">
            <Search size={18} />
            <span className="sr-only">Search publications</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, venue, topic or DOI…"
              type="search"
            />
          </label>
          <label>
            <span className="sr-only">Publication year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="all">All years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Publication type</span>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="all">All types</option>
              <option value="journal">Journal</option>
              <option value="conference">Conference</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Publication status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All statuses</option>
              <option value="Published">Published</option>
              <option value="Accepted">Accepted</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Sort publications</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="year">Newest first</option>
              <option value="citations">Most cited</option>
            </select>
          </label>
        </div>
        <p className="results-count" aria-live="polite">
          {records.length} of {data.publications.length} records
        </p>
        <div className="publication-list">
          {records.map((p) => (
            <article className="publication" key={p.id}>
              <span className="publication-year">{p.year}</span>
              <div>
                <div className="publication-meta">
                  <span>{p.type === "journal" ? "JOURNAL" : "CONFERENCE"}</span>
                  <span>{p.area}</span>
                  {p.status === "Accepted" && (
                    <span className="badge accepted">Accepted</span>
                  )}
                </div>
                <h3>{p.title}</h3>
                <p className="publication-authors">{p.authors.join(", ")}</p>
                <p>
                  {p.scholarVenue}{" "}
                  <span className="muted">· {p.contribution}</span>
                </p>
                <p className="citation-count">
                  {p.citations !== null
                    ? `${p.citations}${p.citationsCombined ? "*" : ""} citations`
                    : "Citation count not shown in supplied snapshot"}
                </p>
                {p.doi && (
                  <a
                    className="doi"
                    href={`https://doi.org/${p.doi}`}
                    {...external}
                  >
                    {p.doi} <ArrowUpRight size={13} />
                  </a>
                )}
                {!p.doi && (
                  <span className="muted small">
                    Accepted for publication · DOI not provided in CV
                  </span>
                )}
              </div>
              {p.doi && (
                <a
                  className="paper-link"
                  href={`https://doi.org/${p.doi}`}
                  {...external}
                  aria-label={`Open paper: ${p.title}`}
                >
                  <ArrowUpRight size={22} />
                </a>
              )}
            </article>
          ))}
        </div>
        {records.length === 0 && (
          <p className="empty-state">
            No matching publications. Try another search or clear the filters.
          </p>
        )}
        <p className="source-note">
          Titles, author previews, publication years and citations follow your
          Google Scholar snapshot (8 October 2026): {data.metrics.citations}{" "}
          citations, h-index {data.metrics.hIndex}, i10-index{" "}
          {data.metrics.i10Index}. DOIs and acceptance status follow the 2026
          CV. An asterisk preserves Scholar’s combined-citation marker; an
          ellipsis indicates a truncated author list. See Scholar for live
          updates.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  const [role, setRole] = useState("Supervisor / Advisor");
  const [query, setQuery] = useState("");
  const records = data.projects.filter(
    (p) =>
      p.role === role &&
      `${p.name} ${p.title} ${p.batch}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section id="projects" className="section container">
      <SectionHeading
        number="03"
        eyebrow="ACTIVE POSTGRADUATE PROJECTS"
        title="Questions worth pursuing."
      >
        <p>
          Eight MS projects as supervisor or advisor. Eleven additional projects
          as a member of the Guidance and Evaluation Committee (GEC).
        </p>
      </SectionHeading>
      <div className="project-controls">
        <div
          className="segmented"
          role="group"
          aria-label="Project responsibility"
        >
          {["Supervisor / Advisor", "GEC Member"].map((value) => (
            <button
              key={value}
              aria-pressed={role === value}
              className={role === value ? "selected" : ""}
              onClick={() => setRole(value)}
            >
              {value}{" "}
              <span>
                {data.projects.filter((p) => p.role === value).length}
              </span>
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={17} />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            placeholder="Search student or project…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <p className="results-count" aria-live="polite">
        {records.length}{" "}
        {role === "GEC Member"
          ? "committee projects"
          : "supervised MS projects"}
      </p>
      <div className="project-grid">
        {records.map((p, i) => (
          <article className="project-card" key={p.registration}>
            <div className="project-top">
              <span className="card-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="badge">
                <span className="live-dot" /> {p.status}
              </span>
            </div>
            <h3>{p.title}</h3>
            <div className="project-person">
              <strong>{p.name}</strong>
              <span>
                {p.batch} · {p.degree}
              </span>
              <span>Reg. {p.registration}</span>
            </div>
            <div className="project-role">{p.role}</div>
          </article>
        ))}
      </div>
      {records.length === 0 && (
        <p className="empty-state">No matching projects.</p>
      )}
      <p className="source-note">
        GEC participation is committee service. These projects are listed
        separately from research supervision.
      </p>
    </section>
  );
}

function Group() {
  return (
    <section id="group" className="section section-shaded">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="RESEARCH & MENTORSHIP"
          title="People behind the work."
        >
          <p>
            AI/ML Research Cluster · EPE, PNEC, NUST. The exact current MS
            supervision list appears in the projects section. PhD supervision
            below includes ongoing co-supervision at Riphah.
          </p>
        </SectionHeading>
        <div className="group-grid">
          {data.phdSupervisions.map((p) => (
            <article className="group-card" key={p.name}>
              <div className="monogram" aria-hidden="true">
                {p.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="badge">{p.role}</span>
              <h3>{p.name}</h3>
              <p className="small">
                {p.degree} · {p.institution}
              </p>
              <p>{p.topic}</p>
              <span className="muted small">{p.status}</span>
            </article>
          ))}
        </div>
        <details className="undergraduate">
          <summary>
            Selected undergraduate project supervision{" "}
            <span>View projects +</span>
          </summary>
          <ul>
            {data.undergraduateProjects.map((p) => (
              <li key={p.title}>
                <span>{p.period}</span>
                {p.title}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className="section container">
      <SectionHeading
        number="05"
        eyebrow="ACADEMIC JOURNEY"
        title="Research. Teaching. Leadership."
      >
        <a className="button secondary" href={publicFile("cv.html")}>
          View & print academic CV <FileDown size={17} />
        </a>
      </SectionHeading>
      <div className="journey-grid">
        {["position", "education"].map((type) => (
          <div key={type}>
            <h3 className="column-title">
              {type === "position" ? "Appointments" : "Education"}
            </h3>
            <div className="timeline">
              {data.academicJourney
                .filter((j) => j.type === type)
                .map((j) => (
                  <article key={j.title}>
                    <span className="eyebrow">{j.period}</span>
                    <h3>{j.title}</h3>
                    <p className="institution">{j.institution}</p>
                    <p>{j.description}</p>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div id="teaching" className="teaching-panel">
        <BookOpen size={25} />
        <div>
          <h3>Teaching & academic service</h3>
          <p>{data.teaching.philosophy}</p>
          <p>
            <strong>Documented courses:</strong>{" "}
            {data.teaching.courses.join(" · ")}
          </p>
          <p>
            <strong>Current programmes:</strong>{" "}
            {data.teaching.programmes.join(" · ")}
          </p>
          <p>{data.teaching.leadership}</p>
          <p>
            PEC {data.personal.pec} · Web of Science researcher ID{" "}
            {data.personal.wos} · Peer reviewer for IEEE, Elsevier and Springer
            journals.
          </p>
        </div>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="section section-shaded">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="RECOGNITION & SUPPORT"
          title="Ideas with momentum."
        >
          <p>
            Competitive research support and recognition, from national applied
            research programmes to European proposal evaluation.
          </p>
        </SectionHeading>
        <div className="recognition-grid">
          {data.awards.map((a) => (
            <article
              className={`recognition-card ${a.type === "Award" ? "award-feature" : ""}`}
              key={a.title}
            >
              <span className="eyebrow">
                {a.year} · {a.type}
              </span>
              <h3>{a.title}</h3>
              {a.amount && <strong className="grant-amount">{a.amount}</strong>}
              <p>{a.description}</p>
            </article>
          ))}
        </div>
        <article className="patent-panel">
          <span className="eyebrow">
            PATENT APPLICATION · {data.patent.status}
          </span>
          <h3>{data.patent.title}</h3>
          <p>{data.patent.description}</p>
          <p className="muted small">Inventors: {data.patent.authors}</p>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        number="07"
        eyebrow="TOOLS & CAPABILITIES"
        title="Across the stack."
      >
        <p>
          Established practice in sensing, learning and deployment, with an
          evolving focus on compilers and custom acceleration.
        </p>
      </SectionHeading>
      <div className="skills-grid">
        {data.skills.map((s) => (
          <article key={s.title}>
            <span
              className={`eyebrow ${s.level !== "Practice" ? "emerging" : ""}`}
            >
              {s.level}
            </span>
            <h3>{s.title}</h3>
            <div className="tags">
              {s.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="collaborations">
        <h3>International research collaborations</h3>
        <div>
          {data.collaborations.map((c) => (
            <p key={c.institution}>
              <strong>{c.institution}</strong>
              <span>{c.country}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="eyebrow">LET’S CONNECT</span>
        <h2>
          The next useful idea
          <br />
          starts with a <em>conversation.</em>
        </h2>
        <p>
          Research collaborations, postgraduate research and applied AI
          partnerships.
        </p>
        <a className="contact-email" href={`mailto:${data.personal.email}`}>
          {data.personal.email} <ArrowUpRight size={24} />
        </a>
        <div className="contact-links">
          <a href={data.personal.googleScholar} {...external}>
            Google Scholar <ArrowUpRight size={16} />
          </a>
          <a href={data.personal.github} {...external}>
            <Github size={16} /> GitHub
          </a>
          <a href={publicFile("cv.html")}>
            Academic CV <FileDown size={16} />
          </a>
        </div>
        <p className="contact-address">
          {data.personal.department}
          <br />
          {data.personal.college} · {data.personal.institution}
          <br />
          {data.personal.location}
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Research />
        <Publications />
        <Projects />
        <Group />
        <CV />
        <Recognition />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer container">
        <span>
          © {new Date().getFullYear()} {data.personal.name}
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
