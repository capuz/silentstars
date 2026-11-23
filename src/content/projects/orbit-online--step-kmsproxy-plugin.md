---
repo: "orbit-online/step-kmsproxy-plugin"
name: "step-kmsproxy-plugin"
description: "HSM backed authenticating proxy for mTLS services"
readmeQualityOk: true
url: "https://github.com/orbit-online/step-kmsproxy-plugin"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-24T09:16:17Z"
lastCommitAt: "2026-11-23T10:26:29Z"
lastReleaseAt: "2026-01-19T15:28:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 45
maintainers: ["andsens"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e8f06c55d031bdd3e8d593517bfd4247bd574e691a2527d263f92ab95e6779/orbit-online/step-kmsproxy-plugin"
---

# step-kmsproxy-plugin

step-kmsproxy-plugin is an authenticating proxy for mTLS services.  
Think of it like a simple version of [envoy](https://github.com/envoyproxy/envoy),
except keys and certificates are loaded from [Smallstep KMS](https://github.com/smallstep/step-kms-plugin),
which supports numerous HSM backings like YubiKeys, AWS KMS, and TPM 2.0.

On workstations this becomes especially useful, where HSM backed mTLS in
Browsers is barely supported (i.e. using pkcs11-tools, p11kit, and nssdb to
authenticate using YubiKeys or TPMs). Add to that rotating short-lived
certificates and you have a recipe for maintenance disaster.  
However, proxies are seamlessly supported by all major operating systems,
browsers, and most tooling. Leveraging that for authentication means you can
provide an "always logged in" experience that is secured through HSM keys that
can't be extracted from the system (and in case of YubiKeys can be moved between
workstations).
