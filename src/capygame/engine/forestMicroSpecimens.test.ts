import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FOREST_MICRO_SPECIMEN_IDS,
  FOREST_MICRO_SPECIMENS,
  getForestSpecimenSpec,
  pickRandomForestSpecimen,
} from './forestMicroSpecimens';

test('defines all 11 requested forest micro specimens', () => {
  const expected = [
    'fur',
    'butterfly',
    'flower',
    'leaf',
    'wood',
    'mushroom',
    'amoeba',
    'bacterial',
    'virus',
    'clay',
    'rock',
  ];
  assert.deepEqual([...FOREST_MICRO_SPECIMEN_IDS], expected);
  assert.equal(FOREST_MICRO_SPECIMENS.length, 11);
});

test('pickRandomForestSpecimen selects deterministically across full range', () => {
  assert.equal(pickRandomForestSpecimen(() => 0), 'fur');
  assert.equal(pickRandomForestSpecimen(() => 0.999), 'rock');
  assert.equal(pickRandomForestSpecimen(() => NaN), 'fur');
});

test('pickRandomForestSpecimen avoids repeating excluded specimen when rerolling', () => {
  for (const current of FOREST_MICRO_SPECIMEN_IDS) {
    for (let step = 0; step < 10; step++) {
      const picked = pickRandomForestSpecimen(() => step / 10, current);
      assert.notEqual(picked, current);
      assert.ok(FOREST_MICRO_SPECIMEN_IDS.includes(picked));
    }
  }
});

test('getForestSpecimenSpec resolves valid specs and falls back safely', () => {
  const butterfly = getForestSpecimenSpec('butterfly');
  assert.equal(butterfly.label, 'Butterfly');
  assert.equal(getForestSpecimenSpec('unknown_id').id, 'fur');
});
