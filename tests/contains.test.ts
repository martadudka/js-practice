import { describe, it, expect } from 'vitest';
import { contains } from '../src/contains';

describe('contains', () => {
    it('returns true if the string contains the character "a"', () => {
        expect(contains('I am', 'a')).toBe(true);
    });
    
    it('returns false if the string does not contain the character "b"', () => {
        expect(contains('I am', 'b')).toBe(false);
    });
});