---
repo: "arnesacnussem/jellyfin-plugin-meilisearch"
name: "jellyfin-plugin-meilisearch"
description: "A search plugin for Jellyfin"
readmeQualityOk: true
url: "https://github.com/arnesacnussem/jellyfin-plugin-meilisearch"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [74, 26]
topics: ["jellyfin-plugin", "meilisearch"]
stars: 346
forks: 22
openIssues: 6
closedIssues: 62
watchers: 8
contributors: 13
recentReleases: 0
createdAt: "2024-11-05T15:34:27Z"
lastCommitAt: "2026-11-15T11:17:44Z"
lastReleaseAt: "2025-06-06T16:46:40Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 26
maintainers: ["dependabot[bot]", "jumoog", "twistor"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb58172f89e5ff768678b57a1f745304c7049fa7cd2a11bcc1d548ee4d6b662a/arnesacnussem/jellyfin-plugin-meilisearch"
---

# Meilisearch Plugin for Jellyfin

A plugin for Jellyfin that improves search by utilizing Meilisearch as a search engine. Search logic is offloaded to a Meilisearch instance, and the response from Jellyfin is modified 

Improved:
* Speed
* Results _([fuzzy matching](https://en.wikipedia.org/wiki/Approximate_string_matching), typos)_

> [!NOTE]
> As long as your client uses `/Items` endpoint for search, it should be supported seamlessly _I guess_

> Inspired by [JellySearch](https://gitlab.com/DomiStyle/jellysearch).

---

### Setup instructions

1. **Setup a Meilisearch instance** _(maybe a hosted one in the cloud will also work, but I don't recommend)_
    - Docker is recommended. Example `docker-compose.yml`:
       ```
       services:
          meilisearch:
            container_name: meilisearch
            image: getmeili/meilisearch:v1.34 # older versions may have compatibility issues
            restart: unless-stopped
        
            environment:
              MEILI_ENV: production
              MEILI_NO_ANALYTICS: "true"
              MEILI_MASTER_KEY: super-secret-key
        
            volumes:
              # meilisearch's data
              -…
