---
repo: "Dere3046/_patchHarmony"
name: "_patchHarmony"
description: "no patch kernel Support DroidSpaces."
readmeQualityOk: true
url: "https://github.com/Dere3046/_patchHarmony"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-18T14:30:31Z"
lastCommitAt: "2026-10-02T09:59:05Z"
lastReleaseAt: "2026-09-25T10:49:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 34
maintainers: ["Dere3046"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb6b27d086322d5618f4ffc626ccae2437f487fc1af4e87d747e3142b19f2a79/Dere3046/_patchHarmony"
---

# droid_lkm

out of tree kernel modules that give a stock GKI 6.12 kernel the namespace and
IPC features container runtimes expect. android16-6.12 ships with
CONFIG_SYSVIPC, CONFIG_POSIX_MQUEUE, CONFIG_PID_NS and CONFIG_IPC_NS turned
off, so a container tool like Droidspaces cannot start anything at all. this
project supplies those features from loadable modules, without recompiling the
kernel and without moving a single struct member, so prebuilt vendor modules
keep working.

this repository is the `Kern/` submodule of the Droidspaces fork, published as
`git@github.com:Dere3046/_patchHarmony.git`.

three modules are built:

- `droid_lkm.ko` namespace and IPC support
- `droid_lkm_compat.ko` vendor module quick fixups
- `droid_lkm_misc.ko` the features this device kernel has compiled out that a
  container still expects: runtime registered xt matches, a user namespace that
  can be unshared, the per task id map files, and the control plane below

## what it provides

- fake pid and ipc namespaces: `unshare`, `clone`, `clone3` and `setns` for
  CLONE_NEWPID and CLONE_NEWIPC, with per namespace lifetime handling
- ported SysV IPC: the msg, sem and shm syscalls plus their per…
