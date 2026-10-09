---
repo: "MrGreenGaming/MTA-Resources"
name: "MTA-Resources"
description: "All resources used on the Mr. Green Gaming MTA servers (Race & Race Mix)."
readmeQualityOk: true
url: "https://github.com/MrGreenGaming/MTA-Resources"
homepage: "https://mrgreengaming.com"
language: "Lua"
languages: ["Lua", "JavaScript"]
languagePcts: [69, 22]
stars: 37
forks: 53
openIssues: 6
closedIssues: 173
watchers: 3
contributors: 41
recentReleases: 0
createdAt: "2015-09-24T09:13:56Z"
lastCommitAt: "2026-10-09T18:56:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 74
undervaluedScore: 46
maintainers: ["VulpyWags"]
openGraphImageUrl: "https://opengraph.githubassets.com/afce2cef5f78e88134a3c48786faaca0ed62a21cdacb20030f1764f6627dd2b4/MrGreenGaming/MTA-Resources"
---

# Mr.Green-MTA-Resources
All resources used on the MrGreenGaming.com Multi Theft Auto: San Andreas (MTASA) servers (Race &amp; Race Mix).

# Local server setup
- Checkout the resources into your local MTASA server folder.
- Example maps, server config file and an ACL example can be found in the `config` folder.
- Setup GreenCoins development mode, with this you can `gclogin` with a testing account. Run this command on an admin client: `/srun set("*gc.devmode", true)`
- Restart the MTA server. Now you can login with `/gclogin <forumid> admin` or using F6, just pick a forumid as any random number. You will start with 99999 GC. Important to use a number as login and 'admin' as the password.
- Setup a MySQL database and import `config/database.sql`. (Alternatively, if you're using Docker, just run the `config/docker-compose.yml` file with the `docker compose up` command.)
- Connect to your MySQL database in the gcshop settings (with runcode for example): `/srun set("*gcshop.host", 'localhost'); set("*gcshop.dbname", 'mrgreen_mtasrvs'); set("*gcshop.user", 'root'); set("*gcshop.pass", '');`
- Restart MTA server for the last time.

# Contributing
Everyone is encouraged to contribute.…
