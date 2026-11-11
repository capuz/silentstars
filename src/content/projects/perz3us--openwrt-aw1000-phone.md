---
repo: "Perz3us/openwrt-aw1000-phone"
name: "openwrt-aw1000-phone"
description: "RJ11 phone port support for the Arcadyan AW1000 on OpenWrt"
readmeQualityOk: true
url: "https://github.com/Perz3us/openwrt-aw1000-phone"
language: "C"
languages: ["C"]
languagePcts: [60]
topics: ["aw1000", "fxs", "ipq8074", "luci", "openwrt", "quectel", "slic", "volte"]
stars: 19
forks: 8
openIssues: 1
closedIssues: 14
watchers: 4
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T10:52:08Z"
lastCommitAt: "2026-11-11T19:44:35Z"
lastReleaseAt: "2026-10-31T09:51:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 49
maintainers: ["Perz3us", "nooblk-98"]
openGraphImageUrl: "https://opengraph.githubassets.com/21f9ca98c6539fdb9ae13d40ed451461d10d66d0d8f940c085baea39585d12c0/Perz3us/openwrt-aw1000-phone"
---

The AW1000 has a phone port on the back, but it only works on the stock Telstra firmware.
After moving to OpenWrt it was just a dead socket, so I reverse engineered the hardware and
wrote a driver for it. Now I can plug a normal desk phone into the router and make and take
calls with the SIM in the 5G modem.

It comes as three packages: `kmod-aw1000-fxs`, the kernel driver, `fxsd`, the daemon that
runs the line and talks to the modem, and `luci-app-fxs`, the LuCI pages.

## What it does

Pick up, hear a dial tone, dial. Incoming calls ring the phone with caller ID. On top of that:

- HD calling (16 kHz wideband)
- Caller ID in FSK Bellcore, FSK ETSI or DTMF
- Hold and call waiting with the FLASH button
- Keypad tones during a call, for bank and carrier menus
- Speed dial, redial, call back and network codes like `*#21#`
- Call forwarding and USSD
- A hotline that dials one number when the handset is lifted
- Do not disturb with weekly windows, holidays and per-contact priority
- A Quiet button for an hour or two
- [Call recording](https://github.com/Perz3us/openwrt-aw1000-phone/blob/HEAD/docs/recording.md) to a USB stick or the router
- [SIP phones and…
