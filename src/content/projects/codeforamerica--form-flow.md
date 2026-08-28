---
repo: "codeforamerica/form-flow"
name: "form-flow"
description: "A Java library placed in a Spring Boot app to generate form flows."
readmeQualityOk: true
url: "https://github.com/codeforamerica/form-flow"
homepage: "https://forms-starter.cfa-platforms.org/"
language: "Java"
languages: ["Java", "HTML"]
languagePcts: [60, 36]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 101
recentReleases: 0
createdAt: "2022-09-21T17:02:31Z"
lastCommitAt: "2026-08-28T15:35:33Z"
lastReleaseAt: "2023-08-22T17:30:54Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 68
maintainers: ["dependabot[bot]", "aikido-autofix[bot]", "cram-cfa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/539597229/267bc906-7aeb-4b0d-a377-15e57baf3b51"
---

# Form Flow Library  (FFB)

A Spring Boot based Java library that provides a framework for developing **form flow** based
applications. The intention is to speed up the creation of web applications that are a series of
forms that collect input from users.

The library includes tooling for:

- Conditional navigation between screens and conditional display of elements on a screen
- Manipulation of data before or after it is saved to the database
- Subflows
    - Repeating sections of screen(s) that build a collection of information (ex. ask for
      information about all members of a household) before returning to the main flow
- Input Validations
    - Using [JPA Validation](https://www.baeldung.com/spring-boot-bean-validation)
- Address Validation using [Smarty](https://smarty.com/)
- A set
  of [Thymeleaf fragments](https://github.com/codeforamerica/form-flow/tree/main/src/main/resources/templates/fragments)
  that create a library of reusable HTML components for Inputs, Screens, Forms, etc.
- Data Persistence using [Hibernate](https://hibernate.org/)
- File Uploads
- PDF Generation based on user input

An example project built with the use of this Form Flow library can be found…
