---
repo: "microbit-foundation/micropython-microbit-v2-simulator"
name: "micropython-microbit-v2-simulator"
description: "Wasm-based MicroPython micro:bit v2 simulator"
readmeQualityOk: true
url: "https://github.com/microbit-foundation/micropython-microbit-v2-simulator"
homepage: "https://python-simulator.usermbit.org/v/0.1/demo.html"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [47, 31]
topics: ["microbit", "micropython"]
stars: 21
forks: 12
openIssues: 9
closedIssues: 20
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2022-03-14T12:18:51Z"
lastCommitAt: "2026-11-02T11:36:46Z"
lastReleaseAt: "2022-11-17T10:44:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 44
maintainers: ["microbit-matt-hillsdon"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4aec3433984baa809f5c5f92ebfc104e26b4ab25cefafa2abf38ab1913f782b/microbit-foundation/micropython-microbit-v2-simulator"
---

# MicroPython-micro:bit simulator

## Try it out

To try the simulator use the [micro:bit Python Editor](https://python.microbit.org).

The rest of this page explains how to embed the simulator in an application
and develop the simulator software.

## License

This software is under the MIT open source license.

[SPDX-License-Identifier: MIT](https://github.com/microbit-foundation/micropython-microbit-v2-simulator/blob/HEAD/LICENSE)

## Embedding

The simulator is designed to be embedded into other web applications
as an iframe. The embedding API and URLs are not yet stable and are
subject to change. If you are interested in embedding the simulator
in your application please [get in touch](mailto:support@microbit.org).

The URL to embed is https://python-simulator.usermbit.org/v/0.1/simulator.html.
You can embed this in your application directly. We would love to hear about
your use of the simulator so please open an issue to get in touch.

The iframe provides the micro:bit board user interface and some limited
interactions. It does not provide a terminal for serial/the REPL or any UI to change the board sensor state.

A value for a brand color can be passed to the simulator via a…
