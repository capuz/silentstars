---
repo: "fiberfs/fiberfs"
name: "fiberfs"
description: "FiberFS is a high performance POSIX filesystem built on S3 compatible storage."
readmeQualityOk: true
url: "https://github.com/fiberfs/fiberfs"
homepage: "https://fiberfs.io"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["caching", "filesystem", "hpc", "posix", "s3"]
stars: 51
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-04T14:34:52Z"
lastCommitAt: "2026-11-04T13:05:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 52
maintainers: ["rezan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac49f94ca14762b9dc052afd2c73aa485840cdf736cec8ba5e254609bda6ba34/fiberfs/fiberfs"
discussionCount: 0
---

# FiberFS

FiberFS is a high performance POSIX filesystem built on S3 compatible storage.

For more information, please visit [fiberfs.io](https://fiberfs.io/).

## Building

```
make
```
FiberFS requires `fuse3` and has 2 optional but recommended package dependencies: `openssl` and `zlib`.
Note: all Makefile commands support parallelism, ex: `make -j4`.

## Running

First make a `fiberfs.conf` file. At minimum, it just needs to define your S3 endpoint:

```
S3_HOST = my-bucket.s3.region123.cloud-provider.com
```

Next run the FiberFS binary to mount the S3 endpoint:

```
./fiberfs [fiberfs.conf] [mount_point]
```

After FiberFS is up and running, you can view the internal logs with:

```
./fiberfs_log [mount_point]
```

And to import existing S3 files into FiberFS:

```
./fiberfs_cmd -i [file_path]
```

For more information, please visit [Building and Running FiberFS](https://fiberfs.io/content/building_and_running_fiberfs).

## Testing and Safety

```
make test
```

Note: all Makefile commands support parallelism, ex: `make test -j8`.

* FiberFS supports both runtime and development assertions via `assert()` and `assert_dev()`.
* FiberFS supports reference counting and memory…
