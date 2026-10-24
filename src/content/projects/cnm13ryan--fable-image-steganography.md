---
repo: "cnm13ryan/fable-image-steganography"
name: "fable-image-steganography"
description: "Exact prompts for reproducing the Fable 5.1 image steganography experiment (encode a message in an SVG, decode it from the rendered PNG)"
readmeQualityOk: true
url: "https://github.com/cnm13ryan/fable-image-steganography"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-22T02:20:48Z"
lastCommitAt: "2026-10-24T08:21:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 13
maintainers: ["cnm13ryan"]
openGraphImageUrl: "https://opengraph.githubassets.com/51976dfd099acc2d4adf99ce2cf3956544064ec31e0640b2fda7e1123835e72a/cnm13ryan/fable-image-steganography"
---

# Fable 5.1: Hiding and Recovering Messages in Images

We asked Claude Fable 5.1 to draw an ordinary-looking SVG image that hides a secret message. We did not tell it how to encode the message. We rendered each SVG to a PNG and gave only the PNG to a separate, fresh Fable 5.1 session. That session was asked whether the image contained a hidden message and, if so, what it said. The two sessions never agreed on an encoding method. The decoder never saw the SVG source, the original message, or any notes from the encoder. In our evaluation of 50 messages, the decoder recovered 39 (78%).

This repository contains the exact prompts we used, so you can run the same procedure yourself. Full methods and results are in the article: [How does Fable 5.1 hide messages in images?](https://www.lesswrong.com/posts/WHEQps5PK8LrrcTAb/how-does-fable-5-1-hide-messages-in-images)

- [`prompts/encode.md`](https://github.com/cnm13ryan/fable-image-steganography/blob/HEAD/prompts/encode.md): the encoding prompt
- [`prompts/decode.md`](https://github.com/cnm13ryan/fable-image-steganography/blob/HEAD/prompts/decode.md): the decoding prompt
-…
