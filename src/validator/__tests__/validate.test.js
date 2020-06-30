import {validate} from "../validate";
import {max, min} from "../";

jest.mock('../', () => ({
  min: jest.fn(() => {
  }),
  max: jest.fn(() => "Too large"),
}));

const minConstraint = {value: 10};
const maxConstraint = {value: 9};

describe('validate', () => {

  it('calls single validator', () => {
    expect(validate('some input', {min: minConstraint})).toBeNull();
    expect(min).toHaveBeenNthCalledWith(1, 'some input', minConstraint);
  });

  it('calls multiple validators', () => {
    expect(validate('some input', {
      min: minConstraint,
      max: maxConstraint
    })).toStrictEqual(["Too large"]);
    expect(min).toHaveBeenNthCalledWith(1, 'some input', minConstraint);
    expect(max).toHaveBeenNthCalledWith(1, 'some input', maxConstraint);
  });

  it('calls single custom validator', () => {
    const customValidator = jest.fn(() => "Something is wrong");

    expect(validate('some input', {customValidator})).toStrictEqual(["Something is wrong"]);
    expect(customValidator).toHaveBeenNthCalledWith(1, 'some input');
  });

  it('calls mix of validators and custom validators', () => {
    const customValidator = jest.fn(() => "Something is wrong");

    expect(validate('some input', {
      max: maxConstraint,
      customValidator
    })).toStrictEqual(["Too large", "Something is wrong"]);
    expect(max).toHaveBeenNthCalledWith(1, 'some input', maxConstraint);
    expect(customValidator).toHaveBeenNthCalledWith(1, 'some input');
  });

});
