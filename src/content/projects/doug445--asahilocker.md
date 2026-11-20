---
repo: "doug445/AsahiLocker"
name: "AsahiLocker"
description: "The complete, audited way to encrypt Asahi Linux (Fedora Asahi Remix) with LUKS2: in place, in one command, no reinstall, no USB stick needed, macOS untouched. Apple Silicon M1/M2/M3. argon2id at 4 GiB (5x stock), resumable after a power cut, 12-point boot gate, audited three times, 100+ CI checks."
readmeQualityOk: true
url: "https://github.com/doug445/AsahiLocker"
homepage: "https://doug445.github.io/AsahiLocker/"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["aarch64", "apple-silicon", "asahi-linux", "btrfs", "cryptsetup", "disk-encryption", "fedora", "fedora-asahi", "fedora-asahi-remix", "full-disk-encryption"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-08-20T03:10:54Z"
lastCommitAt: "2026-11-20T11:58:40Z"
lastReleaseAt: "2026-11-20T12:00:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 71
maintainers: ["doug445", "kernelzeroday"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b2d479f5ba26339235b7fc65d4c6e1882235b5ad6fc654cffc35906627e5c7f/doug445/AsahiLocker"
discussionCount: 0
---

alt="AsahiLocker logo: a faceted pink and silver polyhedron bearing the Fedora mark and the Asahi Linux 'A', standing on a dark angular platform lit with magenta and blue neon"
       width="820">

# AsahiLocker — in-place LUKS2 disk encryption for Fedora Asahi Remix on Apple Silicon

**The complete, audited way to encrypt Asahi Linux.** One command, the
strongest key derivation `cryptsetup` can write, and a machine that boots
afterwards — checked before you are allowed to reboot.

Encrypt the root filesystem of an **already-installed Fedora Asahi Remix** system
on Apple Silicon — in place, without reinstalling, without wiping macOS, and
without a second copy of your data.

`luks-deploy.sh` converts your existing btrfs root partition into a LUKS2
container holding that same filesystem. Your files, subvolumes, snapshots and
btrfs UUID all survive; the partition simply gains an encryption layer. It then
rewrites every piece of boot configuration that has to change (`crypttab`,
`fstab`, `/etc/kernel/cmdline`, GRUB defaults, **all** BLS entries, dracut
config, **all** initramfs images) and refuses to let you reboot until a 12-point
verification gate passes.
