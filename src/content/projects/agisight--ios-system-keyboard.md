---
repo: "Agisight/ios-system-keyboard"
name: "ios-system-keyboard"
description: "Keyboard layout dataset for iOS/macOS for any language — 47 layouts for 23 languages, mostly Cyrillic, with an interactive viewer. Tuvan and Sakha keyboards ship in iOS 27 (designed in coordination with Apple engineers)"
readmeQualityOk: true
url: "https://github.com/Agisight/ios-system-keyboard"
homepage: "https://agisight.github.io/ios-system-keyboard/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [64, 31]
topics: ["apple", "ios", "keyboard", "cyrillic", "keyboard-layout", "low-resource-languages", "macos", "tuvan", "unicode-cldr"]
stars: 15
forks: 18
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2025-11-03T06:58:00Z"
lastCommitAt: "2026-10-05T10:47:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 73
maintainers: ["Agisight", "tadzjibov", "m4rr"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ebb15df131142d4e37de9c1500d1579304040f81df83b1c1d7bab06b5aa9844/Agisight/ios-system-keyboard"
---

# 🇺🇸 Dataset for iOS/macOS Keyboards

This repository contains layout data for any languages. For example, the **Tuvan Cyrillic keyboard**,
designed for integration with Apple Keyboard, Unicode CLDR, and related input systems.

## 📘 Description
The keyboard layout dataset is based on the modern design used in iOS and macOS.

The layouts conform to a unified keyboard scheme and are compatible with layout generation tools for specific platforms.

You can use the approach I used in the example of "tyv – Тыва дыл" (Tuvan language), slightly modifying the layout rows to include all the characters used in the modern writing system of the selected language.

Its goal is to provide native users with a convenient, accurate, and inclusive typing experience.

At a minimum, you need to describe the files ``lang-3-rows.yaml`` and ``lang-longpress.yaml``, where lang is the code of your language.

### A familiar example
Most of you are familiar with the system keyboard for Russian. It's described [here (click here)](https://github.com/Agisight/ios-system-keyboard/tree/main/layout/rus).

## 🚀 Interactive Viewers & Generators
We provide two zero-dependency standalone HTML artifacts in `dist/`…
