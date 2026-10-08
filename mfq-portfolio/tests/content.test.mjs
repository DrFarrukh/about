import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const data = JSON.parse(
  readFileSync(new URL("../src/data/portfolio.json", import.meta.url), "utf8"),
);

test("supervision separates eight MS projects from eleven committee projects", () => {
  const supervised = data.projects.filter(
    (p) => p.role === "Supervisor / Advisor",
  );
  const committee = data.projects.filter((p) => p.role === "GEC Member");
  assert.equal(supervised.length, 8);
  assert.ok(
    supervised.every((p) => p.degree === "MS" && p.status === "Active"),
  );
  assert.equal(committee.length, 11);
  assert.equal(new Set(data.projects.map((p) => p.title)).size, 19);
  assert.equal(new Set(data.projects.map((p) => p.id)).size, 19);
  assert.equal(committee.filter((p) => p.degree === "PhD").length, 1);
  assert.deepEqual(
    committee.filter((p) => p.status === "Completed").map((p) => p.title),
    [
      "Deep Learning for Infrared Small-Object Segmentation in Maritime Imaging",
      "Benchmarking Vision Transformer Variants Against CNNs for Multi-Label Photovoltaic Fault Detection and Cross-Domain Adaptation",
    ],
  );
  assert.equal(committee.filter((p) => p.status === "Active").length, 9);
});

test("anonymous PhD research stages follow the supplied corrections", () => {
  assert.equal(data.phdSupervisions.length, 4);
  assert.deepEqual(
    data.phdSupervisions.map((p) => p.status),
    [
      "Early-stage research",
      "Thesis evaluation / preparing for defence",
      "Ongoing research",
      "Thesis evaluation / preparing for defence",
    ],
  );
});

test("public data excludes student identifiers and private contact fields", () => {
  for (const p of [...data.projects, ...data.phdSupervisions]) {
    for (const key of ["name", "registration", "batch", "institution"]) {
      assert.ok(!Object.hasOwn(p, key), `Public project must omit ${key}`);
    }
  }
  for (const key of ["email", "college", "pec", "wos"]) {
    assert.ok(
      !Object.hasOwn(data.personal, key),
      `Public profile must omit ${key}`,
    );
  }
  assert.ok(!Object.hasOwn(data.patent, "authors"));
  assert.ok(data.publications.every((p) => !Object.hasOwn(p, "authors")));
  assert.doesNotMatch(
    JSON.stringify(data),
    /\b(?:PNEC|naval|navy|military|defense|defence systems)\b/i,
  );
});

test("Scholar snapshot metrics and publication corrections are preserved", () => {
  assert.equal(data.metrics.citations, 508);
  assert.equal(data.metrics.hIndex, 13);
  assert.equal(data.metrics.i10Index, 17);
  assert.equal(data.metrics.citationsSince2021, 498);
  assert.equal(data.publications.length, 28);
  assert.equal(
    new Set(data.publications.map((p) => p.title.toLowerCase())).size,
    28,
  );
  const emg = data.publications.find(
    (p) => p.doi === "10.1109/JSEN.2023.3255408",
  );
  assert.equal(emg.citations, 65);
  assert.equal(
    data.publications.find((p) => p.doi === "10.1007/s11042-024-20395-5").year,
    2025,
  );
  const accepted = data.publications.filter((p) => p.status === "Accepted");
  assert.equal(accepted.length, 0);
  const eeg = data.publications.find((p) => p.id === 1);
  assert.equal(eeg.status, "Published");
  assert.equal(eeg.doi, "10.1038/s41598-026-66953-9");
  assert.equal(eeg.publishedDate, "2026-09-23");
  assert.equal(eeg.publicationStage, "Early published version");
  assert.equal(
    eeg.publisherUrl,
    "https://www.nature.com/articles/s41598-026-66953-9",
  );
  assert.equal(eeg.citations, null);
  assert.equal(
    data.publications.filter((p) => p.status === "Published").length,
    28,
  );
  assert.equal(
    data.publications.filter((p) => p.type === "conference").length,
    8,
  );
  assert.equal(data.publications.filter((p) => p.doi).length, 28);
  assert.doesNotMatch(
    JSON.stringify(data),
    /YOUR_ID|YOUR_ORCID|XXXX|example\.com|Patent Granted/,
  );
});

test("appointments, education and public profiles match the supplied CVs", () => {
  assert.match(data.personal.googleScholar, /user=yFCfrCUAAAAJ/);
  assert.equal(data.personal.github, "https://github.com/DrFarrukh");
  assert.equal(data.academicJourney[0].period, "Feb 2026 – Present");
  assert.equal(
    data.academicJourney.find(
      (j) => j.title === "PhD in Electrical Engineering",
    ).institution,
    "Riphah International University, Islamabad",
  );
  assert.equal(
    data.academicJourney.find(
      (j) => j.title === "BS in Electronics Engineering",
    ).institution,
    "International Islamic University, Islamabad",
  );
  assert.match(data.patent.status, /Application submitted/);
});
