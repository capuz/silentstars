---
repo: "FernleafSystems/Shield-Security-for-WordPress"
name: "Shield-Security-for-WordPress"
description: "Reflection of the Shield plugin on WordPress.org"
readmeQualityOk: true
url: "https://github.com/FernleafSystems/Shield-Security-for-WordPress"
homepage: "https://getshieldsecurity.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["security", "wordpress", "wordpress-plugin"]
stars: 10
forks: 4
openIssues: 7
closedIssues: 38
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2015-01-16T14:11:32Z"
lastCommitAt: "2026-10-13T10:36:51Z"
lastReleaseAt: "2015-04-13T11:27:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 75
maintainers: ["paulgoodchild"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f7305fc8e738877cce3cf2995f70a1747628f8ca51291f1e35d5e9cb060f810/FernleafSystems/Shield-Security-for-WordPress"
---

# Shield Security Library

Core library for the Shield Security WordPress plugin, providing comprehensive website protection through modular security components.

## Requirements

- PHP 8.2+
- WordPress 5.7+
- Required PHP extensions: json, openssl, zlib, curl, sqlite3, zip

## Architecture Overview

The library follows a modular architecture with these key components:

- **Controller** - Central singleton managing plugin lifecycle and configuration
- **Modules** - Feature-specific security implementations
- **ActionRouter** - Unified request handling for AJAX, REST, and internal actions
- **Rules Engine** - Condition-based security decision framework
- **Components** - Lazy-loaded functional units

## Security Modules

| Module | Description |
|--------|-------------|
| **IPs** | Bot detection, IP blocking/allowing, CrowdSec integration, geo-blocking |
| **Login Guard** | Multi-factor authentication (TOTP, Email, Passkeys/WebAuthn, YubiKey, Backup Codes) |
| **HackGuard** | File integrity scanning, malware detection, vulnerability monitoring |
| **Firewall** | Web Application Firewall with pattern-based request filtering |
| **Audit Trail** | Comprehensive activity logging and…
