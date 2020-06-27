import {max} from '../';

const constraint = {
  value: 10
};

const defaultMessage = "Value is too large";

describe('max', () => {

  // TODO: Spy on isEmpty to ensure it is called
  // it('returns true for if isEmpty()', () => {
  //
  // });

  it('returns message when larger than max', () => {
    expect(max(11, constraint)).toBe(defaultMessage);
    expect(max("11", constraint)).toBe(defaultMessage);
  });

  it('returns custom message when larger than max', () => {
    const message = 'Wayyyy to big';
    expect(max(11, {...constraint, message})).toBe(message);
    expect(max("11", {...constraint, message})).toBe(message);
  });

  it('returns false when equal to max', () => {
    expect(max(10, constraint)).toBeFalsy();
    expect(max("10", constraint)).toBeFalsy();
  });

  it('returns false when less than max', () => {
    expect(max(9.9, constraint)).toBeFalsy();
    expect(max("9.9", constraint)).toBeFalsy();
  });

});
