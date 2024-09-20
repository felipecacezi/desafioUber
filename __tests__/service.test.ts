import {describe, expect, test} from '@jest/globals';
import {serviceTest} from '../src/services/ServiceTest';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect('test').toBe(serviceTest());
  });
});