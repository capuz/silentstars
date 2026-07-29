---
repo: "tsg-ut/ctfd-theme-tsgctf"
name: "ctfd-theme-tsgctf"
description: "Custom CTFd theme made for TSG CTF"
readmeQualityOk: true
url: "https://github.com/tsg-ut/ctfd-theme-tsgctf"
homepage: "https://score.ctf.tsg.ne.jp/"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [74, 26]
stars: 35
forks: 7
openIssues: 0
closedIssues: 1
watchers: 16
contributors: 28
recentReleases: 0
createdAt: "2019-04-24T11:41:06Z"
lastCommitAt: "2026-07-29T06:13:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 58
maintainers: ["hakatashi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6b2c65a7cf292d9463faa746578b936c4ee1a4d47ebfac880c6b03797fee564/tsg-ut/ctfd-theme-tsgctf"
---

# ctfd-theme-tsgctf

Custom CTFd theme made for TSG CTF

## Setup

```
cd /path/to/CTFd
git clone https://github.com/tsg-ut/ctfd-theme-tsgctf.git themes/tsgctf -b dist
```

## Related projects

* [ctfd-plugin-tsgctf](https://github.com/tsg-ut/ctfd-plugin-tsgctf)

## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# when you use this please serve patched CTFd server as below at localhost:8000
$ npm run dev

# build the theme into tsgctf directory
$ npm run build

# build static website
$ SESSION=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx npm run generate
```

Following patch is required during development (don't do this in production):

```patch
diff --git a/CTFd/api/v1/users.py b/CTFd/api/v1/users.py
index bd1d2ca9..3bbf28c0 100644
--- a/CTFd/api/v1/users.py
+++ b/CTFd/api/v1/users.py
@@ -125,16 +125,17 @@ class UserList(Resource):
                     "prev": users.prev_num,
                     "pages": users.pages,
                     "per_page": users.per_page,
                     "total": users.total,
                 }
             },
             "success": True,
             "data": response.data,
+            "nonce":…
