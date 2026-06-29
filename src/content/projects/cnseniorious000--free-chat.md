---
repo: "CNSeniorious000/free-chat"
name: "free-chat"
description: "An elegant LLM chat UI forked from chatgpt-demo of @anse-app. Index site at https://free-chat.asia"
url: "https://github.com/CNSeniorious000/free-chat"
homepage: "https://endless-chat.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [48, 40]
topics: ["astro", "aibot", "chatgpt", "openai", "openai-api", "solidjs", "tiktoken"]
stars: 196
forks: 56
openIssues: 9
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-03-30T15:49:55Z"
lastCommitAt: "2026-06-29T07:22:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 83
undervaluedScore: 39
maintainers: ["renovate[bot]", "CNSeniorious000"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/621409520/c2854ea7-e8c5-4ef2-ad0e-c882bed39f3e"
discussionCount: 1
---

<h1 align="center">Free Chat</h1>

<br>

> Forked from [chatgpt-demo](https://github.com/anse-app/chatgpt-demo). Find deployment instructions in the original repository.

## Branches

- `main`: the base branch containing all the styles
- `endless`: includes token-based message list trimming
- `promplate-demo`: active developed, for demonstrating the usage of [`promplate`](http://promplate.dev/)

## Environment Variables

You can control the website through environment variables.

| Name | Description | Default |
| --- | --- | --- |
| `OPENAI_API_KEY` | Your API Key for OpenAI. | `null` |
| `OPENAI_API_TEMPERATURE` | Default `temperature` parameter for model. | `1.0` |
| `HTTPS_PROXY` | Provide proxy for OpenAI API. | `null` |
| `OPENAI_API_BASE_URL` | Custom base url for OpenAI API. | `https://api.openai.com` |
| `HEAD_SCRIPTS` | Inject analytics or other scripts before `</head>` of the page | `null` |
| `PUBLIC_SECRET_KEY` | Secret string for the project. Use for generating signatures for API calls | `null` |
| `SITE_PASSWORD` | Set password for site. If not set, site will be public | `null` |
| `OPENAI_API_MODEL` | ID of the model to use. [Model endpoint…
