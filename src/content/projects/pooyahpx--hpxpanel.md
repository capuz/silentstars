---
repo: "pooyahpx/HPXPANEL"
name: "HPXPANEL"
description: "Command-deck proxy ops console — users, nodes, cores & subscription delivery."
readmeQualityOk: true
url: "https://github.com/pooyahpx/HPXPANEL"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 39]
topics: ["dashboard", "fastapi", "proxy", "react", "vpn", "xray", "hpxpanel"]
stars: 51
forks: 12
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-31T01:25:45Z"
lastCommitAt: "2026-09-23T08:47:41Z"
lastReleaseAt: "2026-08-13T13:03:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["pooyahpx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4139f15007e65ce511aeeec73f05ff4da5641eab3e72739828e5b82780198698/pooyahpx/HPXPANEL"
---

</p>

<h1 align="center">HPXPANEL</h1>

  <b>The censorship-resistance command deck.</b><br/>
  <sub>Proxies · VPN · ICMP · <b>HPX Pulse reverse tunnels</b> · Telegram commerce — one panel, zero duct tape.</sub>
</p>

</p>

</p>

</p>

## Quick install — one command does everything

On **Linux as root**. The installer auto-installs **Docker · Compose · curl · jq · yq · openssl · socat · DNS tools · DB migrations** (inside the container). No separate `apt install` or manual `alembic upgrade head` on the host.

**TimescaleDB (recommended)**
```bash
sudo bash -c "$(curl -fsSL https://github.com/pooyahpx/HPXPANEL/raw/main/scripts/hpxpanel.sh)" @ install --database timescaledb
```

**SQLite · MySQL · MariaDB · PostgreSQL**
```bash
sudo bash -c "$(curl -fsSL https://github.com/pooyahpx/HPXPANEL/raw/main/scripts/hpxpanel.sh)" @ install
sudo bash -c "$(curl -fsSL https://github.com/pooyahpx/HPXPANEL/raw/main/scripts/hpxpanel.sh)" @ install --database mysql
```

After install:
```bash
hpxpanel cli forge-seal   # create first admin
hpxpanel install-node     # optional: edge node on this server (homelab)
hpxnode                   # show node Address / API key / Server CA
```

Then open…
