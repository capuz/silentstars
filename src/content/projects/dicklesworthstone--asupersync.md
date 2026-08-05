---
repo: "Dicklesworthstone/asupersync"
name: "asupersync"
description: "Async runtime for Rust where correctness is structural: region-owned tasks, cancel-correct protocols, capability-gated effects, and deterministic replay testing"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/asupersync"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["async", "concurrency", "runtime", "rust", "structured-concurrency"]
stars: 253
forks: 25
openIssues: 1
closedIssues: 42
watchers: 2
contributors: 3
recentReleases: 5
createdAt: "2026-01-16T05:22:16Z"
lastCommitAt: "2026-08-05T06:07:14Z"
lastReleaseAt: "2026-07-27T19:52:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 33
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1135442827/2770c0c8-d298-45e7-a707-b87d2a504035?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060938Z&X-Amz-Expires=300&X-Amz-Signature=613e8059901b36f5e5190ac354d164e269aee51602c4f3652cd1930289f42f01&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ3OCwibmJmIjoxNzg1OTEwMTc4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.vHKYX2SItpSEm6YN2fhMewhVBDUcGBsAIWk9e9C30Bk"
---

</p>

# Asupersync

**Spec-first, cancel-correct, capability-secure async for Rust**

<h3><a href="https://dicklesworthstone.github.io/asupersync/asupersync_web_demo.html">Try the Live Interactive WASM Demo</a></h3>

<h3>Quick Install</h3>

```bash
cargo add asupersync --git https://github.com/Dicklesworthstone/asupersync
```

</div>

---

## TL;DR

**The Problem**: Conventional executor APIs leave important lifecycle contracts
to composition and discipline. Cancellation can abandon partial effects,
detached tasks can outlive their owner, cleanup may be best-effort, and schedule
dependent failures can be difficult to reproduce.

**The Solution**: Asupersync makes its core task-ownership and runtime-tracked
effect contracts **structural rather than conventional**. Tasks are owned by
regions that close to quiescence. Cancellation is an explicit
request → drain → finalize protocol, with budgeted bounds on covered,
cooperative paths; non-cooperative code and foreign calls do not acquire a
universal shutdown bound. Runtime-managed effects require capabilities, with
host-boundary exceptions documented explicitly. The lab runtime makes
controlled schedules deterministic and replayable.…
