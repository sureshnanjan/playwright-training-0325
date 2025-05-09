import {BasePageWithLogger} from './reference_base_page_logger.js'
export class HomePageWithLogger extends BasePageWithLogger{
    constructor(page) {
          super(page);
          this.url = 'https://the-internet.herokuapp.com/';
          this.title = 'h1';
          this.subtitle = 'h2';
          //this.navigate();
        }
        
        static async create(page) {
          const instance = new HomePageWithLogger(page);
          // Do async initialization here
          await instance.navigate();
          return instance;
        }
      
        async navigate() {
          await super.navigateTo(this.url);
        }
      
        async getTitle() {
          return await super.getText(this.title);
        }
      
        async getSubTitle() {
          return await super.getText(this.subtitle);
        }
      
        async goToExample(name) {
          await super.click(this.userProfile);
        }
      }
