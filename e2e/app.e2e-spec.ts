import { MYSEEDPROJECTNAMEPage } from './app.po';

describe('my-seed-project-name App', function() {
  let page: MYSEEDPROJECTNAMEPage;

  beforeEach(() => {
    page = new MYSEEDPROJECTNAMEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
