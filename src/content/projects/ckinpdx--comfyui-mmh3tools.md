---
repo: "ckinpdx/ComfyUI-MMH3Tools"
name: "ComfyUI-MMH3Tools"
description: "Tools for latent handling in MMH3"
readmeQualityOk: true
url: "https://github.com/ckinpdx/ComfyUI-MMH3Tools"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 15
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-06T05:46:27Z"
lastCommitAt: "2026-08-25T04:10:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 48
maintainers: ["ckinpdx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6c43e4b73726a2cd53d2fa7f97e2a42ddca8f1363ca87a587db65f94918de86/ckinpdx/ComfyUI-MMH3Tools"
---

# MMH3Tools

MiniMax H3 latent tooling for ComfyUI — latent-domain conditioning and correct AV
splicing for **chained long-form generation**.

## What has actually been run

**`carry="mask"` is the tested path.** Every example workflow ships with it, and every
observation in the docs was measured on it.

**`carry="keyframe"` has never generated a clip.** The plumbing is unit-tested — the
guide is built and anchored at frame 0, it carries a multi-step clip *plus its audio*
rather than a still, no mask is set, and the node refuses up front on a core without
#15439. But that is structure checked against a fake sampler, not output anyone has
looked at.

It stays because it is written, gated and harmless where it sits — not because it is
recommended. If you switch `carry` to `keyframe`, you are the first, and the seam is
the thing to watch.

## Requirements

**Stock ComfyUI, `v0.33.0-20-gff6c8a8a` or newer.** For everything except the
ControlNet workflow: no patches, no carried diffs.

Note that current ComfyUI also raised its own floor to **`av>=17.0.0`**. If you update
core and ComfyUI then fails to start with `cannot import name 'ColorPrimaries' from
'av.video.reformatter'`, that is…
