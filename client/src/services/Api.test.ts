import axios from 'axios';
import './Api';

jest.mock('axios', () => ({ create: jest.fn() }));
const mockAxiosCreate = jest.spyOn(axios, 'create');

describe('Api', () => {
  it('should create an axios instance', () => {
    expect(mockAxiosCreate).toBeCalled();
  });
});
