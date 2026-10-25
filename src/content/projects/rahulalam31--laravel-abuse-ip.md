---
repo: "rahulalam31/Laravel-Abuse-IP"
name: "Laravel-Abuse-IP"
description: "Restrict all Spam request to your laravel app on a click..."
readmeQualityOk: true
url: "https://github.com/rahulalam31/Laravel-Abuse-IP"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 273
forks: 30
openIssues: 4
closedIssues: 5
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2024-07-19T08:48:47Z"
lastCommitAt: "2026-10-25T02:47:22Z"
lastReleaseAt: "2024-08-21T07:18:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 35
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e033a23b90bea79ac70df66d95a657042a7632b16c6314a33e1403d460d6b001/rahulalam31/Laravel-Abuse-IP"
---

# Laravel Abuse-IP

## Keep you webiste safe from spammer.

  [](https://opensource.org/license/mit) [](https://github.com/rahulalam31/Laravel-Abuse-IP/actions/workflows/update_spamiplist.yml)

Adds a Security to Laravel for checking whether the IP address is safe or marked as spam to keep you out of worry from spammers and fake data to your website.
Uses the AbuseIPDB blocklist from [borestad/blocklist-abuseipdb](https://github.com/borestad/blocklist-abuseipdb) by default.

### Installation

1. Run the Composer require command to install the package. The service provider is discovered automatically.

    ```bash
    composer require rahulalam31/laravel-abuse-ip
    ```

2. Publish the configuration file and adapt the configuration as desired:

    ```bash
    php artisan vendor:publish --tag=laravel-abuse-ip
    ```

3. Run the following artisan command to fetch an up-to-date list of disposable domains:

    ```bash
    php artisan abuseip:update
    ```

3.1. Add the following to you `.env` file.
Add `ABUSEIP_STORAGE_PATH` to change your storage location,
Add `ABUSEIP_STORAGE_COMPRESS` `true/false` to enable or disable `ip2long()`

4. (optional) It's highly advised to update the…
