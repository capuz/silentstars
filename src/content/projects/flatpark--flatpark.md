---
repo: "flatpark/flatpark"
name: "flatpark"
description: "Yet another Flatpak hub."
readmeQualityOk: true
url: "https://github.com/flatpark/flatpark"
homepage: "https://flatpark.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
topics: ["flatpak", "flatpak-apps", "flatpak-repository"]
stars: 49
forks: 18
openIssues: 6
closedIssues: 40
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-06-20T04:56:47Z"
lastCommitAt: "2026-09-25T09:03:00Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 42
maintainers: ["jing2uo", "github-actions[bot]", "D3SOX"]
openGraphImageUrl: "https://opengraph.githubassets.com/70d722e9e9a7d0f612db8410a255df0486f036a44d81339521c8d6522f6d895a/flatpark/flatpark"
fundingLinks: ["GITHUB:https://github.com/jing2uo"]
---

# Yet another Flatpak hub

FlatPark is a Flatpak hub for apps that ship as a definitive download, built to
be driven by AI agents.

## Goals

- **AI-driven by design.** Onboarding, review, publishing, upgrading, and
  cleanup are all meant to be driven by AI agents. Leaning on agents to do this
  work efficiently is a primary goal, not an afterthought.
- **One runtime version, always the latest.** Every app targets the *current*
  major of its runtime — never one app on GNOME 49 and another on 50. Old majors
  are dead weight on your disk, so the whole catalog moves forward together.
- **extra-data only, no build hosting.** FlatPark hosts only extra-data apps: it
  downloads official releases and repackages them — it never builds *the app*
  from source. (Supporting libraries the runtime lacks may be built from pinned
  source; the app itself is always the vendor's own binary.) That keeps
  installing and updating the apps you need in one place, while Flatpak keeps
  them sandboxed and out of your home directory.
- **Open to vibe-coded apps, with guardrails.** Apps built with AI ("vibe
  coding") are welcome, under clear rules enforced by AI review that weighs
  development…
