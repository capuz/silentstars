---
repo: "detailstech93/DetailsBench"
name: "DetailsBench"
description: "PC Benchmark Manager (PySide6): benchmark discovery, launching and results"
readmeQualityOk: true
url: "https://github.com/detailstech93/DetailsBench"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-10-17T13:50:42Z"
lastCommitAt: "2026-10-24T08:21:14Z"
lastReleaseAt: "2026-10-23T06:59:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["detailstech93"]
openGraphImageUrl: "https://opengraph.githubassets.com/849163354e2594b7d16981f9c0ab77b0ecf6a35e46db4cf1e7f89231c35c92ff/detailstech93/DetailsBench"
---

# DetailsBench

**[English](#english) | [العربية](#العربية)**

---

## English

DetailsBench is a desktop app (Python, PySide6, SQLite) that finds, installs, runs and records PC benchmarks:
processor, graphics card, games, storage, AI and web. Every result is stored with the PC's specs, so runs on
different computers can be compared, and each session ends with an HTML report.

> **Beta.** Tests marked "not verified yet" on the Tests screen have not been checked on a real run. Checked on
> real PCs: Windows 11 x64, Windows 11 on ARM (Snapdragon) and Linux (Fedora, and WSL2). If something fails, press
> **Report a problem** in the app: it saves a zip (personal details removed) and opens a GitHub issue to send it.

### What it does

- **This PC**: processor, memory, graphics, operating system and platform on one screen (Copy specs).
- **Tests**: every test this PC can run, grouped as CPU, GPU, Games, Storage, AI and Web. Each row says whether
  it is installed, how it runs (automatic, assisted or manual), whether it was verified on a real run and roughly
  how long it takes.
- **One-click install**: a missing test gets an Install button. It downloads only from the official source…
