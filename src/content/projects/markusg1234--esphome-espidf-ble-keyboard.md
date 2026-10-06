---
repo: "markusg1234/ESPHome-espidf_ble_keyboard"
name: "ESPHome-espidf_ble_keyboard"
description: "ESP32 BLE HID Keyboard custom component for ESPHome"
readmeQualityOk: true
url: "https://github.com/markusg1234/ESPHome-espidf_ble_keyboard"
homepage: "https://github.com/markusg1234/ESPHome-espidf_ble_keyboard"
language: "HTML"
languages: ["HTML", "C++"]
languagePcts: [48, 45]
topics: ["ble", "bluetooth", "esp-idf", "esp32", "esphome", "hid", "home-assistant", "keyboard", "esphome-component", "esphome-ble-keyboard"]
stars: 51
forks: 15
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-02-24T08:55:52Z"
lastCommitAt: "2026-10-06T10:42:15Z"
lastReleaseAt: "2026-09-12T07:05:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["markusg1234"]
openGraphImageUrl: "https://opengraph.githubassets.com/f621c50ea8d24abd019a9777c4be005d0fb8eedb01c32538b26f7f9cb3ca02d7/markusg1234/ESPHome-espidf_ble_keyboard"
discussionCount: 1
---

# ESP32 BLE HID Keyboard & Remote for ESPHome

This is a custom [ESPHome](https://esphome.io) component that turns an ESP32 into a Bluetooth Low Energy (BLE) HID keyboard and mouse that can switch between up to ten paired hosts. It serves its own web remote and ships Home Assistant dashboard cards. Any key on any host can also fire a Home Assistant action, such as an IR command, so one remote can mix Bluetooth keys and IR on the same page — and a host slot can have Bluetooth turned off entirely to be a pure IR remote, making it a universal remote as well. This component targets **ESP-IDF Bluedroid GATTS** (rather than NimBLE), chosen for the HID behavior and host compatibility validated in this project.

## Features

* **Universal Remote:** A web remote and Home Assistant card, drawn in built-in or your own styles with logos and a small status screen. Any key on any host can fire a Home Assistant action, such as sending an IR command, alongside keys that go over Bluetooth — power over IR and navigation over Bluetooth on the same page, say. A host slot can also have Bluetooth turned off to act purely as a remote page. Styles travel: **Export all** on one keyboard's page and…
