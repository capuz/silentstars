---
repo: "ovn-kubernetes/libovsdb"
name: "libovsdb"
description: "An OVSDB Client Library written in Golang"
readmeQualityOk: true
url: "https://github.com/ovn-kubernetes/libovsdb"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 215
forks: 168
openIssues: 28
closedIssues: 88
watchers: 12
contributors: 38
recentReleases: 2
createdAt: "2014-10-09T14:54:43Z"
lastCommitAt: "2026-11-17T12:16:45Z"
lastReleaseAt: "2026-11-03T11:01:08Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 47
maintainers: ["dave-tucker", "dependabot[bot]", "jcaamano"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee93518f36e879d100e333c544fdefe1f348b17a64bc1686d88c6e15219dede5/ovn-kubernetes/libovsdb"
---

# libovsdb

An OVSDB client library written in Go.

## What is OVSDB?

OVSDB is the Open vSwitch Database Protocol, defined in [RFC 7047](http://tools.ietf.org/html/rfc7047).
It is used primarily to manage the configuration of Open vSwitch and OVN.

## Quick Start

### 1. Define a Model

Models are tagged Go structs that map to OVSDB tables:

```go
type MyLogicalSwitch struct {
    UUID   string            `ovsdb:"_uuid"` // required
    Name   string            `ovsdb:"name"`
    Ports  []string          `ovsdb:"ports"`
    Config map[string]string `ovsdb:"other_config"`
}
```

OVSDB types map to Go types as follows:

| OVSDB type | Go type |
|---|---|
| Set (min 0, max unlimited) | Slice |
| Set (min 0, max 1) | Pointer to scalar |
| Set (min 0, max N) | Array of N |
| Enum | Type-aliased string |
| Map | Map |
| Scalar | Equivalent Go scalar |

### 2. Create a Database Model

```go
dbModel, err := model.NewClientDBModel("OVN_Northbound", map[string]model.Model{
    "Logical_Switch": &MyLogicalSwitch{},
})
```

### 3. Connect

```go
ovs, err := client.NewOVSDBClient(dbModel, client.WithEndpoint("tcp:172.18.0.4:6641"))
if err != nil { ... }

err =…
