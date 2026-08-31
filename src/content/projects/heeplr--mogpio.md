---
repo: "heeplr/mogpio"
name: "mogpio"
description: "zero programming \"driverless\" USB GPIO"
readmeQualityOk: true
url: "https://github.com/heeplr/mogpio"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["esp32", "esp8266", "gpio", "gpio-extender", "gpio-pins", "libgpiod", "pico", "usb", "usbio"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 3
createdAt: "2026-04-15T17:24:41Z"
lastCommitAt: "2026-08-31T10:01:46Z"
lastReleaseAt: "2026-08-31T09:07:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 43
maintainers: ["heeplr"]
openGraphImageUrl: "https://opengraph.githubassets.com/f400aae0ed624ec4632a0194e5a9e603c875e419b9dc1169a9356ae0bc809b6f/heeplr/mogpio"
---

moGPIO provides straight forward plug & play GPIO via USB

# Motivation

A lot of USB-to-GPIO adapters exist but I found none that is really plug & play,
let alone standard [libgpiod API](https://libgpiod.readthedocs.io) compatible.

# Overview

access GPIOs using:
  * standard libgpiod API (usbio)
  * interactive terminal (virtual serial port)
  * reading/writing files on emulated mass storage device

# Install

Copy
* mogpio-intern-pico.uf2 to your pico.
* mogpio-intern-pico2.uf2 to your pico2

(s. [latest release](https://github.com/heeplr/mogpio/releases))

# Usage

There are three ways moGPIO exposes GPIOs:

## 1. USBIO Protocol

moGPIO will show up as /dev/gpiochipX[^1] once you plug it in, ready to use.
It's compatible to most applications that build upon libgpiod.
(e.g. https://docs.kernel.org/driver-api/gpio/drivers-on-gpio.html).

moGPIO uses the [usbio](https://github.com/intel/usbio-drivers) driver that
should come with any linux kernel >=6.18.x

[^1]: As the time of writing, the usbio protocol supports 5 * 32 GPIO max per device. Any more pins can be controlled only with terminal or mass storage mode. Also limiting to 32 banks is a memory footprint compromise and can…
