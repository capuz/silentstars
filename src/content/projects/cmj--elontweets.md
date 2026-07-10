---
repo: "cmj/elontweets"
name: "elontweets"
description: "Gnuplot graph showing elonmusk likes and tweets."
readmeQualityOk: true
url: "https://github.com/cmj/elontweets"
language: "HTML"
languages: ["HTML", "Gnuplot"]
languagePcts: [73, 24]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-04-13T14:11:28Z"
lastCommitAt: "2026-07-10T07:00:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 58
maintainers: ["cmj"]
openGraphImageUrl: "https://opengraph.githubassets.com/b645265055707fddb377ec73d1fc43c82aac4caaa73c3d90e9af95f219f90e7e/cmj/elontweets"
discussionCount: 0
---

# elontweets
#### Gnuplot graph showing @elonmusk likes and tweets.

Generate graph:

```
$ gnuplot -c box.gp
```

### Notes
 - [elonmusk-all-tweets.csv](https://github.com/cmj/elontweets/blob/HEAD/elonmusk-all-tweets.csv) is every available tweet and retweet since 2010, all with UTC timestamps.  
 - [/totals](https://github.com/cmj/elontweets/blob/HEAD/totals) shows rolling month statistics and sorted daily-max tables. 
 - [elon_likes.txt](https://github.com/cmj/elontweets/blob/HEAD/elon_likes.txt) contains Likes since 2023-01-16 until 2024-06-13
 - [elonmusk.csv](https://github.com/cmj/elontweets/blob/HEAD/elonmusk.csv) is a daily tweets and likes csv file.
 - [stats-5m.csv](https://github.com/cmj/elontweets/blob/HEAD/stats-5m.csv) contains activity in 5 minute intervals.
 - [tweets.txt](https://github.com/cmj/elontweets/blob/HEAD/tweets.txt) stores (almost) all tweets since 2022-11-01. Timezone is America/Los_Angeles.
 - Retweets stored in [retweets.txt](https://github.com/cmj/elontweets/blob/HEAD/retweets.txt) and tweet IDs in [ids.dat](https://github.com/cmj/elontweets/blob/HEAD/ids.dat)

### Deleted Tweets

Screenshots of (most) [deleted…
