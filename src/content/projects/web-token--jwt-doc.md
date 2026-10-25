---
repo: "web-token/jwt-doc"
name: "jwt-doc"
description: "Documentation of JWT Framework."
readmeQualityOk: true
url: "https://github.com/web-token/jwt-doc"
homepage: "https://web-token.spomky-labs.com/"
language: "HTML"
languages: ["HTML", "Makefile"]
languagePcts: [80, 20]
stars: 13
forks: 20
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2017-10-06T08:29:43Z"
lastCommitAt: "2026-10-25T22:11:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 69
maintainers: ["Spomky", "stof"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9197019cbfe040949fd539bb2cb9d367c3811068c76cb2e8c6de799e8cc3f68/web-token/jwt-doc"
---

# The documentation of JWT Framework

The public documentation of [JWT Framework](https://github.com/web-token/jwt-framework), JSON Web Tokens for
PHP and Symfony: signature (JWS), encryption (JWE), keys (JWK) and algorithms (JWA), the components, the
Symfony bundle and the console commands.

Published with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) on GitHub Pages:
**<https://web-token.spomky-labs.com/>**

## Writing

```bash
make install   # the toolchain, in .venv, from requirements.txt
make serve     # http://127.0.0.1:8000, rebuilt as you save
make check     # the strict build continuous integration runs
```

`make check` is the gate: a broken internal link, an anchor that does not exist, a page absent from the
navigation or a navigation entry without a page fails the build.

## Where things are

| Path | What it is |
|---|---|
| `mkdocs.yml` | The site: theme, extensions, plugins, and the whole navigation |
| `docs/` | The pages, one directory per section of the navigation |
| `docs/assets/stylesheets/` | The look: `slabs-tokens.css`, copied as it is from the Slabs design kit, and `slabs.css`, which applies the…
