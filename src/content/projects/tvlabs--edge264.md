---
repo: "tvlabs/edge264"
name: "edge264"
description: "Simple H.264 decoder"
readmeQualityOk: true
url: "https://github.com/tvlabs/edge264"
language: "C"
languages: ["C"]
languagePcts: [92]
stars: 446
forks: 22
openIssues: 14
closedIssues: 9
watchers: 13
contributors: 7
recentReleases: 0
createdAt: "2014-06-06T17:20:13Z"
lastCommitAt: "2026-11-04T08:02:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 27
maintainers: ["traffaillac", "github-actions[bot]", "castano"]
openGraphImageUrl: "https://opengraph.githubassets.com/71520847b575a71ea0474f6b64854b44864759090b2e5fc03f17205c03adc2f6/tvlabs/edge264"
---

# edge264

edge264 is an H.264/AVC cross-platform open-source decoder, focused on **speed** and **ease-of-use**.

It grew up as a research effort on new software engineering practices, most notably the use of C vector extensions to replace hand-crafted assembly. As such it is slowly but steadily progressing towards production-readiness, with a target 1.0 release and API-freeze on **29 January 2027** (see the [roadmap](#roadmap)).

*Single-threaded benchmark computed by a median of 5 runs of [Big Buck Bunny test video](https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4), on GitHub-hosted runners with the latest OpenH264 and LibAVC and Ubuntu's FFmpeg (see [benchmarks.yml](https://github.com/tvlabs/edge264/blob/HEAD/.github/workflows/benchmarks.yml)).*

# Features

edge264 supports **Progressive High** and **MVC 3D** profiles, up to level 6.2. Until the 2026-11-20 milestone of the [roadmap](#roadmap), streams using constrained intra prediction or a `pic_parameter_set_id` above 3 are reported as unsupported.

Below is an overview of optional features versus Baseline (**BP**), Extended (**XP**), Main (**MP**), High (**HP**) and Stereo High…
