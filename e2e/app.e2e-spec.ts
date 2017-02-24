import { RandomQuoteGenPage } from './app.po';

describe('random-quote-gen App', () => {
  let page: RandomQuoteGenPage;

  beforeEach(() => {
    page = new RandomQuoteGenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
