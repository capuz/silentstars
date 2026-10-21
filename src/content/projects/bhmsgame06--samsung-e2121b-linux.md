---
repo: "bhmsgame06/samsung-e2121b-linux"
name: "samsung-e2121b-linux"
description: "Linux port for Samsung GT-E2121B"
readmeQualityOk: true
url: "https://github.com/bhmsgame06/samsung-e2121b-linux"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [95]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-18T16:17:41Z"
lastCommitAt: "2026-10-21T21:13:37Z"
lastReleaseAt: "2026-07-18T18:36:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 16
maintainers: ["bhmsgame06"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2c504cebc12cfa6fe399aaa8a47153f50b803bf3748a5a08b7922b1c29a46c4/bhmsgame06/samsung-e2121b-linux"
---

# Linux port for Samsung GT-E2121B

## How to run

Just download precompiled .cla firmware file and simply flash it to the phone
using [my Samsung Swift flasher](https://github.com/bhmsgame06/sflasher) or
proprietary [PNX49xx Downloader v0.3 Lite For GT-E2370](https://mega.nz/folder/2aoVnJJJ#ovZJG4cbvIOqLVEJBHrQSQ/folder/2apUFSjS),
these flashers are fully compatible with GT-E2121B. After flashing you can do
power on, use `screen` or PuTTY on 115200 baud to see the logs and shell.

## How to build

### Building the bootloader (SPL)

Just run this command in your terminal:

```bash
./build-spl.sh
```

`spl.bin` will appear.

### Building the kernel

```bash
git clone --depth=1 https://github.com/bhmsgame06/linux-pnx49xx
cd linux-pnx49xx

git checkout linux-pnx49xx

cp ../samsung-e2121b-linux/kernel.config ./.config
cp -r ../samsung-e2121b-linux/initramfs ./usr/initramfs

fakeroot make ARCH=arm CROSS_COMPILE=arm-none-eabi- -j$(nproc) xipImage dtbs
```

You can edit the kernel config if you want to do so.

### Building .cla image

In *this* current repo, do:

```bash
gcc -o build-cla build-cla.c
./build-cla spl.bin \…
