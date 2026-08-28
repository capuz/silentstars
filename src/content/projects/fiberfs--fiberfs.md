---
repo: "fiberfs/fiberfs"
name: "fiberfs"
description: "FiberFS is a POSIX filesystem that uses S3 compatible storage as a backend."
readmeQualityOk: true
url: "https://github.com/fiberfs/fiberfs"
homepage: "https://fiberfs.io"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["caching", "filesystem", "hpc", "posix", "s3"]
stars: 46
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-04T14:34:52Z"
lastCommitAt: "2026-08-28T14:23:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 53
maintainers: ["rezan"]
openGraphImageUrl: "https://opengraph.githubassets.com/0524095fbc19e9e7614dcd38975fc927cf26b58b27ef8913517b086f4156bd5d/fiberfs/fiberfs"
discussionCount: 0
---

# FiberFS

FiberFS is a POSIX filesystem that uses S3 compatible storage as a backend.

For more information, please visit [fiberfs.io](https://fiberfs.io/).

## Building

```
make
```
FiberFS has 2 optional but recommended package dependencies: `openssl` and `zlib`.
Note: all Makefile commands support parallelism, ex: `make -j4`.

## Running

First make a `fiberfs.conf` file. At minimum, it just needs to define your S3 endpoint:

```
S3_HOST = my-bucket.s3.region123.cloud-provider.com
S3_REGION = region123
S3_ACCESS_KEY = ACCESS_KEY_STRING
S3_SECRET_KEY = SECRET_KEY_STRING
```

Next run the FiberFS binary to mount the S3 endpoint:

```
./fiberfs [fiberfs.conf] [mount_point]
```

After FiberFS is up and running, you can view the internal logs with:

```
./fiberfs_log [mount_point]
```

For more information, please visit [Building and Running FiberFS](https://fiberfs.io/content/building_and_running_fiberfs).

## Testing and Safety

```
make test
```

Note: all Makefile commands support parallelism, ex: `make test -j8`.

* FiberFS supports both runtime and development assertions via `assert()` and `assert_dev()`.
* FiberFS supports reference counting and memory lifetime safety via…
