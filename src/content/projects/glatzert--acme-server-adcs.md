---
repo: "glatzert/ACME-Server-ADCS"
name: "ACME-Server-ADCS"
description: "ACME (RFC 8555) compatible implementation, connecting to Active Directory Certificate Services (ADCS)"
readmeQualityOk: true
url: "https://github.com/glatzert/ACME-Server-ADCS"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["acme-server", "certificate", "acme", "acme-v2", "client-certificate", "letsencrypt", "rfc-8555", "smime", "ssl", "tls"]
stars: 225
forks: 23
openIssues: 9
closedIssues: 42
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2020-06-23T15:55:15Z"
lastCommitAt: "2026-09-23T08:47:00Z"
lastReleaseAt: "2023-04-07T10:46:57Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 36
maintainers: ["glatzert", "dependabot[bot]", "step-security-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/27e366081047d1c2d83ce646e8ae4d6ce648f073801e68640344d262a3029e23/glatzert/ACME-Server-ADCS"
---

# ACME-ADCS-Server

This project enables you to use an ACME (RFC 8555) compliant client, to request certificates via Microsoft® Windows® Server Active Directory Certificate Services.  
The ACME (RFC 8555) protocol is famously used by Let's Encrypt® and thus there's a number of clients that can be used to obtain certificates.  
If you are into PowerShell, you can e.g. use my open source module [ACME-PS](https://www.powershellgallery.com/packages/ACME-PS/).

The server currently supports server certificate issuances and is able to handle http-01, dns-01 as well as tls-alpn-01 challenges.
For issuing client certificates it supports device-attest-01 challenges, which is currently in draft state and thus 'experimental'.
It needs an Microsoft ADCS for certificate issuance, that allows auto-enrollment for the template used with the server.

## License

Please be advised that this project is _NOT_ free for commercial-use, but you may test it in any company and use it for your personal projects as you see fit, please refer to the [LICENSE](https://github.com/glatzert/ACME-Server-ADCS/blob/HEAD/LICENSE) file for details.
To obain a license for commercial-use, please [contact me via…
