---
repo: "bigbridge-nl/product-import"
name: "product-import"
description: "Fast product import library for Magento 2"
readmeQualityOk: true
url: "https://github.com/bigbridge-nl/product-import"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["import", "magento2", "products"]
stars: 127
forks: 35
openIssues: 4
closedIssues: 36
watchers: 22
contributors: 16
recentReleases: 0
createdAt: "2018-09-10T12:47:38Z"
lastCommitAt: "2026-11-23T13:28:56Z"
lastReleaseAt: "2018-11-21T20:01:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 72
undervaluedScore: 25
maintainers: ["pingiun", "hostep"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd3baaef418366a26ea374e88610872222db077df41cbf8377d2184087ed70b3/bigbridge-nl/product-import"
discussionCount: 3
---

# BigBridge Product Import

This library imports product data into Magento 2 via direct database queries. It has these main features

* A programming library to import products
* An CLI command for product import via XML file
* A web API service for product import via Post Request with XML
* A tool to update url_rewrites

## Note

The aim of this library is speed. If you find that Magento 2's product importer is too slow, consider using this library.

Experiment with the library in a safe webshop. Make sure to create a database backup before you start.

## Sample code

Let me show you a piece of code to give you an impression what it is like to use this library:

        $importer = $factory->createImporter($config);

        foreach ($lines as $i => $line) {

            $product = new SimpleProduct($line[1]);

            // global eav attributes
            $global = $product->global();
            $global->setName($line[0]);
            $global->setPrice($line[2]);

            // German eav attributes
            $german = $product->storeView('de_store');
            $german->setName($line[3]);
            $german->setPrice($line[4]);
