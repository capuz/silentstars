---
repo: "libsib/diesel"
name: "diesel"
description: "a simple and lightweight HTTP server library built on Web Standards"
readmeQualityOk: true
url: "https://github.com/libsib/diesel"
homepage: "https://diesel.exvillager.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["open-source"]
stars: 38
forks: 0
openIssues: 4
closedIssues: 29
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2024-10-05T12:18:10Z"
lastCommitAt: "2026-10-23T09:34:27Z"
lastReleaseAt: "2026-08-18T03:57:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 64
maintainers: ["exvillager", "asyncpradeep"]
openGraphImageUrl: "https://opengraph.githubassets.com/338234d13ef125262c022d31ee205c8a70ba70b82b61c76d3e06d2e7d99022e6/libsib/diesel"
discussionCount: 1
---

### [Read the docs](https://diesel-core.vercel.app/)

# DieselJS

**Diesel** is a simple and lightweight HTTP server library built on Web Standards (`Request`/`Response`), giving you complete control over your API routes and middleware. It is designed to be intuitive and efficient, allowing you to quickly set up a server, define routes, and optimize important paths for faster response times. Started this on 5th october 2024

**Runs on Bun, Node.js, Deno, and Cloudflare Workers**

## Installation
Install diesel-core via bun | npm | yarn | pnpm 

```bash
npm install diesel-core
```
```bash
bun add diesel-core
```

### Code Example
```javascript
import {Diesel}  from "diesel-core"

const app = new Diesel()
const port = 3000

app.get("/", async (ctx:ContextType) => {
 return ctx.text("Hello world...!",200)
 // Note :- passing statusCode is optional
})

// Start the server (Bun)
Bun.serve({
  port,
  fetch: app.fetch,
})
console.log(`diesel is running on port ${port}`)
```
# HttpMethods 
**In Diesel there are almost all http methods that you can use**

```javascript
app.get() app.post() app.put() 
app.patch() app.delete() app.any() 
app.head() app.options() ,…
