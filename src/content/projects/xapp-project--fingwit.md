---
repo: "xapp-project/fingwit"
name: "fingwit"
description: "Fingerprint Configuration Tool"
url: "https://github.com/xapp-project/fingwit"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 105
forks: 10
openIssues: 36
closedIssues: 19
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-06-05T07:52:28Z"
lastCommitAt: "2026-06-28T03:09:23Z"
lastReleaseAt: "2025-06-05T13:28:55Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 19
maintainers: ["clefebvre", "mtwebster"]
openGraphImageUrl: "https://opengraph.githubassets.com/e799df9c8f09e5a442b61f6a71fed0d0c40a99244cf247d2928dcf64c0e2330b/xapp-project/fingwit"
---

# Fingwit

Fingwit is used to configure fingerprint authentication.

It's an XApp so it can work in any distribution and many desktop environments.

# Supported Fingerprint Readers

Fingwit relies on Fprintd.

Here's the list of supported fingerprint readers: https://fprint.freedesktop.org/supported-devices.html.

# AppImage

An Appimage could be provided in the future.

# PAM Configuration

Fingwit uses two PAM modules:

- Its own module: `pam_fingwit.so`
- Fprint's module: `pam_fprintd.so`

`pam_fprintd.so` performs the fingerprint authentication.

`pam_fingwit.so` decides when it's safe for the computer to use `pam_fprintd.so` and when it's better to skip it (for instance when you try to log in with an encrypted home directory).

A typical PAM configuration therefore looks like this:

```
auth	[authinfo_unavail=1 default=ignore]	pam_fingwit.so # debug
auth	[success=end default=ignore]	pam_fprintd.so max-tries=1 timeout=10 # debug
auth	[success=1 default=ignore]	pam_unix.so nullok
```

If `pam_fingwit.so` thinks fingerprint authentication is safe, it returns `ignore` and lets PAM proceed towards `pam_fprintd.so`.

If `pam_fingwit.so` thinks fingerprint authentication should be…
