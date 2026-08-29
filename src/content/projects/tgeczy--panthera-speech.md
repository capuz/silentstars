---
repo: "tgeczy/panthera-speech"
name: "panthera-speech"
description: "Apple's Mac OS X speech engines, running natively on Windows: Tiger, Leopard, Snow Leopard and Lion. An NVDA add-on and a SAPI 5 driver over one hand-written Mach-O loader. No engine data ships here."
readmeQualityOk: true
url: "https://github.com/tgeczy/panthera-speech"
language: "Python"
languages: ["Python", "C"]
languagePcts: [61, 33]
stars: 14
forks: 2
openIssues: 0
closedIssues: 7
watchers: 5
contributors: 4
recentReleases: 10
createdAt: "2026-08-18T04:09:31Z"
lastCommitAt: "2026-08-29T17:28:12Z"
lastReleaseAt: "2026-08-20T01:48:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 53
maintainers: ["tgeczy", "dangero2000", "serrebidev"]
openGraphImageUrl: "https://opengraph.githubassets.com/600da3164a08195bc8854e4adea33c03b37187701f7cbb37cb74af37d3fdd23b/tgeczy/panthera-speech"
---

# panthera-speech

**Apple's Mac OS X speech engines, running as native code on Windows.** No
virtual machine, no emulator, no CPU translation — a small 32-bit host process
maps Apple's Intel `MacinTalk` into memory, fills the pointer slots `dyld`
would have filled, and calls the engine directly. An utterance costs about
twelve milliseconds.

**One add-on for NVDA**, `pantheraspeech`, declaring one synthesizer per
engine generation -- **and a SAPI 5 driver**, so the same voices speak in
JAWS and every other SAPI application ([`sapi/`](https://github.com/tgeczy/panthera-speech/blob/HEAD/sapi/README.md); the
installer on the [latest release](https://github.com/tgeczy/panthera-speech/blob/HEAD/../../releases/latest) sets it up, and it
reads the very data the NVDA add-on already extracted):

| synthesizer | | voices |
|---|---|---|
| [**tigerspeech**](https://github.com/tgeczy/panthera-speech/blob/HEAD/tiger/README.md) | Mac OS X 10.4 Tiger | twenty-three, including Fred as he sounded in 2005 |
| [**leopardspeech**](https://github.com/tgeczy/panthera-speech/blob/HEAD/leopard/README.md) | Mac OS X 10.5 Leopard | twenty-four, including **Alex** |
|…
