---
repo: "sdogruyol/gcry"
name: "gcry"
description: "Crystal’s GC, written in Crystal."
readmeQualityOk: true
url: "https://github.com/sdogruyol/gcry"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [86]
stars: 109
forks: 7
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-23T06:58:30Z"
lastCommitAt: "2026-09-25T09:02:23Z"
lastReleaseAt: "2026-07-26T19:35:27Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 37
maintainers: ["sdogruyol"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5fdeef5fcc18d022b0067caff734e2f58d40e7a137996a04e6accd797786121/sdogruyol/gcry"
---

</p>

<h1 align="center">gcry</h1>

  <b>The garbage collector Crystal deserves — written in Crystal.</b><br>
  <i>Conservative mark–sweep. Ship as a shard. One flag replaces Boehm.</i>
</p>

  <b>gcry beats Boehm on throughput — ~113% on Kemal <code>/json</code> — at ~1.07× its peak RSS (Linux, headerless default).</b>
</p>

</p>

<br>

---

## In one line

```crystal
{% if flag?(:gc_none) %} require "gcry" {% end %}
```

```sh
crystal build -Dgc_none app.cr -o app
```

String, Array, Hash — everything allocates on gcry. No API changes. One line
to swap Boehm out, one line to swap it back.

**Boehm-parity throughput: ~105% [99, 111] on Kemal `/json` at ~1.3× peak RSS (Linux, 0.24.0); ~102% at ~2.0× peak on macOS.**

---

## Who is this for?

- **You use Crystal in production** and want to understand how memory works.
- **You've hit a Boehm limitation** and want a collector you can debug.
- **You contribute to Crystal** and want the language to own its runtime.
- **You're curious** — one `crystal build -Dgc_none` and you'll see.

Crystal >= 1.21. Linux (x86_64 + aarch64), macOS (arm64 + x86_64), and
[Windows x86_64 +…
