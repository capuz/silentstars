---
repo: "ImageMagick/MagickCache"
name: "MagickCache"
description: "MagickCache is a secure, high-performance caching tool for images, videos, audio, and metadata. It uses memory mapping for fast access, supports partial retrieval, and allows content expiration via TTL. Designed for massive scale, it integrates with ImageMagick for digital media repositories."
readmeQualityOk: true
url: "https://github.com/ImageMagick/MagickCache"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [60, 21]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-03-14T19:26:47Z"
lastCommitAt: "2026-07-29T06:13:17Z"
lastReleaseAt: "2022-03-25T02:24:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 47
maintainers: ["dependabot[bot]", "dlemstra"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/347733178/23910e80-d39c-11eb-909b-d50924c296ce?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061707Z&X-Amz-Expires=300&X-Amz-Signature=549c5cfdc18c70d303cf7dfe3643d838de02d98b134f9cae52c840ccea91faf8&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjEyNywibmJmIjoxNzg1MzA1ODI3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.1eNY0qK274QXvcckYROEPM-cqB4wYRNiCcdG886EC0k"
fundingLinks: ["GITHUB:https://github.com/ImageMagick", "CUSTOM:https://imagemagick.org/script/support.php"]
discussionCount: 2
---

# MagickCache: an Efficient Digital Media Repository

MagickCache is an advanced toolset that guarantees secure caching of images, image sequences, videos, audio, or metadata within a local folder. The content is memory-mapped to ensure fast and efficient retrieval, and retrieving a portion of an image further enhances its efficiency. You have the flexibility to choose whether the content should persist or have a specified time-to-live (TTL) to automatically expire when the TTL is exceeded. MagickCache has the ability to support virtually an unlimited amount of content, up to billions of images, videos, metadata, or blobs, making it ideal for use as a digital media repository.

The MagickCache works in concert with [ImageMagick](https://imagemagick.org). Download the [MagickCache](https://github.com/ImageMagick/MagickCache) and install. You will now want to create the cache and populate it with images, video, audio, and any associated metadata.

## Create a Digital Media Repository

You will require a place to store and retrieve your content.  Let's create a digital media repository on your local filesystem:

```
$ magick-cache -passkey ~/.passkey create /opt/dmr
```

Where…
