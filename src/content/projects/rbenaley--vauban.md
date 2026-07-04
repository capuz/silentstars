---
repo: "rbenaley/Vauban"
name: "Vauban"
description: "A fortified bastion designed to protect and control access to organization computing assets.  Goal: deliver a unique free and open-source bastion software using the Rust programming language."
url: "https://github.com/rbenaley/Vauban"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["bastion", "rust", "security"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 30
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-07-23T22:26:34Z"
lastCommitAt: "2026-07-04T19:19:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["rbenaley"]
openGraphImageUrl: "https://opengraph.githubassets.com/70129671037e3ad5467b1e884389a245b276447b98c22235ca6fc0aa9b69ab17/rbenaley/Vauban"
---

# Vauban

**A fortified bastion for privileged access management, built in Rust.**

Vauban is an open-source security bastion, developed in Rust, designed to protect and control access to critical infrastructure across enterprise, industrial, and defense environments. Its architecture leverages proven, cutting-edge technologies: privilege separation inspired by OpenSSH and Capsicum sandboxing, a confinement mechanism developed with funding from DARPA (U.S. Department of Defense). The solution includes multi-factor authentication (MFA), role-based access control (RBAC), full session recording, and real-time monitoring of SSH and RDP connections. Free and sovereignty-friendly, Vauban meets the traceability and audit requirements of sensitive environments while offering an open-source alternative to proprietary solutions.

## Project Structure

```
vauban-supervisor/    # Process orchestrator, watchdog, signal handling
vauban-web/           # HTTPS server, REST API, WebSocket handlers, frontend
vauban-auth/          # Authentication, MFA, SSO, LDAP integration
vauban-access/        # Access control, groups, and instance-level authorization (Casbin)
vauban-vault/         # Secrets…
