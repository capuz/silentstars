---
repo: "xiaoyuyu6420/dsh-backup"
name: "dsh-backup"
description: "One command backs up & restores all of ~/.dsh for DeepSeek Harness: /backup, scheduled auto-backup, upgrade snapshots, session-log doctor & repair, out-of-process rescue console, credential redaction, GitHub sync. 一条命令备份/恢复 DSH 全部数据：升级快照、会话日志体检修复、起不来也能自救的救援通道、凭据脱敏。"
readmeQualityOk: true
url: "https://github.com/xiaoyuyu6420/dsh-backup"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["dsh-plugin", "backup", "deepseek-harness", "restore", "dsh", "github-sync", "snapshot", "credential-redaction", "cross-machine-restore"]
stars: 12
forks: 4
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-14T08:26:08Z"
lastCommitAt: "2026-08-28T15:31:02Z"
lastReleaseAt: "2026-08-19T22:30:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["xiaoyuyu6420", "Choi-Peng"]
openGraphImageUrl: "https://opengraph.githubassets.com/128fe407cc981164f266fc1afdd3d3e3eab69645d80ad5444b8c5c62a5657b57/xiaoyuyu6420/dsh-backup"
discussionCount: 1
---

# dsh-backup

English | [简体中文](https://github.com/xiaoyuyu6420/dsh-backup/blob/HEAD/README.zh.md)

**Your entire DeepSeek Harness (DSH) workspace lives in one folder: `~/.dsh`. One failed upgrade, one accidental delete, one new laptop — without a backup, sessions, settings and skills are all gone. dsh-backup gives them back with one command.**

```sh
dsh plugin --profile web add @xiaoyuyu6420/dsh-backup   # install
# restart dsh web, then type:
/backup                                                  # → a verified archive lands in ~/Desktop/dsh-backups/
```

Real output from a fresh v0.9.0 install:

```text
备份完成: dsh-20260826-195150036.tar.gz
sha256: 8f9ae6322ef782d21554981cf4547220d5bb3e64d7964a883317415ad54e3cbb
轮换删除 0 份（保留 7 份）
```

Prefer clicking? There's a visual panel in `dsh web` → Settings → Plugins → Backup: list, verify, restore, delete, edit settings — no restart.

## Why you want this

| Fear | What dsh-backup does about it |
|---|---|
| "An upgrade broke my setup" | Auto-takes a `dsh-pre-upgrade-` snapshot the moment the host version changes — try the new release, roll back if it bites |
| "I deleted / broke something" | `/backup restore latest --dry-run` previews…
