---
repo: "eschizoid/telescope"
name: "telescope"
description: "Optics-based DSL for Java records and POJOs. One type for deep navigation, immutable update, bidirectional mapping, and effects across records + plain POJOs + Lombok. Optional compile-time codegen."
readmeQualityOk: true
url: "https://github.com/eschizoid/telescope"
homepage: "https://central.sonatype.com/artifact/io.github.eschizoid/telescope-core"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["annotation-processor", "codegen", "deep-copy", "dsl", "functional-programming", "immutable", "java", "lens", "lombok", "optics"]
stars: 20
forks: 2
openIssues: 9
closedIssues: 206
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-25T16:30:16Z"
lastCommitAt: "2026-11-13T18:32:46Z"
lastReleaseAt: "2026-06-15T06:31:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["eschizoid", "dependabot[bot]", "xchopin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff4c0ac2b64228281cd781484029d9b05b778ef79f465e9899b386676e152cd/eschizoid/telescope"
discussionCount: 1
---

# telescope

Telescope is the mapping layer between the REST, service and entity layers of a JVM service.

A service usually holds the same data three times: as the wire DTO a REST endpoint reads and writes, as the domain type
the service works with, and as the entity it persists. Telescope gives each hop between two of those layers one typed
mapper. You write the mapper as an ordinary Java expression with method references instead of strings, the compiler
checks every field it names, and an annotation processor turns it into plain Java. That generated code runs in about
MapStruct's time on the benchmarks below.

```java
public record Invoice(String id, Customer customer, long totalCents, String internalNote) {
  @Bridge
  static final ForwardMapper<Invoice, InvoiceDto> DTO = mapperForward(
    Invoice.class,
    InvoiceDto.class,
    // a renamed field
    to(Invoice::id, InvoiceDto::number),
    // a field read through a nested object
    to(path(Invoice::customer, Customer::email), InvoiceDto::billTo),
    // a field built from the whole invoice
    compute(InvoiceDto::total, Money::format),
    // a field left out on purpose
    drop(Invoice::internalNote)
  );

  public…
