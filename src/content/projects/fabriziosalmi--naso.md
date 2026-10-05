---
repo: "fabriziosalmi/naso"
name: "naso"
description: "Self-hosted breach and dark-web exposure monitoring: ingest leaks, correlate identities, triage with a local LLM. Your infrastructure, your data."
readmeQualityOk: true
url: "https://github.com/fabriziosalmi/naso"
homepage: "https://fabriziosalmi.github.io/naso/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [63, 34]
topics: ["celery", "dark-web", "data-breach", "elasticsearch", "fastapi", "incident-response", "local-llm", "mcp", "osint", "python"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-04-16T14:40:37Z"
lastCommitAt: "2026-10-05T10:46:26Z"
lastReleaseAt: "2026-08-18T17:37:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 59
maintainers: ["fabriziosalmi", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1212601275/747fe06c-cdcd-4990-87f4-802e0e778a26"
---

---

**NASO** watches breach corpora, paste sites, public GitHub, Telegram channels and
onion services for your organisation's exposure, correlates what it finds into
identities, and triages it with a language model you run yourself. Every
component — database, search index, object store, LLM — runs in your own Compose
stack; nothing leaves it. That is the whole design constraint: this software
handles other people's personal data, and the safest place for it is somewhere
you can point at.

> [!IMPORTANT]
> **Authorised and defensive use only.** NASO is a dual-use tool. It is built for
> monitoring your own organisation's exposure, incident response, and engagements
> you have written authorisation to perform. Finding a credential in a breach
> corpus does not entitle you to use it, and scanning infrastructure you do not
> own is a criminal offence in most jurisdictions.
>
> Breach data is **personal data**. If you deploy NASO you are the data
> controller under the GDPR and equivalent regimes, with everything that implies.
>
> Read **[LEGAL.md](https://github.com/fabriziosalmi/naso/blob/HEAD/LEGAL.md)** before pointing NASO at anything.

## See it in 69 seconds

*Click the image…
