import {isEmpty} from '../helper';

describe('helper', () => {

  describe('isEmpty', () => {

    it('returns false for non-empty string', () => {
      expect(isEmpty('this isnt empty')).toBe(false);
    });

    it('returns false for whitespace', () => {
      expect(isEmpty(' ')).toBe(false);
    });

    it('returns false for number', () => {
      expect(isEmpty(40)).toBe(false);
    });

    it('shoulds return false for boolean', () => {
      expect(isEmpty(false)).toBe(false);
    });

    it('returns true for undefined', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    it('returns true for no value', () => {
      expect(isEmpty()).toBe(true);
    });

    it('returns true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });

    it('returns true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

  })

});
