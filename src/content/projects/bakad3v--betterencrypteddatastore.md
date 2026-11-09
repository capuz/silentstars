---
repo: "bakad3v/BetterEncryptedDatastore"
name: "BetterEncryptedDatastore"
description: "Better Encrypted Datastore is a library for securely storing encrypted data inside Datastore. In addition, the library extends Datastore's capabilities by adding the ability to store a Datastore file in device encrypted storage."
readmeQualityOk: true
url: "https://github.com/bakad3v/BetterEncryptedDatastore"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "datastore", "datastore-android", "encrypted", "encryption", "security"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-23T16:46:28Z"
lastCommitAt: "2026-11-09T04:35:19Z"
lastReleaseAt: "2025-03-23T17:20:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["bakad3v"]
openGraphImageUrl: "https://opengraph.githubassets.com/74d9c39be1dea00e572341080fe49fb38db40d38d7acfc6613f77f35e56eec8d/bakad3v/BetterEncryptedDatastore"
---

# Better Encrypted Datastore
Better Encrypted Datastore adds encryption and optional device-protected storage to AndroidX DataStore 1.1.3. It exposes the `DataStore<T>` interface and requires Android 8.0 (API 26) or later.

On screenshots below you can see that unencrypted data remains in RAM long time after user put application in background.

Better Encrypted Datastore keeps ciphertext in the file and in the underlying AndroidX DataStore cache. It uses a separate cache to share the decrypted value among active collectors of `data`. When the last collector finishes or is cancelled, the library drops the cache's reference to the decrypted value. An `updateData` call without active collectors uses plaintext during the operation and leaves the decrypted cache empty.

On screenshots below you can see that no references to the actual data remains in RAM when user put app in background and after garbage collector run - only default values. 

## Limitations

Plaintext can appear in memory during reads, writes, and migrations, and the decrypted cache can stay populated as long as a collector is active. Moving the app to the background only releases the cache if collection stops. Once all…
