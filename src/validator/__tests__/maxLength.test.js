import {maxLength as validator} from '../';
import {isEmpty} from "../helper";

let mockIsEmptyResult;
jest.mock('../helper', () => ({
  isEmpty: jest.fn(() => mockIsEmptyResult)
}));

const constraint = {
  value: 10
};

const defaultMessage = "Value is too long";

describe('maxLength', () => {

  beforeEach(() => {
    mockIsEmptyResult = false;
  });

  it('returns true for if isEmpty()', () => {
    mockIsEmptyResult = true;
    expect(validator(null, constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns message when longer than maxLength', () => {
    expect(validator(12345678901, constraint)).toBe(defaultMessage);
    expect(validator("eleven char", constraint)).toBe(defaultMessage);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns custom message when longer than maxLength', () => {
    const message = 'Wayyyy to long';
    expect(validator(12345678901, {...constraint, message})).toBe(message);
    expect(validator("eleven char", {...constraint, message})).toBe(message);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when equal to maxLength', () => {
    expect(validator(1234567890, constraint)).toBeFalsy();
    expect(validator("ten charac", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when shorter than maxLength', () => {
    expect(validator(123456789, constraint)).toBeFalsy();
    expect(validator("nine char", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

});
