---
repo: "apismith-labs/instagram-reels-transcript-api"
name: "instagram-reels-transcript-api"
description: "Instagram Reels Transcript API examples using Apify. Integrations for Python, Node.js, Java, Go, Rust, cURL, batch processing, and MCP workflows for ChatGPT, Claude, and Gemini."
readmeQualityOk: true
url: "https://github.com/apismith-labs/instagram-reels-transcript-api"
homepage: "https://apify.com/apple_yang/instagram-transcripts-scraper"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [53, 47]
topics: ["apify", "instagram-reels", "video-to-text", "nodejs", "python", "golang", "java", "rust", "transcript-api", "video-transcript"]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-05-08T06:44:00Z"
lastCommitAt: "2026-10-23T12:04:21Z"
lastReleaseAt: "2026-10-23T04:20:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 62
maintainers: ["bibywupeng-git"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fc11c4ee58759d2045f964a2da5a9b97e1eac827489b53dc18399b2d2fc7d09/apismith-labs/instagram-reels-transcript-api"
---

# Instagram Reels Transcript API — Developer Integration Examples

Runnable examples for the Apify Actor
[`apple_yang/instagram-transcripts-scraper`](https://apify.com/apple_yang/instagram-transcripts-scraper).
The Actor runs on Apify and produces the transcript or profile data; this repository provides
integration examples, not a hosted service or transcription engine.

The Python examples support single Reel transcription, Actor Native Bulk, Profile post metadata,
and CSV Batch. Native Bulk sends multiple URLs in one Run; CSV Batch starts one independent Run
per non-empty CSV row. Profile returns post metadata and does not create transcripts.

## Python Quick Start

Requires Python 3.10+ and an Apify account/token. `quickstart_single.py` and the reusable client
use only the Python standard library. Replace the sample URL with a public Reel URL you are
allowed to process. A real invocation creates a potentially billable Actor Run.

macOS/Linux:

```bash
export APIFY_TOKEN="your_apify_token"
python3 examples/python/quickstart_single.py --help
python3 examples/python/quickstart_single.py "https://www.instagram.com/reels/your_reel_id/"
```

Windows PowerShell:

```powershell…
