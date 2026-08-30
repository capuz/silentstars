---
repo: "imranbarbhuiya/TagScript"
name: "TagScript"
description: "A sandboxed template language for text your users write. Safe, extensible templating for Discord bots and user-facing customisation."
readmeQualityOk: true
url: "https://github.com/imranbarbhuiya/TagScript"
homepage: "https://tagscript.js.org"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [56, 39]
topics: ["string-parser", "tagscript", "safe-parsing", "hacktoberfest", "discord", "discord-bot", "discordjs", "interpreter", "sandbox", "template-engine"]
stars: 29
forks: 10
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2022-04-19T06:26:01Z"
lastCommitAt: "2026-08-30T09:24:17Z"
lastReleaseAt: "2022-04-28T06:44:44Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 91
undervaluedScore: 61
maintainers: ["dependabot[bot]", "imranbarbhuiya"]
openGraphImageUrl: "https://opengraph.githubassets.com/02e078da8d3eb26a5ddf88d7f99e313659160320c5b9293baed4a07ce3840935/imranbarbhuiya/TagScript"
fundingLinks: ["GITHUB:https://github.com/imranbarbhuiya"]
discussionCount: 0
---

# TagScript

**A sandboxed template language for text your users write.**

</div>

## What is TagScript?

TagScript is a template language for the case where **the person writing the template is not the person who wrote the app**. A Discord server admin building a custom command. A user customising their profile. A support team editing an auto-reply.

You cannot hand those people a JavaScript template literal, Handlebars or EJS: those languages assume the template author is trusted. TagScript assumes the opposite. A template is plain text sprinkled with `{tags}`, and the interpreter knows **nothing** except the parsers you explicitly register.

```ts
import { Interpreter, RandomParser } from 'tagscript';

const ts = new Interpreter(new RandomParser());

(await ts.run('{random:heads,tails}')).body; // -> 'tails'
(await ts.run('{if(1==1):yes|no}')).body; // -> '{if(1==1):yes|no}', no IfStatementParser registered
```

There is no host object to reach, no prototype to walk, no `require` to find. An unknown tag is not an error and not a crash. It stays in the output as literal text. The blast radius of a bad template is the template itself.

### What that buys you

- **A capability…
