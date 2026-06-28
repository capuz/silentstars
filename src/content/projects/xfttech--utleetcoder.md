---
repo: "XFTTech/UTLeetcoder"
name: "UTLeetcoder"
description: "A collection of stats about submission on leetcode"
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
lastCommitAt: "2026-06-28T02:03:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 80
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6f6f131036934d3e1f3b84fc1288ceb4524c83ea744e1c63bb8f75f27284ca9f/XFTTech/UTLeetcoder"
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
- [Leetcode API](LeetcodeAPI.md)

## TODO
- [ ] front end
    - [x] user profile page Modal of problem list with given difficulty
    - [ ] Change the header of each page
    - [ ] Better UI

## Instructions

To run this project locally, you should know we have two parts: backend and frontend.
- For backend, we write scripts to add users, problems and get users' submissions from leetcode api, all of those data will be stored in…
