---
repo: "apioo/psx-schema"
name: "psx-schema"
description: "TypeSchema parser, object mapper and DTO generator"
readmeQualityOk: true
url: "https://github.com/apioo/psx-schema"
homepage: "https://typeschema.org/"
language: "PHP"
languages: ["PHP"]
languagePcts: [75]
topics: ["json-schema", "popo", "php", "dto", "object-mapper", "typeschema", "code-generator"]
stars: 56
forks: 11
openIssues: 0
closedIssues: 20
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2016-03-31T13:05:11Z"
lastCommitAt: "2026-10-03T22:03:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 42
maintainers: ["chriskapp", "marcreichel"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce46c4b83d79e50dbbdb21fe0c249105256c1d4e4910014d227b981a3a83b6e6/apioo/psx-schema"
fundingLinks: ["GITHUB:https://github.com/chriskapp", "PATREON:https://patreon.com/fusio", "CUSTOM:https://www.paypal.me/fusioapi"]
---

# Schema

This library helps you to work with fully typed objects, it provides the following features:

* Transform raw JSON data into fully typed objects
* Parse PHP classes into a [TypeSchema](https://typeschema.org/) specification
* Generate DTOs in different languages like TypeScript, Java, C# etc.

We provide also a hosted version of this [code generator](https://typeschema.org/generator).
For more integration options you can also take a look at the [SDKgen](https://sdkgen.app/) project
which provides a CLI binary or GitHub action to integrate the code generator.

## Object mapper

This example reads raw JSON data and transform it into the provided `Person` class.

```php
$json = <<<'JSON'
{
    "firstName": "Ludwig",
    "lastName": "Beethoven",
    "age": 254
}
JSON;

$objectMapper = new ObjectMapper(new SchemaManager());

$person = $objectMapper->readJson($json, SchemaSource::fromClass(Person::class));

assert('Ludwig' === $person->getFirstName());
assert('Beethoven' === $person->getLastName());
assert(254 === $person->getAge());

$json = $objectMapper->writeJson($person);
```

Besides a simple class there are multiple ways to specify a source, for example to parse
an…
