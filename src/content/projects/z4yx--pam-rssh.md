---
repo: "z4yx/pam_rssh"
name: "pam_rssh"
description: "Remote sudo authenticated via ssh-agent"
readmeQualityOk: true
url: "https://github.com/z4yx/pam_rssh"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["sudo", "ssh-agent", "rust", "yubikey", "canokey"]
stars: 199
forks: 17
openIssues: 7
closedIssues: 14
watchers: 4
contributors: 8
recentReleases: 3
createdAt: "2022-02-05T00:56:46Z"
lastCommitAt: "2026-08-28T06:02:08Z"
lastReleaseAt: "2026-08-28T15:19:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 34
maintainers: ["z4yx", "alexbartok"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a8efeff3c2cc4d83cb48cd01b8e25b985cbb93cf5abe51a9fd3fc59b8e85b25/z4yx/pam_rssh"
---

# PAM-RSSH

This PAM module provides ssh-agent based authentication. The primary design goal is to avoid typing password when you `sudo` on remote servers. Instead, you can simply touch your hardware security key (e.g. Yubikey/Canokey) to fulfill user verification. The process is done by forwarding the remote authentication request to client-side ssh-agent as a signature request.

This project is developed in Rust language to minimize security flaws.

## Development Status

It's ready for production use, and has been tested on production servers for over a year. More tests and feedback are welcome.

Currently supported SSH public key types:
- RSA (with SHA256 digest)
- DSA
- ECDSA 256/384/521
- ECDSA-SK (FIDO2/U2F)
- ED25519
- ED25519-SK (FIDO2)

## Build and Install

Prerequisites:

- OpenSSL (>=1.1.1) 
- libpam
- Rust (with Cargo)

Clone this repo with **a submodule**.

```
git clone --recurse-submodule https://github.com/z4yx/pam_rssh.git
cd pam_rssh
```

Then build it using Cargo.

```
cargo build --release
cp target/release/libpam_rssh.so <pam module path>
```

The `<pam module path>` is specific to certain Linux distributions.

| OS           | Destination…
