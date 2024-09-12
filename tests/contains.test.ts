import { describe, it, expect } from 'vitest';
import { contains } from '../src/contains';

describe('contains', () => {
    it("returns true if the string contains an empty space", () => {
      expect(contains('I am', ' ')).toBe(true);
    });

    it("returns false if the string does not contain an empty space", () => {
      expect(contains('Iam', ' ')).toBe(false);
    });

    it('returns true if the string contains the character "a"', () => {
        expect(contains('I am', 'a')).toBe(true);
    });
    
    it('returns false if the string does not contain the character "b"', () => {
        expect(contains('I am', 'b')).toBe(false);
    });

    it('returns true if the string contains the character "a"', () => {
      expect(contains("I am", (character) => character === "a")).toBe(true);
    });

    it('returns false if the string does not contain the character "b"', () => {
      expect(contains("I am", (character) => character === "b")).toBe(false);
    });

    it('returns true if the string contains an empty space when only one argument is provided', () => {
      expect(contains('I am')).toBe(true);
    });

    it('returns false if the string contains an empty space when only one argument is provided', () => {
      expect(contains('Iam')).toBe(false);
    });
});