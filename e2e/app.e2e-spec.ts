import { gallery2Page } from './app.po';

describe('my-seed-project-name App', function() {
  let page: gallery2Page;

  beforeEach(() => {
    page = new gallery2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
