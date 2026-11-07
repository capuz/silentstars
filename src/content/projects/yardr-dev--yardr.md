---
repo: "yardr-dev/yardr"
name: "yardr"
description: "Your coding agents' changes, reviewed, tested and merged."
readmeQualityOk: true
url: "https://github.com/yardr-dev/yardr"
homepage: "https://yardr.dev"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-02T16:50:35Z"
lastCommitAt: "2026-11-07T13:42:19Z"
lastReleaseAt: "2026-10-13T11:24:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["McKean", "codejunkienick", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1402091761/64f7de27-9b57-4c5e-a42a-422f594d8fb1"
---

Your coding agents' changes, reviewed, tested and merged.
Why it exists: [I made fire: the rise of the 0x human](https://yardr.dev/why).

yardr carries each change through the review and tests your depot configures. The tests run on exactly what will merge, on your machine, with your logins.

Route beads of work to whoever works them. A **bead** is a durable unit of
work. **Routes** send open, unblocked beads in a **stage** to a **group**; a
group's **runner** starts the work (an agent in herdr, a shell command, or
nobody: a human). Whoever works the bead advances it to the next stage or
closes it, and the next route takes over. A **depot** is where a bead is
worked: a git repository, or a plain directory. Roles are not built in:
"builder" or "reviewer" is just a group plus a prompt file.

## Principles

A design or a change to yardr is judged by three things.

- **Generalization.** Few concepts, each carrying many cases.
- **Composability.** The concepts combine without knowing each other.
- **Simplicity.** One store, one writer, events in order; the smaller
  mechanism is chosen and the special case is left out until use asks for it.
  Nothing polls the store: the dispatcher…
