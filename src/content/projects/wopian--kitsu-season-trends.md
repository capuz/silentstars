---
repo: "wopian/kitsu-season-trends"
name: "kitsu-season-trends"
description: "🦊 Kitsu seasonal anime trends"
readmeQualityOk: true
url: "https://github.com/wopian/kitsu-season-trends"
homepage: "https://season.moe"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["kitsu", "anime", "react", "nodejs", "cron", "messagepack", "data-visualization", "statistics", "static-site", "statistical-analysis"]
stars: 23
forks: 4
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-06-13T03:10:15Z"
lastCommitAt: "2026-07-04T22:52:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 62
maintainers: ["wopian"]
openGraphImageUrl: "https://opengraph.githubassets.com/13f973df019cb276cd8e0a82cc4ff13e1ce497f912aa81d0b822d34e5cf613e0/wopian/kitsu-season-trends"
fundingLinks: ["GITHUB:https://github.com/wopian", "KO_FI:https://ko-fi.com/wopian", "CUSTOM:https://paypal.me/wopian"]
discussionCount: 0
---

# Season Trends

[Kitsu] season trends for the currently airing anime

## Using the Data

All the data is free to use and available from:

- JSON format in `./data` or online at `season.moe/data/{year}-{season}.json`
- [MessagePack] format online at `season.moe/msgpack/{year}-{season}.msgpack`

## Data Format

Property names are compressed to save storage space and bandwidth.

### Seasonal Data

Data grouped by airing season - Winter, Spring, Summer and Autumn/Fall.

As of January 2022, the previous season is updated in tandem with the current season.

```js
{
  data: [
    {
      i: 12, // Kitsu anime ID
      t: 'One Piece', // Canonical title
      u: 0, // Subtype (0: TV, 1: ONA)
      n: 0, // 0: Leftover, 1: New
      d: [ // Data array containing each daily update
        {
          i: 0, // Index
          d: 450263, // Hours since epoch (x3600000 to get datetime)
          w: 82.19, // Wilson's confidence level (0.95) out of 100 (omitted if 0)
          l: 82.4, // Laplace smoothing out of 100 (omitted if 0)
          p: 100359.75, // Upvotes, ratings >= 3 out of 5, omitted if 0)
          o: 21433.25, // Downvotes, ratings < 3 out of 5, omitted if 0)
          r:…
