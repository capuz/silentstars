---
repo: "frappe/central"
name: "central"
description: "Global control plane and front door of Frappe Cloud v2"
readmeQualityOk: true
url: "https://github.com/frappe/central"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["billing", "cloud", "frappe", "iam", "server-management"]
stars: 22
forks: 21
openIssues: 39
closedIssues: 80
watchers: 5
contributors: 47
recentReleases: 2
createdAt: "2026-06-08T15:56:45Z"
lastCommitAt: "2026-10-26T09:18:07Z"
lastReleaseAt: "2026-10-03T09:49:32Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 54
maintainers: ["prathameshkurunkar7", "tanmoysrt", "saurabh6790"]
openGraphImageUrl: "https://opengraph.githubassets.com/c53ebb5e9e6db9b392a2f047dc83c45d0076ca90646c0ee413caf292f65e32bd/frappe/central"
---

# Central

Central is the control plane for Frappe Cloud v2. It manages teams, permissions, servers, sites, managed services, and billing. It includes a Frappe app and a Vue console.

[Atlas](https://github.com/frappe/atlas) runs the regional infrastructure. [Pilot](https://github.com/frappe/pilot) manages benches and sites. [Cargo](https://github.com/frappe/cargo) builds server images.

## Local setup

Use Python 3.14, Frappe v16, Node.js 24, and Yarn. Install [Pilot](https://github.com/frappe/pilot#installation) and [create and initialize a development bench](https://github.com/frappe/pilot#basic-usage).

Run these commands from the bench directory:

```bash
pilot get-app https://github.com/frappe/central.git --branch develop
pilot new-site central.localhost
pilot install-app central.localhost central
pilot frappe --site central.localhost set-config developer_mode 1
pilot start
```

Open `http://central.localhost:<http_port>/dashboard` for the console or `/app` for Desk. Use the `http_port` from `bench.toml`.

On macOS, use `NO_PROXY='*' pilot start` if system proxy lookup stops background workers.

To provision servers, [connect a Region to Atlas and…
