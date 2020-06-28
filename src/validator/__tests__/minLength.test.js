import {minLength as validator} from '../';
import {isEmpty} from "../helper";

let mockIsEmptyResult;
jest.mock('../helper', () => ({
  isEmpty: jest.fn(() => mockIsEmptyResult)
}));

const constraint = {
  value: 10
};

const defaultMessage = "Value is too short";

describe('minLength', () => {

  beforeEach(() => {
    mockIsEmptyResult = false;
  });

  it('returns true for if isEmpty()', () => {
    mockIsEmptyResult = true;
    expect(validator(null, constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns message when shorter than minLength', () => {
    expect(validator(123456789, constraint)).toBe(defaultMessage);
    expect(validator("nine char", constraint)).toBe(defaultMessage);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns custom message when shorter than minLength', () => {
    const message = 'Wayyyy to short';
    expect(validator(123456789, {...constraint, message})).toBe(message);
    expect(validator("nine char", {...constraint, message})).toBe(message);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when equal to minLength', () => {
    expect(validator(1234567890, constraint)).toBeFalsy();
    expect(validator("ten charac", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when longer than minLength', () => {
    expect(validator(12345678901, constraint)).toBeFalsy();
    expect(validator("eleven char", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

});
