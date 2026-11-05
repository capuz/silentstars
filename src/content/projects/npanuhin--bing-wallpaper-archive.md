---
repo: "npanuhin/Bing-Wallpaper-Archive"
name: "Bing-Wallpaper-Archive"
description: "Most comprehensive and easy-to-use collection of stunning Bing daily wallpapers 🖼️"
readmeQualityOk: true
url: "https://github.com/npanuhin/Bing-Wallpaper-Archive"
homepage: "https://bing.npanuhin.me"
language: "Python"
languages: ["Python"]
languagePcts: [60]
topics: ["bing", "bing-wallpaper", "wallpapers", "archive", "static"]
stars: 82
forks: 12
openIssues: 2
closedIssues: 2
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-12-27T21:46:13Z"
lastCommitAt: "2026-11-05T08:05:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 36
maintainers: ["npanuhin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b093fc370963bcb6521b1b60099debe1151c7139590b297244b60be183987a8d/npanuhin/Bing-Wallpaper-Archive"
---

### Usage

All information is available through JSON API files at the following URL:

```d2lang
https://bing.npanuhin.me/{country}-{language}.json
```

Available countries and languages:

API files contain information about each image:
```jsonc
// Types and descriptions:
{
    "title": "Title" | null,
    "caption": "Caption" | null,
    "subtitle": "Subtitle" | null,
    "copyright": "Copyright" | null,
    "description": "Description" | null,
    "date": "Date in %Y-%m-%d format with leading zeros",
    "bing_url": "Bing URL" | null,
    "url": "Storage URL: https://bing.npanuhin.me/{country}/{language}/{date}.jpg"
},
// Example:
{
    "title": "Example title",
    "caption": "Example caption",
    "subtitle": "Example subtitle",
    "copyright": "npanuhin/Bing Wallpaper Archive ©",
    "description": "Example description\nThat can span multiple lines",
    "date": "2024-01-16",
    "bing_url": null,
    "url": "https://bing.npanuhin.me/US/en/2024-01-16.jpg"
}
```

          21 MB ↑
         1.6 MB ↑
        0.38 MB  
        0.04 MB  

The `Size` column shows the approximate average file size. `↑` means the size will increase with time.

Replace `.json` with `.min.json` to get…
