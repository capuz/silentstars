---
repo: "aternosorg/php-nbt"
name: "php-nbt"
description: "A full PHP implementation of Minecraft's Named Binary Tag (NBT) format."
readmeQualityOk: true
url: "https://github.com/aternosorg/php-nbt"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 17
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-09-02T14:54:48Z"
lastCommitAt: "2026-11-27T12:57:18Z"
lastReleaseAt: "2021-09-16T14:04:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 60
maintainers: ["pavog", "KurtThiemann"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed3189400d4e460e9cac18666a5a4276ab901c926de277025f4dbeccad361721/aternosorg/php-nbt"
---

# php-nbt
A full PHP implementation of Minecraft's Named Binary Tag (NBT) format.

In contrast to other implementations, this library provides full support
for 64-bit types, including the relatively new `TAG_Long_Array`.

Additionally, all three flavors (Java Edition, Bedrock Edition/little endian, and Bedrock Edition/VarInt) of the NBT format are supported.

### Installation
```shell
composer require aternos/nbt
```

Version 2 is a major version with breaking changes.
If you are upgrading from version 1, see [Upgrading from 1.x](#upgrading-from-1x).

## Usage
### Reading NBT data
To read existing NBT data, a Reader object is required.
This library implements different readers to read NBT data from strings.
