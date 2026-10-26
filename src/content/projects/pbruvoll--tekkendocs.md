---
repo: "pbruvoll/tekkendocs"
name: "tekkendocs"
description: "Frame data and learning resources for Tekken"
readmeQualityOk: true
url: "https://github.com/pbruvoll/tekkendocs"
homepage: "https://tekkendocs.com"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [69, 24]
topics: ["frame-data", "tekken"]
stars: 39
forks: 20
openIssues: 19
closedIssues: 35
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2023-08-24T21:57:19Z"
lastCommitAt: "2026-10-26T21:00:58Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 61
maintainers: ["pbruvoll", "mhadihafeez"]
openGraphImageUrl: "https://opengraph.githubassets.com/b24745b42e77bb2b63b3ff1dc39983db2b1687e4b425d92f8572e0ac74c3fc78/pbruvoll/tekkendocs"
discussionCount: 2
---

# Welcome to TekkenDocs!

The app is deployed at [tekkendocs.com](https://tekkendocs.com). Tekken docs gathers frame data and learning resources for the video game Tekken.

## Development

The application is built with Remix, so follows their development standards. First run `npm install` to install all dependencies.

```sh
npm install
```

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

### Running with mock data

To run the application with a live connection, you need to set appropriate keys in the environment.
To make the app run without these keys, and without live data, you can run against mock data.

```sh
npm run dev-mock-data
```

## License

You are not allowed to copy, distribute the code in this repository without explicit permission.
The data the website exposes can be used, we just appreciate that you give credit to tekkendocs.com and rbnorway.org where you are using the data.
