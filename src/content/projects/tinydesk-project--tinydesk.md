---
repo: "tinydesk-project/tinydesk"
name: "tinydesk"
description: "A mouse-operated, windowed desktop for microcontrollers, drawn in your terminal: Files, Editor, Shell, MQTT, Modbus. Tested on ESP32 boards; also runs on Windows and Linux."
readmeQualityOk: true
url: "https://github.com/tinydesk-project/tinydesk"
homepage: "https://tinydesk-project.github.io/"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["ansi", "c", "desktop-environment", "embedded", "embedded-systems", "esp32", "freertos", "iot", "microcontroller", "modbus"]
stars: 79
forks: 11
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-09-27T23:00:56Z"
lastCommitAt: "2026-10-27T09:16:58Z"
lastReleaseAt: "2026-10-18T20:59:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 36
maintainers: ["schikani", "TharunBabu-05"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1391479034/e1ec95b5-a32d-4dd1-875c-8d4e560db9bd"
---

# TinyDesk

**A tiny board. A real desktop. Inside your terminal.**

v0.1.6 · Developer preview.

**[Install it from the browser](https://tinydesk-project.github.io/install/)**: flash an ESP32 (Chrome or
Edge, no toolchain), or download the Windows and Linux programs. Then open
the board in the **[web terminal](https://tinydesk-project.github.io/console/)**, or in PuTTY.
Full **[documentation](https://tinydesk-project.github.io/)**. To build from source, see below.

*One continuous take from an ESP32 over USB serial, at normal speed: Editor,
Files, System Monitor and Terminal are opened, dragged and resized side by
side, then About. The board runs the desktop; the computer only displays it.
[Watch the MP4](https://github.com/tinydesk-project/tinydesk/blob/HEAD/docs/media/desktop-demo-esp32.mp4) or read the
[capture details](https://github.com/tinydesk-project/tinydesk/blob/HEAD/docs/media/README.md).*

TinyDesk draws overlapping, draggable text-mode windows with ANSI escape
sequences and reads the keyboard and mouse back from the terminal. There is
no display hardware: open a UTF-8 terminal with ANSI/VT cursor control
and xterm mouse reporting (for example, configured PuTTY) on…
