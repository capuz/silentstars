---
repo: "ParleSec/ProtocolSoup"
name: "ProtocolSoup"
description: "Real protocols, real infrastructure, built to the spec. Run flows and see every message, token and decision. OAuth 2.0, OIDC, SAML, SCIM, SSF, SPIFFE, OID4VC."
readmeQualityOk: true
url: "https://github.com/ParleSec/ProtocolSoup"
homepage: "https://protocolsoup.com"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [69, 29]
topics: ["oauth2", "oidc", "protocol", "saml", "authentication", "security", "spiffe-spire", "ssf", "oid4vci", "oid4vp"]
stars: 30
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-11-28T13:28:50Z"
lastCommitAt: "2026-09-13T08:30:23Z"
lastReleaseAt: "2026-08-22T15:00:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["ParleSec", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1106004220/ddc96a79-18df-4f9c-bd00-95919d150b69"
discussionCount: 0
---

<p>
</p>

<p>
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
   &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

<p>
</p>
<p>
</p>

</div>

<br>

---

<br>

ProtocolSoup is a hands-on sandbox for the protocols that hold identity and access together.

OAuth 2.0, OpenID Connect, SAML, SPIFFE/SPIRE, SCIM, Shared Signals, and the OpenID4VC credential family. Run every flow end to end against a live Mock IdP and watch it happen in the Looking Glass: real wire traffic, real tokens, and real state changes, decoded as they occur.

> [!NOTE]
> **Nothing here is simulated.** Every token is signed by a real key, every request crosses a real network boundary, every state change is real. Fake data teaches fake patterns, and engineers repeat those patterns in production.

<br>

---

<br>

## Quick Start

```bash
git clone https://github.com/ParleSec/ProtocolSoup.git
cd ProtocolSoup/docker
docker compose up -d --build
```

Then open:

- **UI** -- `http://localhost:3000`
- **Gateway API** -- `http://localhost:8080`
- **Health check** -- `http://localhost:8080/health`

Single-service, monolith, and SPIFFE/SPIRE variants are covered in the [quickstart guide](https://docs.protocolsoup.com/start-here/quickstart/).

<br>

---…
