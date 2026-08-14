---
repo: "scttfrdmn/oidc-pam"
name: "oidc-pam"
description: "Modern OIDC authentication for Linux PAM — device flow, SSH key lifecycle, AWS IAM Identity Center, enterprise audit"
readmeQualityOk: true
url: "https://github.com/scttfrdmn/oidc-pam"
homepage: "https://github.com/scttfrdmn/oidc-pam"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["authentication", "aws-iam-identity-center", "device-flow", "golang", "hpc", "linux", "oidc", "pam", "security", "ssh"]
stars: 17
forks: 2
openIssues: 16
closedIssues: 69
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2025-07-17T05:38:18Z"
lastCommitAt: "2026-08-14T05:14:32Z"
lastReleaseAt: "2026-06-26T17:42:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 88
undervaluedScore: 76
maintainers: ["scttfrdmn", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/23491e229739e6a50d841a7bed28454fd9de0993868d0ecea351d6644d147521/scttfrdmn/oidc-pam"
---

# OIDC PAM: Modern Authentication for Linux Systems

A comprehensive Linux authentication solution using OpenID Connect (OIDC) that modernizes SSH login — and any other interactive PAM service you wire it into — with passkey support, automatic SSH key management, and enterprise-grade audit capabilities.

## 🚀 Features

- **Modern Authentication**: Replace SSH keys with OIDC + Passkeys
- **PAM Integration**: SSH is tested end-to-end; `configs/pam/` also carries example stacks for console `login`, `su` and `sudo`. Not for display managers, and never for the host-wide `common-auth`/`system-auth` stack — a device flow needs a terminal and a user in front of it
- **Automatic SSH Key Management**: Generate, rotate, and revoke SSH keys automatically
- **Enterprise Identity Integration**: Support for Okta, Azure AD, Auth0, Google Workspace, AWS IAM Identity Center, and any OIDC provider
- **Mobile-First UX**: Authenticate via QR codes and mobile passkeys
- **Strong Authorization**: Binds the OIDC identity to the requested local user and enforces `require_groups`
- **Comprehensive Audit**: Complete access trails for compliance (SOC 2, PCI, HIPAA)
- **Cloud-Native**: Auto-configuration for…
