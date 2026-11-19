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

test('looksLikeOffFormSubmission flags a hand-written submission with a repo link', () => {
  assert.equal(looksLikeOffFormSubmission(ISSUE_36), true);
  assert.equal(looksLikeOffFormSubmission('Please add github.com/a/proj, it is great'), true);
});

test('looksLikeOffFormSubmission leaves the form, other templates and plain messages alone', () => {
  assert.equal(looksLikeOffFormSubmission(FORM), false);
  assert.equal(looksLikeOffFormSubmission(REMOVAL), false);
  assert.equal(looksLikeOffFormSubmission(ISSUE_79), false);
  assert.equal(looksLikeOffFormSubmission('### What do you need?\n\nhttps://github.com/a/proj was renamed'), false);
  assert.equal(looksLikeOffFormSubmission(''), false);
});

test('looksLikeOffFormSubmission ignores links to SilentStars itself and to non-repo pages', () => {
  assert.equal(looksLikeOffFormSubmission('See https://github.com/capuz/silentstars/issues/12'), false);
  assert.equal(looksLikeOffFormSubmission('My profile: https://github.com/someone'), false);
  assert.equal(looksLikeOffFormSubmission('Site: https://someone.github.io/proj/'), false);
});
