---
repo: "MaxAkbar/CSharpDB"
name: "CSharpDB"
description: "FAQ"
readmeQualityOk: true
url: "https://github.com/MaxAkbar/CSharpDB"
homepage: "https://github.com/MaxAkbar/CSharpDB/blob/main/docs/faq.md"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [69, 25]
topics: ["faq"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-01T03:07:48Z"
lastCommitAt: "2026-07-04T23:14:40Z"
lastReleaseAt: "2026-03-12T05:34:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["MaxAkbar", "MaxAkbarViking"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b1f2648c7e67159f45b6cce2865e763445de932ba51f7ef5706eaf37414ff5/MaxAkbar/CSharpDB"
discussionCount: 5
---

</p>

<h1 align="center">CSharpDB</h1>

  <strong>The embedded database engine built for .NET</strong><br>
  Zero dependencies. Full SQL. ACID storage. Single file. One NuGet package.
</p>

</p>

</p>

---

## Performance at a Glance

| 1.99M gets/sec | 9.68M COUNTs/sec | 799.29K rows/sec | 890 commits/sec |
|:-:|:-:|:-:|:-:|
| Collection point reads | Concurrent reader burst (8x reused) | Durable `InsertBatch` B10000 | Concurrent durable writes |

<sub>Intel i9-11900K, 16 logical cores, Windows 10.0.26300, .NET SDK 10.0.203, .NET runtime 10.0.7. Snapshot promoted from the May 6, 2026 release-core suite; latest release guardrail compare passed May 6, 2026 with PASS=187, WARN=0, SKIP=0, FAIL=0. Full results live in the <a href="tests/CSharpDB.Benchmarks/README.md">benchmark suite</a>.</sub>

---

## Durable API Top Lines

Default CSharpDB file-backed benchmarks are fully durable: WAL fsync-on-commit unless a row explicitly says otherwise. In-memory rows show the same API paths without disk durability.

| Surface | Single write | Batch x100 | Point read | Concurrent read |
|---|---:|---:|---:|---:|
| SQL file-backed | 267.1 ops/sec | 25.56K rows/sec | 1.48M ops/sec | 9.68M…
