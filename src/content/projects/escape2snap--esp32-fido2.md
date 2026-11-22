---
repo: "Escape2snap/esp32-fido2"
name: "esp32-fido2"
description: "Open-source YubiKey alternative for ESP32-S3: FIDO2/WebAuthn security key and OpenPGP smartcard in one USB device."
readmeQualityOk: true
url: "https://github.com/Escape2snap/esp32-fido2"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["agpl", "ccid", "ctap2", "embedded", "esp-idf", "esp32-s3", "fido2", "gnupg", "hardware-security-key", "openpgp"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-03T22:06:54Z"
lastCommitAt: "2026-11-22T11:50:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["Escape2snap"]
openGraphImageUrl: "https://opengraph.githubassets.com/b25c47d7c8e7f3fc12fdf79b67aa2abde062afb85dfb99f2870607d780979f46/Escape2snap/esp32-fido2"
---

# ESP32-FIDO2

ESP32-FIDO2 turns an **ESP32-S3** into a USB security key that combines:

- **FIDO2 / CTAP 2.1 / U2F** — WebAuthn, resident credentials, PIN/UV
- **OpenPGP card v3.4** — GnuPG, SSH, S/MIME, PSO:CDS and PSO:DEC
- **PIV** — OpenSC/PIV-tool compatible applet; PACS deployment requires issuer provisioning

The firmware is a standalone ESP-IDF project built on
[pico-keys-sdk](https://github.com/polhenarejos/pico-keys-sdk). It does
not target the Raspberry Pi Pico.

## Status

| Area | Status |
|------|--------|
| FIDO2 / WebAuthn / U2F | Working |
| OpenPGP RSA / NIST ECC | Working |
| OpenPGP Ed25519 / X25519 | Working (hardware-tested) |
| PIV | Working with OpenSC/PIV tooling; PACS requires issuer provisioning |
| OATH TOTP/HOTP | Not built (applet removed) |
| Yubico OTP | Not implemented |
| Windows CCID + HID | Working; one reconnect may be needed after first enumeration |

Hardware-verified on an ESP32-S3 + Windows host:
