import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test: Penjumlahan angka positif
test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(20, 7), 27, '20 + 7 seharusnya menghasilkan 27');
});

// Test: Salah satu parameter adalah angka negatif
test('Mengembalikan 0 jika salah satu parameter negatif', () => {
  assert.strictEqual(sum(-5, 10), 0, 'Seharusnya mengembalikan 0 jika ada parameter negatif');
  assert.strictEqual(sum(5, -10), 0, 'Seharusnya mengembalikan 0 jika ada parameter negatif');
  assert.strictEqual(sum(-5, -10), 0, 'Seharusnya mengembalikan 0 jika kedua parameter negatif');
});

// Test: Parameter bukan angka
test('Mengembalikan 0 jika parameter bukan angka', () => {
  assert.strictEqual(sum('5', 10), 0, 'Seharusnya mengembalikan 0 jika parameter bukan angka');
  assert.strictEqual(sum(5, '10'), 0, 'Seharusnya mengembalikan 0 jika parameter bukan angka');
  assert.strictEqual(sum('5', '10'), 0, 'Seharusnya mengembalikan 0 jika kedua parameter bukan angka');
  assert.strictEqual(sum('lima', 5), 0, 'Seharusnya mengembalikan 0 jika kedua parameter bukan angka');
  assert.strictEqual(sum(null, 10), 0, 'Seharusnya mengembalikan 0 jika parameter bukan angka');
  assert.strictEqual(sum(5, undefined), 0, 'Seharusnya mengembalikan 0 jika parameter bukan angka');
});

// Test: Kedua parameter adalah nol
test('Menjumlahkan dua nol', () => {
  assert.strictEqual(sum(0, 0), 0, '0 + 0 seharusnya menghasilkan 0');
});

// Test: Angka positif + nol
test('Menjumlahkan angka positif dan nol', () => {
  assert.strictEqual(sum(5, 0), 5, '5 + 0 seharusnya menghasilkan 5');
  assert.strictEqual(sum(0, 5), 5, '0 + 5 seharusnya menghasilkan 5');
});

// Test: Parameter besar
test('Menjumlahkan angka besar', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000, '1000000 + 2000000 seharusnya menghasilkan 3000000');
});
