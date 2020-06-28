import * as index from '../';

describe('index', () => {

  it('includes max', () => {
    expect(typeof index.max).toBe('function');
  });

  it('includes maxLength', () => {
    expect(typeof index.maxLength).toBe('function');
  });

  it('includes min', () => {
    expect(typeof index.min).toBe('function');
  });

  it('includes minLength', () => {
    expect(typeof index.minLength).toBe('function');
  });

  it('includes pattern', () => {
    expect(typeof index.pattern).toBe('function');
  });

});
