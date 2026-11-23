---
repo: "casvisor/casvisor"
name: "casvisor"
description: "An open-source bastion host (jump server) for SSH, RDP, VNC and Telnet with web access, session recording, audit logs and Casdoor SSO"
readmeQualityOk: true
url: "https://github.com/casvisor/casvisor"
homepage: "https://casvisor.org"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [60, 40]
topics: ["bastion", "bastion-host", "casbin", "golang", "jump-server", "pam", "privileged-access-management", "react", "session-recording", "telnet"]
stars: 307
forks: 11
openIssues: 0
closedIssues: 7
watchers: 6
contributors: 9
recentReleases: 7
createdAt: "2015-12-02T03:17:29Z"
lastCommitAt: "2026-11-23T13:32:40Z"
lastReleaseAt: "2026-11-21T16:41:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["hsluoyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/af701e2894361920e6cd942773384d1a43bc5fe7f91f01d735c83c54875a7736/casvisor/casvisor"
---

Casvisor gives your team one place to reach servers, desktops and databases from the browser.<br>
    It connects over <strong>SSH</strong>, <strong>RDP</strong>, <strong>VNC</strong>, <strong>Telnet</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>SQL Server</strong>, <strong>Oracle</strong>, <strong>Redis</strong>, <strong>MongoDB</strong> and <strong>HTTP</strong> for internal websites, with an <strong>SSH gateway</strong> for <code>ssh</code>, <code>scp</code> and VS Code,<br>
    and records every session, checks every command and keeps the passwords to itself.

## 🚀 Try it in 30 seconds

No database and no config file needed. This runs Casvisor on SQLite with its own accounts:

```bash
docker run -d --name casvisor -p 19000:19000 -p 2222:2222 \
  -v casvisor-db:/db -v casvisor-recordings:/recordings casbin/casvisor
docker logs casvisor
```

Open <http://localhost:19000> and sign in:

| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | the one printed in `docker logs casvisor` |

> Pass `-e adminPassword=<password>` to choose the first password instead. Either way, change it under **My Account** after you sign in.
