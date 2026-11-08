---
repo: "northguild/gmt"
name: "gmt"
description: "Date and time library for JavaScript and TypeScript, built on TC39 Temporal. Time zones, DST and business days, with the most tests."
readmeQualityOk: true
url: "https://github.com/northguild/gmt"
homepage: "https://northguild.dev/gmt/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["temporal", "iso-8601", "no-date", "biome", "eslint", "oxlint", "tanstack-intent", "date", "date-formatting", "date-time"]
stars: 9
forks: 0
openIssues: 19
closedIssues: 241
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-10T07:54:12Z"
lastCommitAt: "2026-11-08T10:42:25Z"
lastReleaseAt: "2026-05-16T12:13:31Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 60
maintainers: ["craig-o-curtis", "baldurpan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1177624369/df04a645-a3cf-4936-a35c-1d7001b420e3"
discussionCount: 0
---

# GMT: Give Me Temporal

**The most tested date and time library for JavaScript and TypeScript.** `@northguild/gmt` handles time zones, DST and business days in one library, in place of Luxon, date-fns, Moment.js, Day.js, Spacetime and `@internationalized/date`. It is built on the TC39 Temporal standard and never touches `Date`.

[Docs](https://northguild.dev/gmt/) · [API reference](https://northguild.dev/gmt/reference/) · [Tools](https://northguild.dev/gmt/tools/) · [Discord](https://discord.gg/TdvQdP3t5a)

```typescript
import {
  addDate,
  diffDate,
  endOfDate,
  formatDate,
  isBeforeDate,
  startOfDate,
  subtractDate,
} from "@northguild/gmt";

addDate("2024-01-31", { months: 1 }); // "2024-02-29"
subtractDate("2024-03-31", { days: 7 }); // "2024-03-24"
diffDate("2024-01-01", "2024-03-15", "days"); // 74
startOfDate("2024-03-15", "month"); // "2024-03-01"
endOfDate("2024-03-15", "month"); // "2024-03-31"
isBeforeDate("2024-03-15", "2024-04-01"); // true
formatDate("2024-03-15", "en-US", { dateStyle: "long" }); // "March 15, 2024"
```

`Date` in `addDate` names the type, not a catch-all. Each kind of time has its own set of functions: a date, a time of day, a date and time,…
