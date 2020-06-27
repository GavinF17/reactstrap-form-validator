import {min} from '../';

const constraint = {
  value: 8.5
};

const defaultMessage = "Value is too small";

describe('min', () => {

  // TODO: Spy on isEmpty to ensure it is called
  // it('returns true for if isEmpty()', () => {
  //
  // });

  it('returns message when smaller than min', () => {
    expect(min(5, constraint)).toBe(defaultMessage);
    expect(min("5", constraint)).toBe(defaultMessage);
  });

  it('returns custom message when smaller than min', () => {
    const message = 'Wayyyy to small';
    expect(min(5, {...constraint, message})).toBe(message);
    expect(min("5", {...constraint, message})).toBe(message);
  });

  it('returns false when equal to min', () => {
    expect(min(8.5, constraint)).toBeFalsy();
    expect(min("8.5", constraint)).toBeFalsy();
  });

  it('returns false when larger than min', () => {
    expect(min(8.6, constraint)).toBeFalsy();
    expect(min("8.6", constraint)).toBeFalsy();
  });

});
