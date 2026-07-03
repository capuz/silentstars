---
repo: "DataTables/CDN-Server"
name: "CDN-Server"
description: "DataTables CDN server"
url: "https://github.com/DataTables/CDN-Server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2019-06-11T09:08:26Z"
lastCommitAt: "2026-07-03T12:22:53Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 60
undervaluedScore: 35
maintainers: ["AllanJard", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec3e47a77bead86b26e3416ee6bf455375116a8f2664790e5b5fb4a347a0dee6/DataTables/CDN-Server"
---

# Install
To install the server perform a git clone from this repo: https://github.com/DataTables/CDN-Server
Running the Server
There are currently 3 npm commands for interacting with the server.

`npm run all`

This command will compile all of the typescript files and will then start running the server with default config.

`npm run build`

This command will compile all of the typescript files.

`npm run server`

This command will run the server with the default location for config.

`npm run debug`

This command will run the server with the debug option enabled outputting to the console.

To compile  individual files run the following command

`tsc ./src/{filename}.ts --outDir ./dist/`

To run the server with a custom config file run the following command

`node ./src/Server.ts --configLoc {path to config}`

To re read the config file without terminating the running of the server run the following command

`kill -SIGUSR1 {pid}`

To run the debug to a log file run the following command

`node ./dist/server.js -l {filename}`

To run the debug to a log file and the console run the following command

`node ./dist/server.js -d -l {filename}`

# Basic Flow
The basic flow of the system…
