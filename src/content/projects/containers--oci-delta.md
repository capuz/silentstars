---
repo: "containers/oci-delta"
name: "oci-delta"
description: "Delta generator for bootc images"
readmeQualityOk: true
url: "https://github.com/containers/oci-delta"
language: "Go"
languages: ["Go"]
languagePcts: [73]
stars: 21
forks: 12
openIssues: 6
closedIssues: 19
watchers: 3
contributors: 17
recentReleases: 2
createdAt: "2026-03-27T14:41:36Z"
lastCommitAt: "2026-09-01T08:49:29Z"
lastReleaseAt: "2026-06-17T11:29:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 51
maintainers: ["alexlarsson", "engelmi", "rosygmiki"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3df7f23b42095c47cb78e525c6aba4192f9daf897a2e09c992c8de04c240de0/containers/oci-delta"
---

# oci-delta

oci-delta is a tool to take two oci archive files, called the "old" and "new" image below,
containing bootc images and producing a resulting file, called a "delta" that can be used to update
a bootc host with the old image installed to the new image, without having the new oci archive
available.  The advantage of using the delta is that it is significantly smaller, as it avoids
shipping data that is already locally available from the installed old image.

## Mode of operation

An OCI image (and thus OCI archive) consists of some json metadata, and a list of compressed tar
files, one for each image layer. Each layer is referenced from the metadata twice, once (the digest
id) by sha256 digest of the compressed tar file, and once (the diff id) by the sha256 digest of the
uncompressed file. The latter is important because various operations can cause layers to be
recompressed, but using the diff_id we can ensure we're referencing the same data.

When bootc installs a new image (both when pulling from a registry or from an OCI archive), it will
look at each layers digest id and diff_id comparing it to the set of already installed layers. If
there is a match, the layer in…
