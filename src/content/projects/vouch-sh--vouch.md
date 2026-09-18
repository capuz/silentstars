---
repo: "vouch-sh/vouch"
name: "vouch"
description: "Hardware-backed developer credentials"
readmeQualityOk: true
url: "https://github.com/vouch-sh/vouch"
homepage: "https://vouch.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["2fa", "aws", "hardware", "kubernetes", "mfa", "security", "ssh", "yubikey"]
stars: 27
forks: 1
openIssues: 13
closedIssues: 415
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-01-22T02:05:20Z"
lastCommitAt: "2026-09-18T13:47:51Z"
lastReleaseAt: "2026-02-05T04:01:03Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 50
maintainers: ["detail-app[bot]", "jplock", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1139469228/678740de-3c6a-49d2-83ee-0ab47522f810"
discussionCount: 3
---

# Vouch

**Prove you're here.**

Hardware-backed authentication that issues short-lived credentials only after a human touches a YubiKey. One touch, one PIN, one 8-hour session — then SSH, AWS, Kubernetes, and more just work.

```bash
$ vouch login
🔑 Touch your YubiKey...
Enter PIN: ****
✓ Authenticated as you@company.com
✓ Session valid for 8 hours

$ ssh prod.example.com                        # Just works
$ aws s3 ls                                   # Just works
$ kubectl get pods                            # Just works
$ git push origin main                        # Just works
```

## The Problem

Modern authentication is broken in three ways:

1. **Push notification fatigue** — Duo pings you 47 times a day. Users approve reflexively. MFA fatigue attacks succeed because humans are tired.

2. **Credential sprawl** — Long-lived API keys in `~/.aws/credentials`. GitHub PATs that never expire. SSH keys from 2019 still floating around.

3. **No presence verification** — Existing tools verify *devices* or *sessions*, but not that a *human* is actually there. A compromised laptop with cached credentials is indistinguishable from its owner.

## The Solution

Vouch requires…
