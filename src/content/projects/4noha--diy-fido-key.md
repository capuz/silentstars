---
repo: "4noha/diy-fido-key"
name: "diy-fido-key"
description: "DIY USB FIDO2 security key on ESP32-S3 (pico-fido + ST7735 status display)"
originalDescription: "DIY USB FIDO2 security key on ESP32-S3 (pico-fido + ST7735 status display)"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/4noha/diy-fido-key"
language: "C"
languages: ["C", "Python"]
languagePcts: [57, 30]
topics: ["esp32-s3", "fido2", "pico-fido", "security-key", "st7735", "webauthn"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T16:55:46Z"
lastCommitAt: "2026-10-23T09:32:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 10
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4bb5afebfe028d2ed14fa8fd0294b56602684353434f9e17a53639cbcc8e76a9/4noha/diy-fido-key"
---

# diy-fido-key

A DIY USB-connected FIDO2/WebAuthn passkey device (a homemade YubiKey) made by flashing an inexpensive off-the-shelf ESP32 board with `pico-fido` firmware.

Source: <https://www.makeuseof.com/made-own-yubikey-less-than-8/>

## Target hardware / prerequisites

- **ESP32-S2 or ESP32-S3** (USB-OTG device mode is required)
- ⚠ **ESP32-C3, original ESP32, C6, and H2 are not supported** (no USB-OTG peripheral)
- A browser (for the web flasher at `picokeys.com/esp32-flasher/`)

## What it does

The full feature set of `pico-fido` (CTAP 2.3 / CTAP 1 / WebAuthn / U2F / ECDSA and EdDSA with multiple curves / YubiKey-style OTP emulation) lets it be used from a PC as a genuine USB security key.

## Setup

```
1. Prepare an ESP32-S2/S3 board (about $6–8)
2. Open https://picokeys.com/esp32-flasher/
3. Enter bootloader mode with BOOT+RESET and connect from the browser
4. Select the "Pico Fido" firmware and write it
5. Plug into a PC; it is recognized as an HID authenticator
6. Patch VID/PID with the PicoKey App (for compatibility with OpenSC/ykman/GnuPG)
```

## Constraints

- **No FIDO authentication and no secure element.** Limited to personal use, experiments, and backup keys…
