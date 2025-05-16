// @ts-check
import { test, expect,devices } from '@playwright/test';
import { ApiRequest } from '@playwright/test';
let mydata = {user:"admin", password:"admin"};
test.only("Show Devices", async ({page})=>{
  
   page.on('request', request => {
      if(request.url().includes("petstore.swagger.io")) {
        console.log( 
          { url: request.url(),
            method: request.method(),
            payload: request.postData()
        });
      ApiRequest.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available").then((response) => {
          console.log(response);
          mydata = response;
        }
        );
      
      }
      

      page.on('response', response => {

        if(response.url().includes("petstore.swagger.io")) {
          console.log( 
            { url: response.url(),
              status: response.status(),
              payload: response.json()
              
          });
        } 
      });

      page.goto("https://petstore.swagger.io/v2/pet/findByStatus?status=available");
      expect(mydata).toEqual("suresh");
       


});});
test("Show Devices", async ({page,browser,request})=>{
  /// Arrange
  const resp = await request.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")

  resp.json()
  const expected = 50;
  page.goto()
});

