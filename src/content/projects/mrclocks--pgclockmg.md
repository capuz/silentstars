---
repo: "Mrclocks/PGClockMG"
name: "PGClockMG"
description: "Pasarguard Migration Tools"
readmeQualityOk: true
url: "https://github.com/Mrclocks/PGClockMG"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 43
forks: 11
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-12T08:25:07Z"
lastCommitAt: "2026-08-30T00:43:10Z"
lastReleaseAt: "2026-08-02T08:30:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 44
maintainers: ["cursoragent", "cursor[bot]", "AminMGMT"]
openGraphImageUrl: "https://opengraph.githubassets.com/40e7064cfed87951bf3ea6174fb54aa13a7b37de070d17af36b695a0a6c974d4/Mrclocks/PGClockMG"
---

> 🚀 **`v4.0.6`** — حذف پیش‌نمایش تلگرام + منوی پروکسی + پاک‌کردن آخرین خطا
> ⚠️ قبل از ریستور یا مهاجرت حتماً بکاپ کامل بگیرید.

  <b>فارسی</b> · <a href="README.en.md">English</a> · <a href="README.ru.md">Русский</a>
</p>

# PGClockMG

🧰 ویزارد ریستور/مهاجرت + پنل بکاپ PasarGuard (نصب جدا)

</div>

---

## ✨ معرفی

| محصول | مسیر | پورت | سرویس |
|--------|------|------|--------|
| 🧭 **PGClockMG** (ویزارد) | `/opt/pg-migrator` | `7000` | `pg-migrator` |
| 💾 **PGClockBackup** | `/opt/pg-backup` | `7001` | `pg-backup` |

از `v4.0.1` این دو **جدا نصب و حذف می‌شوند**. پاک کردن ویزارد بعد از ریستور، بکاپر را حذف نمی‌کند.

> 📌 PasarGuard را خودتان نصب کنید؛ این ابزار پنل را نصب نمی‌کند.

---

## 📥 نصب

```bash
sudo bash -c "$(curl -fsSL 'https://raw.githubusercontent.com/Mrclocks/PGClockMG/main/install.sh?v='$(date +%s))"
```

### 🗂️ منوی اسکریپت

| گزینه | کار |
|-------|-----|
| ۱ · Install PGClockMG | فقط ویزارد — پورت وب را می‌پرسد |
| ۲ · Install PGClockBackup | فقط پنل بکاپ — پورت بکاپ را می‌پرسد و **توکن نصب یک‌بارمصرف** چاپ می‌کند |
| ۳ · Uninstall PGClockMG | فقط ویزارد را پاک می‌کند (بکاپر دست‌نخورده) |
| ۴ · Uninstall PGClockBackup | فقط پنل بکاپ را پاک می‌کند |
| ۵ ·…
