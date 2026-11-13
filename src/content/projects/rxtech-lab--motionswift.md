---
repo: "rxtech-lab/MotionSwift"
name: "MotionSwift"
description: "Native Remotion-compatible video rendering engine built with Swift, Skia, Yoga, and native typescript go"
readmeQualityOk: true
url: "https://github.com/rxtech-lab/MotionSwift"
language: "Swift"
languages: ["Swift", "JavaScript"]
languagePcts: [58, 33]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-12T01:36:51Z"
lastCommitAt: "2026-11-13T10:49:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 16
maintainers: ["sirily11"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8aa4e34fea7fff400257b4d1a9770ed80244fba143f3a21a5c3721ad4a04bd8/rxtech-lab/MotionSwift"
---

# MotionSwift

Native motion video rendering and editing with Swift + Skia.

## Why we built MotionSwift

Remotion makes video creation through code approachable, especially with AI. Models like GPT and Claude can turn a prompt into a beautiful Remotion composition. We wanted to bring that workflow into our own Swift app.

Rendering was the painful part. Chrome and WebView added bulk, and exporting large 4K videos on a laptop took far too long. We built MotionSwift to give familiar Remotion-style compositions native rendering performance and an editor that feels at home on Apple platforms.

MotionSwift uses Skia under the hood, with Swift APIs, a SwiftUI editor, and Metal rendering with hardware video encoding on macOS. Our goal is faster exports and lower memory use while keeping motion videos editable.

We're working toward 100% compatibility with Remotion, but we're not there yet. Some APIs and styles are unsupported, and rendered output can differ. We're actively developing the framework to close those gaps. See the [current implementation](https://github.com/rxtech-lab/MotionSwift/blob/HEAD/docs/current-implementation.md) and [compatibility…
