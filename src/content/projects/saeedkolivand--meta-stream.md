---
repo: "saeedkolivand/meta-stream"
name: "meta-stream"
description: "IRL streaming from Ray-Ban Meta glasses (or just your phone) to Kick, Twitch, YouTube, Restream or any RTMP server, with chat, a stream manager and phone-camera fallback."
readmeQualityOk: true
url: "https://github.com/saeedkolivand/meta-stream"
homepage: "https://metastream.iamsaeed.dev/"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["haishinkit", "hevc", "ios", "irl-streaming", "kick", "live-streaming", "meta-glasses", "ray-ban-meta", "restream", "rtmp"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-15T10:43:37Z"
lastCommitAt: "2026-10-09T18:56:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 51
maintainers: ["saeedkolivand"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d30ca4bbe56716e8237c6e767dacbe49f76a018d0822166041af6eb947c149c/saeedkolivand/meta-stream"
---

IRL streaming from <b>Ray-Ban Meta</b> glasses to Kick, Twitch, YouTube, Restream or any RTMP server,<br>
  with chat, a stream manager and a phone-camera fallback. Built and signed from <b>Windows</b>. No Mac needed.

---

## Why this exists

The apps that can talk to Meta glasses (StreamHand, MetaLens) don't show chat, drop the glasses the moment you
switch apps, and can't manage your broadcast. The apps that do all that (Streamlabs) can't see the glasses.
MetaStream fills that gap. I wrote it for my own streams and published it so others can build their own copy.

## What it does

| | |
|---|---|
| **Glasses video** | Meta's *Wearables Device Access Toolkit* hands the app the glasses' camera as compressed HEVC, 720×1280 at up to 30 fps |
| **Streams in the background** | Check chat, answer a text or open Maps while the stream keeps running |
| **Picture in Picture** | Leaving the app puts the feed in a floating window. That window is also what keeps a transcoded stream running once the app is no longer in front |
| **Codec handling** | The glasses' HEVC goes out untouched where the destination accepts it. Where it doesn't, the phone decodes and re-encodes to H.264 |
|…
