import { TitleColorPipePipe } from './title-color-pipe-pipe';

describe('TitleColorPipePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleColorPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns red for titles longer than 10 characters', () => {
    const pipe = new TitleColorPipePipe();
    expect(pipe.transform('A long title')).toBe('red');
  });

  it('returns green for titles with 10 characters or fewer', () => {
    const pipe = new TitleColorPipePipe();
    expect(pipe.transform('Short')).toBe('green');
  });
});
