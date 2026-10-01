---
repo: "chatdaddy/typescript-client"
name: "typescript-client"
description: "Typescript client for all ChatDaddy services"
readmeQualityOk: true
url: "https://github.com/chatdaddy/typescript-client"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-06-04T14:30:36Z"
lastCommitAt: "2026-10-01T10:24:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 69
maintainers: ["chatdaddynewera"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe678685d8667b16a70fd5cabf9ebbad8cc41db18b30ef2a2d9414d1b29640ca/chatdaddy/typescript-client"
---

# ChatDaddy Typescript Client

Typescript client for interacting with all ChatDaddy services.
You can use this client to authenticate, send & receive messages, update chats, create groups & everything you expect from the ChatDaddy APIs.

## API Docs

You can find the full API docs for the service [here](https://chatdaddy.stoplight.io/docs/openapi/YXBpOjMwMzA3ODYy-instant-messaging-service)

## Installing the Client

Using NPM:
```
npm i git+https://github.com/chatdaddy/typescript-client
```

Using yarn:
```
yarn add git+https://github.com/chatdaddy/typescript-client
```

You can then import in your code like:
``` ts
import { MessagesApi } from '@chatdaddy/client'
```

## Refresh Tokens and Generating Them

We recommend you use refresh tokens to generate these short lived access tokens. The refresh token is immune to password changes & prevents you from ever entering the password in plaintext. The refresh token automatically becomes invalid after **14 Days** of inactivity.

You do have to use your password to generate a refresh token.
``` ts
import { OAuthApi, encodeSHA256 } from '@chatdaddy/client'

const getRefreshToken = async() => {
	const oAuthApi = new OAuthApi()
	const {…
