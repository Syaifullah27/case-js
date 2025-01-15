import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Test case 1: Penjumlahan dua bilangan positif
test('Menambahkan dua bilangan positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5, 'Hasil harus 5');
});

// Test case 2: Penjumlahan dengan angka nol
test('Menambahkan angka dengan nol', () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5, 'Hasil harus 5');
});

// Test case 3: Penjumlahan dua bilangan negatif
test('Menambahkan dua bilangan negatif', () => {
  const result = sum(-4, -6);
  assert.strictEqual(result, -10, 'Hasil harus -10');
});

// Test case 4: Penjumlahan bilangan positif dan negatif
test('Menambahkan bilangan positif dan negatif', () => {
  const result = sum(7, -3);
  assert.strictEqual(result, 4, 'Hasil harus 4');
});

// Test case 5: Penjumlahan dengan bilangan desimal
test('Menambahkan bilangan desimal', () => {
  const result = sum(1.5, 2.3);
  assert.strictEqual(result, 3.8, 'Hasil harus 3.8');
});
