---
repo: "MohammedEl-sayedAhmed/clipman"
name: "clipman"
description: "Wayland-native clipboard history for Linux — press Super+V to browse, search, pin, and paste. GTK + Python."
url: "https://github.com/MohammedEl-sayedAhmed/clipman"
homepage: "https://mohammedel-sayedahmed.github.io/clipman/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["catppuccin", "clipboard", "clipboard-manager", "gnome", "gnome-extension", "linux", "python", "ubuntu", "wayland", "gtk"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-02-10T12:54:16Z"
lastCommitAt: "2026-07-04T19:22:53Z"
lastReleaseAt: "2026-06-25T14:12:38Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 60
maintainers: ["MohammedEl-sayedAhmed", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/584eb125be9dc124645d0bbbd6a1a7c9cd3f229fbe11faf7b70a149a2a54891a/MohammedEl-sayedAhmed/clipman"
fundingLinks: ["CUSTOM:https://www.paypal.com/paypalme/mohammedelsayedammar"]
discussionCount: 0
---

# Clipman

**A clipboard history manager for Ubuntu/GNOME on Wayland**

Like Windows `Win+V` — but for Linux.

---

Press **Super+V** to view your clipboard history, search entries, pin favorites, and instantly paste previous copies.

<br>

<br>

<sub><i>Above: the shipped GTK 4 + libadwaita popup. The full settings surface is an <code>Adw.PreferencesWindow</code>, the snippets editor is an <code>Adw.NavigationSplitView</code> dialog, and the 16 edge states (empty, no-results, incognito, sensitive-cleared, first-run, errors…) render as Adwaita <code>StatusPage</code> / <code>Banner</code> / <code>AlertDialog</code> with a shared Catppuccin overlay. <a href="https://mohammedel-sayedahmed.github.io/clipman/#design">Browse the mockups</a> · <a href="https://mohammedel-sayedahmed.github.io/clipman/">project page</a>.</i></sub>

</div>

---

Clipman is a **Wayland-native** clipboard manager built on a GNOME Shell extension — no polling, no subprocesses, no screen flicker. It detects clipboard changes through `Meta.Selection` signals and communicates over D-Bus, making it fundamentally different from tools that rely on `wl-paste --watch` or timer-based polling. Privacy is built in:…
