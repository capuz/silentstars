---
repo: "wolfSSL/wolfssh"
name: "wolfssh"
description: "wolfSSH is a small, fast, portable SSH implementation, including support for SCP and SFTP."
url: "https://github.com/wolfSSL/wolfssh"
homepage: "https://www.wolfssl.com"
language: "C"
languages: ["C"]
languagePcts: [84]
topics: ["ssh", "ssh-server", "ssh-client", "sftp", "scp", "security", "cryptography", "iot-security", "iot", "sshv2"]
stars: 476
forks: 113
openIssues: 1
closedIssues: 96
watchers: 31
contributors: 35
recentReleases: 0
createdAt: "2014-06-23T17:07:57Z"
lastCommitAt: "2026-06-26T21:30:31Z"
lastReleaseAt: "2021-02-03T18:46:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 39
maintainers: ["ejohnstown", "yosuke-wolfssl", "padelsbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/df02ac70f34d454edc5b1235bed3ae75be877131706cd4427c0afa13e2f950ea/wolfSSL/wolfssh"
---

WOLFSSH
=======

wolfSSL's Embeddable SSH Server
[wolfSSH Manual](https://www.wolfssl.com/docs/wolfssh-manual/)

dependencies
------------

[wolfSSH](https://www.wolfssl.com/wolfssh/) is dependent on
[wolfCrypt](https://www.wolfssl.com/download/), found as a part of
wolfSSL. The following is the simplest configuration of wolfSSL to
enable wolfSSH.

    $ cd wolfssl
    $ ./configure [OPTIONS] --enable-ssh
    $ make check
    $ sudo make install

On some systems the optional ldconfig command is needed after installing.

To use the key generation function in wolfSSH, wolfSSL will need to be
configured with keygen: `--enable-keygen`.

When using X.509 certificates for user authentication, wolfSSL must be
built with TLS enabled. wolfSSH uses wolfSSL's certificate manager system
for X.509, including OCSP lookups. To allow OCSP, add `--enable-ocsp` to the
wolfSSL configure.

If the bulk of wolfSSL code isn't desired, wolfSSL can be configured with
the crypto only option: `--enable-cryptonly`.

Additional build options for wolfSSL are located in
[chapter two](https://www.wolfssl.com/docs/wolfssl-manual/ch2/).
of the wolfSSH manual.

building
--------

From the wolfSSH source directory…
