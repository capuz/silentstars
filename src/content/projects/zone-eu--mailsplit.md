---
repo: "zone-eu/mailsplit"
name: "mailsplit"
description: "Split email messages into an object stream"
readmeQualityOk: true
url: "https://github.com/zone-eu/mailsplit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 25
forks: 14
openIssues: 0
closedIssues: 17
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2016-08-25T08:59:47Z"
lastCommitAt: "2026-10-29T14:07:10Z"
lastReleaseAt: "2026-05-14T12:11:13Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 66
maintainers: ["andris9", "github-actions[bot]", "NickOvt"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcb4e6545c0cb5a87e9bec98541470c28a610c6314959a6f4c750f20c920f814/zone-eu/mailsplit"
---

# mailsplit

Split an email message stream into structured parts and join these parts back into an email message stream. If you do not modify the parsed data then the rebuilt message should be an exact copy of the original.

This is useful if you want to modify some specific parts of an email, for example to add tracking images or unsubscribe links to the HTML part of the message without changing any other parts of the email.

Supports both &lt;CR&gt;&lt;LF&gt; and &lt;LF&gt; (or mixed) line endings. Embedded rfc822 messages are also parsed, in this case you would get two sequential 'node' objects with no 'data' or 'body' in between (first 'node' is for the container node and second for the root node of the embedded message).

In general this module is a primitive for building e-mail parsers/handlers like [mailparser](https://www.npmjs.com/package/mailparser). Alternatively you could use it to parse other MIME-like structures, for example _mbox_ files or multipart/form-data uploads.

See [rewrite-html.js](https://github.com/zone-eu/mailsplit/blob/HEAD/examples/rewrite-html.js) for an usage example where HTML content is modified on the fly (example script adds a link to every…
