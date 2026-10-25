---
repo: "imbue-ai/default-workspace-template"
name: "default-workspace-template"
description: "A template for running a persistent instance of Claude Code"
readmeQualityOk: true
url: "https://github.com/imbue-ai/default-workspace-template"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 24]
stars: 14
forks: 17
openIssues: 11
closedIssues: 6
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2026-04-05T23:37:11Z"
lastCommitAt: "2026-10-25T02:47:11Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 84
undervaluedScore: 54
maintainers: ["joshalbrecht", "qi-imbue", "gnguralnick"]
openGraphImageUrl: "https://opengraph.githubassets.com/751dfb545b5e65227bf287757e09a305dea629ca42f7a4dba50e21f1e3925c27/imbue-ai/default-workspace-template"
---

# Your workspace

This folder is your agent's home: everything it knows, everything it builds,
and the machinery that keeps it running.

## Creations

Broadly, in Imbue Studio you make "creations". These can be "code" (apps, skills, and
the services behind them) or "data" (documents, images, notes).

Imbue Studio makes this easier by defining some conventions for the common things
you'll want to make:

1. an "app" - something you can open as a tab and interact with
2. a "skill" - teaches your agent how to do work you care about. A skill that
   is automatically run on a schedule is called an "automation": a routine
   (see `routines/` and the Routines app; the weekly Caretaker is the
   built-in example)
3. some "data" - documents, images, notes, or data created by your apps and
   skills
4. some "customizations" - changes to any of the above. Everything in Imbue Studio
   can be modified by you!

## What's here

- `apps/` - Everything you can open as a tab: the built-in apps (chat, the
  terminal, Files, the browser, System Monitor) and the apps your agent builds for you. (A shortcut
  to `system/apps/`.)
- `skills/` - Everything your agent knows how to do: the built-in skills…
