---
repo: "buganini/PUI"
name: "PUI"
description: "Python Reactive/Declarative UI Framework. PUI doesn't do UI itself, it turns imperative UI libraries into declarative flavor with virtual DOM and aims to maintain interoperability."
readmeQualityOk: true
url: "https://github.com/buganini/PUI"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["declarative-ui", "python", "tkinter", "qt", "flet", "pyside6", "textual", "wxpython"]
stars: 96
forks: 6
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2023-03-09T20:15:06Z"
lastCommitAt: "2026-10-26T20:59:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 44
maintainers: ["buganini"]
openGraphImageUrl: "https://opengraph.githubassets.com/17ecb12d7a206437e708f2a14d8d432b522fa6a6062c8dc757c2a3a6f2703d86/buganini/PUI"
discussionCount: 0
---

# What is PUI
PUI is a reactive/declarative UI framework with two-way data binding.
PUI doesn't do UI itself, it turns imperative UI libraries into reactive/declarative flavor with virtual DOM and aims to maintain interoperability.

[Slides for SciWork 2023](https://speakerdeck.com/buganini/pui-declarative-ui-framework-for-python)

[CPPUI: C++ Version](https://github.com/buganini/CPPUI)

# Features

* [Declarative UI](https://buganini.github.io/PUI/doc/Reference.html#declarative-components)
* [Reactive state with two-way binding](#state--data-binding)
* [Hot Reloading](#hot-reload)
* [Multiple Backends](#backends)
  * PySide6
  * wxPython
  * Tkinter
  * Flet
  * Textual
  * Pyodide (client-side Python)
  * Web (server-side Python)
    * [Built-in reverse wstunnel integration](https://github.com/buganini/PUI/blob/HEAD/doc/web-reference.md#reverse-tunnel)
* [Responsive / Adaptive Layout](#responsive--adaptive-layout)

## Responsive / Adaptive Layout

Adapt to the parent container's available size: switch between rows and columns,
show or hide content at breakpoints, and override layout or style settings.
Desktop and browser backends use logical pixels; Textual has separate…
