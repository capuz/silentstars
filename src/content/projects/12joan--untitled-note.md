---
repo: "12joan/untitled-note"
name: "untitled-note"
description: "An open-source app for taking notes that feels awesome to use"
readmeQualityOk: true
url: "https://github.com/12joan/untitled-note"
homepage: "https://untitlednote.xyz/"
language: "TypeScript"
languages: ["TypeScript", "Ruby"]
languagePcts: [70, 22]
topics: ["note-taking", "rich-text-editor", "self-hostable"]
stars: 15
forks: 12
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-08-02T14:55:32Z"
lastCommitAt: "2026-09-13T08:29:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 75
maintainers: ["depfu[bot]", "dependabot[bot]", "12joan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba8a3a071a1823cf732ae7f4844d76cc6dcf97d27da19454a48cd6dfb3fcde6a/12joan/untitled-note"
discussionCount: 1
---

# Untitled Note App

An open-source app for taking notes that feels awesome to use

## Self-hosting guide

Follow these instructions to run your own instance using Docker.

**[Self-hosting guide](https://untitlednote.xyz/docs/self-hosting)**

## Development

To run the app:

1. Install Docker
2. Copy `.env.example` to `.env` and configure the environment variables
3. `yarn install`
4. `docker compose up` (`--build` may be required if dependencies have been modified)
5. `docker compose exec web yarn build`
6. Go to http://localhost:3000/
7. Create an account with email address `user@example.com`
8. (If SMTP is disabled) Confirm your email address at http://localhost:3000/email_previews?to=user%40example.com

To convert your user to an admin:

```
$ docker compose exec web rails c
irb(main):001:0> User.find_by(email: 'user@example.com).update(admin: true)
```

To run the tests:

```bash
# Backend tests
docker compose web rails test

# Frontend tests
yarn test

# Fix linter errors
yarn lint --fix

# Watch for TypeScript errors
yarn typecheck:watch

# Run Playwright tests
yarn playwright install # First time only
yarn e2e

# Debug a Playwright test
yarn e2e…
