---
repo: "facebookexperimental/rust-shed"
name: "rust-shed"
description: "Repository containing Rust crates common between other Facebook open source projects (like Mononoke or Eden)."
readmeQualityOk: true
url: "https://github.com/facebookexperimental/rust-shed"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [70, 23]
stars: 149
forks: 48
openIssues: 1
closedIssues: 1
watchers: 18
contributors: 284
recentReleases: 0
createdAt: "2019-11-28T07:18:11Z"
lastCommitAt: "2026-10-31T07:44:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 41
maintainers: ["genevievehelsel", "nspring", "vitaut"]
openGraphImageUrl: "https://opengraph.githubassets.com/42805382e36aa6cc38bee48e43c1453cd8c72d0d9cbb51f522755a0da5573ecd/facebookexperimental/rust-shed"
---

# rust-shed

rust-shed is a repository containing Rust crates common between other Facebook
open source projects (like Mononoke or Eden).

## Building rust-shed

### TL;DR

You can use `cargo` to build and test the project.

When using `thrift_compiler` you have to have fbthrfit compiler installed. For
MacOS/Unix to install it inside `$HOME/build` do:

```
[rust-shed]$ mkdir $HOME/build
[rust-shed]$ ./build/fbcode_builder/getdeps.py build fbthrift --install-prefix $HOME/build
```

After that add `THRIFT=$HOME/build/fbthrift/bin/thrift1` to your environment or
make sure `thrift1` is accessible by adding `$HOME/build/fbthrift/bin` to
`PATH`.

Alternatively you can build and run tests with:

```
[rust-shed]$ ./build/fbcode_builder/getdeps.py build rust-shed
[rust-shed]$ ./build/fbcode_builder/getdeps.py test rust-shed
```

### Dependencies

- [Cargo](https://github.com/rust-lang/cargo) is used for building and testing
- The `thrift_compiler` crate requires
  [fbthrift](https://github.com/facebook/fbthrift) to be installed or the
  `THRIFT` environment variable to point to the thrift compiler

## Contributing

See the…
