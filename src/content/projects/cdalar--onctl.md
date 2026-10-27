---
repo: "cdalar/onctl"
name: "onctl"
description: "🤖 manage virtual machines 🖥️ in multi cloud ☁️"
readmeQualityOk: true
url: "https://github.com/cdalar/onctl"
homepage: "https://onctl.sh"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "cloud", "devops", "rapid-prototyping", "rapid-provisioning"]
stars: 48
forks: 3
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-04-14T21:50:15Z"
lastCommitAt: "2026-10-27T09:16:33Z"
lastReleaseAt: "2023-12-21T10:08:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["cdalar", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c76ec7fa3e777a31aea8b8bfcca7b5902278519bcce38c7d6d6935029510b906/cdalar/onctl"
---

# Onctl

`onctl` is a tool to manage virtual machines in multi-cloud. 

Check 🌍 https://onctl.sh for detailed documentation

## What onctl brings 

- 🌍 Simple intuitive CLI to run VMs in seconds.  
- ⛅️ Supports multi cloud providers (aws, azure, gcp, hetzner, ovh, more coming soon...)
- 📦 Hosted microVMs with the `boxes` provider: no cloud account, no host to run -- `onctl login` once with a token from [boxctl.io](https://boxctl.io), then `onctl create -p boxes`. Boxes have no public address; `onctl ssh` (and plain ssh via `onctl ssh-proxy`) reach them through the service.
- 🤖 `onctl claude`: run Claude Code on a box instead of your laptop -- a hosted box, or your own VM on any provider (`onctl -p hetzner claude`; on a Mac, `onctl -p ac claude` runs it in an Apple container from the prebuilt claude-agent image) -- a fresh box per run with your project cloned (or copied) there, its work fetched back as `box/*` and the box deleted when Claude exits (`--keep` for a long-lived project box; `--repo owner/name` clones a GitHub repository with no local copy), Claude in tmux so it keeps going when you detach, several tasks at once (`--task`), and the work back as git (`onctl claude…
