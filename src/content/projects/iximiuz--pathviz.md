---
repo: "iximiuz/pathviz"
name: "pathviz"
description: "A small packet path visualizer for Linux."
readmeQualityOk: true
url: "https://github.com/iximiuz/pathviz"
homepage: "https://labs.iximiuz.com/playgrounds/pathviz"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [50, 33]
topics: ["iptables", "linux", "netfilter", "networking", "nftables"]
stars: 79
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-11-23T14:00:55Z"
lastCommitAt: "2026-11-26T13:01:05Z"
lastReleaseAt: "2026-11-23T20:40:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 21
maintainers: ["iximiuz", "andrewwhitecdw"]
openGraphImageUrl: "https://opengraph.githubassets.com/54950cb31aadad6fc35366565c7ed2ce244075bc59be4c5c5e049abc10014df9/iximiuz/pathviz"
---

# PathViz

PathViz is a small packet path visualizer for Linux. It shows, live in your browser, how a packet travels through the kernel: through the hooks of the network devices, the bridges, and the IP stack. You can see which hooks a packet crosses, where it gets stopped, how NAT changes it along the way, and which ports of a bridge get a copy of a frame.

PathViz is built for learning and demos with a few packets per second. The focus is on accurate, readable visualizations rather than handling large traffic volumes.

https://github.com/user-attachments/assets/da465c3e-42d9-4892-99f3-dd930da6c813

## The views

The page has one view per layer, and one that puts them together. The switch is in the first line of the header.
