import { BasePage } from "./reference_base_page";

export class AddRemove extends BasePage{
    constructor(page){
        this.super(page)
        this.heading = "h3"
        this.add_element= "//*[@id='content']/div/button"
    }

    async getHeading(){
        return this.super.getElementText(this.heading)
    }

    async addElement(times){
        for (let index = 0; index < times; index++) {
            this.super.click(this.addElement)
            
        }
    }

}