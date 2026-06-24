---
repo: "BLB3DPrinting/filaops"
name: "filaops"
description: "3D Print Farm ERP - Production-grade manufacturing resource planning for additive manufacturing"
url: "https://github.com/BLB3DPrinting/filaops"
homepage: "https://blb3dprinting.github.io/filaops/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [66, 30]
topics: ["3d-printing", "bom", "docker", "erp", "fastapi", "inventory-management", "manufacturing", "mrp", "open-source", "print-farm"]
stars: 70
forks: 6
openIssues: 19
closedIssues: 220
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-06T00:18:23Z"
lastCommitAt: "2026-06-24T00:20:45Z"
lastReleaseAt: "2025-12-26T09:20:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 38
maintainers: ["Blb3D", "blb3d-automation", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/719436f70b74a83233f97f11283ac94f5c06f5b41a9430f1e4a7a1b2795a7d92/BLB3DPrinting/filaops"
discussionCount: 7
---

# FilaOps

Open-source ERP for 3D print farms. Manage inventory, production, sales, purchasing, MRP, and accounting in one system built specifically for additive manufacturing.

**[Documentation](https://blb3dprinting.github.io/filaops/)** | **[Release Notes](https://github.com/BLB3DPrinting/filaops/releases/latest)**

## Quick Start (Docker)

```bash
git clone https://github.com/BLB3DPrinting/filaops.git
cd filaops
cp backend/.env.example .env
# Generate secrets (required — production startup refuses to boot without these):
echo "SECRET_KEY=$(openssl rand -hex 32)" >> .env
echo "DB_PASSWORD=$(openssl rand -hex 24)" >> .env
docker compose up -d
# Open http://localhost — create your admin account on first visit
```

## Quick Start (Manual)

### Backend

```bash
cd backend
python -m venv venv
# Windows: .\venv\Scripts\Activate
# Linux/Mac: source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # Edit with your database credentials
alembic upgrade head
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Database

FilaOps requires PostgreSQL 16+. Configure `backend/.env`:

```ini…
