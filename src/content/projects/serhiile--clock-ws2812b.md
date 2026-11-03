---
repo: "SerhiiLe/clock-ws2812b"
name: "clock-ws2812b"
description: "Clock based on ws2812b 32x8 RGB matrix"
originalDescription: "Clock based on ws2812b 32x8 RGB matrix"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/SerhiiLe/clock-ws2812b"
language: "C++"
languages: ["C++", "HTML", "C"]
languagePcts: [56, 22, 20]
topics: ["nodemcu-esp8266", "ws2812b", "rcwl-0516", "platformio", "esp8266", "esp32", "esp32-c3", "esp32-platformio", "esp32-s3"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2022-03-25T15:33:42Z"
lastCommitAt: "2026-11-03T12:47:35Z"
lastReleaseAt: "2026-10-31T18:15:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 52
maintainers: ["SerhiiLe"]
openGraphImageUrl: "https://opengraph.githubassets.com/855cc38819e42c97c8fbb1f50aa88c9c9aa03a015bb6d64c1fc2a8fb748498ac/SerhiiLe/clock-ws2812b"
---

# Clock based on an addressable LED matrix

A clock based on a ws2812b addressable LED matrix.
Works on the ESP8266 and ESP32 (ESP32, ESP32C3) platforms.
English is supported, unlike this description. However, it can be translated using Google Translate.

Works on the ESP8266 and ESP32 (ESP32, ESP32C3) platforms.

## Contents

- [About the project](#о-проекте)
- [Clock features](#возможности-часов)
- [Controls](#управление)
- [Features](#особенности)
- [Schematic](#схема)
- [Build (compilation and flashing)](#сборка)
- [External sensors](#внешние-датчики)
- [Sending text and display](#отправка-текста-та-экран)
- [Telegram](#телеграм)
- ["Cuckoo" mode](#режим-кукушка)
- [Changes](#изменения)

## About the project

Inspired by the [GyverMatrixOS](https://alexgyver.ru/gyvermatrixbt/) project
and its ESP-8266 port, [GyverMatrixWiFi](https://github.com/vvip-68/GyverMatrixWiFi/).
Unfortunately, these projects are not meant for the ordinary, boring clock mode. As a result, this project was created.
There are also further developments of the project [GyverLamp](https://github.com/AlexGyver/GyverLamp) / [GyverPanelWiFi](https://github.com/vvip-68/GyverPanelWiFi/wiki) /…
