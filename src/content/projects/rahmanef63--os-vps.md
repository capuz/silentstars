---
repo: "rahmanef63/os-vps"
name: "os-vps"
description: "Topside — mobile-first web cockpit for a headless Linux VPS. Terminal, files, monitor, media + a real remote browser in a desktop-style UI. Single Next.js app, no database, no agent."
url: "https://github.com/rahmanef63/os-vps"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["file-manager", "nextjs", "playwright", "self-hosted", "shadcn-ui", "terminal", "vps", "web-desktop"]
stars: 33
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-29T17:44:06Z"
lastCommitAt: "2026-06-23T23:27:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 36
maintainers: ["rahmanef63"]
openGraphImageUrl: "https://opengraph.githubassets.com/97cc79519c829d00afd3819ed099152235563988a26ffa274699d8570f53df9e/rahmanef63/os-vps"
---

# Topside — a mobile-first web cockpit for a headless Linux VPS

> Repo/service slug stays `os-vps` (deploy paths, systemd unit, domain). "Topside"
> is the product name shown in the UI.

A real interactive terminal (full PTY — vim, top, ssh all work), file manager,
system monitor, media preview and a real remote browser
for your server — from any browser, especially a phone. It presents a
desktop-style UI, but the value is **utility**: fast control of a headless box
without the weight of XRDP / VNC.

</p>

| Mobile-first | Terminal | Image editor |
|:---:|:---:|:---:|
| <img src="./docs/media/mobile-home.png" alt="Phone home screen with app grid" width="220" /> | <img src="./docs/media/app-terminal.png" alt="Terminal running neofetch" width="340" /> | <img src="./docs/media/app-image-editor.png" alt="Layer-based image editor" width="340" /> |

It runs *on* the server as a normal user process and talks to the machine
directly. Single Next.js app — **no database, no external agent**.

```
phone / browser ──https──> os-vps (Next.js, :4005) ──┬── lib/host → Node fs / child_process (host, non-root)
                  signed-cookie auth (lib/auth)        └── os-browser (Playwright,…
