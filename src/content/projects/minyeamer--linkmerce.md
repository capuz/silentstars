---
repo: "minyeamer/linkmerce"
name: "linkmerce"
description: "E-commerce API integration management"
originalDescription: "E-commerce API integration management"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/minyeamer/linkmerce"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["api", "ecommerce", "duckdb", "uv", "airflow", "playwright", "streamlit", "dbt", "fastapi"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-22T14:28:54Z"
lastCommitAt: "2026-11-24T01:56:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 72
maintainers: ["minyeamer"]
openGraphImageUrl: "https://opengraph.githubassets.com/d898d930fcfd4f07ff518efbcf37308861820ac0016904213e66981b03ea57e5/minyeamer/linkmerce"
---

# LinkMerce

**E-commerce data collection, transformation, and loading integration framework**

> This guide introduces a project for managing workflows that collect responses from various e-commerce APIs and web documents, transform them through DuckDB-based processing, and load the data into external systems such as BigQuery, PostgreSQL, and Google Sheets.

## Table of Contents

- [Project Overview](#프로젝트-개요)
- [Core Architecture](#핵심-아키텍처)
- [Standard ETL Module Structure](#표준-etl-모듈-구조)
- [Airflow Service Structure](#airflow-서비스-구조)
- [Airflow Job Scheduling](#airflow-작업-스케줄링)
- [PostgreSQL Loading Environment](#postgresql-적재-환경)
- [Airflow Trigger UI](#airflow-trigger-ui)
- [Quick Start](#빠른-시작)
- [Example Code](#예시-코드)

## Project Overview

The LinkMerce project aims to collect data from e-commerce platforms that is needed to run an online shop.

The PyPI package that implements the Python scraping logic is the core of the project,
and it makes active use of Apache Airflow to handle job scheduling.

The current version of the `linkmerce` package is `1.1.0`.

The project has five parts worth noting:
