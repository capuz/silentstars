---
repo: "MeilCli/slack-upload-file"
name: "slack-upload-file"
description: "upload file to slack action"
readmeQualityOk: true
url: "https://github.com/MeilCli/slack-upload-file"
homepage: "https://github.com/MeilCli/actions"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [78, 22]
topics: ["github-actions", "slack", "slack-api"]
stars: 36
forks: 5
openIssues: 1
closedIssues: 22
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-07-18T15:40:58Z"
lastCommitAt: "2026-07-22T06:10:05Z"
lastReleaseAt: "2021-05-01T09:02:36Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["MeilCli", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/904f086ff0f10779e7e9744609ed7dc89d46f8c6e054d24c7c03888113b5733f/MeilCli/slack-upload-file"
fundingLinks: ["GITHUB:https://github.com/MeilCli"]
---

# slack-upload-file
upload file to slack action

## Example
### Post by files
```yaml
jobs:
  post:
    runs-on: ubuntu-latest
    steps:
      - uses: MeilCli/slack-upload-file@v5
        with:
          slack_token: ${{ secrets.SLACK_TOKEN }}
          channel_id: ${{ secrets.SLACK_CHANNEL_ID }}
          file_path: 'docs/*.txt'
          initial_comment: 'post by slack-upload-file'
          # thread_ts: 'option'
```

### Post by workflow yaml
```yaml
jobs:
  post:
    runs-on: ubuntu-latest
    steps:
      - uses: MeilCli/slack-upload-file@v5
        with:
          slack_token: ${{ secrets.SLACK_TOKEN }}
          channel_id: ${{ secrets.SLACK_CHANNEL_ID }}
          content: 'file content'
          file_type: 'text'
          file_name: 'text.txt'
          title: 'title of file'
          initial_comment: 'post by slack-upload-file'
          # thread_ts: 'option'
```

## Information
- This action execute simply [files.upload](https://api.slack.com/methods/files.upload), and can upload multiple files by [glob pattern](https://github.com/actions/toolkit/tree/main/packages/glob#patterns)
- How get slack token? see [Basic app…
