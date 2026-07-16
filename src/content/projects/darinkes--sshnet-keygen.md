---
repo: "darinkes/SshNet.Keygen"
name: "SshNet.Keygen"
description: "SSH.NET Extension to generate and export Authentication Keys in OpenSSH and PuTTY Format. 🔑"
readmeQualityOk: true
url: "https://github.com/darinkes/SshNet.Keygen"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["ssh", "sshnet", "keygen", "nuget", "csharp", "csharp-library", "dotnet", "putty", "puttygen"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2021-02-06T12:06:06Z"
lastCommitAt: "2026-07-16T06:00:08Z"
lastReleaseAt: "2026-07-14T13:57:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 77
maintainers: ["darinkes", "dependabot[bot]", "tinohager"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a85e747e5092ada4710d84ca21cba15f20398e114b42966d49598ea4cd3a4d1/darinkes/SshNet.Keygen"
---

SshNet.Keygen
=============
[SSH.NET](https://github.com/sshnet/SSH.NET) Extension to generate and export Authentication Keys in OpenSSH and PuTTY v2 and v3 Format.

## .NET Frameworks

* .NET 4.8
* netstandard 2.0

## Keys
* ssh-ed25519
* ecdsa-sha2-nistp256
* ecdsa-sha2-nistp384
* ecdsa-sha2-nistp521
* ssh-rsa with 2048, 3072, 4096 or 8192 KeyLength

## Fingerprinting
* Get Key Fingerprint as MD5, SHA1, SHA256, SHA384 or SHA512

## Key Encryption

### OpenSSH
* None
* AES256-ctr
* AES256-cbc

### PuTTY
* None
* AES256-cbc

## Usage Examples

### Generate an RSA-2048 Key in File, Show the Public Key and Connect with the Private Key

```cs
var key = SshKey.Generate("test.key", FileMode.Create);

var publicKey = key.ToPublic();
var fingerprint = key.Fingerprint();

Console.WriteLine("Fingerprint: {0}", fingerprint);
Console.WriteLine("Add this to your .ssh/authorized_keys on the SSH Server: {0}", publicKey);
Console.ReadLine();

using var client = new SshClient("ssh.foo.com", "root", key);
client.Connect();
Console.WriteLine(client.RunCommand("hostname").Result);
```

### Generate an RSA-2048 Key in PuTTY File, Show the Public Key and Connect with the Private Key

```cs
var keyInfo…
