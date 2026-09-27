---
repo: "manoelcampos/dtogen"
name: "dtogen"
description: "A Java 21+ annotation-based, validation-aware DTO generation library following DRY and avoiding boilerplate code."
readmeQualityOk: true
url: "https://github.com/manoelcampos/dtogen"
homepage: "https://manoelcampos.github.io/dtogen"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["annotation", "annotation-processing", "annotation-processor", "dto", "dtogen", "dto-mapper", "java21", "jdk21"]
stars: 26
forks: 1
openIssues: 8
closedIssues: 25
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-01-21T14:56:47Z"
lastCommitAt: "2026-09-27T09:28:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 34
maintainers: ["manoelcampos"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e089ec17652a773188de61a6906cdfacca4498f8b3de4eba6d5fde9f5c08fd8/manoelcampos/dtogen"
discussionCount: 0
---

# Java automatic DTO Generation Library [](https://github.com/manoelcampos/dtogen/actions/workflows/build.yml) [](https://central.sonatype.com/search?q=dtogen&namespace=io.github.manoelcampos) [](https://javadoc.io/doc/io.github.manoelcampos/dtogen) [](https://app.codacy.com/gh/manoelcampos/dtogen/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [](https://app.codacy.com/gh/manoelcampos/dtogen/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)

DTOGen is a Java 21+ library that automatically generates [Data Transfer Object](https://en.wikipedia.org/wiki/Data_transfer_object) (DTO) [records](https://openjdk.org/jeps/395) from a given model class/record using annotations. 
It is a straightforward library that requires no extra configuration to work: just add the dependency and include the `@DTO` annotation on desired model classes to see the magic of generating DTO records happening. 

The library is type-safe and validation-aware. It means that if you use [Lombok](http://projectlombok.org), [Hibernate Validator](https://hibernate.org/validator/) Annotations or other ones, they will be copied to the DTO fields.…
