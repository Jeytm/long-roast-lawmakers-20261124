// Entry for "The Long Roast: Lawmakers and the File They Cannot Convert"
// Writes one satirical sentence to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The senator who wrote the AI Safety Act spent three hearings interrogating machine consciousness, then had his intern print the bill, photograph it, and email the photo because nobody in the office could convert it to PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
