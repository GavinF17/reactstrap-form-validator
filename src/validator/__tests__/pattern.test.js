import {pattern as validator} from '../';
import {isEmpty} from "../helper";

let mockIsEmptyResult;
jest.mock('../helper', () => ({
  isEmpty: jest.fn(() => mockIsEmptyResult)
}));

const constraint = {
  value: '^[a-z]+$'
};

const defaultMessage = "Value formatted incorrectly";

describe('pattern', () => {

  beforeEach(() => {
    mockIsEmptyResult = false;
  });

  it('returns true for if isEmpty()', () => {
    mockIsEmptyResult = true;
    expect(validator(null, constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns message when pattern doesn\'t match', () => {
    expect(validator(12345678901, constraint)).toBe(defaultMessage);
    expect(validator("123abc", constraint)).toBe(defaultMessage);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns custom message when pattern doesn\'t match', () => {
    const message = 'Doesnt look right...';
    expect(validator(12345678901, {...constraint, message})).toBe(message);
    expect(validator("123abc", {...constraint, message})).toBe(message);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when pattern matches', () => {
    expect(validator("valid", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(1);
  });

});
