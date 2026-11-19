---
repo: "uw-syfi/Murmur"
name: "Murmur"
description: "Murmur: An Efficient Inference System for Long-Form ASR"
readmeQualityOk: true
url: "https://github.com/uw-syfi/Murmur"
homepage: "https://arxiv.org/abs/2606.01483"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 1
createdAt: "2026-05-31T18:46:44Z"
lastCommitAt: "2026-11-19T05:07:03Z"
lastReleaseAt: "2026-11-19T04:20:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 21
maintainers: ["rubywtl", "kamahori"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f5e6209ae97e82422608e721f6f3c3b5dccdc1b31ee0a383b278c240523d436/uw-syfi/Murmur"
---

# Murmur: Efficient Long-Context ASR Inference with Hierarchical Chunking

**News**
- 2026/11/13: [Blog post](https://syfi.cs.washington.edu/blog/2026-11-13-murmur/) on Murmur is out.
- 2026/11/04: [Preprint v2](https://arxiv.org/abs/2606.01483v2) is out.
- 2026/06/01: [Preprint](https://arxiv.org/abs/2606.01483v1) is released on arXiv.

Murmur is an inference system that serves long-context ASR models, such as **VibeVoice-ASR** and
**MOSS-Transcribe-Diarize**, on long audio. These models transcribe an hour-long recording in a single
pass, which is slow and can fail entirely on a repetition loop.

- **Across chunks:** Murmur decodes ~5-minute target chunks in parallel. This intermediate size gives
  the model enough context to match single pass in most cases, and a loop costs at most one chunk.
- **Within each chunk:** hierarchical chunking splits each chunk into 30 s draft windows. A small
  Whisper model transcribes them, and structure-aware drafting adds the timestamps and speaker tags,
  giving drafts for speculative decoding. The long-context model verifies every token, so decoding is
  faster and the output is unchanged.
