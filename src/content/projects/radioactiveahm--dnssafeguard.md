---
repo: "radioactiveAHM/DnsSafeguard"
name: "DnsSafeguard"
description: "DnsSafeguard is dedicated to providing a secure DNS client solution, ensuring your DNS queries remain private and uncensored."
readmeQualityOk: true
url: "https://github.com/radioactiveAHM/DnsSafeguard"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["dns", "dns-over-https", "dnsoverhttps", "doh", "fragment", "secure-dns"]
stars: 42
forks: 1
openIssues: 1
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-15T01:24:06Z"
lastCommitAt: "2026-10-21T23:36:25Z"
lastReleaseAt: "2026-02-13T21:56:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 31
maintainers: ["radioactiveAHM"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7bddb76dc9955b728372a4f978d8b8dd6f11522b541d7ebb46899c19273d5a6/radioactiveAHM/DnsSafeguard"
---

# DnsSafeguard

DnsSafeguard is a fast and secure DNS client written in Rust, designed to intercept DNS queries over a UDP socket and Dns over HTTPS (DoH) to securely transmit them to a DNS server using DNS over HTTPS/TLS/QUIC (DoH/DoT/DoQ) protocols. By leveraging TLS client hello fragmentation and UDP Noise, it successfully bypasses the Great Firewall (GFW) censorship.

> [!CAUTION]
> DNSSafeGuard is designed for **client use only**. Do **not** run it on public servers, as it is currently vulnerable to **DDoS attacks**. Deploying it on internet-facing systems may result in service disruption or downtime.

## Struct

## Safety

This crate uses **#![forbid(unsafe_code)]** to ensure everything is implemented in 100% safe Rust.

## Features

- **Secure Communication:** Utilizes Rustls for encrypted communication (TLS) with DNS servers.
- **UDP Socket:** Captures DNS queries on a UDP socket for efficient handling.
- **DoH Protocol:** Transmits DNS queries using the DoH protocol, supporting HTTP versions (HTTP/1.1, H2, H3) to ensure enhanced privacy.
- **DoT Protocol:** Transmits DNS queries using the DoT protocol.
- **DoQ Protocol:** Transmits DNS queries using the DoQ protocol,…
