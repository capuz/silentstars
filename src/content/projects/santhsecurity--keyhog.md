---
repo: "santhsecurity/keyhog"
name: "keyhog"
description: "Open-source secret scanner in Rust. Service-specific detectors, SIMD on the CPU and an optional GPU path, live verification of which leaked keys are still active, and SARIF output."
url: "https://github.com/santhsecurity/keyhog"
homepage: "https://santh.dev/blog/keyhog/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["api-keys", "credentials", "devsecops", "git", "gpu", "hyperscan", "pre-commit", "rust", "secret-detection", "secret-scanner"]
stars: 81
forks: 13
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-03-20T11:21:21Z"
lastCommitAt: "2026-06-28T03:11:54Z"
lastReleaseAt: "2026-05-24T05:18:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["contactmukundthiru-cyber", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34f22503869568cb8132ca4a954dab5349d8e72fecbb6f46d63c162f82b5634a/santhsecurity/keyhog"
fundingLinks: ["CUSTOM:https://santh.dev"]
---

</p>

</p>

  <sub>Part of <a href="https://santh.dev">Santh</a> &nbsp;·&nbsp; <a href="https://santh.dev/blog/keyhog/">blog</a> &nbsp;·&nbsp; <a href="https://x.com/SanthProject">@SanthProject</a></sub>
</p>

---

**keyhog** scans source trees, git history, Docker images, GitHub/GitLab/Bitbucket
repository collections, S3/GCS/Azure Blob buckets, and running systems for leaked credentials. **902 service-specific detectors**,
decode-through (base64/hex/url/protobuf), confidence scoring, SARIF output,
zero runtime configuration. Default `keyhog scan .` works out of the box.

</p>

### Add it to your CI (one workflow file)

```yaml
# .github/workflows/keyhog.yml
name: keyhog
on: [push, pull_request]
permissions: { contents: read, security-events: write }
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: santhsecurity/keyhog/.github/actions/keyhog@v0.5.40
        with: { path: ., severity: high, format: sarif }
```

Cost to your CI: ~20 MB binary download (cacheable), ~400 ms cold-start
on hosted runners (GPU auto-disabled, SIMD path), ~10 s wall-clock for
a 5,000-file repo. Single `libhyperscan5` apt package, no Python, no
JVM, no…
