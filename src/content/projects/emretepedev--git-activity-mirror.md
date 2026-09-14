---
repo: "emretepedev/git-activity-mirror"
name: "git-activity-mirror"
description: "Simple shell scripts to mirror your Git activity to your public profile"
readmeQualityOk: true
url: "https://github.com/emretepedev/git-activity-mirror"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-19T11:26:35Z"
lastCommitAt: "2026-09-14T09:13:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 68
maintainers: ["emretepedev"]
openGraphImageUrl: "https://opengraph.githubassets.com/798e74e9cb0d0ba0c7b97ecccbc131de165b0b9ea4c2fa0be3b95fefaaa9c293/emretepedev/git-activity-mirror"
---

# Git Activity Mirror

A set of simple Shell scripts to automatically mirror commits and pushes from a primary repository (e.g., GitLab, Bitbucket) to a secondary repository (e.g., GitHub).

These scripts are for developers who work with multiple Git hosting services but want to maintain a public mirror of their work. This is a common scenario when your primary work is on a private or company-hosted instance, but you still want to showcase your activity on your public profile.

The scripts work by creating an empty commit and pushing it to the target repository, effectively mirroring your activity.

---

## Getting Started

### Prerequisites

- **Git** must be installed on your system.
- **A Bash-compatible shell** (like Bash or Zsh).

### Installation

1.  **Create a Repository from This Template**

    Click the **`Use this template`** button at the top of this page to create a new repository in your own account.

2.  **Clone Your New Repository**

    Clone the **new repository** you just created to your local machine.

3.  **Make Scripts Executable**

    Grant execution permissions to the scripts so they can be run from the command line.

    ```bash
    chmod +x…
