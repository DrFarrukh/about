import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const data = JSON.parse(
  readFileSync(new URL("../src/data/portfolio.json", import.meta.url), "utf8"),
);

test("current supervision has exactly the eight user-confirmed MS researchers", () => {
  const actual = data.projects.filter((p) => p.role === "Supervisor / Advisor");
  assert.deepEqual(
    actual.map((p) => [p.name, p.registration]),
    [
      ["Muhammad Zulqarnain", "537460"],
      ["Khurram Sami", "536883"],
      ["Afham Ahmed", "538758"],
      ["Sheraz Siddiqui", "578200"],
      ["Muhammad Adil", "538512"],
      ["Muhammad Farhan", "539906"],
      ["Sadia Amin", "538646"],
      ["M Umer", "578199"],
    ],
  );
  assert.ok(
    actual.every(
      (p) =>
        p.degree === "MS" &&
        p.batch === "PNEC/MSAI/2025F" &&
        p.status === "Active",
    ),
  );
  assert.equal(
    actual[0].title,
    "Adaptive Context Management for Local Coding Agents",
  );
  assert.equal(
    actual[7].title,
    "UAV Telemetry Anomaly Diagnosis with Sensor-Group Intervention",
  );
});

test("committee projects are distinct from supervision and duplicate entries are removed", () => {
  const actual = data.projects.filter((p) => p.role === "GEC Member");
  assert.deepEqual(
    actual.map((p) => p.name),
    [
      "Syed Mubashir Shah",
      "Khulood Erfan",
      "Fiza Karim Palijo",
      "Khizra Arshad",
      "Rehan Ali Syed",
      "Usman Aslam",
      "Muhammad Hanzalah",
      "Amna Nadeem",
      "Abdul Hadi Bhatti Rajput",
      "Mehwish Nadeem",
      "Muhammad Adeel",
    ],
  );
  assert.equal(new Set(data.projects.map((p) => p.registration)).size, 19);
  assert.equal(actual.find((p) => p.name === "Muhammad Adeel").degree, "PhD");
  assert.ok(
    !data.phdSupervisions.some((p) => /Adeel|Ahsan.*Baig/i.test(p.name)),
  );
});

test("PhD supervision excludes the person who has not started the programme", () => {
  assert.deepEqual(
    data.phdSupervisions.map((p) => p.name),
    ["Rabail Khowaja", "Akbare Yaqub", "Shaima Sani", "Abdul Malik Muhammad"],
  );
  assert.doesNotMatch(JSON.stringify(data), /Ahsan Baig/);
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
  assert.equal(emg.authors[0], "MF Qureshi");
  assert.equal(
    data.publications.find((p) => p.doi === "10.1007/s11042-024-20395-5").year,
    2025,
  );
  const accepted = data.publications.filter((p) => p.status === "Accepted");
  assert.equal(accepted.length, 1);
  assert.equal(accepted[0].doi, null);
  assert.equal(accepted[0].citations, null);
  assert.equal(
    data.publications.filter((p) => p.status === "Published").length,
    27,
  );
  assert.equal(
    data.publications.filter((p) => p.type === "conference").length,
    8,
  );
  assert.equal(data.publications.filter((p) => p.doi).length, 27);
  assert.doesNotMatch(
    JSON.stringify(data),
    /YOUR_ID|YOUR_ORCID|XXXX|example\.com|Patent Granted/,
  );
});

test("appointments, education and institutional contact match the supplied CVs", () => {
  assert.equal(data.personal.email, "mfarrukh@pnec.nust.edu.pk");
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
