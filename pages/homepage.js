import { BasePage } from "./base_page.js";
export class HomePage extends BasePage{
    constructor(page) {
          super(page);
          this.url = 'https://the-internet.herokuapp.com/';
          this.title = 'h1';
          this.subtitle = 'h2';
        }
      
        async navigate() {
          await super.navigate(this.url);
        }
      
        async getTitle() {
          return await this.getElementText(this.title);
        }
      
        async getSubTitle() {
          return await this.getElementText(this.subtitle);
        }
      
        async goToExample(name) {
          await this.click(this.userProfile);
        }
      }
