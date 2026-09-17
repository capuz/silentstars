---
repo: "digital-blueprint/gitlab-pipeline-trigger-action"
name: "gitlab-pipeline-trigger-action"
description: "This GitHub action triggers and waits for a GitLab pipeline to complete."
readmeQualityOk: true
url: "https://github.com/digital-blueprint/gitlab-pipeline-trigger-action"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["digital-blueprint", "github-action", "gitlab", "gitlab-ci"]
stars: 8
forks: 5
openIssues: 2
closedIssues: 4
watchers: 3
contributors: 8
recentReleases: 3
createdAt: "2023-03-14T12:11:07Z"
lastCommitAt: "2026-09-17T08:50:41Z"
lastReleaseAt: "2026-08-03T09:42:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 84
maintainers: ["renovate[bot]", "lazka", "pbek"]
openGraphImageUrl: "https://opengraph.githubassets.com/77136c701e0c5247a3d5a986438755855cefde3cd088d67d9e3f693f9d309fe9/digital-blueprint/gitlab-pipeline-trigger-action"
---

# GitLab Pipeline trigger action

[GitHub](https://github.com/digital-blueprint/gitlab-pipeline-trigger-action) |
[GitHub Marketplace](https://github.com/marketplace/actions/gitlab-pipeline-trigger)

This GitHub action triggers and waits for a [GitLab pipeline](https://docs.gitlab.com/ee/ci/pipelines/) to complete.

You can for example use this action in your GitHub workflow to trigger a deployment pipeline on a private
GitLab server after a successful build pipeline and wait for the deployment (with possible End2End tests)
to finish, so you would get a notification if the deployment failed.

```mermaid
sequenceDiagram
    participant GITHUB as GitHub Actions
    participant ACTION as Action
    participant GITLAB as GitLab CI

    GITHUB->>ACTION: Run action
    ACTION->>GITLAB: Trigger a new pipeline

loop Every 15 seconds
    ACTION->>GITLAB: Poll pipeline status
    GITLAB-->>ACTION: Current pipeline status
end

    opt download_artifacts is enabled
        ACTION->>GITLAB: Poll for artifacts
        GITLAB-->>ACTION: Download artifacts
        ACTION->>GITHUB: Save artifacts locally
    end

    ACTION-->>GITHUB: Final pipeline status
```

## Inputs

### `host`

The GitLab…
