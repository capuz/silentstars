---
repo: "mr-Native/PSWloader"
name: "PSWloader"
description: "Native Windows 11 on PS5"
readmeQualityOk: true
url: "https://github.com/mr-Native/PSWloader"
language: "C"
languages: ["C"]
languagePcts: [80]
topics: ["acpi", "amd", "bare-metal", "bootloader", "edk2", "homebrew", "kernel-driver", "nvme", "oberon", "playstation-5"]
stars: 110
forks: 4
openIssues: 9
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 7
createdAt: "2026-11-20T17:34:35Z"
lastCommitAt: "2026-11-25T03:14:13Z"
lastReleaseAt: "2026-11-25T03:19:07Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 72
undervaluedScore: 13
maintainers: ["mr-Native"]
openGraphImageUrl: "https://opengraph.githubassets.com/400fe488e6639bd80d776cd163e0e8647076c7e23040788e700f47bf5e5c9656/mr-Native/PSWloader"
---

# PSWloader

Native Windows 11 on the PlayStation 5.

PSWloader is a payload that boots a custom UEFI firmware on the PS5. The firmware starts the normal Windows Boot
Manager, and Windows runs directly on the console's hardware, no virtual machine.
The Windows kernel is used as Microsoft ships it and PatchGuard stays on. The PS5-specific parts are the firmware, the
ACPI tables and a set of Windows drivers.

## Features

- Latest stock Windows 11 from the official Microsoft ISO
- GPU driver (*AMD Oberon*): DirectX 11, DirectX 12, Vulkan and OpenGL 4.6
- HDMI output with HDMI audio
- All 8 CPU cores / 16 threads with clock control by Windows
- Install to an internal M.2 SSD or a USB drive
- Wired Ethernet, on-board Wi-Fi 6 (2.4 GHz / 5 GHz, WPA2), USB keyboard and mouse
- Power button shutdown, smart automatic fan control, three power presets
- Firmware setup (English and German) with boot order, display and power settings and a system check
- Restart from Windows boots straight back into Windows, without GameOS

Not supported (yet): Bluetooth, changing the resolution from Windows, PS5 Pro.
