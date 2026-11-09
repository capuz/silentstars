---
repo: "inforcqb/susfs4ksu-for-lkm"
name: "susfs4ksu-for-lkm"
description: "SUSFS ported to a loadable kernel module (LKM) for GKI/CFI devices, loaded via KernelSU ksud"
readmeQualityOk: true
url: "https://github.com/inforcqb/susfs4ksu-for-lkm"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 387
forks: 44
openIssues: 4
closedIssues: 43
watchers: 7
contributors: 10
recentReleases: 10
createdAt: "2026-09-08T13:43:36Z"
lastCommitAt: "2026-11-09T12:01:08Z"
lastReleaseAt: "2026-09-14T15:34:38Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 29
maintainers: ["inforcqb-self", "supervooc", "Dere3046"]
openGraphImageUrl: "https://opengraph.githubassets.com/39b86b9acca3ec325decca21d4f6addaddd040bb85ec4b42667466cd1585da1b/inforcqb/susfs4ksu-for-lkm"
---

[English](https://github.com/inforcqb/susfs4ksu-for-lkm/blob/HEAD/README.en.md) 

[x64设备兼容](https://github.com/ymuuuu/susfs4ksu-lkm-x64)

> 🚀 SUSFS 的**可加载内核模块（LKM）移植版**：让 susfs 可以在**不用重编译内核**的情况下运行。

## 📥 加载

`.ko` 要选与设备内核对应的那一份，例如 5.15 设备用 `susfs_guard_lkm-android13-5.15.ko`。

**📱 KernelSU 设备**：

```sh
ksud insmod /data/adb/loader/susfs_guard_lkm.ko
```

**🧰 非 KernelSU 设备**：用 release 附带的加载器 `susfs_insmod`：

```sh
susfs_insmod /data/adb/loader/susfs_guard_lkm.ko
```

🧹 卸载：

```sh
rmmod susfs_guard_lkm
```

## 🧩 作为 KernelSU 模块刷入

想免去手动选 `.ko`，每个 release 还附带打包好的模块 `susfs_guard_lkm-module-<tag>-arm64.zip`：在 KernelSU 管理器里刷入、重启即可。模块会按设备内核（`/proc/sys/kernel/osrelease`）自动选择并加载对应的 `.ko`（带 `expose_proc=1`），只负责加载、不设任何 susfs 规则；若系统已存在 susfs 则跳过。仅 arm64、仅 KernelSU 系管理器。`expose_proc=1` 会建立 `/proc/susfs_*` 控制节点，sus 规则通过这些节点下发。要移除：在管理器里停用或删除本模块（重启后生效），或 `rmmod susfs_guard_lkm` 当场卸载。

💡 若想手动指定，修改模块下的 `kmi_override` 为指定的 KMI 即可。

默认在模块的 `post-fs-data` 阶段加载。若需提前到公共 `post-fs-data.d` 阶段，以 root 执行：

```sh
touch /data/adb/modules/susfs_guard_lkm/early_load
```

重启后生效。删除该文件并重启可恢复默认加载；升级会保留此设置。两个阶段共用加载器，已有 SUSFS 时跳过，并遵守安全模式和模块停用/删除标记。卸载只移除本模块拥有的公共脚本，不会当场卸载正在运行的 LKM。

当 SUSFS 规则或原始 kstat 快照必须在模块…
