---
repo: "pcm720/OSDMenu"
name: "OSDMenu"
description: "Patches for OSDSYS and HDD OSD (Browser 2.0) based on Free McBoot 1.8."
url: "https://github.com/pcm720/OSDMenu"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 80
forks: 6
openIssues: 1
closedIssues: 21
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-03-16T20:36:27Z"
lastCommitAt: "2026-06-27T00:37:09Z"
lastReleaseAt: "2025-06-30T20:27:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 44
maintainers: ["pcm720"]
openGraphImageUrl: "https://opengraph.githubassets.com/34bf1d4d6903b3715ef889b6226a26642d370a7cfa052a3d6ae0bffcf30fe4ab/pcm720/OSDMenu"
---

# OSDMenu

Patches for OSDSYS and HDD OSD (Browser 2.0) based on Free McBoot 1.8.  

## Usage

### OSDMenu
1. Copy `osdmenu.elf` to `mc?:/BOOT/` or copy and paste `SYS_OSDMENU.psu` via wLaunchELF using `psuPaste`
   Copy DKWDRV to `mc?:/BOOT/DKWDRV.ELF` _(optional)_ 
2. Edit `mc?:/SYS-CONF/OSDMENU.CNF` [as you see fit](patcher/README.md#osdmenucnf)
3. Configure PS2BBL to launch `mc?:/BOOT/osdmenu.elf` or launch it manually from anywhere

### OSDMenu as the System Update

You can install OSDMenu as the System Update instead of FMCB or PS2BBL to get faster boot times.  
To install OSDMenu as the System Update, you can use the **latest development build** of [KELFBinder](https://github.com/israpps/KELFBinder).  

The release archive contains ready-to-use KELFBinder install script and directory structure:
  - `patcher/kelfbinder/EXTINST.lua` — custom installation script that installs OSDMenu as the system update and copies wLaunchELF from KELFBinder release into `BOOT/BOOT.ELF`
  - `patcher/kelfbinder/KELF/SYSTEM.XLF` — encrypted and signed OSDMenu executable to be installed as `osd???.elf` or `osdmain.elf`
  - `patcher/kelfbinder/ASSETS/osdmenu.icn` and `*.sys` files — OSDMenu icon…
