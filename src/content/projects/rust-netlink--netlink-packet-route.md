---
repo: "rust-netlink/netlink-packet-route"
name: "netlink-packet-route"
description: "Rust crate for the netlink route protocol"
readmeQualityOk: true
url: "https://github.com/rust-netlink/netlink-packet-route"
homepage: "https://docs.rs/netlink-packet-route/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 77
forks: 83
openIssues: 9
closedIssues: 43
watchers: 2
contributors: 43
recentReleases: 0
createdAt: "2022-10-07T12:56:03Z"
lastCommitAt: "2026-10-26T03:02:45Z"
lastReleaseAt: "2024-01-31T09:35:08Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 60
maintainers: ["cathay4t", "dependabot[bot]", "ohodson"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bef4cfc3f85b60198b159d39aebf8651e68ac9416a24da11bce07fda8921fc4/rust-netlink/netlink-packet-route"
---

# Rust crate for Netlink Route Protocol

The `netlink-packet-route` crate is designed to abstract Netlink route
protocol([`rtnetlink`][rtnetlink_man]) packet into Rust data types. The goal of
this crate is saving netlink user from reading Kernel Netlink codes.

This crate grouped Netlink route protocol into these modules:
 * `link`: NIC interface, similar to `ip link` command.
 * `address`: IP address, similar to `ip address` command.
 * `route`: Route, similar to `ip route` command.
 * `rule`: Route rule, similar to `ip rule` command.
 * `tc`: Traffic control, similar to `tc` command.
 * `neighbour`: Neighbour, similar to `ip neighbour` command.
 * `neighbour_table`: Neighbour table, similar to `ip ntable` command.
 * `nsid`: Namespace, similar to `ip netns` command.

Normally, you should use [`rtnetlink`][rtnetlink_url] instead of using this
crate directly.

## Development
 * Please use `git commit --signoff` to append Signed-off-by trailer to commit
   message.

 * For new source file, please append `// SPDX-License-Identifier: MIT` at
   the beginning with content of license new code to MIT license.

 * No panic is allowed, please use `Result<>` instead of `unwrap()` or…
