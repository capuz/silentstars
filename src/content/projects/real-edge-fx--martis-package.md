---
repo: "Real-Edge-FX/martis-package"
name: "martis-package"
description: "Martis — Laravel Admin Engine. A modern, override-first admin engine for Laravel with React frontend."
readmeQualityOk: true
url: "https://github.com/Real-Edge-FX/martis-package"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [63, 31]
stars: 5
forks: 1
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T18:28:57Z"
lastCommitAt: "2026-10-09T18:57:04Z"
lastReleaseAt: "2026-04-27T17:25:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 60
maintainers: ["lmelomoura", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0db6eeb3815b5a92fab581d97fe43680519e2163aa933550fe6ec3fa47c8e87f/Real-Edge-FX/martis-package"
fundingLinks: ["KO_FI:https://ko-fi.com/luizmoura"]
---

React-first. Context-aware. Built for developers who ship.

---

Martis is a full-featured, React-first admin panel engine for Laravel. It is built on **PrimeReact**, **Tailwind CSS**, **React Router**, and **TanStack Query**, giving you a modern SPA experience with the power and simplicity of Laravel on the backend.

## Installation

```bash
composer require martis/martis
```

```bash
php artisan martis:install
```

Visit `/martis` to log in. See the [Installation Guide](https://github.com/Real-Edge-FX/martis-package/blob/HEAD/docs/installation-guide.md) for full setup.
The install command publishes precompiled assets, configuration, and scaffolds the admin panel in your Laravel application. End users do not need to run Vite or install Node dependencies in the host app.

When you want Martis to provision the optional profile and two-factor support columns as well, use:

```bash
php artisan martis:install --with-profile --with-2fa
```

The two flags are independent: `--with-profile` publishes the avatar column migration, and `--with-2fa` publishes the two-factor columns migration (`*_add_martis_two_factor_columns_to_users_table.php`). Both migrations only add the columns that are…
