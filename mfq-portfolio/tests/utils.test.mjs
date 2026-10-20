import { test } from "node:test";
import assert from "node:assert/strict";
import {
  publicFile,
  getPublished,
  getAccepted,
  publicationDate,
} from "../src/utils.js";

test("publicFile prepends baseUrl correctly", () => {
  assert.equal(publicFile("cv.html", "/base/"), "/base/cv.html");
  assert.equal(publicFile("image.png", "/"), "/image.png");
  assert.equal(publicFile("script.js", ""), "script.js");
});

test("getPublished correctly filters only 'Published' status", () => {
  const publications = [
    { id: 1, status: "Published" },
    { id: 2, status: "Accepted" },
    { id: 3, status: "Published" },
    { id: 4, status: "Submitted" },
  ];
  const published = getPublished(publications);
  assert.equal(published.length, 2);
  assert.deepEqual(published, [
    { id: 1, status: "Published" },
    { id: 3, status: "Published" },
  ]);
});

test("getAccepted correctly filters only 'Accepted' status", () => {
  const publications = [
    { id: 1, status: "Published" },
    { id: 2, status: "Accepted" },
    { id: 3, status: "Published" },
    { id: 4, status: "Accepted" },
  ];
  const accepted = getAccepted(publications);
  assert.equal(accepted.length, 2);
  assert.deepEqual(accepted, [
    { id: 2, status: "Accepted" },
    { id: 4, status: "Accepted" },
  ]);
});

test("publicationDate formats YYYY-MM-DD correctly in en-GB locale", () => {
  assert.equal(publicationDate("2023-10-01"), "1 October 2023");
  assert.equal(publicationDate("2024-02-29"), "29 February 2024");
  assert.equal(publicationDate("2000-01-01"), "1 January 2000");
});
