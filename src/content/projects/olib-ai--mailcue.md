---
repo: "Olib-AI/mailcue"
name: "mailcue"
description: "All-in-one email testing server - SMTP, IMAP, DKIM, DMARC, SpamAssassin, GPG, REST API & Web UI in a single Docker container"
url: "https://github.com/Olib-AI/mailcue"
homepage: "https://olib-ai.github.io/mailcue/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 30]
topics: ["ci-cd", "developer-tools", "devtools", "dkim", "dmarc", "docker", "dovecot", "email", "email-server", "email-testing"]
stars: 17
forks: 3
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T19:39:23Z"
lastCommitAt: "2026-06-26T23:42:03Z"
lastReleaseAt: "2026-03-18T16:43:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["ibnbd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7e7d43bb6a14e8b04f1b2a3b1bdef8235cdaddabf837bff34bff7e6435700f3/Olib-AI/mailcue"
discussionCount: 2
---

<br />
  <br />
  <em>A realistic email testing server in a single Docker container.</em>
  <br /><br />
  <br />
</p>

---

MailCue packages Postfix, Dovecot, OpenDKIM, OpenDMARC, SpamAssassin, a FastAPI REST API, and a React web UI into one Docker container managed by s6-overlay. It runs a full mail stack with IMAP/POP3 access, DKIM signing, DMARC verification, spam filtering, TLS, and GPG encryption, so you can test email the way it behaves in production. Set `MAILCUE_MODE=production` and the same container runs as a real mail server.

**[Features](#features)** · **[Quick start](#quick-start)** · **[Documentation](#documentation)** · **[Contributing](#contributing)**

</p>
</p>
</p>

## Features

| Capability | What it does |
|---|---|
| Catch-all SMTP | Accepts mail for any address on any domain. Nothing leaves the container. |
| IMAP and POP3 | Read captured mail with any standard client over STARTTLS or implicit TLS. |
| Web UI | React app with a mailbox sidebar, folder navigation, an email viewer, and a compose dialog. |
| REST API and SDKs | JSON API for sending, receiving, injecting, searching, and deleting email, with Python and Node SDKs. |
| Email injection | Insert…
