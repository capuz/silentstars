---
repo: "kubeflow/website"
name: "website"
description: "Kubeflow Website"
readmeQualityOk: true
url: "https://github.com/kubeflow/website"
homepage: "https://www.kubeflow.org"
language: "HTML"
languages: ["HTML", "Jupyter Notebook", "SCSS"]
languagePcts: [39, 26, 25]
stars: 188
forks: 935
openIssues: 7
closedIssues: 1552
watchers: 26
contributors: 611
recentReleases: 0
createdAt: "2018-04-06T06:09:27Z"
lastCommitAt: "2026-10-27T09:17:08Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 51
maintainers: ["christian-heusel", "dependabot[bot]", "dominikkawka"]
openGraphImageUrl: "https://opengraph.githubassets.com/1182cede5e0e22e0b970428ee832e36f3fb44c5e63ed524e42a42671ca8b791c/kubeflow/website"
---

# Kubeflow Website

Welcome to the GitHub repository for Kubeflow's public website!

The docs website is hosted at https://www.kubeflow.org.

We use [Hugo](https://gohugo.io/) with the [google/docsy](https://github.com/google/docsy)
theme for styling and site structure, and [Netlify](https://www.netlify.com/) to manage the deployment of the site.

## Quickstart

Here's a quick guide to updating the docs:

1. Fork the [kubeflow/website repository](https://github.com/kubeflow/website) on GitHub.

2. Make your changes and send a pull request (PR).

3. If you're not yet ready for a review, add "WIP" to the PR name to indicate it's a work in progress.
   Alternatively, you use the `/hold` [prow command](https://prow.k8s.io/command-help) in a comment to mark the PR as not ready for merge.

4. Wait for the automated PR workflow to do some checks.
   When it's ready, you should see a comment like this: `deploy/netlify — Deploy preview ready!`

5. Click **Details** to the right of "Deploy preview ready" to see a preview of your updates.

6. Continue updating your doc and pushing your changes until you're happy with the content.

7. When you're ready for a review, add a comment to the PR,…
