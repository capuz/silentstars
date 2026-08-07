---
repo: "piomin/sample-message-driven-microservices"
name: "sample-message-driven-microservices"
description: "Sample spring cloud application that integrates with rabbitmq through spring cloud stream framework as shows how to setup message-driven microservices basing on publish-subscribe model, consumer groups"
readmeQualityOk: true
url: "https://github.com/piomin/sample-message-driven-microservices"
homepage: "https://piotrminkowski.com"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["spring-boot", "microservices", "spring-cloud", "spring-cloud-stream", "spring-cloud-sleuth", "rabbitmq", "kafka", "message-driven", "testing"]
stars: 42
forks: 35
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2018-06-13T10:18:13Z"
lastCommitAt: "2026-08-07T05:15:45Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 67
undervaluedScore: 39
maintainers: ["renovate[bot]", "piomin"]
openGraphImageUrl: "https://opengraph.githubassets.com/536f73ca4d551c3f38411e3444c02c5bd99a39c7706cd6e98aacd264991a8e6e/piomin/sample-message-driven-microservices"
---

## Building and testing message-driven microservices using Spring Cloud Stream [](https://twitter.com/piotr_minkowski)

Detailed description can be found here: [Building and testing message-driven microservices using Spring Cloud Stream](https://piotrminkowski.com/2018/06/15/building-and-testing-message-driven-microservices-using-spring-cloud-stream/) 

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Services Description](#services-description)
- [Message Flow](#message-flow)
- [Prerequisites](#prerequisites)
- [Running the Applications](#running-the-applications)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Configuration](#configuration)
- [Monitoring and Management](#monitoring-and-management)

## Architecture Overview

This project demonstrates a message-driven microservices architecture using Spring Cloud Stream with RabbitMQ as the message broker. The system consists of three core business services that communicate asynchronously through message queues.

```mermaid
graph TB
  subgraph "Client Layer"
    C["Client/API Consumer"]
  end
  subgraph "Microservices"
    OS["Order Service<br/>:8090"]…
