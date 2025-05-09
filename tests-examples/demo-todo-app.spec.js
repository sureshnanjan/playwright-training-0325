// @ts-check
import { test, expect,devices } from '@playwright/test';

test("Show Devices", async (page)=>{
  
   page.on('request', request => {
      console.log( 
        { url: request.url(),
          method: request.method(),
          payload: request.postData()
      });


});});
test("Show Devices", async ({page,browser,request})=>{
  /// Arrange
  const resp = await request.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")

  resp.json()
  const expected = 50;
  page.goto()
});

