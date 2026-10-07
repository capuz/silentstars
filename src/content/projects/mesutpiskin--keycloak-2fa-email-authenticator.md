---
repo: "mesutpiskin/keycloak-2fa-email-authenticator"
name: "keycloak-2fa-email-authenticator"
description: "🔒  Keycloak Authentication Provider implementation to get a two factor authentication with a OTP/code/token send via Email (SMTP, SendGrid, AWS SES, Mailgun)"
readmeQualityOk: true
url: "https://github.com/mesutpiskin/keycloak-2fa-email-authenticator"
homepage: "https://mesutpiskin.github.io/keycloak-2fa-email-authenticator"
language: "Java"
languages: ["Java"]
languagePcts: [72]
topics: ["email-otp", "keycloak", "keycloak-spi", "two-factor-authentication", "aws-ses-mailer", "sendgrid-otp"]
stars: 285
forks: 176
openIssues: 2
closedIssues: 58
watchers: 7
contributors: 28
recentReleases: 0
createdAt: "2022-10-20T17:22:17Z"
lastCommitAt: "2026-10-07T10:30:55Z"
lastReleaseAt: "2026-06-12T09:26:46Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 94
undervaluedScore: 45
maintainers: ["mesutpiskin", "ismailza", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05acbf0caef76e1b0f46a5b2ad1494288715673f61d3eb0de247a587ee6e67e7/mesutpiskin/keycloak-2fa-email-authenticator"
fundingLinks: ["GITHUB:https://github.com/mesutpiskin"]
discussionCount: 14
---

# Keycloak 2FA Email Authenticator

A Keycloak Authentication Provider for two-factor authentication (2FA) via email OTP. Supports Keycloak SMTP, SendGrid, AWS SES, and Mailgun.

## Documentation

Full documentation — installation, configuration, template customization, and contribution guide — is available at:

**https://mesutpiskin.github.io/keycloak-2fa-email-authenticator/**

## Highlights

- Email OTP login for Keycloak browser flows
- Configurable code length, TTL, resend cooldown, and max attempts
- Optional **masked email display** on the OTP form for better UX after the code is sent
- Multiple email delivery backends: Keycloak SMTP, SendGrid, AWS SES, and Mailgun

## Related projects

Need OTP via SMS, Telegram, WhatsApp, or Signal? See the sibling project: **[keycloak-2fa-messaging-authenticator](https://github.com/mesutpiskin/keycloak-2fa-messaging-authenticator)** — same approach, different channel.

## Quick Start

The easiest way to get the JAR is via Maven Central. Use the version matching your Keycloak installation:

**Maven:**
```xml
<dependency>
  <groupId>io.github.mesutpiskin</groupId>
  <artifactId>keycloak-2fa-email-authenticator</artifactId>…
