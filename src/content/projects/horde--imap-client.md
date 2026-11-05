---
repo: "horde/Imap_Client"
name: "Imap_Client"
description: "Horde IMAP Client"
readmeQualityOk: true
url: "https://github.com/horde/Imap_Client"
homepage: "https://www.horde.org/libraries/Horde_Imap_Client"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 28
forks: 35
openIssues: 5
closedIssues: 6
watchers: 8
contributors: 33
recentReleases: 3
createdAt: "2017-10-03T14:50:44Z"
lastCommitAt: "2026-11-05T11:24:36Z"
lastReleaseAt: "2026-11-03T11:53:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 73
maintainers: ["ralflang", "neuhaus", "TDannhauer"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a875fcb545215c238043bf755f5be62c29b992c0be49d7e16347233d4b0ee2/horde/Imap_Client"
---

# Horde_Imap_Client

An IMAP4rev1 / IMAP4rev2 (RFC 3501 / RFC 9051) and POP3 (RFC 1939) client
library for PHP.

The package ships two codebases side by side:

- **`src/`** (namespace `Horde\Imap\Client`): the modern, PSR-4, PHP 8.2+
  rewrite. Small final classes and immutable value objects, built on
  `Horde\Socket\Client` and `Horde\Sasl`. This is the recommended API for
  new code.
- **`lib/`** (`Horde_Imap_Client_*`): the legacy PSR-0 engine, retained for
  backward compatibility. Functional but not actively developed.

## Modern usage

```php
use Horde\Imap\Client\ConnectionConfig;
use Horde\Imap\Client\ImapClient;
use Horde\Imap\Client\ImapFetchQuery;
use Horde\Imap\Client\OpenMode;
use Horde\Imap\Client\SecureMode;
use Horde\Sasl\Credentials\PasswordCredentials;
use Horde\Sasl\Credentials\PlainSecret;

$client = new ImapClient(
    new ConnectionConfig(hostspec: 'imap.example.com', port: 993, secure: SecureMode::Ssl),
    new PasswordCredentials('alice', new PlainSecret('secret')),
);

$client->login();
$client->openMailbox('INBOX', OpenMode::Readonly);

$query = (new ImapFetchQuery())->envelope()->flags();
foreach ($client->fetch('INBOX', $client->getIdsOb('1:*'), $query)…
