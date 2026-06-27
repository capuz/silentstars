---
repo: "rinafcode/teachLink_backend"
name: "teachLink_backend"
description: "Backend: Teachlink is a platform for technocrat where knowlege, skills, ideas, and information that can bring about development and improvement can be shared, dissected, you can also earn from it."
url: "https://github.com/rinafcode/teachLink_backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 11
forks: 169
openIssues: 102
closedIssues: 415
watchers: 0
contributors: 139
recentReleases: 0
createdAt: "2025-04-03T10:29:45Z"
lastCommitAt: "2026-06-27T06:23:41Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 84
maintainers: ["RUKAYAT-CODER", "walexjnr", "nafiuishaaq"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9fcf4ca98bdacbaabfae1c43af8d3a2b56da507961a8f24b92bce28ebe7c12e/rinafcode/teachLink_backend"
---

## 🚦 Local Validation: Analytics & Cost Tracking

To quickly validate feature analytics and cost tracking end-to-end:

```bash
# 1. Install dependencies
npm install

# 2. Start backend (in background)
npm run start:dev &

# 3. Start infra monitoring stack
cd infra/monitoring
cp -n .env.example .env || true
docker compose up -d
cd ../../

# 4. Send test analytics event
curl -X POST http://localhost:3000/analytics/event \
    -H 'Content-Type: application/json' \
    -d '{"category":"feature","action":"launch_button_clicked"}'

# 5. Send test cost event
curl -X POST http://localhost:3000/metrics/cost \
    -H 'Content-Type: application/json' \
    -d '{"amountUsd": 5}'

# 6. Open Prometheus: http://localhost:9090 and search for feature_events_total and infrastructure_hourly_cost_usd
# 7. Open Grafana:   http://localhost:3001 (admin/admin) and view the TeachLink Overview dashboard
```

Or run the helper script:

```bash
./setup-local.sh
```

To stop the backend:

```bash
kill $(lsof -ti:3000)
```

# 🧠 TeachLink Backend

> **Replace** `teachlink/backend` in the badge URLs above with your actual `org/repo` slug once the repository is on GitHub.

**TeachLink** is a decentralized…
