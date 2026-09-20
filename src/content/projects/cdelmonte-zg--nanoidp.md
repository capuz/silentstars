---
repo: "cdelmonte-zg/nanoidp"
name: "nanoidp"
description: "A test identity provider: real OAuth2/OIDC and SAML 2.0 for development and testing, with a web UI and an MCP server. Not for production."
readmeQualityOk: true
url: "https://github.com/cdelmonte-zg/nanoidp"
homepage: "https://cdelmonte-zg.github.io/nanoidp/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["authentication", "identity-provider", "idp", "mock-server", "oauth2", "oidc", "openid-connect", "python", "saml", "security"]
stars: 23
forks: 6
openIssues: 8
closedIssues: 154
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-12-05T09:57:22Z"
lastCommitAt: "2026-09-20T08:46:06Z"
lastReleaseAt: "2026-03-27T10:36:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 58
maintainers: ["cdelmonte-zg", "dshvedchenko", "gprossliner"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d026862b452b7ed9b8329d22944ee3e1800494493d84d08dd2188e18455a346/cdelmonte-zg/nanoidp"
fundingLinks: ["GITHUB:https://github.com/cdelmonte-zg", "BUY_ME_A_COFFEE:https://buymeacoffee.com/nanoidp"]
---

</p>

<h1 align="center">NanoIDP</h1>

</p>

  Test real OAuth2/OIDC, SAML 2.0 and MCP authorization flows locally,<br>
  without running a production IAM stack.
</p>

  📖 <a href="https://cdelmonte-zg.github.io/nanoidp/"><b>Documentation</b></a>
</p>

> Design principles, non-goals and direction live in [VISION.md](https://github.com/cdelmonte-zg/nanoidp/blob/HEAD/VISION.md).

Need a real OAuth2/OIDC or SAML counterpart for an integration test, a demo or
an agent, without standing up Keycloak or provisioning a cloud tenant?

NanoIDP is a test identity provider: a real, spec-honest OAuth2/OIDC and
SAML 2.0 provider built for testing, which you install with `pip`,
configure with two YAML files and throw away when the test is done. It is
not a mock: it implements the protocols instead of imitating their
answers, and what it advertises is what it implements, so your client is
tested against the specification and not against a mock's guesses. It is
not a production IdP either: it never serves real users.

## Quick Start

```bash
pip install nanoidp

python -m nanoidp init    # create ./config (users, settings, keys)
python -m nanoidp         # serve on http://localhost:8000
```

Get…
