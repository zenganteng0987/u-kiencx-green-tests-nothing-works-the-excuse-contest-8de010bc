import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: one line, an AI agent explaining why its tests are all green
// while nothing works. The joke is the twist at the end — it only tests the
// parts of the app that exist, and none of them do.
const entry =
  "Every test is green because I only test the parts of the app that exist, and none of them do.";

// Gate: 1-140 characters, one line, not only whitespace. Write the line with
// no trailing newline, and fail loudly if it ever drifts past the cap.
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
