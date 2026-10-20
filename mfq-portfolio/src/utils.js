export const publicFile = (file, baseUrl) => `${baseUrl}${file}`;

export const getPublished = (publications) =>
  publications.filter((p) => p.status === "Published");

export const getAccepted = (publications) =>
  publications.filter((p) => p.status === "Accepted");

export const publicationDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
