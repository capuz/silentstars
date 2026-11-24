---
repo: "aditrachman/Simulation-Prediction-Engine"
name: "Simulation-Prediction-Engine"
description: "AI-powered simulation and prediction engine with interactive dashboard. Run scenarios, get instant AI-generated insights, and visualize results with professional charts."
readmeQualityOk: true
url: "https://github.com/aditrachman/Simulation-Prediction-Engine"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["llm-agents", "simulator", "agent-memory", "multi-agent-simulation", "public-opinion-analysis", "swarm-intelligence"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-14T03:22:04Z"
lastCommitAt: "2026-11-24T02:01:19Z"
lastReleaseAt: "2026-04-20T06:08:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 47
maintainers: ["aditrachman"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dfe282d3f55b5835488e63352a3feee071657426d0d8699c63dbe7580060f6b/aditrachman/Simulation-Prediction-Engine"
---

# VoxSwarm — Social Simulation Engine

> Simulasi reaksi publik terhadap kebijakan pemerintah Indonesia sebelum diluncurkan.

## Apa ini?
VoxSwarm membantu pengambil keputusan memahami gambaran reaksi berbagai kelompok
masyarakat terhadap suatu isu atau kebijakan — sebelum kebijakan tersebut
diluncurkan ke publik.

## Untuk siapa?
- **Mahasiswa & Peneliti** — eksplorasi dinamika opini untuk riset awal
- **Jurnalis & Analis** — gambaran respons publik sebelum menulis
- **Pemda & NGO** (fase berikutnya) — uji kebijakan sebelum implementasi

## Cara Pakai

### Prasyarat
- Python **3.10** atau lebih tinggi
- Node.js **18** atau lebih tinggi
- Akun Groq dan API key dari [console.groq.com](https://console.groq.com)

### 1. Clone Repository
```bash
git clone https://github.com/aditrachman/Simulation-Prediction-Engine.git
cd Simulation-Prediction-Engine
```

### 2. Setup Backend
```bash
pip install fastapi uvicorn[standard] groq pydantic python-dotenv \
            numpy pandas scikit-learn matplotlib seaborn
```

Buat file `.env` di root proyek:
```bash
cp .env.example .env
# Edit .env dan isi GROQ_API_KEY dengan API key Anda
```
