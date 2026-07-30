---
repo: "woshiluo/woshiluo-config"
name: "woshiluo-config"
description: "Personal use, collection of configuration files"
originalDescription: "自用，配置文件集合"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/woshiluo/woshiluo-config"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2019-12-10T02:45:21Z"
lastCommitAt: "2026-07-30T06:02:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 31
maintainers: ["woshiluo"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6c445cb9f16851f82280ab1dcf4b84ffa8e5254601e2605b68258c3317d71f0/woshiluo/woshiluo-config"
---

# Dotfiles

Woshiluo's personal configuration collection~

Using `GNU Stow` for management

`pkglist.txt` is the list of currently actively installed packages on the computer, see [ ArchWiki - Pacman ](https://wiki.archlinux.org/index.php/Pacman)

## Tips

```bash
# Get the currently actively installed packages in the system
pacman -Qqet > pkglist.txt
# Install packages from the list file
pacman -S --needed - < pkglist.txt
```

Using `stow --adopt` can quickly copy existing configurations over
Using `stow --no-folding` allows Stow to create links without directly linking folders, but rather linking files

## License

If a file declares its license, use the declared license

The configuration file for MPV is modified from <https://bbs.vcb-s.com/thread-2730-1-1.html>

The vocabulary part of Rime comes from [ 雾凇拼音 ](https://github.com/iDvel/rime-ice), using [ 八股文 ](https://github.com/lotem/rime-octagram-data)

The rest is licensed under [ CC 0 ](https://creativecommons.org/publicdomain/zero/1.0/deed.zh)
