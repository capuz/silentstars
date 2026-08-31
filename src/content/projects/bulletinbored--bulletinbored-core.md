---
repo: "bulletinbored/bulletinbored-core"
name: "bulletinbored-core"
description: "The core of bulletinbored: minimal, extensible forum software with zero dependencies"
readmeQualityOk: true
url: "https://github.com/bulletinbored/bulletinbored-core"
homepage: "https://www.bulletinbored.net/"
language: "PHP"
languages: ["PHP"]
languagePcts: [91]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-05T11:26:02Z"
lastCommitAt: "2026-08-31T09:56:49Z"
lastReleaseAt: "2026-08-12T17:02:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/163f0ca61ef5a7966c87b553a4f07931fb79dec316718387e105aa747a92d201/bulletinbored/bulletinbored-core"
---

# bulletinbored

Minimal, extensible forum software with zero dependencies. Upload files and run — no Composer, no Docker, no deployment needed.

## Requirements

- **PHP 8.1+** with PDO extension (pdo_sqlite or pdo_mysql)
- **Web server** — Apache, Nginx, IIS, LiteSpeed, or PHP built-in server

## Installation

### Quick start (Apache)

1. Upload all files to your web server
2. Ensure `mod_rewrite` is enabled (the `.htaccess` file is included)
3. Ensure the `data/`, `uploads/`, and `uploads/avatars/` directories are writable
4. Visit the site in your browser — the installer starts automatically

### Nginx

1. Upload all files to your web server
2. Copy `nginx.conf` to your server's site configuration (e.g. `/etc/nginx/sites-available/bulletinbored`)
3. Adjust `server_name`, `root`, and the PHP-FPM socket path
4. Enable the site and reload Nginx
5. Visit the site in your browser — the installer starts automatically

```bash
sudo ln -s /etc/nginx/sites-available/bulletinbored /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

**Important:** Nginx does not read `.htaccess` files. The `nginx.conf` file includes all required rewrite rules and security blocks.…
