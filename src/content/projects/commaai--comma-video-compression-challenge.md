---
repo: "commaai/comma_video_compression_challenge"
name: "comma_video_compression_challenge"
description: "lossy video compression challenge"
readmeQualityOk: true
url: "https://github.com/commaai/comma_video_compression_challenge"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 63
forks: 106
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 43
recentReleases: 0
createdAt: "2025-11-10T22:56:08Z"
lastCommitAt: "2026-08-08T04:34:32Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 49
maintainers: ["YassineYousfi", "amoghmunikote", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdde552cb8ba776bd39623a6bd1a84e6d5e101037cfde65b36af21abe06fc6bd/commaai/comma_video_compression_challenge"
discussionCount: 3
---

<h1>comma video compression challenge</h1>

<h3>
</h3>

</div>

 `./videos/0.mkv` is a 1 minute 37.5 MB dashcam video. Make it as small as possible while preserving semantic content and temporal dynamics.

- semantic content distortion is measured using:
  - a SegNet: average class disagreements between the predictions of a SegNet evaluated on original vs. reconstructed frames
- temporal dynamics distortion is measured using:
  - a PoseNet: MSE of the outputs of a PoseNet evaluated on original vs. reconstructed 2 consecutive frames
- the compression rate is:
  - the size of the compressed archive divided by the size of the original archive
- the final score is computed as (lower is better):
  - score = 100 * segnet_distortion + 25 * rate + √ (10 * posenet_distortion)

</p>

## coding agents and LLMs policy
If you're attempting this challenge, you are probably doing it for fun or for applying for a job at comma, hopefully both. If you're not writing and reading most of the code you are submitting, then what's the point?!
This policy is mostly inspired by [rust's LLMs usage policy](https://forge.rust-lang.org/policies/llm-usage.html)
Any violation of this policy will result in a…
