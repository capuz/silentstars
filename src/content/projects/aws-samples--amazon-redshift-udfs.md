---
repo: "aws-samples/amazon-redshift-udfs"
name: "amazon-redshift-udfs"
description: "A collection of example UDFs for Amazon Redshift. "
readmeQualityOk: true
url: "https://github.com/aws-samples/amazon-redshift-udfs"
language: "PLpgSQL"
languages: ["PLpgSQL"]
languagePcts: [86]
stars: 243
forks: 72
openIssues: 13
closedIssues: 9
watchers: 25
contributors: 14
recentReleases: 0
createdAt: "2015-09-13T06:14:36Z"
lastCommitAt: "2026-10-27T09:16:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 36
maintainers: ["github-actions[bot]", "rjvgupta"]
openGraphImageUrl: "https://opengraph.githubassets.com/344f3c7612cb9a415e4879acef077f2dc51f9fc09bd47186cf954417f320cda1/aws-samples/amazon-redshift-udfs"
---

# Amazon Redshift UDFs
A collection of stored procedures and user-defined functions (UDFs) for Amazon Redshift. The intent of this collection is to provide examples for defining useful functions which extend Amazon Redshift capabilities and support migrations from legacy DB platforms.

## Stored Procedures
Each procedure is allocated a folder.  At minimal each procedure will have a <procedure_name>.sql file which you may use to deploy the procedure.  Optionally, it may contain a README.md file for instructions on how to use the procedure and additional files used to test the procedure.

## UDFs
Each function is allocated a folder.  At minimal each function will have the following files which will be used by the [deployFunction.sh](#deployFunctionsh) script and [testFunction.sh](#testFunctionsh) scripts:

- **function.sql** - the SQL script to be run in the Redshift DB which creates the UDF.  If a Lambda function, use the string `:RedshiftRole` for the IAM role to be passed in by the deployment script.
- **input.csv** - a list of sample input parameters to the function, delimited by comma (,) and where strings are denoted with single-quotes.  *Note: input.csv file MUST have a…
