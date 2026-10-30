---
repo: "Colossus-Services/bones_api"
name: "bones_api"
description: "Simple and easy API framework, with routes and HTTP Server."
readmeQualityOk: true
url: "https://github.com/Colossus-Services/bones_api"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
stars: 20
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-07-20T04:25:49Z"
lastCommitAt: "2026-10-30T10:23:11Z"
lastReleaseAt: "2021-09-13T23:12:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 58
maintainers: ["gmpassos"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b163de655a7ba70bd71d7f640c0ac74d04d3629a6c3cbe7c46b13a28b5f5fd/Colossus-Services/bones_api"
fundingLinks: ["GITHUB:https://github.com/gmpassos"]
---

# Bones_API

Bones_API - A powerful API backend framework for Dart. It comes with a built-in HTTP Server,
route handler, entity handler, SQL translator, and DB adapters.

## Usage

A simple `BTC-USD` API example:

```dart
import 'package:bones_api/bones_api_server.dart';
import 'package:mercury_client/mercury_client.dart';

/// APIs are organized in modules:
class MyBTCModule extends APIModule {
  MyBTCModule(APIRoot apiRoot) : super(apiRoot, 'btc');

  /// The default route for not matching routes:
  @override
  String? get defaultRouteName => '404';

  /// A configuration property from `apiConfig`.
  String get notFoundMsg => apiConfig['not_found_msg'] ?? 'Unknown route!';

  @override
  void configure() {
    routes.get('usd', (request) => fetchBtcUsd());

    routes.any('time', (request) => APIResponse.ok(DateTime.now()));

    routes.any('404', notFound);
  }

  /// A HTTP client for `fetchBtcUsd`:
  static final coinDeskClient = HttpClient("https://api.coindesk.com/v1/bpi");

  /// Fetches the BTS-USD price.
  Future<APIResponse<num>> fetchBtcUsd() async {
    var response = await coinDeskClient.get('currentprice.json');
    if (response.isNotOK) {
      return…
