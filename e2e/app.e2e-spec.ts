import { CyclingTcxDownloaderPage } from './app.po';

describe('cycling-tcx-downloader App', () => {
  let page: CyclingTcxDownloaderPage;

  beforeEach(() => {
    page = new CyclingTcxDownloaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
