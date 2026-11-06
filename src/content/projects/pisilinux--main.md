---
repo: "pisilinux/main"
name: "main"
description: "Packages for Pisi-2.0 library, desktops, programming, supported with team."
readmeQualityOk: true
url: "https://github.com/pisilinux/main"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [44, 38]
stars: 76
forks: 72
openIssues: 62
closedIssues: 528
watchers: 6
contributors: 40
recentReleases: 0
createdAt: "2015-06-14T19:38:36Z"
lastCommitAt: "2026-11-06T11:24:29Z"
lastReleaseAt: "2018-11-13T20:39:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 57
maintainers: ["Rmys", "suvari"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ea51719b84f2be7d8478d3b79013fbfd500577203186c84f6200bca2e594e2f/pisilinux/main"
---

# DİKKAT: Geliştiriciler içindir, sisteminize zarar verebilir.

# Pisi GNU/Linux
Pisi GNU/Linux; Pisi tabanlı son Pardus sürümünü temel alan, özgür yazılım topluluğu tarafından geliştirilen, bilgisayar kullanıcılarına kurulum, yapılandırma ve kullanım konusunda kolaylık sağlamaya çalışan, onların temel masaüstü gereksinimlerini karşılamayı amaçlayan, son kullanıcı odaklı bir GNU/Linux dağıtımıdır. **_Bu depo Pisi GNU/Linux projesinin *core* depo dışındaki tüm bileşenlerini içermektedir._**

Paketleme Kuralları;

1. pspec.xml ve actions.py dosyaları düzenlenirken *sekme* (Tab tuşu) yerine *boşluk* kullanılmalıdır.
1. pspec.xml dosyalarında xml etiketlerinin hizalarına dikkat edilmelidir.
1. Dosya yolları yazılırken bir yol diğer yolları kapsamamalıdır.
1. actions.py dosyalarında mümkünse ```shelltools``` yerine ```pisitools``` kullanılmalıdır.
1. ```configure``` seçeneklerinde pakete yeni bağımlılık getirecek değişiklikler için mutlaka issue açılmalı, tartışılmadan pull request istenmemelidir.
1. systemd olmadığı için paketleri yapılandırırken ```---with-systemdsystemunitdir=/lib/systemd/system``` yerine ```--with-systemdsystemunitdir=no``` kullanılmalıdır.
1. Bir paketi…
