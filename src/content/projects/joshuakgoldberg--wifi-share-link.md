---
repo: "JoshuaKGoldberg/wifi-share-link"
name: "wifi-share-link"
description: "Generates shareable WIFI:// link strings for wifi credentials. 📶"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/wifi-share-link"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [53, 47]
stars: 18
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-09-04T14:23:09Z"
lastCommitAt: "2026-11-25T03:19:49Z"
lastReleaseAt: "2026-11-25T03:19:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 47
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b908cb4c75a544adebd672ea73539387afb2022bb563688ffc638df4c31686b/JoshuaKGoldberg/wifi-share-link"
---

Generates shareable <code>WIFI://</code> link strings for WiFi credentials.
	📶

	
	

	

## Usage

```shell
npm i wifi-share-link
```

```ts
import { generateWifiShareLink } from "wifi-share-link";

// "WIFI:T:None;S:My Network;;"
generateWifiShareLink({
	ssid: "My Network",
});
```

### Options

Only `ssid` is required.

- `encryption` _(`string | undefined`)_: The type of encryption, such as `"WEP"` or `"WPA"`.
  Defaults to `"nopass"` if not provided.
- `hidden` _(`boolean | undefined`)_: Whether the network avoids broadcasting its SSID publicly.
  This indicates to your device whether to attempt a connection to a hidden network.
- `password` _(`string | undefined`)_: Private password used to connect if there is encryption.
- `ssid` _(`string`)_: User-displayed name of the network.

```ts
// "WIFI:T:WPA;S:My Network;P:CorrectHorseBatteryStaple;H:true;;"
generateWifiShareLink({
	encryption: "WPA",
	hidden: true,
	password: "CorrectHorseBatteryStaple",
	ssid: "My Network",
});
```

## What Is This?

`WIFI:` strings are the de facto format for WiFi credentials in QR codes, as scanned by Android and iOS cameras.
There is no formal RFC; the canonical references are:
