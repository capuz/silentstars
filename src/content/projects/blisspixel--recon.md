---
repo: "blisspixel/recon"
name: "recon"
description: "Map a domain's public technical footprint with provenance, confidence, and explicit uncertainty. Passive by default, machine-readable, and built to report evidence, not guesses."
readmeQualityOk: true
url: "https://github.com/blisspixel/recon"
homepage: "https://pypi.org/project/recon-tool/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["domain-intelligence", "email-security", "mcp", "osint", "passive-recon", "recon", "reconnaissance", "certificate-transparency", "dns", "mcp-server"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 50
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-11T01:49:37Z"
lastCommitAt: "2026-10-25T09:01:44Z"
lastReleaseAt: "2026-04-13T06:21:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["blisspixel"]
openGraphImageUrl: "https://opengraph.githubassets.com/e71382e85753371e832a5216bd5a819edd928ffc05d968a240be63209d2af14a/blisspixel/recon"
---

# recon

Point recon at a domain to see its **public technology and identity
footprint**: email providers and controls, identity indicators, SaaS services,
and cloud infrastructure. No credentials, API keys, or active scanning.
Use the CLI for a quick lookup, versioned JSON for automation, or the local
MCP server from an agent.

recon reports evidence-backed observations, not a complete inventory or a
security verdict. A domain does not establish an organization's boundaries.

## See the Output

**Synthetic illustration, generated, not captured.** The real formatter renders
a deterministic, no-network fixture for Example Industries Ltd. No real
organization is depicted, and no live lookup of reserved `example.com`
reproduces this fixture.

```text
demo@recon:~$ recon example.com    # synthetic fixture, not a captured run
6 sources: 5 matched, 1 no match
Example Industries Ltd (unverified)
example.com
Reserved name: results are public residue, not an organization.
──────────────────────────────────────────────────────────────────────────────
  Provider      Microsoft 365 + Proofpoint gateway
  Tenant        a1b2c3d4-e5f6-7890-abcd-ef1234567890 • NA
  Tenant domain…
