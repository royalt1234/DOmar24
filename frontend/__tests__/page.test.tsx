import { render } from '@testing-library/react';
import Page from '../src/app/page';

const mockFetch = (url: string) => {
  if (url.includes('/health')) {
    return Promise.resolve({
      json: () => Promise.resolve({
        status: 'ok', version: '1.0.0', environment: 'test', item_count: 0, uptime_seconds: 1,
      }),
    });
  }
  return Promise.resolve({ json: () => Promise.resolve([]) });
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(mockFetch) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />);
    expect(container).toBeInTheDocument();
  });
});
