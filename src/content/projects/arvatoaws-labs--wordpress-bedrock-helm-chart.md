---
repo: "arvatoaws-labs/wordpress-bedrock-helm-chart"
name: "wordpress-bedrock-helm-chart"
description: "Opinionated helm chart for running wordpress at scale on AWS"
readmeQualityOk: true
url: "https://github.com/arvatoaws-labs/wordpress-bedrock-helm-chart"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
stars: 8
forks: 9
openIssues: 1
closedIssues: 3
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2020-03-04T15:11:02Z"
lastCommitAt: "2026-10-29T21:24:55Z"
lastReleaseAt: "2025-12-16T16:03:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 82
maintainers: ["renovate[bot]", "runningman84", "viktorhaid"]
openGraphImageUrl: "https://opengraph.githubassets.com/c15fe34e2db0c63fd9bc36ed2782988b478de3fef2c76585a4eb5ac67e97b98a/arvatoaws-labs/wordpress-bedrock-helm-chart"
---

# wordpress-bedrock-helm-chart

This chart is for use with wordpress bedrock. In order to use it you must build a custom php-fpm image with the application code located in /var/www/html.

The PHP image is mounted as a Kubernetes [image volume](https://kubernetes.io/docs/tasks/configure-pod-container/image-volumes/) (subPath `var/www/html`) and shared read-only between the nginx and php-fpm containers. This requires Kubernetes >= 1.36 (ImageVolume GA, enabled by default) and a container runtime that supports image volumes (e.g. containerd or CRI-O).

The setup is tested on AWS EKS and scales well. A typical setup would look like this:

```
    Cloudfront (blog.example.com) <-> AWS WF       Cloudfront (static.example.com)
       |                                            |
     AWS ALB                                     S3 bucket (filled by wp offload plugin)
       |
     AWS EKS Cluster
       |
     wordpress pods
     |          |
   nginx      php-fpm
         |
   shared image volume (/var/www/html from php image)

         |
      AWS RDS / aurora serverless

```

Features
* seperate containers for nginx (offical image) and php-fpm (custom image)
* seperate pod for cron…
