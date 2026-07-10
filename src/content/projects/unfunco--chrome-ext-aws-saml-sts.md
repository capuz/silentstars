---
repo: "unfunco/chrome-ext-aws-saml-sts"
name: "chrome-ext-aws-saml-sts"
description: "Google Chrome extension for engineers who authenticate to AWS with SAML 2.0 and want temporary STS credentials they can copy into the AWS CLI or AWS SDK tooling."
readmeQualityOk: true
url: "https://github.com/unfunco/chrome-ext-aws-saml-sts"
homepage: "https://chromewebstore.google.com/detail/aws-saml-to-sts/affnlpfpepgmjfhclafkknonoocdefnh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["aws", "chrome-extension", "saml", "sts", "google-chrome", "google-chrome-extension", "react", "typescript", "vite", "manifest-v3"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-14T08:36:08Z"
lastCommitAt: "2026-07-10T07:01:07Z"
lastReleaseAt: "2026-03-18T06:56:27Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 66
maintainers: ["dependabot[bot]", "unfunco", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/94b49fc526770f7657a5cce2a86bf908eddb461ee045e29be1ae060c28268097/unfunco/chrome-ext-aws-saml-sts"
---

# AWS SAML to STS Chrome extension

A Google Chrome extension for engineers who authenticate to AWS with
SAML 2.0 and want temporary STS credentials they can copy into the
AWS CLI or AWS SDK tooling.

When you sign in to the AWS console through a SAML identity provider such as
Okta, Azure AD, or ADFS, AWS receives a SAML assertion at
`https://signin.aws.amazon.com/saml`. This extension intercepts that assertion,
extracts the IAM role details, exchanges the assertion for temporary AWS STS
credentials, and makes the credentials available in copy-friendly formats.

## Why does this exist?

Federated AWS access often works well in the browser but leaves a gap for local
developer workflows. If your organisation uses SAML sign-in for the AWS
console, getting short-lived credentials into the CLI or SDKs can still be
awkward. This extension closes that gap without adding another service or
credential broker.

## How does the extension work?

1. It listens only for requests to `https://signin.aws.amazon.com/saml`.
2. It reads the posted `SAMLResponse` from the AWS sign-in form submission.
3. It parses the available IAM roles and optional session duration from the
   SAML assertion.
4. It…
