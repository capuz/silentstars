---
repo: "Sendspin/spec"
name: "spec"
description: "Specification of the Sendspin protocol"
readmeQualityOk: true
url: "https://github.com/Sendspin/spec"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 119
forks: 9
openIssues: 20
closedIssues: 42
watchers: 9
contributors: 12
recentReleases: 0
createdAt: "2025-06-05T11:45:06Z"
lastCommitAt: "2026-08-28T14:27:53Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 42
maintainers: ["arturpragacz", "maximmaxim345", "kahrendt"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c55ad35690940e2f1e4ce283d68ca42a34dc65083b19157037234e18c9b8626/Sendspin/spec"
---

# The Sendspin Protocol

Sendspin is a multi-room music experience protocol. The goal of the protocol is to orchestrate all devices that make up the music listening experience. This includes outputting audio on multiple speakers simultaneously, screens and lights visualizing the audio or album art, and wall tablets providing media controls.

## Normative Language

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174).

## Protocol overview

A typical session, from handshake through playback to disconnect:

```mermaid
sequenceDiagram
    participant Client
    participant Server

    Note over Client,Server: Noise handshake complete (see Communication)

    Server->>Client: server/hello (name)
    Client->>Server: client/hello (roles and capabilities)
    Server->>Client: server/activate (activities, active_roles)

    loop Continuous clock sync
        Client->>Server: client/time (client clock)
        Server->>Client:…
