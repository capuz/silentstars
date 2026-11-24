---
repo: "SomethingObvious/jwst-peculiar"
name: "jwst-peculiar"
description: "Unsupervised anomaly detection for James Webb Space Telescope images, with DINOv3 features and a web viewer for the ranked tiles"
readmeQualityOk: true
url: "https://github.com/SomethingObvious/jwst-peculiar"
homepage: "https://somethingobvious.github.io/jwst-peculiar/"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["anomaly-detection", "anomalydino", "astronomical-images", "astronomy", "astrophysics", "computer-vision", "dinov2", "dinov3", "fits", "galaxies"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-01-03T07:48:06Z"
lastCommitAt: "2026-11-24T14:09:03Z"
lastReleaseAt: "2026-11-15T04:33:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 61
maintainers: ["SomethingObvious"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f3c32a4422cda4166dd78471bf42913109b4f82fcf68c0fa006687543adbccc/SomethingObvious/jwst-peculiar"
---

# jwst-peculiar

jwst-peculiar looks for odd objects in JWST NIRCam mosaics, like mergers, rings, little red dots and the strange things nobody has a name for. It finds every source in a field, drops the ones that are instrument artefacts, embeds a colour stamp of each with Zoobot and ranks them by how unlike every other object they look. Verdicts you give in its viewer train a small classifier that pushes big ordinary galaxies down the list. Sources too small for a stamp get a second list, ranked on their colours. The [demo](https://somethingobvious.github.io/jwst-peculiar/) is its top 100 in Webb's First Deep Field.

On 148 COSMOS-Web fields (185,811 stamps) it took 2 hours 10 minutes on a laptop CPU to cut and 27 minutes on an RTX 4070 laptop GPU to embed, or about 6 hours on the CPU alone.
