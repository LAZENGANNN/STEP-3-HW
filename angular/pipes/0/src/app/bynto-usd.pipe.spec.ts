import { BYNtoUSDPipe } from './bynto-usd.pipe';

describe('BYNtoUSDPipe', () => {
  it('create an instance', () => {
    const pipe = new BYNtoUSDPipe();
    expect(pipe).toBeTruthy();
  });
});
