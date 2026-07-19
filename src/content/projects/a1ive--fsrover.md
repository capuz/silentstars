---
repo: "a1ive/FsRover"
name: "FsRover"
description: "EXT4, XFS, Btrfs File Browser for Windows"
readmeQualityOk: true
url: "https://github.com/a1ive/FsRover"
homepage: "https://a1ive.github.io/FsRover/"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["filesystem", "grub"]
stars: 96
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-18T10:30:42Z"
lastCommitAt: "2026-07-19T06:12:08Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 24
maintainers: ["a1ive"]
openGraphImageUrl: "https://opengraph.githubassets.com/520a73686a47005c9953dd65884a3ffe8191b9256edc8ec38bd2190e86f7122d/a1ive/FsRover"
fundingLinks: ["GITHUB:https://github.com/a1ive"]
discussionCount: 0
---

<br />
  <h3 align="center">Rover</h3>
</div>
<br />

FsRover is a read-only multi-filesystem explorer for Windows, powered by GNU GRUB.

## Features

- Browse physical disks, optical discs, disk images, partitions, RAID, and logical volumes.
- Extract files or mount a filesystem as a Windows drive through the bundled Dokany runtime.
- Open nested and compressed disk images as virtual disks.
- Inspect files with built-in properties, hashes, text, image, and hex views.
- Unlock LUKS1, LUKS2, BitLocker, and GELI volumes.

## Supported Filesystems

- **Linux:** Btrfs, cramfs, EROFS, ext2/3/4, F2FS, JFS, JFFS2, NILFS2, ReiserFS, UBIFS, XFS
- **Windows:** FAT12/16/32, exFAT, NTFS, ReFS 3.x
- **macOS:** APFS, HFS, HFS+
- **Unix and other:** AFFS, AFS, BFS, FbFS, LynxFS, MINIX1/2/3, QNX4/6, RedoxFS, romfs, SFS, UFS1/2, ZFS
- **Optical media:** ISO9660, UDF
- **Archives:** cpio, SquashFS, tar, WIM, ZIP

APFS and ZFS native encryption are not supported.

## Other Supported Formats

- **Virtual disks:** VHD, VHDX, VDI, QCOW1/2/3, VMDK, DMG, ISZ
- **Compression:** gzip, LZ4, LZOP, XZ, Zstandard
- **Dynamic disks and RAID:** Windows LDM, Linux LVM, mdraid, RAID5/6, NVIDIA dmraid
- **Partition…
