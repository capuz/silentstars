---
repo: "pulumi/pulumi-java"
name: "pulumi-java"
description: "Java support for Pulumi"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-java"
language: "Java"
languages: ["Java"]
languagePcts: [80]
stars: 84
forks: 26
openIssues: 165
closedIssues: 471
watchers: 20
contributors: 62
recentReleases: 0
createdAt: "2022-01-24T15:37:16Z"
lastCommitAt: "2026-09-28T10:05:50Z"
lastReleaseAt: "2022-08-11T21:32:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["pulumi-renovate[bot]", "pulumi-bot", "iwahbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b2c6bf05f79c457131f40882a07342d032dac23d490c512aea9dad1ade45413/pulumi/pulumi-java"
---

**Pulumi Java SDK** lets you leverage the full power of [Pulumi Infrastructure as Code Platform](https://pulumi.com) using the Java programming language.

Simply write Java code in your favorite editor and Pulumi
automatically provisions and manages your AWS, Azure, Google Cloud
Platform, and/or Kubernetes resources, using an infrastructure-as-code
approach. Use standard language features like loops, functions,
classes, and IDE features like refactorig and package management that
you already know and love.

For example, create three web servers:

```java
package myinfra;

import com.pulumi.Pulumi;
import com.pulumi.aws.ec2.Instance;
import com.pulumi.aws.ec2.InstanceArgs;
import com.pulumi.aws.ec2.SecurityGroup;
import com.pulumi.aws.ec2.SecurityGroupArgs;
import com.pulumi.aws.ec2.enums.InstanceType;
import com.pulumi.aws.ec2.inputs.SecurityGroupIngressArgs;

import java.util.List;

public final class Infra {
    public static void main(String[] args) {
        Pulumi.run(ctx -> {
            final var sg = new SecurityGroup("web-sg", SecurityGroupArgs.builder()
                    .ingress(SecurityGroupIngressArgs.builder()
                            .protocol("tcp")…
