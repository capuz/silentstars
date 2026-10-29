---
repo: "ansible-lockdown/github_linux_IaC"
name: "github_linux_IaC"
description: ":computer: Workflow Data For Github Actions & Linux Server Testing of Lockdown Enterprise Content :computer:"
readmeQualityOk: true
url: "https://github.com/ansible-lockdown/github_linux_IaC"
homepage: "https://www.lockdownenterprise.com"
language: "HCL"
languages: ["HCL"]
languagePcts: [100]
topics: ["approval-workflows", "automation", "business-processes", "collaboration-tools", "process-optimization", "project-management", "task-management", "time-management", "workflow-automation", "workflow-design"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-07-25T13:54:21Z"
lastCommitAt: "2026-10-29T12:25:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 77
maintainers: ["actions-user", "frederickw082922"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b33eb8216da6d586077023f208ed3ba99d87a7b9da71893f89ee9ff741fd792/ansible-lockdown/github_linux_IaC"
---

# GitHub Linux IaC

Infrastructure as Code (IaC) modules and automation for use with the Lockdown Enterprise (LE) Linux-based pipelines.
This central repository supports Linux benchmarking, deployment automation, and security hardening for CI workflows using Terraform (OpenTofu) and Ansible.

---

## 📚 Table of Contents

1. [📦 Features](#1-📦-features)
2. [🔐 Required Secrets](#2-️required-secrets)
3. [📘 Repository Variables (Required)](#3-️repository-variables-required)
4. [🏗️ IaC Modules](#4-️iac-modules)
5. [🧪 Pipeline Validation](#5-️pipeline-validation)
6. [🧪 Pipeline Validation Workflows](#6-️pipeline-validation-workflows)
   - [6.1 🧼 Standard Benchmark Validation](#61-️standard-benchmark-validation)
     - [6.1.1 Trigger Files](#611-trigger-files)
   - [6.2 📈 Workflow Matrix](#63-️workflow-matrix)
     - [6.2.1 🧪 Example Workflow Usage](#631-️example-workflow-usage)
       - [6.2.1.1 🔧 main_pipeline_validation.yml](#6311--main_pipeline_validationyml)
       - [6.2.1.2 🧪 devel_pipeline_validation.yml](#6313--devel_pipeline_validationyml)
7. [🖥️ Run Locally (Test Terraform + Ansible)](#7-️run-locally-test-terraform--ansible)
8. [🔁 Reusable GitHub Actions…
