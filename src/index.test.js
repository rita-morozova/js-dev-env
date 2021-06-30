import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hi", () => {
    const index = fs.readFileSync("./src/index.html", "utf8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hi");
    dom.window.close();
  });
});
