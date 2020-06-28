import {required as validator} from '../';
import {isEmpty} from "../helper";

let mockIsEmptyResult;
jest.mock('../helper', () => ({
  isEmpty: jest.fn(() => mockIsEmptyResult)
}));

const constraint = {};

const defaultMessage = "Value is required";

describe('required', () => {

  it('returns message for if isEmpty()', () => {
    mockIsEmptyResult = true;
    expect(validator(null, constraint)).toBe(defaultMessage);
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns custom message for if isEmpty()', () => {
    mockIsEmptyResult = true;
    const message = 'Should definitely provide something...';
    expect(validator(null, {...constraint, message})).toBe(message);
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

  it('returns true for if !isEmpty()', () => {
    mockIsEmptyResult = false;
    expect(validator(null, constraint)).toBeFalsy();
    expect(isEmpty).toHaveBeenNthCalledWith(1, null);
  });

});
