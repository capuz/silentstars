---
repo: "hereon-mb/elm-rdf"
name: "elm-rdf"
description: "Work with RDF data in Elm - development happens at https://codebase.helmholtz.cloud/hereon-mb/elm-rdf"
readmeQualityOk: true
url: "https://github.com/hereon-mb/elm-rdf"
homepage: "https://codebase.helmholtz.cloud/hereon-mb/elm-rdf"
language: "Elm"
languages: ["Elm"]
languagePcts: [99]
topics: ["elm", "rdf", "sparql"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-11T12:59:14Z"
lastCommitAt: "2026-09-08T07:51:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 45
maintainers: ["kirchner"]
openGraphImageUrl: "https://opengraph.githubassets.com/10f1f0cdaf5261b5f2ec6b6b31d3ed20c0c61bdf9b3838afae6a9ede3a6cd56a/hereon-mb/elm-rdf"
---

# RDF in Elm

Work with [Resource Description
Framework](https://www.w3.org/TR/rdf11-primer/) (RDF) data in Elm. Use
this package to convert Elm values into RDF graphs or vice versa, and
build [SPARQL](https://www.w3.org/TR/sparql11-query/) queries.

## Example

Say we have some data about [Alice, Bob and the Mona
Lisa](https://www.w3.org/TR/rdf11-primer/#section-data-model). With this
package we can parse its Turtle serialization and decode everything into
Elm values.

```elm
module Data exposing (persons)

import Rdf exposing (Iri)
import Rdf.Decode as Decode exposing (Decoder)
import Rdf.Graph as Graph
import Time

-- Start with the RDF graph in Turtle

data : String
data =
    """
    @base <http://example.org/> .
    @prefix dbpedia: <http://dbpedia.org/resource/> .
    @prefix foaf: <http://xmlns.com/foaf/0.1/> .
    @prefix schema: <http://schema.org/> .
    @prefix terms: <http://purl.org/dc/terms/> .
    @prefix wikidata: <http://www.wikidata.org/entity/> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

    <bob#me> a foaf:Person ;
      foaf:knows <alice#me> ;
      schema:birthDate "1990-07-04"^^xsd:date ;
      foaf:topic_interest wikidata:Q12418 .…
