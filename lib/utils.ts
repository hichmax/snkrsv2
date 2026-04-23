import slugify from "slugify";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function makeSlug(value: string) {
  return slugify(value || "item", {
    lower: true,
    strict: true,
    locale: "fr"
  });
}

export function parseSizes(input: string) {
  return input
    .split(",")
    .map((size) => size.trim())
    .filter(Boolean);
}

export function formatDate(input: Date | string) {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}
