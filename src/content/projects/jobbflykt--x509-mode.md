---
repo: "jobbflykt/x509-mode"
name: "x509-mode"
description: "View certificates and CRLs using OpenSSL in Emacs"
readmeQualityOk: true
url: "https://github.com/jobbflykt/x509-mode"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [93]
stars: 32
forks: 6
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-08-20T07:34:45Z"
lastCommitAt: "2026-11-10T14:49:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 43
maintainers: ["jobbflykt"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ecbe58ca00a4d9c0843823e1e3de91a7d5d6bb2023ee95bf35dce7e73987858/jobbflykt/x509-mode"
discussionCount: 1
---

# x509-mode for Emacs

Emacs major mode for viewing certificates, CRLs, keys, DH-parameters,
EC-Parameters and ASN.1 using [OpenSSL](https://github.com/openssl/openssl).

## Usage

Open a certificate, either PEM or DER encoded, in a buffer.

    M-x x509-dwim

A new buffer displays the parsed certificate.

To view certificates, CRLs, private and public keys Diffie-Hellman parameters,
elliptic curve parameters, certificate requests, pkcs7 files and parsed ASN.1
respectively:

    M-x x509-viewcert
    M-x x509-viewcrl
    M-x x509-viewkey
    M-x x509-viewpublickey
    M-x x509-viewpkeyparam
    M-x x509-viewdh
    M-x x509-viewec
    M-x x509-viewreq
    M-x x509-viewpkcs7
    M-x x509-viewasn1
    M-x x509-viewp12

If point is in, or at the beginning of, a PEM region, `M-x x509-dwim` tries to
determine what kind of object it is and call the right x509-view-function on
that region. If not in PEM region or if type is unknown, `x509-dwim` tries
different commands until one works. If data is still unknown, `x509-dwim` falls
back to `x509-viewasn1`.

    M-x x509-dwim

The command line for all of the above commands can be edited with C-u
prefix. Example:

    C-u M-x x509-viewcert…
