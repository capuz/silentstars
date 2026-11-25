---
repo: "huan/file-box"
name: "file-box"
description: "Pack a File into Box for easy move/transfer between servers no matter of where it is.(local, remote url, or cloud storage)"
readmeQualityOk: true
url: "https://github.com/huan/file-box"
homepage: "https://paka.dev/npm/file-box/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["file"]
stars: 58
forks: 9
openIssues: 7
closedIssues: 32
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2018-05-13T02:38:37Z"
lastCommitAt: "2026-11-25T03:19:52Z"
lastReleaseAt: "2018-05-29T10:56:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 31
maintainers: ["huan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9e9189260c006276ba66694951dd99228dc9487dd7cf3a217954a7b5516b77a/huan/file-box"
---

# file-box

FileBox is a virtual container for packing a file data into it for future read, and easily transport between servers with the least payload, no mater than where it is (local path, remote url, or cloud storage).

Currently the FileBox supports almost all kinds of the data input/output methods/formats:

| File Type | Pack Method | Unpack Method | Description |
| :--- | :--- | :--- | :--- |
| Local File | `fromFile()` | `toFile()` | Local file in file system |
| Remote URL | `fromUrl()` | `toUrl()`(TBW) | Remote file in a HTTP/HTTPS URL |
| Buffer | `fromBuffer()` | `toBuffer()` | JavaScript Buffer |
| Stream | `fromStream()` | `toStream()` | JavaScript Stream |
| Base64 | `fromBase64()` | `toBase64()` | Base64 data |
| DataURL | `fromDataURL()` | `toDataURL()` | DataURL data |
| QRCode | `fromQRCode()` | `toQRCode()` | QR Code Image Decode/Encode |
| UUID | `fromUuid()` | `toUuid()` | UUID by loader/saver helper functions |
| JSON | `fromJSON()` | `toJSON()` | Serialize/Deserialize FileBox |

## Examples

The following example demos:

1. Load local file
1. Save URL to local file
1. Convert buffer to stream
1. Pack from Base64 then Unpack to DataURL
