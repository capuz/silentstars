---
repo: "pcm720/OSDMenu"
name: "OSDMenu"
description: "Patches for OSDSYS and HDD OSD (Browser 2.0) based on Free McBoot 1.8."
readmeQualityOk: true
url: "https://github.com/pcm720/OSDMenu"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 84
forks: 6
openIssues: 2
closedIssues: 22
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-03-16T20:36:27Z"
lastCommitAt: "2026-07-04T19:01:21Z"
lastReleaseAt: "2025-06-30T20:27:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 43
maintainers: ["pcm720"]
openGraphImageUrl: "https://opengraph.githubassets.com/301fd25f0d01eebd7d084aedd4a6968e86cca1c015102922a4421aee42e5f118/pcm720/OSDMenu"
---

# OSDMenu

Patches for OSDSYS and HDD OSD (Browser 2.0) based on Free McBoot 1.8.  

## Usage

### OSDMenu
1. Copy `osdmenu.elf` to `mc?:/BOOT/` or copy and paste `SYS_OSDMENU.psu` via wLaunchELF using `psuPaste`
   Copy DKWDRV to `mc?:/BOOT/DKWDRV.ELF` _(optional)_ 
2. Edit `mc?:/SYS-CONF/OSDMENU.CNF` [as you see fit](https://github.com/pcm720/OSDMenu/blob/HEAD/patcher/README.md#osdmenucnf)
3. Configure PS2BBL to launch `mc?:/BOOT/osdmenu.elf` or launch it manually from anywhere

### OSDMenu as the System Update

You can install OSDMenu as the System Update instead of FMCB or PS2BBL to get faster boot times.  
To install OSDMenu as the System Update, you can use the **latest development build** of [KELFBinder](https://github.com/israpps/KELFBinder).  

The release archive contains ready-to-use KELFBinder install script and directory structure:
  - `patcher/kelfbinder/EXTINST.lua` — custom installation script that installs OSDMenu as the system update and copies wLaunchELF from KELFBinder release into `BOOT/BOOT.ELF`
  - `patcher/kelfbinder/KELF/SYSTEM.XLF` — encrypted and signed OSDMenu executable to be installed as `osd???.elf` or `osdmain.elf`
  -…
