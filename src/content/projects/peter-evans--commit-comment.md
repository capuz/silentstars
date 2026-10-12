---
repo: "peter-evans/commit-comment"
name: "commit-comment"
description: "A GitHub action to create a comment for a commit on GitHub"
readmeQualityOk: true
url: "https://github.com/peter-evans/commit-comment"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["github-actions", "github-api", "commit-comment"]
stars: 99
forks: 18
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2019-10-21T07:45:57Z"
lastCommitAt: "2026-10-12T11:16:07Z"
lastReleaseAt: "2022-10-17T13:14:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 32
maintainers: ["dependabot[bot]", "actions-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b671be400e5e09f42432786db87c44a5ad6910e9b7f360411a19d15cc2369155/peter-evans/commit-comment"
fundingLinks: ["GITHUB:https://github.com/peter-evans"]
---

# Commit Comment

A GitHub action to create a comment for a commit on GitHub.

## Usage

### Add a comment to the current context's commit SHA

The SHA defaults to `github.sha` OR, for `pull_request` events `github.event.pull_request.head.sha`.

```yml
      - name: Create commit comment
        uses: peter-evans/commit-comment@v4
        with:
          body: |
            This is a multi-line test comment
            - With GitHub **Markdown** :sparkles:
            - Created by [commit-comment][1]

            [1]: https://github.com/peter-evans/commit-comment
          reactions: '+1'
```

### Update a commit comment

```yml
      - name: Update commit comment
        uses: peter-evans/commit-comment@v4
        with:
          comment-id: 557858210
          body: |
            **Edit:** Some additional info
          reactions: eyes
```

### Add commit comment reactions

```yml
      - name: Add reactions
        uses: peter-evans/commit-comment@v4
        with:
          comment-id: 557858210
          reactions: |
            heart
            hooray
            laugh
```

## Action inputs

| Name | Description | Default |
| --- | --- | --- |
| `token` | `GITHUB_TOKEN` or a…
