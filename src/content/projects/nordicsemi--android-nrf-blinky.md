---
repo: "nordicsemi/Android-nRF-Blinky"
name: "Android-nRF-Blinky"
description: "nRF Blinky is an application developed targeting an audience of developers who are new to Bluetooth Low Energy"
url: "https://github.com/nordicsemi/Android-nRF-Blinky"
homepage: "https://www.nordicsemi.com/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 297
forks: 154
openIssues: 1
closedIssues: 54
watchers: 15
contributors: 12
recentReleases: 0
createdAt: "2015-11-11T12:23:40Z"
lastCommitAt: "2026-07-03T12:22:45Z"
lastReleaseAt: "2019-08-12T10:30:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 44
maintainers: ["philips77", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/45980159/dada5d88-b183-46bd-ae15-14bc51661df9"
---

# nRF Blinky for Android

nRF Blinky is an application targeting an audience of developers who are new to 
Bluetooth Low Energy. 

The app can be easily modified to work with other devices and may act as a template app.

This very simple application contains two basic features:
* turning on a LED on a connected Bluetooth LE device,
* receiving a Button press and release events from the device.

Based on these 2 states, the derived flows allow to detect:
* button click events (press and release),
* long button click events (pressed for longer than 1 second).

nRF Blinky demonstrates how to implement basic Bluetooth LE operations (blinking)
or binding flows and states (control the LED state based on the button state).

 

In *mock* flavor an additional UI allows to control the mock environment and the virtual device:

## Kotlin BLE Library

This app is designed to work as a sample app for the 
[Kotlin BLE Library](https://github.com/nordicsemi/Kotlin-BLE-Library/).
It demonstrates how a connection can be handled using a
[Service](https://developer.android.com/develop/background-work/services) with a clear
separation of the Bluetooth LE logic from the App using a…
