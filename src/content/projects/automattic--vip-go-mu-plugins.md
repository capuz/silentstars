---
repo: "Automattic/vip-go-mu-plugins"
name: "vip-go-mu-plugins"
description: "The development repo for mu-plugins used on the WordPress VIP Platform."
readmeQualityOk: true
url: "https://github.com/Automattic/vip-go-mu-plugins"
homepage: "https://docs.wpvip.com/"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["wordpress", "vip-go", "vip"]
stars: 258
forks: 110
openIssues: 1
closedIssues: 485
watchers: 104
contributors: 260
recentReleases: 0
createdAt: "2015-03-26T16:42:46Z"
lastCommitAt: "2026-10-29T14:06:23Z"
lastReleaseAt: "2021-01-22T16:00:44Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["rebeccahum", "sjinks", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/147c751fa8bf4e8537e2d5b3167933e8cf5564dff2919667e9d0f5c46cda9a42/Automattic/vip-go-mu-plugins"
discussionCount: 0
---

# VIP Go mu-plugins

Development repository for WordPress VIP Go MU plugins.

## Repo map

- `000-vip-init.php`, `001-core.php`, `z-client-mu-plugins.php`: main MU bootstrap/load path.
- `001-core/`, `lib/`, `cache/`, `security/`, `vip-helpers/`, `wp-cli/`: platform feature modules.
- [`config/`](https://github.com/Automattic/vip-go-mu-plugins/blob/HEAD/config/README.md): site details metadata sent to SDS.
- `tests/`: PHPUnit test suite for root MU code.
- `__tests__/e2e/`: Playwright e2e suite.
  Check setup version selection with `__tests__/e2e/bin/test-setup-env-version.sh`.
- `ci/`, `.github/workflows/`: automation, CI, release/deploy workflows.
- `advanced-post-cache/`, `http-concat/`, `jetpack/`, `lightweight-term-count-update/`, `rewrite-rules-inspector/`, `search/elasticpress/`, `wp-parsely/`, `gutenberg-ramp/`, `drop-ins/hyperdb/`: external submodules/upstream code.

## Quickstart

```bash
git submodule update --init --recursive
composer install
npm install
```

Run a fast smoke check:

```bash
npm run phplint
npm run test:smoke
```

Run the main local quality/test commands:

```bash
npm run lint
npm run test
```

Check exact PHP runner argument forwarding with `php…
