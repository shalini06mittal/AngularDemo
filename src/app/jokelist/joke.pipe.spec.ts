import { JokePipe } from './joke.pipe';

describe('JokePipe', () => {
  it('create an instance', () => {
    const pipe = new JokePipe();
    expect(pipe).toBeTruthy();
  });
});
