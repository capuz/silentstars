---
repo: "alexdalitz/dnsruby"
name: "dnsruby"
description: "Dnsruby is a feature-complete DNS(SEC) client for Ruby, as used by many of the world's largest DNS registries and the OpenDNSSEC project"
readmeQualityOk: true
url: "https://github.com/alexdalitz/dnsruby"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 209
forks: 82
openIssues: 0
closedIssues: 81
watchers: 12
contributors: 32
recentReleases: 0
createdAt: "2014-09-24T07:27:33Z"
lastCommitAt: "2026-11-14T10:43:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 38
maintainers: ["alexdalitz", "mrideout", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d122c79e5d082898a07e04bdb975af4379e8101d48c2679ee3c407c03b7210a/alexdalitz/dnsruby"
fundingLinks: ["GITHUB:https://github.com/alexdalitz"]
---

Dnsruby
=======

Dnsruby is a pure Ruby DNS client library which implements a
stub resolver. It aims to comply with all DNS RFCs.

Dnsruby presents an enhanced API for DNS. It is based on Ruby's core
resolv.rb Resolv API, but has been much extended to provide a
complete DNS implementation.

Dnsruby uses one selector thread for responses and timeouts. TCP sends started
by that thread use a bounded worker pool, so a slow connect or write does not
block unrelated responses. Public sends remain synchronous in the caller.

See the [compatibility notes](https://github.com/alexdalitz/dnsruby/blob/HEAD/RELEASE_NOTES.md#compatibility-with-1740) when
upgrading from 1.74.0, including the change to the default
[TSIG algorithm](#updating-tsig-keys).

The following is a (non-exhaustive) list of features :

- Implemented RRs :  A, AAAA, AFSDB, ANY, CAA, CERT, CNAME, DNAME,
     GPOS, HINFO, ISDN, LOC, MB, MG, MINFO, MR, MX, NAPTR, NS, NSAP,
     NXT, OPT, PTR, PX, RP, RT, SOA, SPF, SRV, SVCB, HTTPS, TKEY,
     TSIG, TXT, WKS, X25, DNSKEY, RRSIG, NSEC, NSEC3, NSEC3PARAM, DS, DLV

- Generic RR types supported (RFC3597)

- (Signed) Zone transfer (AXFR and IXFR) supported

- (Signed) Dynamic updates…
