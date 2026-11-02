---
repo: "MilkmanAbi/OneInstallSystem"
name: "OneInstallSystem"
description: "An unified UNIX Installer and Build system that updates directly from your repo."
readmeQualityOk: true
url: "https://github.com/MilkmanAbi/OneInstallSystem"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-09T06:31:42Z"
lastCommitAt: "2026-11-02T13:38:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 21
maintainers: ["MilkmanAbi"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0bd2b7cfbc3e5cd46df9cde93aa50dfbf95e19dc6dd110117e7d4828c0b6a47/MilkmanAbi/OneInstallSystem"
---

# OIS — OneInstallSystem

**v4.1.0** · pure POSIX `sh` · Linux · macOS · FreeBSD · OpenBSD · NetBSD · Termux/Android

A drop-in installer, updater, and uninstaller for your app. Pure POSIX
`sh`. You vendor two things into your repo and edit one file; your users
get `sh install.sh`, a real uninstaller, and `myapp --update`.

```sh
git clone https://github.com/MilkmanAbi/OneInstallSystem.git /tmp/ois
cp -r /tmp/ois/ois /tmp/ois/install.sh  yourproject/
$EDITOR yourproject/ois/ois.conf        # set app_name
cd yourproject && sh install.sh --user  # done
```

> **All you gotta copy is ois and the install.sh, that's it, into your project root.**

The minimum viable config is one line:

```ini
app_name = myapp
```

---

## What your users get

```sh
git clone https://github.com/you/myapp && cd myapp
sh install.sh                # builds, installs deps, installs myapp

myapp --update               # checks GitHub releases, updates in place
myapp --uninstall            # removes everything it installed
myapp --ois                  # what's installed, where, and what it owns

ois list                     # every OIS-managed app on the machine
ois doctor                   # diagnose…
