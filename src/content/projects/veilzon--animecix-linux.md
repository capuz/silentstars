---
repo: "veilzon/animecix-linux"
name: "animecix-linux"
description: "AnimeciX masaüstü istemcisi — GTK4/libadwaita destekli"
readmeQualityOk: true
url: "https://github.com/veilzon/animecix-linux"
homepage: "https://veilzon.github.io/animecix-linux/"
language: "Rust"
languages: ["Rust", "GLSL"]
languagePcts: [72, 24]
topics: ["anime", "anime-app", "animecix", "appimage", "desktop-app", "gtk4", "libadwaita", "linux", "media-player", "mpv"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-20T07:41:59Z"
lastCommitAt: "2026-11-17T12:18:57Z"
lastReleaseAt: "2026-11-15T11:27:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 36
maintainers: ["veilzon"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc35dafb7e7e69a1e8c30db6b28483d539d678283a202c5a0c9c5f061d57284c/veilzon/animecix-linux"
---

# AnimeciX Linux

**Linux için GTK4/libadwaita ile yazılmış anime, dizi ve film izleme masaüstü istemcisi.**

**Flatpak** (önerilen), **.deb/.rpm** paketleri veya tek dosyalık taşınabilir
**AppImage** olarak dağıtılır. Flatpak kendi depomuzdan kurulur; güncellemeler uygulama içinden
denetlenir ve `flatpak update` ile de yapılabilir. Flatpak kendi libmpv'sini taşır; AppImage
libmpv'yi paket içinde getirir, deb/rpm sistemdeki libmpv'yi (`mpv` paketi) ve GTK4/libadwaita'yı kullanır.
Harici mpv oynatıcısı Ayarlar'dan isteğe bağlı seçilebilir.
Sürüm notları için [CHANGELOG.md](https://github.com/veilzon/animecix-linux/blob/HEAD/CHANGELOG.md).

> ⚠️ Bu uygulama **gayriresmî** ve eğitim/kişisel kullanım amaçlıdır; herkese açık bir API
> kullanır. Hizmet sağlayıcıya zarar vermeden, kendi sorumluluğunuzda kullanın.

---

## Özellikler

- **Yan menü**: Ana Sayfa, Keşfet, Favoriler, Maraton, Geçmiş, İstatistikler, Takvim, Haberler, İndirilenler, Ayarlar ve Kısayollar tek tıkla; daraltınca sadece simgeler kalır
- **Ana sayfa**: tam genişlikte öne çıkan (hero) öneri, iskelet yükleme, kaldığın bölümler (Devam rafı), sayfalı raflar
- **Keşfet / Takvim / Haberler**: tür-sıralama filtreli katalog,…
