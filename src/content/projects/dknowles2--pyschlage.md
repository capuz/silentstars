---
repo: "dknowles2/pyschlage"
name: "pyschlage"
description: "Python 3 library for interacting with Schlage Encode WiFi locks."
readmeQualityOk: true
url: "https://github.com/dknowles2/pyschlage"
homepage: "https://pyschlage.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["iot", "smarthome", "smartlock", "schlage"]
stars: 23
forks: 10
openIssues: 18
closedIssues: 17
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2022-12-04T03:19:56Z"
lastCommitAt: "2026-11-02T17:56:40Z"
lastReleaseAt: "2023-04-08T15:39:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["dependabot[bot]", "dknowles2", "mdz"]
openGraphImageUrl: "https://opengraph.githubassets.com/396f7e8a45f3bc7b6cc6546b7f58bf8ece09a1c666f2a2e3ae604a95c0e16fa9/dknowles2/pyschlage"
---

# pyschlage
Python 3 library for interacting with Schlage Encode WiFi locks.

*Note that this project has no official relationship with Schlage or Allegion. Use at your own risk.*

## Usage

### Basic usage

```python
from pyschlage import Auth, Schlage

# Create a Schlage object and authenticate with your credentials.
s = Schlage(Auth("username", "password"))

# List the locks attached to your account.
locks = s.locks()

# Print the name of the first lock
print(locks[0].name)
"My lock"

# Lock the first lock.
locks[0].lock()
```

### Managing access codes

```python
from pyschlage.code import AccessCode

lock = locks[0]

# Add a new access code to a lock.
guest_code = AccessCode(name="Guest", code="1234")
lock.add_access_code(guest_code)

# List the access codes currently on the lock.
lock.refresh_access_codes()
for access_code in lock.access_codes.values():
    print(access_code.name, access_code.code)

# Remove an access code from the lock.
guest_code.delete()
```

### Reading activity logs

```python
# Fetch the 10 most recent log entries, newest first.
for log_entry in lock.logs(limit=10, sort_desc=True):
    print(log_entry.created_at, log_entry.message)
```

### Handling…
