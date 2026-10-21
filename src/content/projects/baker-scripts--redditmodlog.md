---
repo: "baker-scripts/RedditModLog"
name: "RedditModLog"
description: "Automated Reddit moderation log publisher — writes mod actions to a subreddit wiki page on a schedule"
readmeQualityOk: true
url: "https://github.com/baker-scripts/RedditModLog"
homepage: "https://baker-scripts.github.io"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [54, 40]
topics: ["automation", "docker", "moderation", "modlog", "python", "reddit", "selfhosted", "wiki"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-07T14:16:03Z"
lastCommitAt: "2026-10-21T23:36:27Z"
lastReleaseAt: "2026-03-01T23:39:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 68
maintainers: ["renovate[bot]", "bakerboy448", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4abc5b072c5f69f043caa0a0324ff5e1f110f4eb323eb5225b75ab9a7eb53318/baker-scripts/RedditModLog"
discussionCount: 0
---

# Reddit Modlog Wiki Publisher

Publishes a subreddit's moderation log to a wiki page as daily markdown tables. Each row links to the post or comment (never a user profile), shows the removal reason text, and carries a prefilled modmail inquiry link. A SQLite database handles deduplication and retention, and one database can serve several subreddits.

A Reddit-hosted port, `autowikimod`, is in progress under [`devvit/`](https://github.com/baker-scripts/RedditModLog/blob/HEAD/devvit/) (no self-hosting, bot password, or SQLite). Status is in [`devvit-migration/README.md`](https://github.com/baker-scripts/RedditModLog/blob/HEAD/devvit-migration/README.md). The Python app below is the supported version.

## Quick start (Docker)

The bot account needs moderator access to the subreddit, including wiki edit permission. Create a Reddit app of type "script" at <https://www.reddit.com/prefs/apps> to get a client ID and secret.

```bash
mkdir -p ./config/data ./config/logs
cp config_template.json ./config/config.json   # edit credentials and source_subreddit
docker run -d --name reddit-modlog \
  -e PUID=1000 -e PGID=1000 \
  -v ./config:/config \
  ghcr.io/baker-scripts/redditmodlog:1
```…
