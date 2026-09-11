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
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 2
createdAt: "2026-03-25T11:46:31Z"
lastCommitAt: "2026-09-11T08:14:48Z"
lastReleaseAt: "2026-08-17T06:43:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["Link4Electronics", "github-actions[bot]", "Samueru-sama"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ebf886a53ba83e6911b44aefbc3eded406f885f641cc0ab9721829ba9d3c9c9/pkgforge-dev/QEMU-AppImage"
---

# QEMU-AppImage 🐧

</p>

| Latest Stable Release | Upstream URL |
| :---: | :---: |
| [Click here](https://github.com/pkgforge-dev/QEMU-AppImage/releases/latest) | [Click here](https://gitlab.com/qemu-project/qemu) |

</div>

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

**Or simply run `./QEMU*.AppImage --make-symlinks`** which will expose each…
