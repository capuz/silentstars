---
repo: "SCGIS-Wales/dcert"
name: "dcert"
description: "A Rust CLI and MCP server for X.509 certificate analysis, format conversion, and key verification. Reads certificates from PEM files or HTTPS endpoints. Validates TLS connections, checks revocation status, converts between PFX and PEM formats and integrates with AI-powered IDEs via the Model Context Protocol (MCP) and Vault."
readmeQualityOk: true
url: "https://github.com/SCGIS-Wales/dcert"
homepage: "https://pypi.org/project/dcert/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["base64-decoding", "cli", "pem", "rust", "tls-certificate", "certificate-management", "keystore", "mcp-client", "mcp-server", "pfx"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-06T15:27:54Z"
lastCommitAt: "2026-11-20T12:27:22Z"
lastReleaseAt: "2026-02-14T21:27:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 78
maintainers: ["api-py"]
openGraphImageUrl: "https://opengraph.githubassets.com/106a3018ea77ce2cacf70d134ed0bca7ca1b5ef5fe8f2c0d6a317d1b82b585c2/SCGIS-Wales/dcert"
---

---

## Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Commands](#commands)
  - [dcert [check] -- Certificate Analysis](#dcert-check--certificate-analysis-default)
  - [dcert csr -- CSR Creation & Validation](#dcert-csr--csr-creation--validation)
  - [dcert convert -- Format Conversion](#dcert-convert--format-conversion)
  - [dcert verify-key -- Key Matching](#dcert-verify-key--key-matching)
  - [dcert vault -- HashiCorp Vault PKI](#dcert-vault--hashicorp-vault-pki)
  - [dcert diagnose -- TLS, mTLS, Gateway, CDN and Proxy Diagnostics](#dcert-diagnose--tls-mtls-gateway-cdn-and-proxy-diagnostics)
  - [dcert kb -- Diagnostics and Reference Knowledge Bases](#dcert-kb--diagnostics-and-reference-knowledge-bases)
  - [dcert ciphers -- Cipher Suite Lookup](#dcert-ciphers--cipher-suite-lookup)
  - [dcert tls-scan -- Version, Cipher and Group Enumeration](#dcert-tls-scan--version-cipher-and-group-enumeration)
  - [dcert policy -- TLS Security Policy Catalogue](#dcert-policy--tls-security-policy-catalogue)
- [MCP Server (AI IDE Integration)](#mcp-server-ai-ide-integration)
  - [Proxy and Timeout Configuration](#proxy-and-timeout-configuration)
  -…
