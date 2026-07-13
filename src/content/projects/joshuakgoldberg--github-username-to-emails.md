---
repo: "JoshuaKGoldberg/github-username-to-emails"
name: "github-username-to-emails"
description: "Fetches any public emails associated with a GitHub username. 📧"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/github-username-to-emails"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 18
forks: 0
openIssues: 4
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-12-22T03:16:23Z"
lastCommitAt: "2026-07-13T06:36:28Z"
lastReleaseAt: "2025-04-01T20:22:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 46
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f25f2bd08ef74f2687d6e999eae9d4f48821eefc03875d914cee95dd8680caa6/JoshuaKGoldberg/github-username-to-emails"
---

<h1 align="center">github-username-to-emails</h1>

	Fetches any public emails associated with a GitHub username.
	📧
</p>

	
	

	
</p>

## Usage

You can run this as a standalone command, or by its Node.js API.

### CLI

```shell
npx github-username-to-emails joshuakgoldberg
```

```plaintext
Account email: github@joshuakgoldberg.com
Event Email(s): 12
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

- `account`: [`/users/${username}`](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user): public account information
- `events`: [`/users/{username}/events`](https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28#list-public-events-for-a-user): commits pushed by the user
  - This is…
