---
repo: "smallstep/crypto"
name: "crypto"
description: "Crypto is a collection of packages used by Smallstep products"
readmeQualityOk: true
url: "https://github.com/smallstep/crypto"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 104
forks: 35
openIssues: 14
closedIssues: 31
watchers: 10
contributors: 19
recentReleases: 0
createdAt: "2020-08-05T19:05:45Z"
lastCommitAt: "2026-09-22T08:45:42Z"
lastReleaseAt: "2022-08-25T19:34:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 46
maintainers: ["step-ci", "dependabot[bot]", "maraino"]
openGraphImageUrl: "https://opengraph.githubassets.com/c039289f21b5d9687d8d7b8d5d4ce4c8c66919368640e4f38933633b29b6d653/smallstep/crypto"
---

# crypto

Crypto is a collection of packages used in [smallstep](https://smallstep.com) products. See:

* [step](https://github.com/smallstep/cli): A zero trust swiss army knife for
  working with X509, OAuth, JWT, OATH OTP, etc.
* [step-ca](https://github.com/smallstep/certificates): A private certificate
  authority (X.509 & SSH) & ACME server for secure automated certificate
  management, so you can use TLS everywhere & SSO for SSH.

## Usage

To add this to a project, just run:

```sh
go get go.step.sm/crypto
```

## Packages

### x509util

Package `x509util` implements utilities to build X.509 certificates based on JSON
templates.

### sshutil

Package `sshutil` implements utilities to build SSH certificates based on JSON
templates.

### keyutil

Package `keyutil` implements utilities to generate cryptographic keys.

### pemutil

Package `pemutil` implements utilities to parse keys and certificates. It also
includes a method to serialize keys, X.509 certificates and certificate requests
to PEM.

### randutil

Package `randutil` provides methods to generate random strings and salts.

### tlsutil

Package `tlsutil` provides utilities to configure tls client and servers.

###…
