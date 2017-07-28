import { Ng4LoadingSpinnerPage } from './app.po';

describe('ng4-loading-spinner App', () => {
  let page: Ng4LoadingSpinnerPage;

  beforeEach(() => {
    page = new Ng4LoadingSpinnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
