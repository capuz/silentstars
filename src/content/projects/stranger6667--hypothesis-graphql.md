---
repo: "Stranger6667/hypothesis-graphql"
name: "hypothesis-graphql"
description: "Generate arbitrary queries matching your GraphQL schema, and use them to verify your backend implementation."
readmeQualityOk: true
url: "https://github.com/Stranger6667/hypothesis-graphql"
homepage: "https://pypi.org/project/hypothesis-graphql/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["graphql", "hypothesis", "testing", "data-generation", "python"]
stars: 48
forks: 5
openIssues: 0
closedIssues: 35
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-04-07T16:54:50Z"
lastCommitAt: "2026-11-10T14:49:05Z"
lastReleaseAt: "2021-08-05T09:15:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 52
maintainers: ["Stranger6667", "dependabot[bot]", "JingHao-Leon"]
openGraphImageUrl: "https://opengraph.githubassets.com/80b04ac9db8086493858f02683c6dad9c51d4e8baa118d7c92581fea4d8fb341/Stranger6667/hypothesis-graphql"
fundingLinks: ["GITHUB:https://github.com/Stranger6667"]
---

# hypothesis-graphql

Generate GraphQL queries from your schema and test your server with them

`hypothesis-graphql` gives you [Hypothesis](https://github.com/HypothesisWorks/hypothesis/tree/master/hypothesis-python) strategies that build queries and mutations from a GraphQL schema.
Each generated operation selects a random subset of fields at random depth and fills arguments with random values.

For a ready-made tool, try [Schemathesis](https://github.com/schemathesis/schemathesis): it runs on top of this library and reports server crashes without any test code.

## Usage

`from_schema` takes a schema and returns a strategy that yields queries and mutations as strings:

```python
from hypothesis import given
from hypothesis_graphql import from_schema
import requests

# A schema string or a `graphql.GraphQLSchema` instance
SCHEMA = """
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

type Query {
  getBooks: [Book]
  getAuthors: [Author]
}

type Mutation {
  addBook(title: String!, author: String!): Book!
  addAuthor(name: String!): Author!
}
"""

@given(from_schema(SCHEMA))
def test_graphql(query):
    # Generates operations like:…
