---
repo: "easyeda/eext-simulation-with-simulide"
name: "eext-simulation-with-simulide"
description: "EasyEDA Pro extension: schematic simulation with SimulIDE"
originalDescription: "嘉立创EDA专业版扩展：原理图SimulIDE仿真；EasyEDA Pro extension: schematic simulation with SimulIDE"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/easyeda/eext-simulation-with-simulide"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["easyeda", "easyeda-extension", "jlceda", "jlceda-extension", "simulation", "simulide"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-15T08:47:48Z"
lastCommitAt: "2026-10-23T08:46:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 71
undervaluedScore: 56
maintainers: ["longye-888", "easyeda2021", "JasonYANG170"]
openGraphImageUrl: "https://opengraph.githubassets.com/af092eeb7312840d3240326694dac530369ae7de65c618d54ccde5c49fd248ff/easyeda/eext-simulation-with-simulide"
---

Chinese | [English](https://github.com/easyeda/eext-simulation-with-simulide/blob/HEAD/README.en.md)

# eext-simulation-with-simulide

A WebAssembly circuit simulation tool based on the SimulIDE engine, providing powerful in-browser circuit simulation for EasyEDA Pro.

This project is an EasyEDA extension plugin. It compiles the C++ simulation engine of SimulIDE to WebAssembly, enabling real-time circuit simulation in the browser.

## ✨ Features

- **WebAssembly compilation** - Based on Emscripten, the C++ simulation engine is compiled to WASM and runs efficiently in the browser

- **Real-time simulation** - Event-driven simulation engine that supports real-time interaction and dynamic component property updates

- **Rich component library** - Supports many circuit components, including BJTs, MOSFETs, diodes, resistors, inductors, logic gates, microcontrollers, and more

- **EasyEDA extension** - Integrated as an extension plugin and communicates with the EasyEDA platform through standard APIs

- **Data visualization** - Simulation data output in JSON format, pushed in real time to the EasyEDA interface

- **High performance** - Written in C++20 and optimized with O3, providing…
