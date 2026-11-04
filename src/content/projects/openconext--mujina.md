---
repo: "OpenConext/Mujina"
name: "Mujina"
description: "A mock IDP and SP using the OpenSAML library"
readmeQualityOk: true
url: "https://github.com/OpenConext/Mujina"
language: "Java"
languages: ["Java"]
languagePcts: [72]
topics: ["idp", "java", "saml", "saml2", "openconext", "sp", "mock", "testing"]
stars: 387
forks: 172
openIssues: 8
closedIssues: 57
watchers: 29
contributors: 21
recentReleases: 0
createdAt: "2012-03-28T11:22:53Z"
lastCommitAt: "2026-11-04T13:05:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 39
maintainers: ["oharsta", "dependabot[bot]", "phavekes"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd3f0ff3acb9cee389fc0cd5dc602a392735ed9b7387a27df2542607c43fc0d2/OpenConext/Mujina"
---

|  \/  |       (_)(_)
| .  . | _   _  _  _  _ __    __ _
| |\/| || | | || || || '_ \  / _` |
| |  | || |_| || || || | | || (_| |
\_|  |_/ \__,_|| ||_||_| |_| \__,_|
              _/ |
             |__/

  Configurable Identity and Service Provider built with OpenSAML & Java Spring Boot

Mujina
======

Mujina is a SAML2 Identity and Service Provider (IdP & SP).

Note that backward incompatibilities were introduced in version 5.0.0. If you want to migrate from pre-5 versions to the post-5 versions
then the following has changed:

* We no longer use Tomcat, but standalone Spring boot applications
* The API has changed for all end-points requiring a single value (e.g. String or boolean) and only that value is required in the request body. See the API documentation below.

As of version 10.0.0 we run with Spring Boot 4, spring-security-saml2-service-provider and the custom IdP library https://github.com/OpenConext/openconext-saml-java

As of version 9.0.0 we run with Java 21.

Characteristics of both the IdP or SP can be runtime changed with the REST API.

Mujina is used to test the SURFconext middleware which enables Dutch educational services to use cloud based SAAS-services.…
