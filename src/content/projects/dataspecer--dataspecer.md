---
repo: "dataspecer/dataspecer"
name: "dataspecer"
description: "A tool for management of semantic data specifications"
readmeQualityOk: true
url: "https://github.com/dataspecer/dataspecer"
homepage: "https://dataspecer.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 38
forks: 14
openIssues: 215
closedIssues: 1008
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2020-09-23T17:45:34Z"
lastCommitAt: "2026-07-04T22:53:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 61
maintainers: ["bliakher", "sstenchlak", "skodapetr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec408d93ec449257ee3c7434adfcadbfa5fac4b7ea6498486f00566b0b65c29c/dataspecer/dataspecer"
discussionCount: 11
---

# Dataspecer   [](https://github.com/dataspecer/dataspecer/actions/workflows/test.yml) [](https://dataspecer.com/)

A set of tools for effortless management and creation of data specifications.

Check our website [dataspecer.com](https://dataspecer.com/) for more information.

## Docker container

You can easily run the whole application in a Docker container.

If you just want to try it out for a while and don't care where the data is stored, use following command and then go open [http://localhost:3000/](http://localhost:3000/).

```bash
docker run -p3000:80 ghcr.io/dataspecer/ws
```

---

- The container exposes port 80.
- Mount `/usr/src/app/database` directory to your local directory that will be filled with `database.db` file and `stores` directory. If the directory is empty, files would be created. **You need to mkdir the mounted directory with the correct user**.
- If you want to run the Dataspecer under specific user, use `--user` with desired UID.
- You can specify base URL using `BASE_URL` env if you are hosting Dataspecer from a sub directory. If you are using reverse proxy, it is expected that the base path *is preserved*. (For example,…
