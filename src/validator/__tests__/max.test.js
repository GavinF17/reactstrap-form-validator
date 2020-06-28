import {max as validator} from '../';
import {isEmpty} from "../helper";

let mockIsEmptyResult;
jest.mock('../helper', () => ({
  isEmpty: jest.fn(() => mockIsEmptyResult)
}));

const constraint = {
  value: 10
};

const defaultMessage = "Value is too large";

describe('max', () => {

  beforeEach(() => {
    mockIsEmptyResult = false;
  });

  it('returns true for if isEmpty()', () => {
    mockIsEmptyResult = true;
    expect(validator(null, constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns message when larger than max', () => {
    expect(validator(11, constraint)).toBe(defaultMessage);
    expect(validator("11", constraint)).toBe(defaultMessage);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns custom message when larger than max', () => {
    const message = 'Wayyyy to big';
    expect(validator(11, {...constraint, message})).toBe(message);
    expect(validator("11", {...constraint, message})).toBe(message);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when equal to max', () => {
    expect(validator(10, constraint)).toBeFalsy();
    expect(validator("10", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when less than max', () => {
    expect(validator(9.9, constraint)).toBeFalsy();
    expect(validator("9.9", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

});
