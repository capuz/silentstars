---
repo: "sapicd/sapic"
name: "sapic"
description: "sapic(picbed) - A self-hosted Flask-based image host that can store images on Upyun, Qiniu, Alibaba Cloud OSS, Tencent Cloud COS, GitHub, Gitee, S3, and more, with support for custom extensions."
originalDescription: "sapic(picbed) - 基于Flask的Web自建图床，可存储到又拍云、七牛云、阿里云OSS、腾讯云COS、GitHub、Gitee、S3等，支持自定义扩展。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sapicd/sapic"
homepage: "https://sapic.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["python", "flask", "picbed", "layui", "sapic"]
stars: 459
forks: 56
openIssues: 0
closedIssues: 27
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2019-12-19T09:53:35Z"
lastCommitAt: "2026-11-18T12:23:59Z"
lastReleaseAt: "2020-08-25T14:18:22Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 35
maintainers: ["staugur", "kasparovabi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cd11fd48e6cb629ea1f41b629d97ea575d4b9389f3cd921a447e71f6a4180da/sapicd/sapic"
---

# sapic

A self-hosted image host. The backend is an API-only Flask application (`server/`, package name `sapic`);
the front end is a separate Vue 3 single-page app (`web/`). Metadata lives in a relational database
(PostgreSQL / MySQL / SQLite), and **both storage backends and login methods are plugins**: a third-party
pip package can add a new object store or identity provider without touching the core.

> **Current version `2.0.0-pre.1` (the v2 rewrite)**
>
> The backend is now an API-only Flask app (Peewee + a relational database, no Redis), and the front end
> is a standalone Vue 3 app. The v1 sources are no longer shipped in this repository (see the git tags).
> To upgrade from v1, start with [docs/migrate-v1.md](https://github.com/sapicd/sapic/blob/HEAD/docs/migrate-v1.md); the item-by-item changes
> are in [CHANGELOG.md](https://github.com/sapicd/sapic/blob/HEAD/CHANGELOG.md).

Chinese version: [README-cn.md](https://github.com/sapicd/sapic/blob/HEAD/README-cn.md).
