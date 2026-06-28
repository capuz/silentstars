---
repo: "alibabacloud-automation/terraform-alicloud-slb"
name: "terraform-alicloud-slb"
description: "Terraform module which creates Load balancer and attach ECS instances in it on Alibaba Cloud."
url: "https://github.com/alibabacloud-automation/terraform-alicloud-slb"
homepage: "https://registry.terraform.io/modules/alibaba/slb/alicloud/latest"
language: "HCL"
languages: ["HCL"]
languagePcts: [80]
stars: 7
forks: 18
openIssues: 3
closedIssues: 1
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2017-09-12T06:33:03Z"
lastCommitAt: "2026-06-28T02:02:28Z"
lastReleaseAt: "2020-02-24T09:32:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 63
maintainers: ["github-actions[bot]", "shanye997", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c6de5fe57f137d124286cf130ebab1078d339db3e7f3d2184053474defe71a/alibabacloud-automation/terraform-alicloud-slb"
---

Alibaba Cloud Load Balancer (SLB) Terraform Module
terraform-alicloud-slb
=====================================================================

English | [简体中文](https://github.com/terraform-alicloud-modules/terraform-alicloud-slb/blob/master/README-CN.md)

Terraform module which creates slb resources on Alibaba Cloud.

These types of resources are supported:

* [Slb Instance](https://www.terraform.io/docs/providers/alicloud/r/slb.html)
* [Slb_Backend_Server](https://www.terraform.io/docs/providers/alicloud/r/slb_backend_server.html)
* [Slb_Master_Slave_Server_Group](https://www.terraform.io/docs/providers/alicloud/r/slb_master_slave_server_group.html)
* [Slb_Server_Group](https://www.terraform.io/docs/providers/alicloud/r/slb_server_group.html)

## Usage

```hcl
module "slb" {
  source  = "alibaba/slb/alicloud"
  
  ########################
  #attach backend servers#
  ########################
  servers_of_default_server_group = [
    {
      server_ids = "i-bp1xxxxxxxxxx1,i-bp1xxxxxxxxxx2"
      weight     = "90"
      type       = "ecs"
    },
    // Using default value
    {
      server_ids = "i-bp1xxxxxxxxxx3"
    }
  ]
  #############################
  #attach master slave…
