---
repo: "nextcloud/files_downloadlimit"
name: "files_downloadlimit"
description: "Nextcloud link share download counter"
readmeQualityOk: true
url: "https://github.com/nextcloud/files_downloadlimit"
homepage: "https://apps.nextcloud.com/apps/files_downloadlimit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 16
forks: 8
openIssues: 37
closedIssues: 80
watchers: 1
contributors: 251
recentReleases: 0
createdAt: "2021-09-08T17:52:32Z"
lastCommitAt: "2026-10-11T10:15:56Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 72
maintainers: ["github-actions[bot]", "dependabot[bot]", "nextcloud-command"]
openGraphImageUrl: "https://opengraph.githubassets.com/2908836aeeb758c7d83dfb17952e88111dfb9d878289c948fdab15f775da88ac/nextcloud/files_downloadlimit"
discussionCount: 0
---

# Files download limit

This app allows limiting the number of downloads for external link shares.

---

## API

The examples below can be run using [hurl](https://github.com/Orange-OpenSource/hurl).

> [!TIP]
> To ignore assertions pass the `--ignore-asserts` flag.

### External share limit

An external share limit may be queried by its token.

#### Get

```sh
hurl get.hurl --variable token='2Nyq27RKT7Jw9q3'
```

> get.hurl
```hurl
GET https://nextcloud.local/ocs/v2.php/apps/files_downloadlimit/api/v1/{{token}}/limit

OCS-APIRequest: true
Accept: application/json

[BasicAuth]
alice: alice

HTTP 200
[Asserts]
jsonpath "$.ocs.data.limit" exists
jsonpath "$.ocs.data.count" exists
```

#### PropFind

```sh
hurl propfind.hurl --variable owner=admin --variable path=/welcome.txt
```

> propfind.hurl
````hurl
PROPFIND https://nextcloud.local/remote.php/dav/files/{{owner}}/{{path}}

[BasicAuth]
{{owner}}: {{owner}}

```xml
<?xml version="1.0"?>
<d:propfind xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns">
	<d:prop>
		<oc:fileid />
		<d:displayname />
		<d:getlastmodified />
		<d:getcontenttype />
		<oc:size />
		<oc:owner-id />
		<oc:share-types />…
