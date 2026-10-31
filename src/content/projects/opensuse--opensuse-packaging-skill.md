---
repo: "openSUSE/openSUSE-packaging-skill"
name: "openSUSE-packaging-skill"
description: "Agent skill for authoring, updating, building, and submitting openSUSE RPM packages via OBS and the Git packaging workflow."
readmeQualityOk: true
url: "https://github.com/openSUSE/openSUSE-packaging-skill"
homepage: "https://en.opensuse.org/openSUSE:Packaging_guidelines"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [58, 41]
topics: ["agent-skills", "factory", "linux", "obs", "opensuse", "osc", "packaging", "rpm", "rpm-packaging", "specfile"]
stars: 8
forks: 7
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 31
recentReleases: 10
createdAt: "2026-06-17T10:47:01Z"
lastCommitAt: "2026-10-31T09:53:56Z"
lastReleaseAt: "2026-10-15T20:30:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 72
maintainers: ["plusky", "scarabeusiv", "ilmanzo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0381db3fc3127446e4b1c152b2377cf0aca46b68ebd3130f9704a370495e43fc/openSUSE/openSUSE-packaging-skill"
---

# openSUSE-packaging skill

An agent skill for authoring, updating, building, reviewing, and submitting openSUSE / SUSE
RPM packages via OBS and the Git packaging workflow (src.opensuse.org / Gitea).

It works with **any coding agent that can run shell commands** — the skill is plain markdown
plus POSIX-shell/Python helper scripts. Harnesses with native skill/sub-agent support consume
the `SKILL.md` frontmatter and delegation playbooks directly; everywhere else the same files
read as ordinary instruction documents.

| Skill | Use it for |
|---|---|
| `opensuse-packaging` | Updating, building, cleaning, reviewing and submitting an RPM package via `osc`/OBS or the git workflow on src.opensuse.org; checking whether packages are out of date; triaging a build failure, a decline, or a package's bugs. |

Requirements: `bash`, `python3` (3.11+, standard library only), `osc`, `curl`. Individual
helpers use `tea`, `gh` or `rpmlint` where the task needs them.

## Layout

```
skills/opensuse-packaging/   the skill — this directory is the unit of distribution
  SKILL.md                   entry point — the three-block pipeline + cross-cutting rules
  references/                per-block +…
