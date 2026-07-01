---
repo: "DevopsArtFactory/goployer"
name: "goployer"
description: "AWS Deployer with Go"
url: "https://github.com/DevopsArtFactory/goployer"
homepage: "https://goployer.terraform.devart.tv"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["goployer", "deployer", "aws", "deployment", "cicd"]
stars: 78
forks: 14
openIssues: 10
closedIssues: 33
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2020-05-10T02:33:22Z"
lastCommitAt: "2026-07-01T07:04:59Z"
lastReleaseAt: "2020-12-18T06:32:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 31
maintainers: ["YoungJinJung", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1f1058cf53141df91d44b8a9c4ba7c3f884386d471120c9e0cc283746e77b52/DevopsArtFactory/goployer"
discussionCount: 1
---

# goployer
`goployer` is an application you can use for EC2 deployment. You can deploy in a blue/green mode. goployer only
changes the autoscaling group so that you don't need to create another load balancer or manually attach autoscaling group to target group.
<br><br>

## Demo

## # Requirements
* You have to create a load balancer and target groups of it which goployer attach a new autoscaling group to. 
* If you want to setup loadbalancer and target group with terraform, then please check this [devopsart workshop](https://devops-art-factory.gitbook.io/devops-workshop/terraform/terraform-resource/computing/elb-+-ec2).
* Please understand how goployer really deploys application before applying to the real environment.
<br>

## # How goployer works
* Here's the steps that goployer executes for deployment
1. Generate new version for current deployment.<br>
If other autoscaling groups of sample application already existed, for example `hello-v001`, then next version will be `hello-v002`
2. Create a new launch template. 
3. Create autoscaling group with launch template from the previous step. A newly created autoscaling group will be automatically attached to the target groups you…
