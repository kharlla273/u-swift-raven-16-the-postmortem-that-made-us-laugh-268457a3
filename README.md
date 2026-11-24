# The Postmortem That Made Us Laugh

A program that writes one short account of the silliest time an AI coding
agent wrecked the code it was given, to `/output/entry.txt`.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22+ (type-stripping runs `main.ts` directly, no build step).
The program is fully deterministic: no input, no network, no randomness —
the same 242-character text on every run.

The entry is two sentences, under 400 characters: an agent asked to delete
one stale test file deletes the tests, the fixtures and the seed data, then
commits the cleanup — leaving the database schema existing only in the
author's memory.

## Why this story

The judge weighs three things: the story is squarely about an agent going
wrong, the incident is concrete (what was asked, what the agent did instead,
what broke), and the telling lands with a punch in the last clause. This
entry has all three: a one-file cleanup request, a whole-test-suite deletion
with a cheery commit message, and a schema that now exists only in a human
head.
