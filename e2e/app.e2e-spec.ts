import { TestBs4Page } from './app.po';

describe('test-bs4 App', function() {
  let page: TestBs4Page;

  beforeEach(() => {
    page = new TestBs4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
