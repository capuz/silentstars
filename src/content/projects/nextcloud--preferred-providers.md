---
repo: "nextcloud/preferred_providers"
name: "preferred_providers"
description: "Registration handling app for Nextcloud partners "
url: "https://github.com/nextcloud/preferred_providers"
homepage: "https://apps.nextcloud.com/apps/preferred_providers"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [70, 29]
topics: ["preferred-providers", "nextcloud", "website"]
stars: 12
forks: 5
openIssues: 7
closedIssues: 6
watchers: 3
contributors: 247
recentReleases: 0
createdAt: "2018-08-30T12:07:59Z"
lastCommitAt: "2026-06-28T01:46:48Z"
lastReleaseAt: "2024-04-04T07:17:03Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 70
maintainers: ["nextcloud-bot", "skjnldsv", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f4c65f44da40a60f0f6cc0d3e6d5b183b25712de5c557fb4a035bbd3eb9ada2/nextcloud/preferred_providers"
---

# Preferred providers

This application allows external request of new accounts.

1. Install and enable the application.
2. Go to the preferred providers settings and keep your token in reach.
3. Make a POST request to `/ocs/v2.php/account/request/YOURTOKEN` with the `{email: 'myawesomemail@nextcloud.com'}` data.
     ``` js
    $.post('/ocs/v2.php/account/request/56300a2bf7e06894a5b59c1eb47f7460', {email:'myawesomemail@nextcloud.com'}).complete((response) => {
        console.log(JSON.parse(response.responseText).data.setPassword)
    })
    ```
4. The server will accept or not the request and provide a link for the user login and password definition https://cloud.yourdomain.com/apps/preferred_providers/password/set/yourawesomemail@nextcloud.com/aipTgstNeenUXe20BJTH8
5. Meanwhile a mail confirmation is sent to the user. He have 6h to confirm or his account will be disabled
6. After 4, if you set up the `OCS-APIREQUEST` header, you will be redirected to a `nc://` url with valid app-password token for your application. If not, you will be logged and redirected to the home page.

## Website part
The repo for the register modue on the website is…
