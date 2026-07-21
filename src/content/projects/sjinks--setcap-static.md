---
repo: "sjinks/setcap-static"
name: "setcap-static"
description: "A statically linked lightweight version of setcap(8) to use in `scratch` images"
readmeQualityOk: true
url: "https://github.com/sjinks/setcap-static"
homepage: "https://wildwolf.name/multi-stage-docker-builds-and-xattrs/"
language: "C"
languages: ["C", "CMake"]
languagePcts: [52, 35]
topics: ["setcap", "capabilities", "linux-capabilities", "security", "security-tools", "scratch-image"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-05-30T13:56:28Z"
lastCommitAt: "2026-07-21T06:12:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 47
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c14a7b3bae4eeb9021762cca97b583614a7b53d71fa4441b7e0cb264d7590624/sjinks/setcap-static"
fundingLinks: ["CUSTOM:https://www.paypal.com/donate/?hosted_button_id=SAG6877JDJ3KU", "CUSTOM:https://send.monobank.ua/jar/7rosVfiwKM"]
---

# setcap-static

`setcap-static` is a statically linked trimmed down version of [setcap(8)](https://linux.die.net/man/8/setcap). It sets the capabilities of the given filename to the capabilities specified.

## Why

KubeSec security guidelines suggest that the running image should be "run as a [non-root user to ensure the least privilege](https://kubesec.io/basics/containers-securitycontext-runasnonroot-true/)." However, if the containerized application needs some `root` privileges (like binding to a port less than 1024) and runs in a `scratch` image, this will not be straightforward.

The issue is that Docker's `COPY` command does not preserve the extended attributes; therefore, you cannot do something like this:

```Dockerfile
FROM alpine:3.13 as build

# ...

RUN \
    apk add --no-cache libcap \
    && setcap 'cap_net_bind_service=+ep' my-cool-application \
    && apk del --no-cache libcap

# ...

FROM scratch
COPY --from=build /path/to/my-cool-application /my-cool-application
```

In the target image, `my-cool-application` will not have the capabilities set in the `build` image. Therefore, if you need to grant some capabilities to your application, you have to do it in the…
