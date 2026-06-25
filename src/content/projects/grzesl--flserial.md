---
repo: "grzesl/flserial"
name: "flserial"
description: "Flutter Serial Port Library FFI Based"
url: "https://github.com/grzesl/flserial"
language: "C"
languages: ["C"]
languagePcts: [69]
stars: 9
forks: 7
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2024-06-28T17:56:05Z"
lastCommitAt: "2026-06-25T01:38:26Z"
lastReleaseAt: "2026-06-04T22:10:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 65
maintainers: ["grzesl"]
openGraphImageUrl: "https://opengraph.githubassets.com/78307ceb50ae4ef2d88292fd2208f2f5d3b74fb071c6b371d4b6ae44c84043c5/grzesl/flserial"
---

# FlSerial

A high-performance, asynchronous serial port plugin for **Flutter**, using **Dart FFI** and **Native Assets** on desktop/mobile and the **Web Serial API** on browsers.

| Platform | Transport | Notes |
|----------|-----------|-------|
| Windows | FFI → native C++ / Win32 | COM1, COM3, … |
| Linux | FFI → native C++ / termios | /dev/ttyUSB0, /dev/ttyACM0, … |
| macOS | FFI → native C++ / termios | /dev/cu.usbserial-… |
| Android | USB Host API (platform channel) | USB-serial adapters: CH340, FTDI, CP210x, CDC ACM, PL2303 |
| Web | Web Serial API (dart:js_interop) | Chrome / Edge 89+ |

---

## Features

- **Asynchronous I/O** — native C++ worker thread keeps the Flutter UI thread free
- **Reactive streams** — incoming data and events (connect / disconnect / line status) via `Stream<SerialEvent>`
- **Modem line tracking** — real-time CTS, DSR, RI, DCD status (desktop/macOS/Linux)
- **Flow control** — hardware RTS/CTS and software XON/XOFF
- **Android USB Host** — no root required; permission dialog handled automatically
- **Web Serial** — browser port picker dialog on first connect; works in Chrome and Edge
- **Native Assets** — compiled via `hook/build.dart`, no manual…
