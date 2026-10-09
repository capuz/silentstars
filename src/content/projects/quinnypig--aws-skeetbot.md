---
repo: "quinnypig/aws-skeetbot"
name: "aws-skeetbot"
description: "AWS doesn't care enough about BlueSky to post its releases there, but I do."
readmeQualityOk: true
url: "https://github.com/quinnypig/aws-skeetbot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-20T20:33:13Z"
lastCommitAt: "2026-10-09T18:55:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: ["quinnypig"]
openGraphImageUrl: "https://opengraph.githubassets.com/97e98b198d7820ada14ef663c3bbc249ed659a376dc11ac4a205b4c1bbad526d/quinnypig/aws-skeetbot"
---

# aws-skeetbot

A serverless bot that automatically posts AWS service updates from the "What's New" RSS feed to BlueSky social network.

## Features

- 🤖 Automatic monitoring of AWS What's New RSS feed
- 🚀 Real-time posting to BlueSky
- 🧠 Optional AI-powered post summarization using Anthropic
- ⚡ Serverless architecture using AWS Lambda
- 🔄 Scheduled execution via EventBridge

## Architecture

The solution uses several AWS services:
- AWS Lambda for serverless execution
- EventBridge for scheduled triggers
- Systems Manager Parameter Store for secure configuration
- CloudWatch for logging and monitoring

## Prerequisites

- AWS Account with administrative access
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) installed
- BlueSky account and credentials
- (Optional) Anthropic API key for AI summarization

## Configuration

### Required Parameters

Set up the following parameters in AWS Systems Manager Parameter Store:

```sh
/aws-skeetbot/bluesky-identifier # Your BlueSky account identifier 
/aws-skeetbot/bluesky-password # Your BlueSky password/app password
(Optional) /aws-skeetbot/ANTHROPIC_API_KEY #…
