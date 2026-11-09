---
repo: "mickael-kerjean/fdrive"
name: "fdrive"
description: ":file_folder:  A Filesystem that sync (for human and agents)"
readmeQualityOk: true
url: "https://github.com/mickael-kerjean/fdrive"
homepage: "https://www.filestash.app/"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
stars: 30
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-07-08T09:00:45Z"
lastCommitAt: "2026-11-10T03:51:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["mickael-kerjean"]
openGraphImageUrl: "https://opengraph.githubassets.com/87892ccf45df3cf17ad24a3f6fbd204857b05e162dc7b6cd11bb2bdf8c9f88a0/mickael-kerjean/fdrive"
---

# What is this?

Fdrive takes Dropbox's big idea of "a folder that syncs across your devices" and addresses its [infamous qualms](https://github.com/mickael-kerjean/filestash#why). Rather than creating yet another data silo, it works with the storage you already have and gives it the Dropbox++ treatment with better tooling, for both:

1. Humans: who want the Dropbox experience on the storage they already have and across all their devices, without creating a new data island and while staying interoperable.

2. [Agents](https://www.filestash.app/docs/guide/agents.html): as Nvidia's CEO says: *“when you deployed an agent ... the first thing you do is you take away all of its rights ... then you provision, you give it access to files...”*. Fdrive, along with its [control plane](https://github.com/mickael-kerjean/filestash), is that provisioning tool: your agent only gets access to what it needs, with clear permission boundaries, and an audit trail shows what it tried to do, what was allowed and what was blocked.

It looks native, because it is:

```
docker plugin install machines/fdrive --alias fdrive
export FILESTASH_SERVER=https://demo.filestash.app
export…
