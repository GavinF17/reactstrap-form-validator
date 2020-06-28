import {min as validator} from '../';
import {isEmpty} from "../helper";

let mockIsEmptyResult;
jest.mock('../helper', () => ({
  isEmpty: jest.fn(() => mockIsEmptyResult)
}));

const constraint = {
  value: 8.5
};

const defaultMessage = "Value is too small";

describe('min', () => {

  beforeEach(() => {
    mockIsEmptyResult = false;
  });

  it('returns true for if isEmpty()', () => {
    mockIsEmptyResult = true;
    expect(validator(null, constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns message when smaller than min', () => {
    expect(validator(5, constraint)).toBe(defaultMessage);
    expect(validator("5", constraint)).toBe(defaultMessage);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns custom message when smaller than min', () => {
    const message = 'Wayyyy to small';
    expect(validator(5, {...constraint, message})).toBe(message);
    expect(validator("5", {...constraint, message})).toBe(message);
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when equal to min', () => {
    expect(validator(8.5, constraint)).toBeFalsy();
    expect(validator("8.5", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

  it('returns false when larger than min', () => {
    expect(validator(8.6, constraint)).toBeFalsy();
    expect(validator("8.6", constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenCalledTimes(2);
  });

});
