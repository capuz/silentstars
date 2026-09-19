/**
 * claude-cli.ts — text-only calls to Claude Code (`claude -p`) on the maintainer's
 * subscription, shared by the post pitch, the nightly translation and the submission
 * AI opinion.
 *
 * GitHub Models, which these scripts used before, is being retired. The subscription
 * is reached with CLAUDE_CODE_OAUTH_TOKEN (from `claude setup-token`); callers treat
 * every failure as "no answer" and fall back, so nothing depends on it being up.
 */

import { execFile } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export type Env = Record<string, string | undefined>;

const DEFAULT_TIMEOUT_MS = 90_000;

// On in CI once the subscription secret exists; USE_CLAUDE_CLI=1 opts a local run in
// (it then uses the local `claude` login instead of the token).
export function claudeEnabled(env: Env = process.env): boolean {
  return Boolean(env.CLAUDE_CODE_OAUTH_TOKEN) || env.USE_CLAUDE_CLI === '1';
}

// Text-only call. The prompts embed third-party content (READMEs) and the output is
// published, while the calling steps hold Bluesky/GitHub secrets, so the model gets
// no tools and the child process only sees what the CLI needs: those secrets never
// reach it, and ANTHROPIC_API_KEY is dropped so the call bills the subscription, not
// an API account.
export function claudeInvocation(prompt: string, source: Env): { args: string[]; env: Record<string, string> } {
  const env: Record<string, string> = {};
  for (const key of ['PATH', 'HOME', 'CLAUDE_CODE_OAUTH_TOKEN']) {
    if (source[key]) env[key] = source[key]!;
  }
  return {
    args: [
      '-p', prompt,
      '--tools', '',
      '--output-format', 'text',
      '--model', 'haiku',
      '--max-turns', '1',
      '--no-session-persistence',
      '--disable-slash-commands',
      // No settings sources: a local run would otherwise load the user's hooks, language
      // and CLAUDE.md, which eat the single turn or change the output language.
      '--setting-sources', '',
    ],
    env,
  };
}

export function runClaude(prompt: string, timeoutMs = DEFAULT_TIMEOUT_MS, source: Env = process.env): Promise<string> {
  const { args, env } = claudeInvocation(prompt, source);
  // Scratch cwd: keeps the repo's CLAUDE.md, hooks and MCP config out of the call.
  const cwd = mkdtempSync(join(tmpdir(), 'claude-cli-'));
  return new Promise((resolve, reject) => {
    execFile('claude', args, { env, cwd, timeout: timeoutMs, maxBuffer: 1024 * 1024 }, (err, stdout) => {
      rmSync(cwd, { recursive: true, force: true });
      if (err) reject(err); else resolve(stdout);
    });
  });
}
