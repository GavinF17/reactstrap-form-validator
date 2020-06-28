import * as index from '../';

describe('index', () => {

  it('includes VForm', () => {
    expect(typeof index.VForm).toBe('function');
  });

  it('includes VFormFeedback', () => {
    expect(typeof index.VFormFeedback).toBe('function');
  });

  it('includes VFormGroup', () => {
    expect(typeof index.VFormGroup).toBe('function');
  });

  it('includes VInput', () => {
    expect(typeof index.VInput).toBe('function');
  });

  it('includes VInputGroup', () => {
    expect(typeof index.VInputGroup).toBe('function');
  });

});
