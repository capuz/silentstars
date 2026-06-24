---
repo: "said7388/suspicious-email-domains"
name: "suspicious-email-domains"
description: "A list of suspicious and disposable email domains often linked to spam, phishing, or fraud. Use this repository to check if an email domain may be unsafe."
url: "https://github.com/said7388/suspicious-email-domains"
homepage: "https://raw.githubusercontent.com/said7388/suspicious-email-domains/refs/heads/main/domains.txt"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["disposable-domains", "disposable-email", "domain", "suspicious-domains"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-27T05:48:45Z"
lastCommitAt: "2026-06-24T00:20:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: ["said7388"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ec97d32f43e79c5b2caaf685167ec3da095e25ebe4fca9d400d3668a417f6d/said7388/suspicious-email-domains"
---

# Suspicious and Disposable Email Domains

A curated list of suspicious and disposable email domains commonly associated with spam, phishing, or fraudulent activities. This repository provides a simple way to check if an email domain is potentially suspicious or disposable.

## Features

- **Comprehensive List**: Contains thousands of known suspicious and disposable domains.
- **Easy Integration**: Use the provided JavaScript function to check domains programmatically.
- **Open Source**: Community-driven and regularly updated.

## Usage

You can fetch the list of domains directly from this repository and use it in your applications to validate email domains.

### JavaScript Example

Here's a simple JavaScript function to check if an email domain is in the suspicious list:

```javascript
export const isSuspiciousEmailDomain = async (email) => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/said7388/suspicious-email-domains/refs/heads/main/domains.txt",
    );

    if (!res.ok) {
      return false;
    }

    const content = await res.text();
    const blocklist = content.split("\n").slice(0, -1);
    // Check if the email domain is in the blocklist…
