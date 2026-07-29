---
repo: "tttp/dxid"
name: "dxid"
description: "A better and safer way to display your primary keys in urls or in your app"
readmeQualityOk: true
url: "https://github.com/tttp/dxid"
homepage: "https://dxid.tttp.eu"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [67, 33]
topics: ["dx", "uuid", "ux-experience", "base32", "luhn"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-14T20:55:45Z"
lastCommitAt: "2026-07-29T06:14:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 45
maintainers: ["tttp", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/728dedd508006e6201f026a45d959ae6e256a210abb1780effc4503b34a384f5/tttp/dxid"
---

# 🆔 display primary keys the way humans and developers prefer

In your database, most of the tables have a primary key to give each record a unique id (sequence starting at 1). It's used to establish relationships between tables, enforce data integrity, and optimize query performance. Your computer loves it.

However, when we use this primary key as a (visible) identifier, eg. a customer number, an account id or product key... and encode it on base 10 (the normal way to write numbers), we end up with very long numbers in your pages, apps and urls. Humans and developers don't love it: it's prone to mistyping, it length changes every 10 and might break your layout and it makes urls long and hard to share.

To prevent errors, long numbers like credit cards, IBANs and many country ID numbers add an extra check digit (the checksum). It catches most typos, but makes a long number even longer.

**dxid** _/dik.sid/_ is a format to _display and communicate_ ids that is more compact than base 10 while containing a checksum to prevent any errors.

for instance (using the cli):

    $npx dxid 1984 -> bc8b
    $npx dxid 1234567898765432 -> 2cfd4z8v7jf2

It can be displayed instead of the…
