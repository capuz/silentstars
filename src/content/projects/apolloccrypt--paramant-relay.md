---
repo: "Apolloccrypt/paramant-relay"
name: "paramant-relay"
description: "Post-quantum encrypted file relay. ML-KEM-768. Burn-on-read. EU/DE. NIS2/NEN7510/IEC62443 ready."
readmeQualityOk: true
url: "https://github.com/Apolloccrypt/paramant-relay"
homepage: "https://paramant.app"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [44, 37]
topics: ["docker", "encryption", "file-transfer", "gdpr", "ml-kem-768", "nis2", "post-quantum", "relay", "self-hosted", "eu-jurisdiction"]
stars: 27
forks: 1
openIssues: 5
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2026-03-25T06:10:12Z"
lastCommitAt: "2026-07-14T05:54:32Z"
lastReleaseAt: "2026-06-25T11:01:03Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 41
maintainers: ["Apolloccrypt", "dependabot[bot]", "cursor[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1191328434/252715ed-d91e-4f59-8cb2-b69590a3eb3f"
fundingLinks: ["CUSTOM:https://paramant.app/pricing"]
discussionCount: 1
---

# PARAMANT — Post-Quantum Encrypted File Relay

**Post-quantum encrypted file relay. Burn-on-read. EU jurisdiction. Self-hostable in 2 minutes.**

Data is encrypted client-side with ML-KEM-768 + AES-256-GCM, relayed through RAM only, and destroyed after one download. Nothing is ever written to disk. Every transfer is recorded in a public Merkle tree — proving delivery without storing content.

---

## Quick start

```bash
# 1. Clone
git clone https://github.com/Apolloccrypt/paramant-relay && cd paramant-relay

# 2. Configure
cp .env.example .env
echo "ADMIN_TOKEN=$(openssl rand -hex 32)" >> .env

# 3. Launch (6 containers: 5 sector relays + admin panel)
docker compose up -d

# 4. Verify
curl http://localhost:3001/health
# {"ok":true,"version":"3.0.0","sector":"health","edition":"licensed"}
```

Or on a Raspberry Pi / fresh VPS:

```bash
curl -fsSL https://paramant.app/install-pi.sh | bash
```

Or via the browser — no install:
**[Try ParaShare →](https://paramant.app/parashare)** (no account, no key needed)

**[Create a free account →](https://paramant.app/signup)** (TOTP, no password)

**[Get a free API key →](https://paramant.app/request-key)** (email delivery, 30-second form)…
