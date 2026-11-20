import { test } from 'node:test';
import assert from 'node:assert/strict';
import { looksLikeOffFormSubmission } from './issue-body.ts';

// Issue #36: written by hand, never picked up by process-submission.yml.
const ISSUE_36 = `### GitHub repository
https://github.com/hamidnikkhah660-arch/ai-native-l1

### Why does it deserve to be tracked?
QRun Blockchain is an actively maintained, Apache-2.0 open-source Rust Layer-1 research project.

### Contact email
someone@example.com`;

// Issue #79: a rename notice opened as a blank issue, no link.
const ISSUE_79 = "Hi! I've renamed tracked repo from **artabramov/hidden** to **artabramov/hidden-s3**. Could you please fix it in silent stars? Thanks in advance!";

// Issue #119: the Submit project form, handled by the normal flow.
const FORM = `### GitHub repo (owner/repo)

https://github.com/soobujmiah/ternux

### What does it do?

Ternux transforms Android devices into Linux workstations.`;

const REMOVAL = `### Repo to remove (owner/repo)

https://github.com/a/proj

### Anything we should know? (optional)

_No response_`;

const T36 = 'Submit project: QRun Blockchain (QZXB)';

test('looksLikeOffFormSubmission flags a hand-written submission with a repo link', () => {
  assert.equal(looksLikeOffFormSubmission(T36, ISSUE_36), true);
  // Submission wording in the body alone is enough.
  assert.equal(looksLikeOffFormSubmission('Cool tool', 'Please add my project https://github.com/a/proj'), true);
});

test('looksLikeOffFormSubmission leaves bug reports and corrections alone, even with repo links', () => {
  assert.equal(looksLikeOffFormSubmission('Wrong star count', 'The card for https://github.com/a/proj shows 10 stars, it has 40.'), false);
  assert.equal(looksLikeOffFormSubmission('Renamed repo', 'Moved github.com/a/old to github.com/a/new, please fix the card.'), false);
  assert.equal(looksLikeOffFormSubmission('Broken link', 'The README link to https://github.com/a/proj/blob/main/x.md 404s'), false);
  assert.equal(looksLikeOffFormSubmission('Renamed repo', ISSUE_79), false);
});

test('looksLikeOffFormSubmission leaves the forms alone', () => {
  assert.equal(looksLikeOffFormSubmission('Ternux', FORM), false);
  assert.equal(looksLikeOffFormSubmission('Submit removal', REMOVAL), false);
  assert.equal(looksLikeOffFormSubmission('', ''), false);
});

test('looksLikeOffFormSubmission needs a link to a repo other than SilentStars', () => {
  assert.equal(looksLikeOffFormSubmission('Submit project: X', 'no link here'), false);
  assert.equal(looksLikeOffFormSubmission('Submit project', 'See https://github.com/capuz/silentstars/issues/12'), false);
  assert.equal(looksLikeOffFormSubmission('Submit project', 'My profile: https://github.com/someone'), false);
  assert.equal(looksLikeOffFormSubmission('Submit project', 'Site: https://someone.github.io/proj/'), false);
});
