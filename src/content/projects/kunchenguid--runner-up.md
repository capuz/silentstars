---
repo: "kunchenguid/runner-up"
name: "runner-up"
description: "GitHub Actions runners on your own machines, one fresh container or VM per job. Completely eliminate your cloud CI bill."
readmeQualityOk: true
url: "https://github.com/kunchenguid/runner-up"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 359
forks: 30
openIssues: 13
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-29T03:05:57Z"
lastCommitAt: "2026-11-21T11:34:28Z"
lastReleaseAt: "2026-11-03T17:52:05Z"
status: "newborn"
tags: ["release_machine", "under_pressure"]
healthScore: 77
undervaluedScore: 22
maintainers: ["kunchenguid", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf48fc978ccc7f6eaffe951fd818f76c115c0d8314ce2f6cf7ab0c378b18905d/kunchenguid/runner-up"
---

You have spare machines: a Linux box, a Mac, a Windows PC. Yet your GitHub Actions
jobs wait in line for hosted runners, or burn a hole in your wallet.

runner-up self-hosts GitHub Actions runners across your machines. Each job gets a 
Docker container or KVM virtual machine on Linux, a fresh tart clone of a
macOS image or a fresh Linux guest from Apple's container tool on a Mac, or a
fresh Windows account or Hyper-V virtual machine on
Windows, which is removed when the job ends. A place can also run its jobs on
the machine itself.

One coordinator talks to GitHub through runner scale sets and hears of every
waiting job. Jobs wait at GitHub without a runner until a place is free. The
first-ranked job waiting only for resources keeps room on one machine. Then
the coordinator picks the job its order rules choose, acquires it, and starts a
one-job runner for it. It starts the runner by running the agent on that
place's machine over SSH.
