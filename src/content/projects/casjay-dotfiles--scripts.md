---
repo: "casjay-dotfiles/scripts"
name: "scripts"
description: "Custom Scripts, This is the main repository and it gets automatically pushed to the *mgr/installer repos"
readmeQualityOk: true
url: "https://github.com/casjay-dotfiles/scripts"
homepage: "https://github.com/dfmgr/installer/wiki"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["custom", "scripts", "shell", "configuration-files", "system-management", "dotfiles"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-12-18T21:10:43Z"
lastCommitAt: "2026-07-05T06:32:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 80
maintainers: ["casjay"]
openGraphImageUrl: "https://opengraph.githubassets.com/936c75dfd6466f6b63bdc222152e885676b2cf7540c0c05ee68ce24b2145ba41/casjay-dotfiles/scripts"
---

# My custom scripts
  
## Automatic install

```shell
sudo git clone https://github.com/casjay-dotfiles/scripts "/usr/local/share/CasjaysDev/scripts" && \
sudo /usr/local/share/CasjaysDev/scripts/install.sh
```

## Automatic update

```shell
sudo systemmgr update scripts
```

## Manual install
  
requires:

```shell
sudo apt install git bash zsh fish python3-pip python3-setuptools net-tools fontconfig jq tf xclip curl wget dialog qalc rsync links html2text dict sudo ruby expect nethogs iftop iotop iperf locate pass python
```  

```shell
sudo yum install git bash zsh fish python3-pip python3-setuptools net-tools fontconfig jq tinyfugue xclip curl wget dialog qalc sudo
```  

```shell
sudo pacman -S git bash zsh fish python-pip python-setuptools net-tools fontconfig jq xclip curl wget dialog qalculate-gtk sudo
yay -S tinyfugue
```  

```shell
apk add ncurses util-linux pciutils usbutils coreutils binutils findutils grep iproute2 sudo
```

```shell
export PATH="$PATH:/usr/local/share/CasjaysDev/scripts/bin"
sudo git clone https://github.com/systemmgr/installer "/usr/local/share/CasjaysDev/scripts"
echo 'for f in /usr/local/share/CasjaysDev/scripts/completions/*.bash; do source "$f"…
