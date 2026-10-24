// Nightly: folds data/latest.json into data/history.json as this week's snapshot.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { upsertWeek, isoWeekKey } from './weekly.ts';
import type { History, LatestLike } from './weekly.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const latestPath = resolve(ROOT, 'data/latest.json');
const historyPath = resolve(ROOT, 'data/history.json');

const latest: LatestLike = JSON.parse(readFileSync(latestPath, 'utf8'));
const history: History = existsSync(historyPath) ? JSON.parse(readFileSync(historyPath, 'utf8')) : {};
const next = upsertWeek(history, latest);
writeFileSync(historyPath, JSON.stringify(next) + '\n');

console.log(`📈  history.json: ${isoWeekKey(new Date(latest.collectedAt))} updated (${Object.keys(next).length} weeks)`);
