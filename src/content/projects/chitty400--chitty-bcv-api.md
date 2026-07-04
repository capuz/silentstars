---
repo: "Chitty400/chitty-bcv-api"
name: "chitty-bcv-api"
description: "API de Tasa BCV e INPC segun el BCV, para uso de todo dev Venezolano"
readmeQualityOk: true
url: "https://github.com/Chitty400/chitty-bcv-api"
homepage: "https://venefinanzas.app"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-08T05:20:44Z"
lastCommitAt: "2026-07-04T22:52:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d07a46f1f5ac265e711c8b7a632d9a7ce35c9a758f3e0dd8546162483277142/Chitty400/chitty-bcv-api"
---

# 🏦 BCV Static API

API estática gratuita con datos oficiales del **Banco Central de Venezuela (BCV)** y tasas P2P de Binance.  
Actualizada automáticamente con GitHub Actions. Consumible desde cualquier app sin backend.

---

## 📡 Endpoints

| Archivo | URL | Descripción |
|---------|-----|-------------|
| `latest.json` | `https://chitty400.github.io/chitty-bcv-api/latest.json` | Tasa BCV (USD y EUR) + IPC más reciente |
| `history.json` | `https://chitty400.github.io/chitty-bcv-api/history.json` | Serie histórica completa del IPC mensual |
| `p2p_history.json` | `https://chitty400.github.io/chitty-bcv-api/p2p_history.json` | Tasas P2P diarias USDT/VES y USDT/COP (Binance) |

---

## 📋 Schema

### `latest.json`
```json
{
  "updated_at": "2026-05-08T05:53:15Z",
  "tasa_bcv": 499.8608,
  "tasas": {
    "usd": 499.8608,
    "eur": 562.14
  },
  "ipc": {
    "fecha": "2026-04",
    "indice": 403528566746262.0,
    "variacion_mensual": 10.6,
    "variacion_anual": 611.86
  }
}
```

> `tasa_bcv` es un alias de `tasas.usd`, mantenido por compatibilidad con consumidores anteriores.

### `history.json`
```json
[
  {
    "date": "2026-05-08",
    "updated_at": "2026-05-08T19:30:00Z",…
