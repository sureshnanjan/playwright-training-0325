import { BasePage } from "./base_page";

/**
 * 
 */
export class MultipleWindows extends BasePage{
    constructor(page){
        this.super(page)
        this.title_locator = page.getByRole('heading', { name: 'Opening a new window' });
        this.link_locator = page.getByRole('link', { name: 'Click Here' });
        const page1Promise = page.waitForEvent('popup');
        this.new_title_locator = "h3"
    }

    /** */
    async getTitle(){
        return this.getElementText(this.title_locator);

    }

    getLinkText(){
        return this.getLinkText(this.link_locator);
    }

    clickHere(){
        this.click(this.link_locator);
    }

    async getResultURL(){
        const page1 = await page1Promise;
        return page1.url;
    

    }

    getResultHeading(){
        return this.page1.locator(this.new_title_locator).text()
    }

}