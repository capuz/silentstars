---
repo: "pkgforge-dev/QEMU-AppImage"
name: "QEMU-AppImage"
description: "Unofficial AppImage of QEMU to emulate all supported platforms [Maintainer=@Link4Electronics] "
readmeQualityOk: true
url: "https://github.com/pkgforge-dev/QEMU-AppImage"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["anylinux", "appimage", "sharun"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-03-25T11:46:31Z"
lastCommitAt: "2026-10-11T10:15:44Z"
lastReleaseAt: "2026-08-17T06:43:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["Link4Electronics", "Samueru-sama", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/997991b5b88f610d97f418edd77fed92a1285aa988d02a253589b3f52e070f61/pkgforge-dev/QEMU-AppImage"
---

# QEMU-AppImage 🐧

| Latest Stable Release | Upstream URL |
| :---: | :---: |
| [Click here](https://github.com/pkgforge-dev/QEMU-AppImage/releases/latest) | [Click here](https://gitlab.com/qemu-project/qemu) |

### ⚠️ Need to have `qemu-user-static-binfmt` installed to be able to use qemu-userspace ⚠️

* Supports -enable-kvm, TPM, UEFI (GPU passthrough), virtiofsd and audio.

* By default it runs `qemu-system-x86_64` but if needed to emulate other platforms (contains all platforms like arm hppa m68k ppc sh4 etc) or run other tools like `qemu-img` or `qemu-user`, e.g. you can do the following: 

```
# To emulate i386 system                                         
./QEMU*.AppImage qemu-system-i386

# To create qemu images
./QEMU*.AppImage qemu-img

# To use x86_64 qemu user mode emulation
./QEMU*.AppImage qemu-x86_64

# To use i386 qemu user mode emulation
./QEMU*.AppImage qemu-i386

# To mount qemu image
./QEMU*.AppImage qemu-ndb

# To exercise the QEMU I/O path
./QEMU*.AppImage qemu-io

# To use block drivers (included curl dmg gluster iscsi nfs ssh)
./QEMU*.AppImage qemu-block-*
```

**Or simply run `./QEMU*.AppImage --make-symlinks`** which will expose each bundled binary in…
