import assert from 'node:assert/strict';
import { test } from 'node:test';

import { dailySeed, generateRebus, isCorrectRebus } from './puzzle.ts';

test('seed deterministe', () => {
  assert.equal(dailySeed('2026-12-01'), dailySeed('2026-12-01'));
});

test("l'enigme du jour est deterministe", () => {
  const a = generateRebus('2026-12-01');
  const b = generateRebus('2026-12-01');
  assert.deepEqual(a.parts, b.parts);
  assert.deepEqual(a.choices, b.choices);
});

test('la bonne reponse est toujours dans les choix', () => {
  for (const day of ['2026-12-01', '2026-12-05', '2026-12-09', '2026-12-17']) {
    const puzzle = generateRebus(day);
    assert.equal(puzzle.choices.length, 4, day);
    assert.ok(puzzle.choices.includes(puzzle.answer), day);
    assert.ok(puzzle.parts.length >= 2, day);
  }
});

test('un mauvais choix est rejete', () => {
  const puzzle = generateRebus('2026-12-02');
  const wrong = puzzle.choices.find((c) => c !== puzzle.answer) ?? 'nope';
  assert.equal(isCorrectRebus(puzzle, wrong), false);
});
