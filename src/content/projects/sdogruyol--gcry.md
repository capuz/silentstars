---
repo: "sdogruyol/gcry"
name: "gcry"
description: "Crystal’s GC, written in Crystal."
readmeQualityOk: true
url: "https://github.com/sdogruyol/gcry"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [88]
stars: 73
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-23T06:58:30Z"
lastCommitAt: "2026-08-23T04:09:02Z"
lastReleaseAt: "2026-07-26T19:35:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["sdogruyol"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f36d39559d741a4607f1766738fcfe0db60e55557db18fcacfbc9cd61154f1f/sdogruyol/gcry"
---

</p>

<h1 align="center">gcry</h1>

  <b>The garbage collector Crystal deserves — written in Crystal.</b><br>
  <i>Conservative mark–sweep. Ship as a shard. One flag replaces Boehm.</i>
</p>

  <b>gcry runs at ~87% of Boehm's throughput with ~0.80x the RSS (Linux).</b>
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

**Near-Boehm performance: ~87% throughput at ~0.80x RSS (Linux).**

---

## Who is this for?

- **You use Crystal in production** and want to understand how memory works.
- **You've hit a Boehm limitation** and want a collector you can debug.
- **You contribute to Crystal** and want the language to own its runtime.
- **You're curious** — one `crystal build -Dgc_none` and you'll see.

Crystal >= 1.21. Linux (x86_64 + aarch64) and macOS (arm64 + x86_64).

---

## A GC you can actually own

Boehm works. Nobody is denying that. But Crystal's most intimate runtime
component is a C library — one you can't read, can't debug, can't change.

| | Boehm |…
