---
repo: "slackapi/deno-slack-api"
name: "deno-slack-api"
description: "Slack API Client for Deno Run on Slack projects"
readmeQualityOk: true
url: "https://github.com/slackapi/deno-slack-api"
homepage: "https://api.slack.com/automation"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 45
forks: 18
openIssues: 10
closedIssues: 9
watchers: 15
contributors: 32
recentReleases: 0
createdAt: "2022-03-09T19:06:21Z"
lastCommitAt: "2026-08-01T06:15:44Z"
lastReleaseAt: "2022-08-05T19:06:59Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["dependabot[bot]", "WilliamBergamin", "sfdc-ospo-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fc854c3ffe6c446152831303882bada6c5d839b458d8331e032d85265735203/slackapi/deno-slack-api"
---

# deno-slack-api

Slack API Client for Deno Run on Slack projects

```ts
import { SlackAPI } from "jsr:@slack/api";

const client = SlackAPI(token);

// ...or create a client with options
const client = SlackAPI(token, {
  slackApiUrl: "...",
});

await client.chat.postMessage({
  text: "hello there",
  channel: "...",
});

// respond to a response_url
await client.response("...", payload);

// use apiCall() w/ method name
await client.apiCall("chat.postMessage", {
  text: "hello there",
  channel: "...",
});
```

## Requirements

A recent version of `deno`.

## Versioning

Releases for this repository follow the [SemVer](https://semver.org/) versioning
scheme. The SDK's contract is determined by the top-level exports from
`src/mod.ts` and `src/types.ts`. Exports not included in these files are deemed
internal and any modifications will not be treated as breaking changes. As such,
internal exports should be treated as unstable and used at your own risk.

## Running Tests

If you make changes to this repo, or just want to make sure things are working
as desired, you can run:

    deno task test

To get a full test coverage report, run:

    deno task test:coverage

---

### Getting…
