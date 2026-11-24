---
repo: "JoshuaKGoldberg/github-username-to-emails"
name: "github-username-to-emails"
description: "Fetches any public emails associated with a GitHub username. 📧"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/github-username-to-emails"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 18
forks: 0
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2023-12-22T03:16:23Z"
lastCommitAt: "2026-11-24T01:59:20Z"
lastReleaseAt: "2026-11-24T01:59:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 41
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cbb169187e5e1bdb5f6c3e367b055262a5628c7b7eda8ebb92bf252abd025fb/JoshuaKGoldberg/github-username-to-emails"
---

Fetches any public emails associated with a GitHub username.
	📧

	
	

	

## Usage

You can run this as a standalone command, or by its Node.js API.

### CLI

```shell
npx github-username-to-emails joshuakgoldberg
```

```plaintext
Account email: github@joshuakgoldberg.com
Commit Email(s): 12
 - git@joshuakgoldberg.com, with names: Josh Goldberg, Josh Goldberg ✨
 - ...
```

### Node.js

```shell
npm i github-username-to-emails
```

```ts
import { getGitHubUsernameEmails } from "github-username-to-emails";

await getGitHubUsernameEmails({ username: "joshuakgoldberg" });

/*
{
  account: 'github@joshuakgoldberg.com',
  events: { 'git@joshuakgoldberg.com': [ 'Josh Goldberg ✨', 'Josh Goldberg' ] }
}
*/
```

Calling `getGitHubUsernameEmails` will try to find the user's email from two public data points:
