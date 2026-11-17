---
repo: "cds-snc/forms-terraform"
name: "forms-terraform"
description: "Infrastructure as Code for the GC Forms environment"
readmeQualityOk: true
url: "https://github.com/cds-snc/forms-terraform"
language: "HCL"
languages: ["HCL", "TypeScript"]
languagePcts: [59, 25]
topics: ["aws", "terraform", "terragrunt"]
stars: 17
forks: 7
openIssues: 9
closedIssues: 49
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2020-12-09T14:09:23Z"
lastCommitAt: "2026-11-17T14:43:45Z"
lastReleaseAt: "2024-02-13T15:00:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 66
maintainers: ["renovate[bot]", "craigzour", "sre-read-write[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a8028c30a8ea64d6123a38e33b784409c9c17904490dd49c80a30c19634075d/cds-snc/forms-terraform"
---

# Forms Terraform

Infrastructure as Code for the GC Forms environment.

## Contributing

Pull Requests in this repository require all commits to be signed before they can be merged. Please see [this guide](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) for more information.

## Prerequisites:

- [Colima](https://github.com/abiosoft/colima)
  1. Install Docker
     - `brew install docker docker-buildx docker-compose docker-credential-helper`
  1. Modify the docker config file to use mac os keychain as `credStore`

     ```shell
     nano ~/.docker/config.json

     {
     ...
     "credsStore": "osxkeychain",
     ...
     }
     ```

  1. Install Colima: `brew install colima`
  1. Add symlink to `/var/run`

     ```shell

     # as /var/ is a protected directory, we will need sudo
     sudo ln ~/.colima/default/docker.sock /var/run

     # we can verify this has worked by running
     ls /var/run
     # and confirming that docker.sock is now in the directory
     ```

  1. Colima can be set as a service to start on login: `brew services start colima`

- Homebrew:

  ```bash
   /bin/bash -c "$(curl -fsSL…
