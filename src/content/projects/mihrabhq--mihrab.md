---
repo: "MihrabHQ/Mihrab"
name: "Mihrab"
description: "Mihrab, the Muslim companion — prayer times, the Qur'an, duas and dhikr in one calm, private, open-source app. Android, iOS, iPadOS, Mac, Windows, Linux and the web."
readmeQualityOk: true
url: "https://github.com/MihrabHQ/Mihrab"
homepage: "https://mihrab.elghamri.se/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["adhan", "android", "fdroid", "ios", "islam", "mushaf", "muslim", "offline-first", "prayer-times", "privacy"]
stars: 91
forks: 12
openIssues: 0
closedIssues: 101
watchers: 2
contributors: 4
recentReleases: 6
createdAt: "2026-02-01T20:00:48Z"
lastCommitAt: "2026-11-17T14:46:23Z"
lastReleaseAt: "2026-10-16T07:33:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["Hassan-PS"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1147476674/b0b56304-b95e-4fa9-a10c-2ceffb7ceb0b"
---

**A Muslim's daily companion — for every prayer, and everything between.**

  Prayer times that match the published timetables of Diyanet, Islamiska Förbundet, Morocco, Algeria and Kemenag to the printed minute — and around them the Madinah muṣḥaf with recitation and tajweed, a hifz tracker, duas, dhikr and a prayer journal. No ads, no account, no tracking, and every line of it open source.

  **[Website](https://mihrab.elghamri.se/)** · **[Open Mihrab Web](https://mihrabhq.github.io/)** <sub>— the app in your browser, nothing to install</sub>

sudo curl -fsSLo /etc/apt/sources.list.d/mihrab.sources https://mihrabhq.github.io/packages/mihrab.sources
sudo apt update &amp;&amp; sudo apt install mihrab</pre>
sudo dnf install mihrab</pre>
sudo zypper install mihrab</pre>
sudo pacman-key --lsign-key 28BB36D6D8388A8EF15EEA24E19DCF135A3D8035
printf '\n[mihrab]\nServer = https://mihrabhq.github.io/packages/arch/$arch\n' | sudo tee -a /etc/pacman.conf
sudo pacman -Syu mihrab</pre>

## Accuracy

Prayer times computed with **[mihrab-methods](https://github.com/MihrabHQ/mihrab-methods)**, the authorities’ own methods checked against every time they have published.

| Matches the published…
