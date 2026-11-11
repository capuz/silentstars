import { readFileSync } from 'fs';
import { join } from 'path';
import {
  type Project, type LatestData,
  loadPosted, savePosted, recordPost, selectTop20,
  seededIndex, slugify,
} from './post-shared.ts';
import { publishProject } from './post-publish.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';

async function main(): Promise<void> {
  const data: LatestData = JSON.parse(
    readFileSync(join(process.cwd(), 'data', 'latest.json'), 'utf8'),
  );

  const posted = loadPosted();
  const active = selectTop20(data.projects, posted, 'bsky');

  if (active.length === 0) throw new Error('No active projects available to post to Bluesky — all candidates already posted');

  const projectArg = process.argv.find((_, i, a) => a[i - 1] === '--project')
                  ?? process.env.PROJECT_SLUG
                  ?? null;

  let project: Project;
  if (projectArg) {
    const needle = projectArg.toLowerCase();
    const found = data.projects.find(p =>
      p.repo.toLowerCase() === needle ||
      slugify(p.repo) === needle,
    );
    if (!found) throw new Error(`Project not found: "${projectArg}"`);
    project = found;
  } else {
    const today = new Date().toISOString().slice(0, 10);
    project = active[seededIndex(today, active.length)];
  }

  const submitterLogin = process.env.SUBMITTER_LOGIN?.trim() || '';
  const bskyUrl = await publishProject(project, {
    baseUrl: (process.env.BASE_URL ?? 'https://silentstars.dev').replace(/\/$/, ''),
    dryRun: DRY_RUN,
    submitterLogin,
    githubToken: process.env.GITHUB_TOKEN || undefined,
  });
  if (!bskyUrl) return;

  savePosted(recordPost(project.repo, 'bsky', bskyUrl, posted, { communityPick: Boolean(submitterLogin) }));

  // Emitted so the GitHub Actions workflow can capture this value
  console.log(`BSKY_POST_URL=${bskyUrl}`);
}

main().catch(err => { console.error(err); process.exit(1); });
