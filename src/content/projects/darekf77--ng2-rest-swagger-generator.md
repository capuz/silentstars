---
repo: "darekf77/ng2-rest-swagger-generator"
name: "ng2-rest-swagger-generator"
description: "Generate Angular 2+ services from swagger.json"
url: "https://github.com/darekf77/ng2-rest-swagger-generator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [66]
topics: ["angular2", "swagger-codegen", "swagger-generator", "code-generator", "angular4"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-01-14T19:24:04Z"
lastCommitAt: "2026-06-26T23:41:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 41
maintainers: ["darekf77"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc1cba873ca494475e14a93be751dbac29b967c4a6ddefb83de34197e04826bb/darekf77/ng2-rest-swagger-generator"
---

## ng2-rest-swagger-generator ##

Generate services for Angular2+ from your swagger.json files. 

## Instalation 

    npm install ng2-rest-swagger-generator -g

## Usage

    ng2-rest-swagger-generateor \
      --json ~/api_swagger.json \           # local swagger json file  or 
      --json http://api.com/swagger.json \  # external link to swagger json
      --base my_api_from_swagger_json

It will generate **my_api_from_swagger_json** folder with angular2_ module. 

Your can alsow ommit **--base** param, default out folder is "**api**".

## Import

To import generated module in **app.module** of you angular app do this:
```ts
    import { Ng2RestGenModule } from './api';
    ...
    imports: [ Ng2RestGenModule ],
    ...
```
## Api url modyfication

It you wanna **change your base paths** just use property **enpointUrl** in Ng2RestGenModule module :

```ts
	if(enviroment.production) {
		Ng2RestGenModule.enpointUrls.myresource.myhost = 'https://myproductionhost.com'
	}
```

## Parameters description

| param | description |
| --- | --- |
| --json | online links or local paths for swagger.json files   |
| --base | output module folder  |
| -s | if https protocole enable (one for…
