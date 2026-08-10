---
repo: "hardyscc/nestjs-dynamoose"
name: "nestjs-dynamoose"
description: "Dynamoose module for Nest"
readmeQualityOk: true
url: "https://github.com/hardyscc/nestjs-dynamoose"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["nestjs", "dynamoose", "dynamodb", "nest"]
stars: 149
forks: 25
openIssues: 2
closedIssues: 52
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2020-03-20T07:54:53Z"
lastCommitAt: "2026-08-10T05:07:07Z"
lastReleaseAt: "2020-04-19T06:30:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 34
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff85b124ff1caa76e90af1b98354c3c79998f672317572d3a692d8383ddc6a6e/hardyscc/nestjs-dynamoose"
---

</p>

</p>

## Description

[Dynamoose](https://dynamoosejs.com/) module for [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm install --save nestjs-dynamoose dynamoose
```

## Example Project

A [AWS NestJS Starter](https://github.com/hardyscc/aws-nestjs-starter) project has been created to demo the usage of this library.

## Quick Start

**1. Add import into your app module**

`src/app.module.ts`

```ts
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserModule } from './user/user.module';

@Module({
 imports: [
   DynamooseModule.forRoot(),
   UserModule,
 ],
})
export class AppModule {
```

`forRoot()` optionally accepts the following options defined by `DynamooseModuleOptions`:

```ts
interface DynamooseModuleOptions {
  aws?: {
    accessKeyId?: string;
    secretAccessKey?: string;
    region?: string;
  };
  local?: boolean | string;
  ddb?: DynamoDB;
  table?: TableOptionsOptional;
  logger?: boolean | LoggerService;
}
```

There is also `forRootAsync(options: DynamooseModuleAsyncOptions)` if you want to use a factory with dependency injection.

**2. Create a schema**

`src/user/user.schema.ts`

```ts
import { Schema } from 'dynamoose';…
