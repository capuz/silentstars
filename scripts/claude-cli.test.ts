import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chmodSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { claudeEnabled, claudeInvocation, runClaude } from './claude-cli.ts';

test('claudeEnabled is on with a subscription token or an explicit local opt-in, off otherwise', () => {
  assert.equal(claudeEnabled({ CLAUDE_CODE_OAUTH_TOKEN: 'tok' }), true);
  assert.equal(claudeEnabled({ USE_CLAUDE_CLI: '1' }), true);
  assert.equal(claudeEnabled({}), false);
  assert.equal(claudeEnabled({ CLAUDE_CODE_OAUTH_TOKEN: '', USE_CLAUDE_CLI: '0' }), false);
});

test('claudeInvocation runs text-only: every tool disabled, no session kept, no slash commands', () => {
  const { args } = claudeInvocation('the prompt', {});
  assert.deepEqual(args.slice(0, 2), ['-p', 'the prompt']);
  const tools = args.indexOf('--tools');
  assert.notEqual(tools, -1);
  assert.equal(args[tools + 1], '');
  assert.ok(args.includes('--no-session-persistence'));
  assert.ok(args.includes('--disable-slash-commands'));
  assert.equal(args[args.indexOf('--output-format') + 1], 'text');
});

test('claudeInvocation loads no settings sources, so user hooks/language/CLAUDE.md cannot leak into the call', () => {
  const { args } = claudeInvocation('the prompt', {});
  const i = args.indexOf('--setting-sources');
  assert.notEqual(i, -1);
  assert.equal(args[i + 1], '');
});

test('claudeInvocation env keeps only what the CLI needs and drops every other secret', () => {
  const { env } = claudeInvocation('p', {
    PATH: '/bin', HOME: '/home/x', CLAUDE_CODE_OAUTH_TOKEN: 'sub-token',
    BSKY_APP_PASSWORD: 'secret', BSKY_IDENTIFIER: 'me', GITHUB_TOKEN: 'ghs', ANTHROPIC_API_KEY: 'sk-ant',
  });
  assert.deepEqual(env, { PATH: '/bin', HOME: '/home/x', CLAUDE_CODE_OAUTH_TOKEN: 'sub-token' });
});

test('claudeInvocation omits the token from env when there is none (local subscription login)', () => {
  const { env } = claudeInvocation('p', { PATH: '/bin', HOME: '/home/x', ANTHROPIC_API_KEY: 'sk-ant' });
  assert.deepEqual(env, { PATH: '/bin', HOME: '/home/x' });
});

// A fake `claude` on PATH exercises the real spawn: no network, no subscription.
function fakeClaude(script: string): { PATH: string; HOME: string } {
  const dir = mkdtempSync(join(tmpdir(), 'fake-claude-'));
  const bin = join(dir, 'claude');
  writeFileSync(bin, `#!/bin/sh\n${script}\n`);
  chmodSync(bin, 0o755);
  return { PATH: `${dir}:/usr/bin:/bin`, HOME: dir };
}

test('runClaude returns stdout and hands the child only the reduced env', async () => {
  const base = fakeClaude('echo "args=$*"; env | grep -E "^(BSKY|GITHUB|ANTHROPIC)" || echo "no-secrets"');
  const out = await runClaude('hello world', 5_000, { ...base, BSKY_APP_PASSWORD: 'leak', GITHUB_TOKEN: 'ghs', ANTHROPIC_API_KEY: 'sk' });
  assert.match(out, /args=-p hello world --tools/);
  assert.match(out, /no-secrets/);
});

test('runClaude rejects when the CLI exits non-zero', async () => {
  const base = fakeClaude('echo boom >&2; exit 3');
  await assert.rejects(runClaude('p', 5_000, base), /boom|exit|code 3/i);
});

test('runClaude rejects when the CLI is not installed', async () => {
  await assert.rejects(runClaude('p', 5_000, { PATH: '/nonexistent', HOME: '/tmp' }), /ENOENT|not found/i);
});

test('runClaude gives up on a hung CLI at the timeout', async () => {
  const base = fakeClaude('exec sleep 10');
  const t0 = Date.now();
  await assert.rejects(runClaude('p', 300, base));
  assert.ok(Date.now() - t0 < 5_000, 'should have been killed near the 300ms timeout');
});

test('runClaude failure names the exit code and the CLI output, never the prompt', async () => {
  const base = fakeClaude('echo "auth failed: token expired" >&2; exit 3');
  await assert.rejects(runClaude('SECRET-README-TEXT', 5_000, base), (err: Error) => {
    assert.match(err.message, /code 3/);
    assert.match(err.message, /auth failed: token expired/);
    assert.doesNotMatch(err.message, /SECRET-README-TEXT/);
    return true;
  });
});

test('runClaude failure includes what the CLI printed on stdout (it reports run errors there)', async () => {
  const base = fakeClaude('echo "Error: Reached max turns (1)"; exit 1');
  await assert.rejects(runClaude('p', 5_000, base), /Reached max turns/);
});

test('runClaude timeout says it timed out and does not echo the prompt', async () => {
  const base = fakeClaude('exec sleep 10');
  await assert.rejects(runClaude('SECRET-README-TEXT', 300, base), (err: Error) => {
    assert.match(err.message, /timed out/i);
    assert.doesNotMatch(err.message, /SECRET-README-TEXT/);
    return true;
  });
});
