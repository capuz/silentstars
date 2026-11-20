---
repo: "thai-pc/fluxfiles"
name: "fluxfiles"
description: "Standalone, embeddable PHP 8.1+ file manager. Files stay on your own storage: Local, AWS S3, Cloudflare R2 or SFTP. JWT-scoped access, with adapters for Laravel, WordPress, React and Vue."
readmeQualityOk: true
url: "https://github.com/thai-pc/fluxfiles"
homepage: "https://fluxfiles.thai-pc.com/"
language: "PHP"
languages: ["PHP"]
languagePcts: [77]
topics: ["aws-s3", "file-manager", "sftp", "cloudflare-r2", "embeddable", "file-upload", "flysystem", "iframe", "image-optimization", "javascript"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-14T14:37:28Z"
lastCommitAt: "2026-11-20T12:00:07Z"
lastReleaseAt: "2026-06-06T04:25:08Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 64
maintainers: ["thai-pc"]
openGraphImageUrl: "https://opengraph.githubassets.com/eddd4a1cf274e09b0c73213f59441bab58401db7728d6333591527774c492457/thai-pc/fluxfiles"
fundingLinks: ["CUSTOM:https://buy.polar.sh/polar_cl_77JypT0hYYpmpYPCe8R8iUqV4X0jUP4hAUYq33YRCrM", "CUSTOM:https://fluxfiles.thai-pc.com/pricing/"]
---

# FluxFiles

**An embeddable file manager for PHP 8.1+.** Files stay on your own storage: local disk, AWS S3, Cloudflare R2 or SFTP. Your backend signs a short-lived JWT that decides what each user can see and do, so FluxFiles keeps no user database of its own.

- **Drop it into any app** with an iframe and a small JS SDK, or use the adapters for **Laravel**, **WordPress**, **React**, **Vue / Nuxt**, **CKEditor 4**, **CKEditor 5**, **TinyMCE** and **Summernote**.
- **Scoped per token:** disks, folder prefix, permissions, upload size, file types and quota are claims in the token, enforced on every request.
- **MIT core:** folders, trash, search, WebP/AVIF images, crop, zip, cross-disk copy and more. Paid add-ons are optional and separate.

### Try it in 30 seconds

```bash
docker run -d --name fluxfiles -p 8080:80 -e FLUXFILES_SECRET="$(openssl rand -hex 32)" ghcr.io/thai-pc/fluxfiles:latest
TOKEN=$(docker exec fluxfiles php -r 'require "/app/packages/core/embed.php"; echo fluxfiles_token(userId: "demo", perms: ["read","write","delete"], disks: ["local"]);')
echo "http://localhost:8080/public/index.html?token=$TOKEN"
```
