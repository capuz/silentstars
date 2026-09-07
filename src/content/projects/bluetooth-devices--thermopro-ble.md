---
repo: "Bluetooth-Devices/thermopro-ble"
name: "thermopro-ble"
description: "Thermopro BLE Sensors"
readmeQualityOk: true
url: "https://github.com/Bluetooth-Devices/thermopro-ble"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 27
forks: 14
openIssues: 5
closedIssues: 5
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2022-08-24T00:56:46Z"
lastCommitAt: "2026-09-07T08:35:23Z"
lastReleaseAt: "2024-01-18T21:50:21Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 41
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "bluetoothbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9efcd020bd13fcbb9c67a766b5ad3b393f7a6e7e5261525a64e2b5cdab598456/Bluetooth-Devices/thermopro-ble"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# Thermopro BLE

  </a>
  </a>
  </a>
</p>
  </a>
  </a>
  </a>
</p>
  </a>
</p>

Thermopro BLE Sensors

## Installation

Install this via pip (or your favourite package manager):

`pip install thermopro-ble`

## Supported devices

This library decodes ThermoPro Bluetooth Low Energy advertisements. It
does not pair with or connect to devices for sensor data — readings are
parsed passively from the broadcasts each thermometer emits.

Devices are matched by the advertised name prefix. The following families
have decoders with test coverage:

| Family  | Verified models                | Sensors                                             |
| ------- | ------------------------------ | --------------------------------------------------- |
| `TP35x` | TP357, TP357S, TP358, TP358S   | Temperature, humidity, battery                      |
| `TP39x` | TP393                          | Temperature, humidity, battery                      |
| `TP96x` | TP960R, TP962R (TempSpike)     | Internal/ambient probe temperature, battery         |
| `TP97x` | TP970R, TP972S (TempSpike Pro) | Tip/center/end probe temperatures, ambient, battery |

A device whose advertised name starts with one of the…
