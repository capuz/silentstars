---
repo: "JasmineCMS/jasmine"
name: "jasmine"
description: "A Laravel based CMS inspired by voyager"
readmeQualityOk: true
url: "https://github.com/JasmineCMS/jasmine"
language: "PHP"
languages: ["PHP", "Vue"]
languagePcts: [55, 31]
topics: ["laravel", "cms", "php", "jasminecms"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-04-30T13:45:42Z"
lastCommitAt: "2026-11-02T11:36:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 66
maintainers: ["MordiSacks"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e54fc88f7ee16a07fa8c6fe6fcfd4c3d515e5bd767eda8ab6a67443d874fff/JasmineCMS/jasmine"
discussionCount: 0
---

# Jasmine CMS

A Laravel based CMS inspired by [Voyager](https://voyager.devdojo.com/).

## Screenshots

Login

Bread index

Bread Edit

## Requirements

- PHP >= 8.4
- Laravel >= 13

#### Note

Jasmine uses [alexusmai/laravel-file-manager](https://github.com/alexusmai/laravel-file-manager)  
If you are using it already or planning to,  
you might need to tweak some configurations to prevent conflicts.

## Installation

Require JasmineCMS in your new or existing laravel app  
`composer require jasminecms/jasmine`

Publish the config file (optional, to customize routes and other options)  
`php artisan vendor:publish --tag=jasmine-config`

Link jasmine public assets to your public folder  
`php artisan jasmine:link-public-assets`

Migrate the database (be sure to make any changes to the default laravel migration prior)  
`php artisan migrate`

Create a user (1st user is super admin)  
`php artisan jasmine:create-user`

You can now log in to Jasmine,  
Navigate to `/jasmine`  
And login

### Routes

Unlike previous versions, Jasmine now registers its web and api routes automatically.  
No need to add anything to your route files.

You can control registration, prefixes and…
