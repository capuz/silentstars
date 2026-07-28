---
repo: "XFTTech/UTLeetcoder"
name: "UTLeetcoder"
description: "A collection of stats about submission on leetcode"
readmeQualityOk: true
url: "https://github.com/XFTTech/UTLeetcoder"
homepage: "https://coder.xfttech.org/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
stars: 7
forks: 2
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-12-13T23:01:48Z"
lastCommitAt: "2026-07-28T14:55:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 80
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5c3764e624d55e3e0e717d59905ec02727352f09f8880fa069b92e10cd741dc0/XFTTech/UTLeetcoder"
---

# UTLeetcoder

## Website
- [UTLeetcoder](https://coder.xfttech.org/)
- [Daily Log](https://coder.xfttech.org/select_daily)
- [Weekly Log](https://coder.xfttech.org/select_weekly)

## Get from leetcode api
- url: https://leetcode.com/graphql
- get user:
    ```graphql
    { matchedUser(username: "YOUR_USERNAME") {
        username
        submitStats: submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
        }
    }
    ```
- get recent list:
    ```graphql
    {
    recentAcSubmissionList(username: "Ethan-ZYF", limit: 50) {
        id
        title
        titleSlug
        timestamp
    }
    }
    ```
## More APIs
- [Leetcode API](https://github.com/XFTTech/UTLeetcoder/blob/HEAD/LeetcodeAPI.md)

## TODO
- [ ] front end
    - [x] user profile page Modal of problem list with given difficulty
    - [ ] Change the header of each page
    - [ ] Better UI

## Instructions

To run this project locally, you should know we have two parts: backend and frontend.
- For backend, we write scripts to add users, problems and get users' submissions from leetcode api, all…
