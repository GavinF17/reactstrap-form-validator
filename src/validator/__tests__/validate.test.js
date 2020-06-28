import {validate} from "../validate";
import {min, max} from "../";

jest.mock('../', () => ({
  min: jest.fn(() => {}),
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

});
