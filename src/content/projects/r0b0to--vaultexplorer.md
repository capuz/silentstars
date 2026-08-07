---
repo: "R0b0To/VaultExplorer"
name: "VaultExplorer"
description: "flutter android app to unlock/decrypt veracrypt, LUKS, Cryptomator, Gocryptfs and Cryfs containers"
readmeQualityOk: true
url: "https://github.com/R0b0To/VaultExplorer"
language: "Dart"
languages: ["Dart", "Kotlin"]
languagePcts: [56, 21]
topics: ["android", "veracrypt", "luks", "luks2", "cryptomator", "gocryptfs", "bitlocker", "cryfs"]
stars: 37
forks: 4
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-06-18T08:47:41Z"
lastCommitAt: "2026-08-07T05:14:29Z"
lastReleaseAt: "2026-07-10T15:55:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 46
maintainers: ["R0b0To"]
openGraphImageUrl: "https://opengraph.githubassets.com/813316b757f2bbeecb1e706dcfb8646b1ab5c5959c31da3de097207d2c9ccd80/R0b0To/VaultExplorer"
discussionCount: 0
---

# VaultExplorer

> **An Android file manager, and viewer for encrypted containers, drives, and directory vaults — no PC required.**

**VaultExplorer** allows you to mount, browse, create, edit, and manage encrypted volumes directly on your Android device. It supports **VeraCrypt**, **LUKS1 / LUKS2**, **BitLocker**, **Cryptomator**, **gocryptfs**, and **CryFS** volumes, as well as **VHD / VHDX** virtual disk images. Built with Flutter and powered by a custom high-performance C++ native engine (*mbedTLS + FatFs + NTFS-3G + libext2fs + Dislocker*), everything is decrypted and re-encrypted on-the-fly in memory with zero unencrypted temporary files written to host storage.

---

## 📸 Screenshots

</p>

---

## ✨ Features & Architecture

### 🔐 Volume & Encryption Systems

#### Block-Level Containers & Disk Images
*   **VeraCrypt (`.hc`)**: Standard & embedded Hidden Volume support, custom PIM, additive keyfiles, multi-layer cipher cascades, and in-place password modification.
*   **LUKS1 & LUKS2**: Full support for `xts-plain64` volumes. Keyslots backed by **PBKDF2** or memory-hard **Argon2id / Argon2i**. Supports passphrases or binary keyfiles (`cryptsetup --key-file`).
*…
