---
repo: "julianwagle/kommit-king"
name: "kommit-king"
description: "Bash script that pushes a contribution to Github every 10 minutes. You can look like even more of a workaholic in no time!"
readmeQualityOk: true
url: "https://github.com/julianwagle/kommit-king"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["bash", "commit", "github"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-04T16:18:32Z"
lastCommitAt: "2026-07-10T06:50:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 67
maintainers: ["julianwagle"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd92052a4dcdfb939a8b14fd3f370a82aa31605f83c600161a70aa21d075509a/julianwagle/kommit-king"
---

Developed for Unix-based systems.

Pre-reqs:

1. Generate a Github personal access token. [Docs found here.](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Install [Github CLI](https://cli.github.com/) ... Linux instructions [here](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) for running on server (recommended).
3. Login with Github CLI: `$ gh auth login`

To Start Run:

```bash
gh repo clone julianwagle/kommit-king &&
cd kommit-king &&
bash kommit.sh -u <YOUR_GITHUB_USERNAME> -e <YOUR_GITHUB_EMAIL> -t <YOUR_GITHUB_TOKEN>
```

To Stop Run:

```bash
cd kommit-king && crontab blank.txt
```

You will now have your github profile updated every ten minutes.
Note that if running locally it will only update while your computer is open and connected to the internet.
Fow this reason it is recommended that you run from a server.

Congrats, in one year you will look like the ultimate baller.
