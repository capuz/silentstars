---
repo: "Knight1/emudhra"
name: "emudhra"
description: "Generate eMudhra ECC Certificates 🧾for your deepest desires ❤️🙌 Extended Validation (EV) Certificates for free 🪅 As many as you want until you run out of sha256 hashes 🥵"
readmeQualityOk: true
url: "https://github.com/Knight1/emudhra"
homepage: "https://emudhra.we-have-a-problem.com/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["certificate", "emudhra", "nss", "pki", "proof-of-concept", "tls"]
stars: 30
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-21T00:01:04Z"
lastCommitAt: "2026-11-06T12:17:57Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 33
maintainers: ["Knight1", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/138bb3e6e408ea8d46d8c61cebebb1d3cd6dee250a6dce4faaafb49a419b7bf7/Knight1/emudhra"
---

# emudhra-poc

Proof of concept for the eMudhra emSign ECC G3 intermediate key compromise
([Mozilla bug 2083449](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449)).
The CA private keys are tiny integers, so they can be recovered from the
public CA certificates and used to sign arbitrary leaf certificates.
All affected intermediates are revoked (caCompromise).

The tool recovers the CA key from the CA certificate, issues a leaf
certificate (OU `PoC`, max. 7 days validity) and verifies the result.

```
$ ./emudhra-poc
Issuing CA
  Subject:        CN=EM DV TLS CA - G3B,O=eMudhra BV,C=NL
  Issuer:         CN=AAA Certificate Services,O=Comodo CA Limited,L=Salford,ST=Greater Manchester,C=GB
  Serial:         a024fdf4ba665c785ce4a020483858b7
  Not before:     2025-05-14T00:00:00Z
  Not after:      2028-12-31T23:59:59Z
  Public key:     ECDSA P-384
  Signature alg:  SHA256-RSA
  CA:             true
  Key usage:      keyCertSign, cRLSign
  Ext key usage:  serverAuth, clientAuth
  Policy:         2.23.140.1.2.1
  Policy:         1.3.6.1.4.1.50977.1.0.1
  Policy:         1.3.6.1.4.1.50977.1.2.100
  Subject key ID: e21e2fe71c19390e554b62c120245735248a2514
  Auth key ID:…
