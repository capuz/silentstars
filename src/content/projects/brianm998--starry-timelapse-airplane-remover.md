---
repo: "brianm998/starry_timelapse_airplane_remover"
name: "starry_timelapse_airplane_remover"
description: "Remove airline streaks from your overnight timelapse videos"
readmeQualityOk: true
url: "https://github.com/brianm998/starry_timelapse_airplane_remover"
language: "Swift"
languages: ["Swift", "C"]
languagePcts: [64, 33]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-10-15T19:06:35Z"
lastCommitAt: "2026-08-20T04:07:09Z"
lastReleaseAt: "2025-08-31T03:35:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 68
maintainers: ["brianm998"]
openGraphImageUrl: "https://opengraph.githubassets.com/952a2b833085aa6e06345d04cb9ddc8738a7b75ce3fde0c9a5d2dcfcd8571038/brianm998/starry_timelapse_airplane_remover"
---

# Starry Timelapse Airplane Remover (Star)

Star removes airplane and satellite trails from night-sky timelapse videos. It takes a sequence of still images, automatically detects and paints out bright transient streaks, and writes back a cleaned sequence ready to render into video.

## Example comparisons

### Northern Esmeralda County, Nevada

Original: https://vimeo.com/803304507  
Processed with Star: https://vimeo.com/803303679

### Smith Creek Valley, Nevada (with moonlight)

Original: https://vimeo.com/988073522  
Processed with Star: https://vimeo.com/950955396

---

## How it works

The key insight is that in a night-sky timelapse, the scene is nearly identical from frame to frame — stars rotate slowly, the foreground is fixed, and anything short-lived (an airplane, a satellite, a meteor) appears in only one or two frames before moving on.

Star exploits this by building a **clean reference image** for each frame: it takes several neighboring frames, aligns them so the stars overlap, and computes a per-pixel median that rejects the one-frame-only bright outliers. The original frame is then subtracted from this reference to reveal transients. Those bright differences are…
