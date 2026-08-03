---
repo: "kkocel/webclient-signed-request-to-aws"
name: "webclient-signed-request-to-aws"
description: "Example of WebClient request signing for AWS"
readmeQualityOk: true
url: "https://github.com/kkocel/webclient-signed-request-to-aws"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-05-22T12:29:11Z"
lastCommitAt: "2026-08-03T06:44:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 69
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/acf681d5ac00992ecf6d9b1f2fce32f914de98b38f2c936f56b0bca400c092e8/kkocel/webclient-signed-request-to-aws"
---

# WebClient AWS request signing

Sample code showing how to sign HTTP requests coming to AWS in WebClient.

This code is based on https://github.com/rewolf/blog-hmac-auth-webclient and uses [Aws4Signer](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/auth/signer/Aws4Signer.html) to sign requests.

High-level diagram showing how signing HTTP requests with body works:

## Caveats
This sample works only for JSON requests. If you need to sign requests with XML/protobuf content, 
you will need to provide a different implementation of `HttpMessageEncoder` and add it through
[CodecConfigurer](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/codec/CodecConfigurer.html).

## How to run

Run the application with and call `/example` endpoint with a GET request.
It will sign the POST request with `ExampleRequest` body and send it to `https://example.com`.

### How to adjust for your project

1. In production, you need to switch [awsCredentialsProvider](https://github.com/kkocel/webclient-signed-request-to-aws/blob/main/src/main/kotlin/com/sample/BeansInitializer.kt#L28) from `AnonymousCredentialsProvider` to…
