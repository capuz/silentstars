---
repo: "meysam81/go-auth"
name: "go-auth"
description: "Production-ready authentication library for Go with Basic Auth, JWT, WebAuthn/Passkeys, TOTP 2FA, and OAuth2/OIDC SSO (Google, GitHub, Microsoft, and 7+ providers). Storage-agnostic, framework-agnostic, SOC2/GDPR compliant audit logging."
readmeQualityOk: true
url: "https://github.com/meysam81/go-auth"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "authentication", "oauth2", "jwt", "oidc", "webauthn", "passkeys", "two-factor-authentication", "totp", "sso"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-07T17:11:00Z"
lastCommitAt: "2026-08-24T04:20:16Z"
lastReleaseAt: "2025-11-19T06:10:20Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 72
undervaluedScore: 17
maintainers: ["meysam81"]
openGraphImageUrl: "https://opengraph.githubassets.com/716edb8483195449fb53a9a1dc274524c16f0293516b2a4201637432a47f400d/meysam81/go-auth"
fundingLinks: ["GITHUB:https://github.com/meysam81", "PATREON:https://patreon.com/meysam81", "BUY_ME_A_COFFEE:https://buymeacoffee.com/meysam"]
---

# go-auth

A comprehensive, modular, and production-ready authentication library for Go applications. Supports multiple authentication methods including Basic Auth, JWT, WebAuthn/Passkeys, and OIDC/OAuth2 SSO with 10+ popular providers.

## Features

- **Multiple Authentication Methods**
  - 🔐 Basic Authentication (username/password with bcrypt)
  - 🎫 JWT Authentication (access + refresh tokens)
  - 🔑 WebAuthn/Passkey Authentication
  - 🌐 OIDC/OAuth2 SSO (Single Sign-On)

- **10+ SSO Providers**
  - Google, GitHub, Microsoft, GitLab
  - Auth0, Okta, Apple Sign In
  - Discord, Slack, LinkedIn

- **Modular Architecture**
  - Framework-agnostic core
  - Storage-agnostic (bring your own DB)
  - Isolated HTTP middleware (stdlib compatible)
  - Interface-based design for easy testing

- **Production-Ready**
  - Secure password hashing (bcrypt)
  - Token revocation support
  - Session management
  - CSRF protection for OAuth flows
  - Comprehensive audit logging (SOC2, GDPR, HIPAA compliant)
  - Follows Google Go Style Guide
  - Minimal dependencies

## Table of Contents

- [Installation](#installation)
- [30-Second Quick Start](#30-second-quick-start)
- [Verify…
