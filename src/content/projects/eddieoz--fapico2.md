---
repo: "eddieoz/fapico2"
name: "fapico2"
description: "The F**king Authenticator"
readmeQualityOk: true
url: "https://github.com/eddieoz/fapico2"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [75, 24]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-28T09:32:58Z"
lastCommitAt: "2026-10-03T22:05:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["eddieoz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd3741e185f2fceafe43e43543ca090ac35f70a6d74e76ba3bce7e783f3ff423/eddieoz/fapico2"
---

# fapico2

A Rust rewrite of the merged `pico-fido2` firmware on the Trussed +
embassy-rp stack, targeting the Raspberry Pi Pico 2 (RP2350,
`thumbv8m.main-none-eabi`). **One firmware, one binary**: a single UF2 image
serves FIDO2/U2F (CTAP-HID), OpenPGP 3.4, OATH, OTP and Management over one
USB composite device (CCID + CTAP HID), apps selected by AID.

**Status:** FIDO2/U2F, OpenPGP 3.4 and OATH command sets are served on the
RP2350, with hardware acceptance passed for all three; PIV serving is
**deferred** (see the app table). The C `pico-fido2` tree stays frozen but
shippable; all new features land only in Rust.

`firmware/` is the binary crate (USB serve loops, `memory.x`, `uf2gen.py`);
`platform/` the transport, AID dispatcher, TRNG, secure store and C-flash
reader; `apps/` the applet crates.

## Apps and AIDs

| App | Transport | AID | Notes |
|---|---|---|---|
| OpenPGP 3.4 | CCID | `D2 76 00 01 24 01` | full opcard OpenPGP 3.4 command set; hardware-accepted (`docs/hardware-matrix.md` row 1) |
| OATH (YKOATH) | CCID | `A0 00 00 05 27 21 01` | full YKOATH command set; hardware-accepted (`docs/hardware-matrix.md` row 3) |
| OTP | CCID | `A0 00 00 05 27 20 01` | served inside…
