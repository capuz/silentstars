---
repo: "TorstenRobitzki/bluetoe"
name: "bluetoe"
description: "C++ Framework to build Bluetooth LE Server (GATT)"
readmeQualityOk: true
url: "https://github.com/TorstenRobitzki/bluetoe"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["bluetooth-low-energy", "c-plus-plus", "gatt-server", "ble", "gatt"]
stars: 144
forks: 29
openIssues: 48
closedIssues: 54
watchers: 17
contributors: 11
recentReleases: 0
createdAt: "2015-04-06T11:04:10Z"
lastCommitAt: "2026-09-09T08:17:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 89
undervaluedScore: 31
maintainers: ["TorstenRobitzki"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca94e67d4660debbfa0e51ff07b04d3d17da4fe8c1894676393974ca18e48eb0/TorstenRobitzki/bluetoe"
discussionCount: 2
---

# Bluetoe [](https://github.com/TorstenRobitzki/bluetoe/actions/workflows/tests.yml) [](https://gitter.im/TorstenRobitzki/bluetoe?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Putin's Invasion of Ukraine

Please consider donating to one of the funds that help victims of the war in Ukraine:
- https://spendenkonto-nothilfe.de

## Overview

Bluetoe implements a GATT server with a very low memory footprint and a convenient C++ interface. Bluetoe makes things easy but gives you the opportunity to fiddle with all the low-level GATT details if necessary. Bluetoe's primary target is very small microcontrollers. Here is a complete example of a small GATT server that allows a client to controll an IO pin, running on a nRF52832:

    #include <bluetoe/server.hpp>
    #include <bluetoe/device.hpp>
    #include <nrf.h>

    using namespace bluetoe;

    // LED1 on a nRF52 eval board
    static constexpr int io_pin = 17;

    static std::uint8_t io_pin_write_handler( bool state )
    {
        // On an nRF52 eval board, the pin is connected to the LED's cathode. This inverts the logic.
        NRF_GPIO->OUT = state
            ? NRF_GPIO->OUT & ~( 1 << io_pin )…
