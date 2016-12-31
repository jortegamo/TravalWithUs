import { TravelwithusAppPage } from './app.po';

describe('travelwithus-app App', function() {
  let page: TravelwithusAppPage;

  beforeEach(() => {
    page = new TravelwithusAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
