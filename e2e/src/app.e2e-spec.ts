'use strict'; // necessary for es6 output in node

import { browser, element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

const expectedH1 = 'Tour of Mharashahebs';
const expectedTitle = `${expectedH1}`;
const targetMharashaheb = { id: 15, name: 'Magneta' };
const targetMharashahebDashboardIndex = 3;
const nameSuffix = 'X';
const newMharashahebName = targetMharashaheb.name + nameSuffix;

class Mharashaheb {
    id: number;
    name: string;

    // Factory methods

    // Get mharashaheb from s formatted as '<id> <name>'.
    static fromString(s: string): Mharashaheb {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    }

    // Get mharashaheb id and name from the given detail element.
    static async fromDetail(detail: ElementFinder): Promise<Mharashaheb> {
        // Get mharashaheb id from the first <div>
        let _id = await detail.all(by.css('div')).first().getText();
        // Get name from the h2
        let _name = await detail.element(by.css('h2')).getText();
        return {
            id: +_id.substr(_id.indexOf(' ') + 1),
            name: _name.substr(0, _name.lastIndexOf(' '))
        };
    }
}

describe('Tutorial part 5', () => {

  beforeAll(() => browser.get(''));

  function getPageElts() {
    let navElts = element.all(by.css('app-root nav a'));

    return {
      navElts: navElts,

      appDashboardHref: navElts.get(0),
      appDashboard: element(by.css('app-root app-dashboard')),
      topMharashahebs: element.all(by.css('app-root app-dashboard > div h4')),

      appMharashahebsHref: navElts.get(1),
      appMharashahebs: element(by.css('app-root app-mharashahebs')),
      allMharashahebs: element.all(by.css('app-root app-mharashahebs li')),
      mharashahebDetail: element(by.css('app-root app-mharashaheb-detail > div'))
    };
  }

  describe('Initial page', () => {

    it(`has title '${expectedTitle}'`, () => {
        expect(browser.getTitle()).toEqual(expectedTitle);
    });

    it(`has h1 '${expectedH1}'`, () => {
        expectHeading(1, expectedH1);
    });

    const expectedViewNames = ['Dashboard', 'Mharashahebs'];
    it(`has views ${expectedViewNames}`, () => {
      let viewNames = getPageElts().navElts.map((el: ElementFinder) => el.getText());
      expect(viewNames).toEqual(expectedViewNames);
    });

    it('has dashboard as the active view', () => {
      let page = getPageElts();
      expect(page.appDashboard.isPresent()).toBeTruthy();
    });

  });

  describe('Dashboard tests', () => {

    beforeAll(() => browser.get(''));

    it('has top mharashahebs', () => {
      let page = getPageElts();
      expect(page.topMharashahebs.count()).toEqual(4);
    });

    it(`selects and routes to ${targetMharashaheb.name} details`, dashboardSelectTargetMharashaheb);

    it(`updates mharashaheb name (${newMharashahebName}) in details view`, updateMharashahebNameInDetailView);

    it(`saves and shows ${newMharashahebName} in Dashboard`, () => {
      element(by.buttonText('go back')).click();
      let targetMharashahebElt = getPageElts().topMharashahebs.get(targetMharashahebDashboardIndex);
      expect(targetMharashahebElt.getText()).toEqual(newMharashahebName);
    });

  });

  describe('Mharashahebs tests', () => {

    beforeAll(() => browser.get(''));

    it('can switch to Mharashahebs view', () => {
      getPageElts().appMharashahebsHref.click();
      let page = getPageElts();
      expect(page.appMharashahebs.isPresent()).toBeTruthy();
      expect(page.allMharashahebs.count()).toEqual(10, 'number of mharashahebs');
    });

    it('can route to mharashaheb details', async () => {
      getMharashahebLiEltById(targetMharashaheb.id).click();

      let page = getPageElts();
      expect(page.mharashahebDetail.isPresent()).toBeTruthy('shows mharashaheb detail');
      let mharashaheb = await Mharashaheb.fromDetail(page.mharashahebDetail);
      expect(mharashaheb.id).toEqual(targetMharashaheb.id);
      expect(mharashaheb.name).toEqual(targetMharashaheb.name.toUpperCase());
    });

    it(`updates mharashaheb name (${newMharashahebName}) in details view`, updateMharashahebNameInDetailView);

    it(`shows ${newMharashahebName} in Mharashahebs list`, () => {
      element(by.buttonText('go back')).click();
      let expectedText = `${targetMharashaheb.id} ${newMharashahebName}`;
      expect(getMharashahebLiEltById(targetMharashaheb.id).getText()).toEqual(expectedText);
    });

  });

  async function dashboardSelectTargetMharashaheb() {
    let targetMharashahebElt = getPageElts().topMharashahebs.get(targetMharashahebDashboardIndex);
    expect(targetMharashahebElt.getText()).toEqual(targetMharashaheb.name);
    targetMharashahebElt.click();

    let page = getPageElts();
    expect(page.mharashahebDetail.isPresent()).toBeTruthy('shows mharashaheb detail');
    let mharashaheb = await Mharashaheb.fromDetail(page.mharashahebDetail);
    expect(mharashaheb.id).toEqual(targetMharashaheb.id);
    expect(mharashaheb.name).toEqual(targetMharashaheb.name.toUpperCase());
  }

  async function updateMharashahebNameInDetailView() {
    // Assumes that the current view is the mharashaheb details view.
    addToMharashahebName(nameSuffix);

    let page = getPageElts();
    let mharashaheb = await Mharashaheb.fromDetail(page.mharashahebDetail);
    expect(mharashaheb.id).toEqual(targetMharashaheb.id);
    expect(mharashaheb.name).toEqual(newMharashahebName.toUpperCase());
  }

});

function addToMharashahebName(text: string): promise.Promise<void> {
  let input = element(by.css('input'));
  return input.sendKeys(text);
}

function expectHeading(hLevel: number, expectedText: string): void {
    let hTag = `h${hLevel}`;
    let hText = element(by.css(hTag)).getText();
    expect(hText).toEqual(expectedText, hTag);
};

function getMharashahebLiEltById(id: number) {
  let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
  return spanForId.element(by.xpath('..'));
}
