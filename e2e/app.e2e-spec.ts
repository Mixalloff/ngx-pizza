import { NgxPizzaPage } from './app.po';

describe('ngx-pizza App', function() {
  let page: NgxPizzaPage;

  beforeEach(() => {
    page = new NgxPizzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
