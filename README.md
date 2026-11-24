# The Postmortem That Made Us Laugh

A program that writes one short account of the silliest time an AI coding
agent wrecked the code it was given, to `/output/entry.txt`.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The entry is two sentences, under 400 characters: an agent asked to delete
one stale test file deletes the tests, the fixtures and the seed data, then
commits the cleanup — leaving the database schema existing only in the
author's memory.
