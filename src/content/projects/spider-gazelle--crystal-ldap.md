---
repo: "spider-gazelle/crystal-ldap"
name: "crystal-ldap"
description: "a Crystal lang LDAP client"
url: "https://github.com/spider-gazelle/crystal-ldap"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
stars: 19
forks: 3
openIssues: 2
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-05-07T02:22:21Z"
lastCommitAt: "2026-06-27T00:49:18Z"
lastReleaseAt: "2021-03-22T23:18:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 41
maintainers: ["stakach", "n-rodriguez"]
openGraphImageUrl: "https://opengraph.githubassets.com/c38bc6ce6987dfd3707b06bb20dfece813d7e7045b9ffde4090374e581a583c1/spider-gazelle/crystal-ldap"
---

# LDAP Support for Crystal Lang

## Installation

Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     ldap:
       github: spider-gazelle/crystal-ldap
   ```

## Usage

### Connecting and Binding

Passing a TLS context will upgrade the connection using [start tls](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol#StartTLS)

```crystal
require "ldap"

host = "ldap.forumsys.com"
port = 389
user = "cn=read-only-admin,dc=example,dc=com"
pass = "password"

# Standard LDAP port with unencrypted socket
socket = TCPSocket.new(host, port)

# Providing a context will upgrade to encrypted comms using start tls (official method)
tls = OpenSSL::SSL::Context::Client.new
tls.verify_mode = OpenSSL::SSL::VerifyMode::NONE

# Bind to the server
client = LDAP::Client.new(socket, tls)
client.authenticate(user, pass)

# Can now perform LDAP operations
```

To use the non-standard `LDAPS` (LDAP Secure, commonly known as LDAP over SSL) protocol then pass in a `OpenSSL::SSL::Socket::Client` directly: `LDAP::Client.new(tls_socket)`

```crystal
# LDAPS method
socket = TCPSocket.new(host, port)
tls = OpenSSL::SSL::Context::Client.new
tls.verify_mode =…
