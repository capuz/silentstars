---
repo: "GiroCrab/GiroCrab"
name: "GiroCrab"
description: "Local-first, privacy-focused macOS banking app for German banks (FinTS/HBCI, Trade Republic, comdirect) built with Rust, SwiftUI & SQLCipher"
readmeQualityOk: true
url: "https://github.com/GiroCrab/GiroCrab"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [73, 26]
stars: 138
forks: 12
openIssues: 19
closedIssues: 29
watchers: 3
contributors: 9
recentReleases: 10
createdAt: "2026-11-09T19:05:27Z"
lastCommitAt: "2026-11-11T19:47:03Z"
lastReleaseAt: "2026-11-10T22:17:55Z"
status: "newborn"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 32
maintainers: ["dr-prinz", "jacboy", "sebastianmattar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1451767724/74d8ef7d-3075-4c03-8aef-d3dfebc67258"
fundingLinks: ["CUSTOM:https://paypal.me/aprinz"]
discussionCount: 0
---

---

## 🇩🇪 Deutsch

**Open-Source-Banking für macOS 14+ (Apple Silicon) und iOS 17+ – lokal, verschlüsselt, ohne Cloud-Zwang.**
Native SwiftUI-App auf einem Rust-Kern: verschlüsselter Datentresor (XChaCha20-Poly1305 & Argon2id), Kategorienbaum,
Regeln, Händler-Erkennung, Sparplan-Ansicht, Darlehens-Tilgungsbalken und direkte Verbindungen
zu Ihren Banken – ohne Server, ohne Tracking.

### ✨ Neu in v0.5.1

- ✅ **Apple-notarisiert:** Der macOS-Download ist jetzt offiziell von Apple notarisiert – kein Gatekeeper-Umweg mehr nötig.
- 🔒 **Händler-Logos nur per Opt-in (#38):** Online-Logos sind standardmäßig **aus**; erst wenn Sie sie unter *Einstellungen → Händler-Logos* aktivieren, werden Logos geladen. Ohne Opt-in bleibt alles zu 100 % lokal.
- ✏️ **Notiz per Doppelklick oder Return bearbeiten (#41).**
- 🗄️ **MoneyMoney-Import** (Datenbank, CSV/XML) – siehe [Umzug von MoneyMoney](#-umzug-von-moneymoney-in-60-sekunden).

**Seit v0.4.0:**

- 🗄️ **Direkter MoneyMoney-Datenbank-Import:** die verschlüsselte `MoneyMoney.sqlite` wird **nur lesend** geöffnet – Konten, Kategorien samt Hierarchie und die komplette Buchungshistorie kommen in einem Schritt (zusätzlich zu CSV/XML).
- 📱…
