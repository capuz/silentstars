---
repo: "ezubaric/jbg-web"
name: "jbg-web"
description: "Source code for Jordan Boyd-Graber's academic webpage."
readmeQualityOk: true
url: "https://github.com/ezubaric/jbg-web"
language: "HTML"
languages: ["HTML", "TeX"]
languagePcts: [70, 25]
stars: 12
forks: 23
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 21
recentReleases: 0
createdAt: "2013-12-30T23:55:07Z"
lastCommitAt: "2026-09-08T08:16:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 72
maintainers: ["ezubaric", "tkabir1", "zli12321"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0dedce06d36da52eac3d23d1523a21d7f045a1cea7af87da0efcafa9a0f0594/ezubaric/jbg-web"
---

jbg-web
=======

Source code for Jordan Boyd-Graber's academic webpage.

Steps to set up a virtual machine that serves this webpage

ssh-keygen -t ed25519 -C "jordanbg@gmail.com"
<copy this to github>

sudo zypper install git-core nginx
sudo zypper install texlive-scheme-medium texlive-xelatex texlive-collection-fontsrecommended
sudo zypper install python3 python3-pip python3-virtualenv
sudo zypper install texlive-scheme-medium texlive-xelatex texlive-collection-fontsrecommended
sudo zypper install liberation-fonts

sudo mv arial*.ttf /usr/local/share/fonts/arial

mkdir public_html
mkdir repositories
cd repositories

git clone git@github.com:ezubaric/jbg-web.git

git config --global user.email "jordanbg@gmail.com"
git config --global user.name "Jordan Boyd-Graber"
git config pull.rebase true 

python3 -m venv venv
./venv/bin/pip3 install numpy pyluach pandas

# Allow the system to traverse your home folder
chmod 711 ~

# Allow anyone to read the public_html folder and its files
chmod -R 755 ~/public_html
