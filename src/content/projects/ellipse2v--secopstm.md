---
repo: "ellipse2v/SecOpsTM"
name: "SecOpsTM"
description: "OWASP Python framework for automated STRIDE threat modeling as code — MITRE ATT&CK mapping, D3FEND mitigations, Attack Flow, CAPEC, severity scoring, SVG/HTML reports & MITRE Navigator layers. DevSecOps & CI/CD ready.  "
readmeQualityOk: true
url: "https://github.com/ellipse2v/SecOpsTM"
homepage: "https://ellipse2v.github.io/SecOpsTM/"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
topics: ["attack-navigator", "d3fend", "stix", "threat", "threat-modeling-tool", "tmac", "attack-flow", "threat-model-as-code", "devsecops", "mitre-attack"]
stars: 18
forks: 3
openIssues: 5
closedIssues: 1
watchers: 4
contributors: 3
recentReleases: 2
createdAt: "2025-06-08T13:41:04Z"
lastCommitAt: "2026-11-08T14:14:07Z"
lastReleaseAt: "2026-11-02T21:45:56Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 78
undervaluedScore: 62
maintainers: ["ellipse2v", "claude", "zhangtianqi-james"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/998378566/63d6f6b3-4883-48c7-bbfa-ba6674396223"
discussionCount: 2
---

Interactive diagrams, CAPEC / D3FEND / CVE mapping, attack paths, SARIF and STIX, ready for CI.

## See it in 30 seconds

```bash
pip install SecOpsTM
secopstm demo                          # analyses a bundled example and opens its diagram
secopstm --model-file threat_model.md  # then your own model
```

No API key, no server: the demo runs the rule engine only. Prefer a browser? The
[live demo](https://ellipse2v.github.io/SecOpsTM/) shows the same reports, including
AI-enriched ones.

A model is plain Markdown that lives next to your code:

```markdown
## Boundaries
- **Internet**: isTrusted=False
- **DMZ**: isTrusted=True

## Actors
- **User**: boundary=Internet

## Servers
- **WebApp**: boundary=DMZ, type="web_server"

## Data
- **Credentials**: classification="SECRET"

## Dataflows
- **Login**: from="User", to="WebApp", protocol="HTTPS", data="Credentials"
```

See [the DSL reference](https://github.com/ellipse2v/SecOpsTM/blob/HEAD/docs/defining_threat_models.md) and the
[ready-to-use templates](https://github.com/ellipse2v/SecOpsTM/blob/HEAD/docs/examples.md).

---

## Quick start

### Option A — Docker (no Python setup required)

```bash
docker run -p 127.0.0.1:5000:5000 \…
