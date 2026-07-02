---
repo: "fatihdagdelenn/vm-inventory"
name: "vm-inventory"
description: "VMware vCenter ve Proxmox VE için merkezi envanter yönetimi"
url: "https://github.com/fatihdagdelenn/vm-inventory"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [50, 30]
topics: ["asset", "asset-management", "docker", "fastapi", "inventory", "proxmox", "vcenter", "vmware"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-06-12T07:37:39Z"
lastCommitAt: "2026-07-02T06:33:56Z"
lastReleaseAt: "2026-06-23T12:14:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["fatihdagdelenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/70b8452c9d2422ce9f886f9d8d03505d954463dc9b2921bc289bedcd48f6f39b/fatihdagdelenn/vm-inventory"
---

# 🖥️ VM Envanter Yönetim Sistemi

**VMware vCenter ve Proxmox VE ortamlarınızı tek panelden izleyin**

*500+ VM ve 20+ host ölçeğinde milisaniye hızında arama — tüm veriler lokal cache'den, canlı API çağrısı yok.*

</div>

---

## 📑 İçindekiler

- [Ne İşe Yarar?](#-ne-i̇şe-yarar)
- [Özellikler](#-özellikler)
- [Mimari: Nasıl Çalışır?](#-mimari-nasıl-çalışır)
- [Gereksinimler](#-gereksinimler)
- [Kurulum (Adım Adım)](#-kurulum-adım-adım)
- [İlk Yapılandırma](#-i̇lk-yapılandırma)
- [Kullanım Kılavuzu](#-kullanım-kılavuzu)
- [Değişiklik Geçmişi: Kim, Neyi, Ne Zaman?](#-değişiklik-geçmişi-kim-neyi-ne-zaman)
- [Arama Söz Dizimi](#-arama-söz-dizimi)
- [Roller ve Yetkiler](#-roller-ve-yetkiler)
- [LDAP / Active Directory](#-ldap--active-directory-opsiyonel)
- [Üretim Ortamı Notları](#-üretim-ortamı-notları)
- [Sorun Giderme](#-sorun-giderme)
- [Proje Yapısı](#-proje-yapısı)
- [SSS](#-sss)

---

## 🎯 Ne İşe Yarar?

Birden fazla **VMware vCenter** ve **Proxmox VE** ortamı işleten ekipler için merkezi envanter:

> *"10.10.10.15 IP'li makine hangi host'ta?"* — *"VLAN 100'de kaç Windows sunucu var?"* — *"Geçen hafta hangi VM'lerin RAM'i değişti?"* — *"Agent kurulu olmayan VM'ler…
