import { ClientpannelPage } from './app.po';

describe('clientpannel App', () => {
  let page: ClientpannelPage;

  beforeEach(() => {
    page = new ClientpannelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
