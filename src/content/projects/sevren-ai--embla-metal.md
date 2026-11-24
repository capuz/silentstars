---
repo: "sevren-ai/embla-metal"
name: "embla-metal"
description: "Metal runtime for Embla 1 by Sevren."
readmeQualityOk: true
url: "https://github.com/sevren-ai/embla-metal"
language: "Swift"
languages: ["Swift", "Metal"]
languagePcts: [60, 36]
stars: 14
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-12T22:43:06Z"
lastCommitAt: "2026-11-24T14:10:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["hermankyhn", "cvk-sevren", "albanistrefi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7513ca41ba25f8b2b27476d89ec68e6849704f1556740a18b8d7b8a60c8301c/sevren-ai/embla-metal"
discussionCount: 0
---

# embla-metal

A Metal engine for [Embla 1](https://huggingface.co/sevren-ai/Embla1-4bit) on Apple silicon, tuned
for the M5 Pro and the iPhone 18 Pro. No dependencies: the 4-bit weights are memory-mapped
straight into Metal, the engram table is read from the SSD, and each token is one pipelined pass
of a few wide kernels.

## Chat with it on a Mac

On a Mac with Apple silicon, macOS 15 or later and Xcode (or the Command Line Tools,
`xcode-select --install`):

```bash
git clone https://github.com/sevren-ai/embla-metal && cd embla-metal
swift run -c release embla download        # the model, 5.6 GB, into the Hugging Face cache
swift run -c release embla serve --open    # a local server, and the chat page in your browser
```
