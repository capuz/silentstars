---
repo: "3aa49ec6bfc910647fa1c5a013e48eef/i-love-luci"
name: "i-love-luci"
description: "I Love LuCI theme for OpenWrt"
url: "https://github.com/3aa49ec6bfc910647fa1c5a013e48eef/i-love-luci"
language: "TypeScript"
languages: ["TypeScript", "UnrealScript"]
languagePcts: [57, 27]
stars: 26
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-14T05:24:59Z"
lastCommitAt: "2026-06-23T23:17:31Z"
lastReleaseAt: "2026-06-20T11:42:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: ["3aa49ec6bfc910647fa1c5a013e48eef"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b2521932020231fba46e24869f721d1ccc56027b0e96b152a5071e0d7b5040e/3aa49ec6bfc910647fa1c5a013e48eef/i-love-luci"
---

# I Love LuCI

I Love LuCI is a modern OpenWrt administration app delivered as a LuCI application. It uses a React/Vite shell for the main experience, LuCI/rpcd/ubus for authenticated router access, native I Love LuCI screens where parity has been proven, and a LuCI compatibility bridge for every current or future LuCI app route that has not been rebuilt natively.

The current architecture is a wrapper, not a hard fork of LuCI. The package still depends on `luci-base`, installs LuCI menu/template files, discovers routes from live LuCI menu metadata, and keeps LuCI as the compatibility runtime. Third-party and package-specific LuCI apps such as banIP and AdBlock Fast default to LuCI compat so existing forms, JavaScript, save/apply behavior, deep links, ACL visibility, and side effects remain intact.

The router console uses the `i-love-luci-console` helper. The helper owns PTY sessions behind a root-only UNIX socket; browser input/output is tunnelled through authenticated same-origin LuCI RPC calls. The browser does not receive helper credentials and does not connect directly to a second console port.

Stable package version: `1.0.0-r5`.

## Install Without Building

Use the…
