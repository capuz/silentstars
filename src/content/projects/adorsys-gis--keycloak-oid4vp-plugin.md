---
repo: "ADORSYS-GIS/keycloak-oid4vp-plugin"
name: "keycloak-oid4vp-plugin"
description: "Add OpenID4VP authentication to Keycloak"
readmeQualityOk: true
url: "https://github.com/ADORSYS-GIS/keycloak-oid4vp-plugin"
homepage: "https://central.sonatype.com/artifact/io.github.adorsys-gis/keycloak-oid4vp-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 35
forks: 0
openIssues: 6
closedIssues: 68
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-11-05T15:28:07Z"
lastCommitAt: "2026-08-27T14:31:56Z"
lastReleaseAt: "2026-04-20T16:20:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["Ogenbertrand", "IngridPuppet", "Vitalisn4"]
openGraphImageUrl: "https://opengraph.githubassets.com/368c2419cb98e367883969f0bdd4a72f740b52a5766eec8bee0fd51d5f521ce1/ADORSYS-GIS/keycloak-oid4vp-plugin"
---

# keycloak-oid4vp-plugin

This plugin adds OpenID4VP authentication to Keycloak

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0-only).
See [LICENSE](https://github.com/ADORSYS-GIS/keycloak-oid4vp-plugin/blob/HEAD/LICENSE) for details.

## Compatibility

This plugin has been tested with:

| **Requirement** | **Version** |
|-----------------|-------------|
| **Java**        | 21          |
| **Keycloak**    | 26.7.0      |

While it may work with other versions, compatibility is not guaranteed. Ensure your environment matches the tested
versions for best results.

Additionally, the following features of [OpenID4VP](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)
are supported:

- **Draft20-compatible request/response behavior** ✅
    - Client Identifier Scheme: `x509_san_dns` and `x509_hash`
    - Response Mode: `direct_post` and `direct_post.jwt`
    - Response Type: `vp_token`
    - Query Languages: DIF Presentation Exchange and DCQL
    - Signed request object (`request_uri` dereferencing)
    - Request object `x5c` support for verifier access certificate

- **1.0-Final alignment (ongoing)** ⚠️
    - DCQL…
