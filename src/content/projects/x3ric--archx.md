---
repo: "x3ric/ArchX"
name: "ArchX"
description: "Automated Arch Installer"
url: "https://github.com/x3ric/ArchX"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["arch-linux", "archlinux", "archlinux-installer", "linux"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-27T16:17:04Z"
lastCommitAt: "2026-06-23T23:20:57Z"
lastReleaseAt: "2024-12-31T17:39:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 30
maintainers: ["x3ric"]
openGraphImageUrl: "https://opengraph.githubassets.com/20a6cdb8efd38d4a7cfc6bb75085a879a248bd79f4d6ce7adb2cedcb3df3eb01/x3ric/ArchX"
---

# ArchX

> Opinionated Arch Linux installer.
> Fast base setup with a firstboot handoff into [`usr`](https://github.com/X3ric/usr).

<p>
  </a>
</p>

<br>

<table align="center">
<tr>
<td align="left">

<pre><code>curl -fsSL https://raw.githubusercontent.com/x3ric/ArchX/main/install | bash</code></pre>

</td>
</tr>
</table>

**Default desktop:** Hyprland

</div>

---

## Install

Boot into an Arch Linux live ISO, make sure you have internet, then run the command above.

You can use the official [Arch ISO](https://archlinux.org/download/) or the prebuilt [ArchX ISO releases](https://github.com/X3ric/ArchX/releases).

ArchX installs the base system, packages, bootloader, and a local firstboot handoff into `usr`.

<details>
<summary><b>Keyboard layout</b></summary>

```sh
loadkeys us
```

Examples:

```sh
loadkeys us
loadkeys it
loadkeys es
```

</details>

<details>
<summary><b>Wi-Fi setup</b></summary>

The installer needs internet for the first `curl`.

Use `iwctl` if Ethernet is unavailable:

```sh
iwctl
device list
station DEVICE scan
station DEVICE get-networks
station DEVICE connect NETWORK
exit
```

Replace `DEVICE` with your Wi-Fi device and `NETWORK` with your network name.…
