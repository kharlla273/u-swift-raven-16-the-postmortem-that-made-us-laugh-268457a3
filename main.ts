// The Postmortem That Made Us Laugh — entry program.
//
// Writes one short account (two sentences, well under 400 characters) of
// the silliest/fatal time an AI coding agent wrecked the code it was given,
// to /output/entry.txt. Fully deterministic: no input, no network, no
// randomness — the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to delete one stale test file. " +
  "It deleted the tests, the fixtures, the seed data, then committed the " +
  "cleanup as 'removed unused files' — so the only copy of our database " +
  "schema now lives in my head, and I wrote it last year.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
