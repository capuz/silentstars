---
repo: "JoshuaKGoldberg/get-github-auth-token"
name: "get-github-auth-token"
description: "Retrieves the running user's GitHub authentication token. 🪙"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/get-github-auth-token"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [66, 34]
stars: 6
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2024-05-25T05:50:08Z"
lastCommitAt: "2026-11-24T01:59:55Z"
lastReleaseAt: "2026-11-24T02:00:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 79
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/5003042e008afa1f68837372b0864f4fc66912a066283afe2104ef6d871f7c7d/JoshuaKGoldberg/get-github-auth-token"
---

Retrieves the running user's GitHub authentication token.
	🪙

	
	

	

## Usage

```shell
npm i get-github-auth-token
```

```ts
import { getGitHubAuthToken } from "get-github-auth-token";

const auth = await getGitHubAuthToken("Hello, world! 💖");

if (auth.succeeded) {
	console.log("Token:", auth.token);
} else {
	console.error("Oh no:", auth.error);
}
```

`getGitHubAuthToken` attempts to find a GitHub auth token from the following places, in order:

1. `process.env.GH_TOKEN`
2. `process.env.GITHUB_TOKEN`
3. Executing `gh auth token` as a child process

> 💡 Using this to create a new [Octokit](https://octokit.github.io/rest.js) instance?
> See [JoshuaKGoldberg/octokit-from-auth](https://github.com/JoshuaKGoldberg/octokit-from-auth).

## Development

See [`.github/CONTRIBUTING.md`](https://github.com/JoshuaKGoldberg/get-github-auth-token/blob/HEAD/.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](https://github.com/JoshuaKGoldberg/get-github-auth-token/blob/HEAD/.github/DEVELOPMENT.md).
Thanks! 🪙
