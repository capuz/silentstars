---
repo: "phantomptr/ps5upload"
name: "ps5upload"
description: "PS5 Upload is a tool designed to get your apps and homebrew onto your console without the headache of slow transfers."
readmeQualityOk: true
url: "https://github.com/phantomptr/ps5upload"
homepage: "https://discord.gg/fzK3xddtrM"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [61, 21]
topics: ["ps5upload", "homebrew", "ps5"]
stars: 253
forks: 22
openIssues: 1
closedIssues: 129
watchers: 10
contributors: 5
recentReleases: 10
createdAt: "2026-01-10T06:37:43Z"
lastCommitAt: "2026-09-08T08:16:30Z"
lastReleaseAt: "2026-07-19T22:24:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 37
maintainers: ["phantomptr", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6031a29845796b11f17a27f157db03e1e715d3a99c0693b46164b94b2a14dd06/phantomptr/ps5upload"
---

# ps5upload

</p>

  <strong>Fast, reliable transfers from your computer to your PS5.</strong><br/>
  Transfer · Mount · Browse — designed to live alongside your PS5-side tools.
</p>

</p>

---

## What it does

- **Fast transfer** — FTX2 binary protocol with BLAKE3 per-shard
  verification, small-file packing, and resume on disconnect.
  Uses your LAN flat-out. Pack worker absorbs transient
  `EIO`/`EMFILE` hiccups so a 200k-file game upload doesn't get
  killed by one unlucky syscall.
- **Upload queue** — line up multiple games or images, hit Start,
  walk away. Every running row shows live MiB/s and ETA; done
  rows show the wall-clock-average rate so you can spot a slow
  destination. Queue state survives app restarts.
- **Compressed archive uploads (`.zip` / `.7z` / `.rar`)** — keep a game
  dump as a single archive on your PC (less disk, easier to move) and
  upload it directly. ps5upload decompresses on the host and streams
  the files into the same FTX2 pipeline, so they land **already
  extracted** on the PS5 — no manual unpack, no temp copy of the whole
  game. The Upload screen previews the expansion (`zipped → extracted`,
  file count, space saved) and detects the…
