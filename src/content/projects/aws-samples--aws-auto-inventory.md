---
repo: "aws-samples/aws-auto-inventory"
name: "aws-auto-inventory"
description: "AWS Auto Inventory allows you to quickly and easily generate inventory reports of your AWS resources."
url: "https://github.com/aws-samples/aws-auto-inventory"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["aws", "cloud", "inventory", "reporting"]
stars: 254
forks: 40
openIssues: 2
closedIssues: 13
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2021-04-12T02:10:27Z"
lastCommitAt: "2026-06-25T01:32:31Z"
lastReleaseAt: "2023-02-09T07:47:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 72
undervaluedScore: 29
maintainers: ["dependabot[bot]", "valter-silva-au", "AdnaneKhan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/357029766/47a438d8-a928-4aab-97f1-4fae5b8f58b0"
---

# AWS Auto Inventory

A command-line tool that scans AWS services across regions and accounts and writes the results to JSON files.

## Overview

AWS Auto Inventory builds a resource inventory by calling AWS API operations that you define in a scan file, then saving each response as JSON. You control which services, API functions, parameters, and regions are scanned. The tool runs regions and services concurrently and retries throttled or transient API calls with exponential backoff.

You use AWS Auto Inventory to collect a point-in-time snapshot of resources for auditing, reporting, or migration planning. It reads your AWS credentials through the standard boto3 credential chain, so it works the same way the AWS Command Line Interface (AWS CLI) does.

The repository contains two entry points:

- **`scan.py`** — the supported command-line scanner. It reads a JSON scan file (a list of API calls), writes JSON output, and can scan every account in an AWS Organization. This is the tool described in this README.
- **`aws_auto_inventory` package** (the `aws-auto-inventory` console script) — an in-progress rewrite that adds YAML configuration, a Pydantic-validated `inventories`/`sheets`…
