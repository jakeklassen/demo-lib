import { describe, expect, it } from 'vitest';
import { sum } from './math.js';

describe('Math', () => {
  describe('sum', () => {
    it('should add numbers', () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
});
