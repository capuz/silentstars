---
repo: "cinc-project/cinc-api"
name: "cinc-api"
description: "A modern, idiomatic Go client for the Chef Infra / CINC Server API"
readmeQualityOk: true
url: "https://github.com/cinc-project/cinc-api"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 7
forks: 1
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-05-19T16:39:12Z"
lastCommitAt: "2026-11-11T19:42:55Z"
lastReleaseAt: "2026-06-22T15:14:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["tas50", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e47d5047e8f0f379f88de642035fb3d5bfdfcd53c473d5134ed9d5a79ecd65dd/cinc-project/cinc-api"
---

# cinc-api

A modern, idiomatic Go client for the Chef Infra / CINC Server API.

## Install

    go get github.com/cinc-project/cinc-api

## Usage

    key, _ := cinc.LoadKeyFile("/etc/chef/client.pem")
    c, err := cinc.NewClient(cinc.Config{
        ServerURL:  "https://chef.example.com",
        Org:        "myorg",
        ClientName: "node1",
        Key:        key,
    })
    node, _, err := c.Nodes.Get(context.Background(), "web01")

## Status

Authentication uses the Chef v1.3 SHA-256 signed-header protocol. The
following endpoint families are implemented:

| Service              | Path                                  | Methods                                                              |
| -------------------- | ------------------------------------- | -------------------------------------------------------------------- |
| `c.ACLs`             | `/<object>/<name>/_acl`               | GetTarget / SetTargetPermission / Grant / Revoke on an `ACLTarget` (`ObjectACL`, `OrgACL`, `UserACL`); Get / SetPermission, GetOrg / SetOrgPermission and GetUser / SetUserPermission |
| `c.Associations`     | `/organizations/O/users`, `/association_requests`, `/users/U/...` | Members…
