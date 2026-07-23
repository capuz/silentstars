---
repo: "scipioni/serena"
name: "serena"
description: "alexa custom on arduino-uno-q"
readmeQualityOk: true
url: "https://github.com/scipioni/serena"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 5
forks: 0
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-05-22T05:15:03Z"
lastCommitAt: "2026-07-23T06:14:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 52
maintainers: ["scipioni"]
openGraphImageUrl: "https://opengraph.githubassets.com/02cee521e8860c19afc159f92107345e3b69207afbc4f52294dd5e60c72d0664/scipioni/serena"
---

&nbsp;&nbsp;&nbsp;&nbsp;
</p>

  <em>The voice assistant that answers to you — not to a data center.</em>
</p>

</p>

---

## 🔕 Ale*a, you're fired

You know the drill: you buy a smart speaker, and in return it ships every word spoken in your living room to someone else's cloud, stops working when your internet hiccups, and one day the vendor decides which features you're allowed to keep.

**Serena flips that deal.** Take a cheap Linux board (an Arduino Uno Q), plug in any USB speakerphone, and you get an Italian-speaking voice assistant where everything that matters happens **on the device**:

- 👂 **Listening** — sherpa-onnx speech-to-text runs locally, always on, no audio ever leaves the room
- 🗣️ **Speaking** — Piper neural TTS synthesizes natural Italian voices offline
- 🧠 **Understanding** — wake words and commands are matched with Italian phonetic fuzzy matching, in plain YAML you control
- 🏠 **Acting** — lights, shutters, heating via MQTT and Home Assistant auto-discovery; shell commands; Telegram alerts; voice calls via LiveKit

No subscription. No account. No "sorry, something went wrong" from a server across the ocean. The cloud is strictly **opt-in** — connect an…
