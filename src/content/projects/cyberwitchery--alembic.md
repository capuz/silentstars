---
repo: "cyberwitchery/alembic"
name: "alembic"
description: "is the connective tissue of your network automation layer"
readmeQualityOk: true
url: "https://github.com/cyberwitchery/alembic"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 7
closedIssues: 71
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-01-15T11:44:38Z"
lastCommitAt: "2026-08-25T04:09:44Z"
lastReleaseAt: "2026-07-29T15:50:18Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["cyberwitchery-agent[bot]", "hellerve", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bc435ff5963eb60abc45876650aa1746f0399d1db3563134515f1ec7993a7af/cyberwitchery/alembic"
---

# alembic

the connective tissue of your network automation layer.

alembic moves your network data from the system that holds it to the one that needs it. your dcim or ipam holds the truth about your network; alembic reads it, reshapes it into a vendor-neutral model you define, and writes it back out, to another system or to the fabric. you set the shape once, and it runs the same way every time.

under the hood it is a data-model-first converger and loader: you describe your own model, and an engine validates, plans, and applies changes across one or more backends. the open core ships adapters for netbox, nautobot, infrahub, generic rest apis, and peeringdb (read-only). a commercial layer, alembic-ops, carries that same model onto the fabric and into ops, the actual automation: config and deployment, monitoring, dns, and access.

## how it works

alembic is data-model-first: you describe the model once, and the same four steps run every time.

- **describe**: the shape your data takes as it moves. vendor-neutral, set once.
- **pull**: read straight from a system you already run, through its adapter.
- **map**: reshape each source to fit the model, with the transformation made…
