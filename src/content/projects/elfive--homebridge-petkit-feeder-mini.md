---
repo: "elfive/homebridge-petkit-feeder-mini"
name: "homebridge-petkit-feeder-mini"
description: "control your petkit feeder mini from homekit, get full use of iOS automation"
readmeQualityOk: true
url: "https://github.com/elfive/homebridge-petkit-feeder-mini"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 33
forks: 7
openIssues: 2
closedIssues: 12
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-09-23T02:33:32Z"
lastCommitAt: "2026-11-09T03:30:09Z"
lastReleaseAt: "2020-09-26T13:34:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["elfive"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8f1ed3a5658a185ff5b78ba781f5f7727d5833965e54d13df6bf17040b9973f/elfive/homebridge-petkit-feeder-mini"
---

## homebridge-petkit-feeder-mini

## 0）Important Note！

- the configuration file format of v3.0.0 is <strong>NOT compatible</strong> with any previous version (the <code>devices</code> array, <code>model</code>, <code>deviceId</code>, <code>group_id</code> and the captured <code>headers</code> are all gone, and <code>location</code> is replaced by the <code>region</code> country code, the server address is derived from the region automatically), please <strong>remove the old config and re-configure this plugin</strong> from the settings page after upgrading;
- since v3.0.0, this plugin uses a brand new <strong>account + password login</strong> to talk to the Petkit server, the packet capture based <code>X-Session</code> login is no longer needed;
- the account filled in this plugin <strong>must have the permission of all the devices you want to control</strong> (owned by the account, or shared to it);
- Petkit only allows <strong>one active session per account</strong>, which means this plugin <strong>can NOT stay logged in at the same time as the Petkit App</strong> when using the same account, logging in on one side will kick the other side out;
- therefore, it is highly…
