import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AddRemove } from '../pages/add_remove_page';
import { MultipleWindows } from '../pages/multiple_windows_page';
test('Title is correct', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const titleText = await homePage.getTitle();
    expect(titleText).toContain('Welcome to the-internet');
});
  
test("Adding element works", async({page})=>{
    const add_rem_page = new AddRemove(page)
    add_rem_page.addElement(1)
});

test("Adding multiple element works", async({page})=>{
    const add_rem_page = new AddRemove(page)
    add_rem_page.addElement(2)
});

test("Multiple Windows Launnch Test", async ({page})=>{
/// AAA
    expected_url = "https://the-internet.herokuapp.com/windows/new"
    const multi = new MultipleWindows(page);
    multi.clickHere();
    const actual_result = multi.getResultURL();
    expect(actual_result).toEqual(expected_url);

});
test("Multiple Windows Launnch Test LInk Check", async ({page})=>{
    /// AAA
        expected_text = "Click here"
        const multi = new MultipleWindows(page);
        const actual_text = multi.getLinkText();
        expect(actual_result).toEqual(expected_url);
    
    });

test("Check categories on Homepage", ()=>{
// 
expected_categories = getPublishedPetsFromAPI();
/*
[
  {
    "id": 9223372036854752000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 469,
    "category": {
      "id": 84,
      "name": "1mUYOuR"
    },
    "name": "doggie",
    "photoUrls": [
      "Pm7owzW",
      "41pg",
      "eBAT",
      "EdFxR7"
    ],
    "tags": [
      {
        "id": 15,
        "name": "fgvpdNW5v"
      },
      {
        "id": 181,
        "name": "SanMLL0GQ"
      },
      {
        "id": 130,
        "name": "y4ZnD"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854752000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854752000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854752000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854752000,
    "category": {
      "id": 0,
      "name": "cats"
    },
    "name": "Barsik",
    "photoUrls": [],
    "tags": [
      {
        "id": 0,
        "name": "puffy"
      },
      {
        "id": 0,
        "name": "young"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 470,
    "category": {
      "id": 93,
      "name": "Wmkdo"
    },
    "name": "doggie",
    "photoUrls": [
      "kwsQ",
      "prlEBWZ",
      "egz"
    ],
    "tags": [
      {
        "id": 545,
        "name": "7tt0C1xJ"
      },
      {
        "id": 718,
        "name": "xzdL1mUTW"
      },
      {
        "id": 888,
        "name": "HqbC"
      },
      {
        "id": 43,
        "name": "bnPWSFx"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Prince",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Zo-Zo cat"
    },
    "name": "Pillu Dog",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Rambo"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 43,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Zo-Zo cat"
    },
    "name": "Pillu Dog",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Rambo"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "TIGER"
    },
    "name": "LION",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "TOMMY"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "TIGER"
    },
    "name": "LION",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "BRUNO"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 2602817220627956700,
      "name": "qjbFmMb1MQDSCu589TssHKWM"
    },
    "name": "squirrel",
    "photoUrls": [
      "hotmail.com"
    ],
    "tags": [
      {
        "id": 1424397295422834000,
        "name": "JBaVVpRKb5Etp2FyP61uf7MP"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "TIGER"
    },
    "name": "LION",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "TOMMY"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "ZORO"
    },
    "name": "CAT",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "CHIKU"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie -pupu-2- 25april",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "durila",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "durila",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 7644,
    "category": {
      "id": 7644,
      "name": "SuperDogs"
    },
    "name": "Bobik",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 65545532,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 1,
      "name": "CAT1"
    },
    "name": "tdfelidq",
    "photoUrls": [
      "url1",
      "url2",
      "url3"
    ],
    "tags": [
      {
        "id": 1,
        "name": "TAG1"
      },
      {
        "id": 2,
        "name": "TAG2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 7828796666016665000,
    "category": {
      "id": 7037608499971412000,
      "name": "deMCy0PrfBTLwf8LwT8owWvQ"
    },
    "name": "woodchuck",
    "photoUrls": [
      "hotmail.com"
    ],
    "tags": [
      {
        "id": 5629554768392789000,
        "name": "hoKwsgyJnoLtuqlkVy9aAGaW"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Jeck",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 10,
      "name": "ZAP"
    },
    "name": "ZAP",
    "photoUrls": [
      "John Doe"
    ],
    "tags": [
      {
        "id": 10,
        "name": "ZAP"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "EHRXRHYHHV",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 1,
      "name": "CAT1"
    },
    "name": "qtbgppik",
    "photoUrls": [
      "url1",
      "url2",
      "url3"
    ],
    "tags": [
      {
        "id": 1,
        "name": "TAG1"
      },
      {
        "id": 2,
        "name": "TAG2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 1,
      "name": "CAT1"
    },
    "name": "qowfmanq",
    "photoUrls": [
      "url1",
      "url2",
      "url3"
    ],
    "tags": [
      {
        "id": 1,
        "name": "TAG1"
      },
      {
        "id": 2,
        "name": "TAG2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Prince",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "test",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "tiger"
    },
    "name": "wink",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "TIGER"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Zo-Zo cat"
    },
    "name": "Pillu Dog",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Rambo"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "tiger"
    },
    "name": "jhon",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Zo-Zo cat"
    },
    "name": "Pillu Dog",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Rambo"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "cats"
    },
    "name": "Barsik",
    "photoUrls": [],
    "tags": [
      {
        "id": 0,
        "name": "puffy"
      },
      {
        "id": 0,
        "name": "young"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Cat"
    },
    "name": "Kitty",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 223372036854747700,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Собака",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9222968140497181000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "test",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 888,
    "category": {
      "id": 0,
      "name": "Nika"
    },
    "name": "doggie888",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "tiger"
    },
    "name": "sold",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 121173,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "cat",
    "photoUrls": [
      "https://klike.net/uploads/posts/2023-01/1675061232_3-62.jpg"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 42,
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "name": "Buddy",
    "photoUrls": [
      "https://example.com/photos/buddy.jpg"
    ],
    "tags": [
      {
        "id": 7,
        "name": "Cute"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 234567,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puňťa",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 55,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "runneradmin",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 1,
      "name": "CAT1"
    },
    "name": "woayjwgd",
    "photoUrls": [
      "url1",
      "url2",
      "url3"
    ],
    "tags": [
      {
        "id": 1,
        "name": "TAG1"
      },
      {
        "id": 2,
        "name": "TAG2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9222968140491042000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 59,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 975,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 21,
    "category": {
      "id": 3,
      "name": "birds"
    },
    "name": "Marvin",
    "photoUrls": [],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 555889894,
    "category": {
      "id": 1,
      "name": "ono"
    },
    "name": "iis",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "14444"
      }
    ],
    "status": "available"
  },
  {
    "id": 555894,
    "category": {
      "id": 55551,
      "name": "ono"
    },
    "name": "iis",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "14444"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 285,
    "category": {
      "id": 285,
      "name": "собака"
    },
    "name": "Великан",
    "photoUrls": [],
    "tags": [
      {
        "id": 285,
        "name": "Великан"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 61,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
  },
  {
    "id": 897,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Outdoors",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 20,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie20",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 541,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "indigo",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 771,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Serbian",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 1,
      "name": "CAT1"
    },
    "name": "auiaahge",
    "photoUrls": [
      "url1",
      "url2",
      "url3"
    ],
    "tags": [
      {
        "id": 1,
        "name": "TAG1"
      },
      {
        "id": 2,
        "name": "TAG2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 18,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Home",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      },
      {
        "id": 15,
        "name": "tag2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "dog"
    },
    "name": "Gunnar",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "#dog"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 228,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Computer",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 410,
    "name": "Tristian",
    "photoUrls": [
      "<string>",
      "<string>"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "#%status%#"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 868411308588225200,
    "category": {
      "id": 6387126043111295000,
      "name": "PO7erEe5p2OWUNY8qMRgyiQY"
    },
    "name": "lion",
    "photoUrls": [
      "gmail.com"
    ],
    "tags": [
      {
        "id": 1219280123136188200,
        "name": "WLD8893qQdciHtHvtR2oagEV"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 8,
    "name": "CypressPet",
    "photoUrls": [],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854740000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 38,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": -7121180449908170000,
      "name": "I2fd8GSvBPsSZGSkITiCZkiX"
    },
    "name": "toad",
    "photoUrls": [
      "gmail.com"
    ],
    "tags": [
      {
        "id": -8074147513118481000,
        "name": "6aw6V5FRYQbOLKuE1xys8iz0"
      }
    ],
    "status": "available"
  },
  {
    "id": 889,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Plains",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 100,
      "name": "Dinosaur"
    },
    "name": "Tyrannosaurus",
    "photoUrls": [
      "http://en.wikipedia.org/wiki/Tyrannosaurus#/media/File:Tyrannosaurus_rex_mmartyniuk.png"
    ],
    "tags": [
      {
        "id": 100,
        "name": "reptile"
      },
      {
        "id": 101,
        "name": "dinosaur"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 100,
      "name": "Dinosaur"
    },
    "name": "Tyrannosaurus",
    "photoUrls": [
      "http://en.wikipedia.org/wiki/Tyrannosaurus#/media/File:Tyrannosaurus_rex_mmartyniuk.png"
    ],
    "tags": [
      {
        "id": 100,
        "name": "reptile"
      },
      {
        "id": 101,
        "name": "dinosaur"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 6520852875722749000,
    "category": {
      "id": -6737833983822454000,
      "name": "2oHqIVfoZ7ulm7GJX3vJaNq6"
    },
    "name": "jellyfish",
    "photoUrls": [
      "hotmail.com"
    ],
    "tags": [
      {
        "id": -630080273769781600,
        "name": "ul3xVHCcNBdWiolX5EtIJjI6"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 1,
      "name": "CAT1"
    },
    "name": "weuxnxon",
    "photoUrls": [
      "url1",
      "url2",
      "url3"
    ],
    "tags": [
      {
        "id": 1,
        "name": "TAG1"
      },
      {
        "id": 2,
        "name": "TAG2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 121213,
    "category": {
      "id": 0,
      "name": "tiger"
    },
    "name": "hunter",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "gorgeus"
      }
    ],
    "status": "available"
  },
  {
    "id": 121212,
    "category": {
      "id": 0,
      "name": "birdie"
    },
    "name": "cikcik",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "cute"
      }
    ],
    "status": "available"
  },
  {
    "id": 492,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Garden",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "morce",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "name": "Azorell without category",
    "photoUrls": [
      "https://i.insider.com/5489a390eab8ea6938b17e33?width=300&format=jpeg&auto=webp"
    ],
    "tags": [
      {
        "id": 0,
        "name": "castrat"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Pomeranian"
    },
    "name": "Yeontn",
    "photoUrls": [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwikibio.in%2Fyeontan%2F&psig=AOvVaw0UdJeOGlk-jKSOtT-nplW1&ust=1682581409377000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCMCQvJiuyP4CFQAAAAAdAAAAABAI"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Dog"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 5005773699829277000,
      "name": "W4zCWShm5SMzdxrZpfexIw8U"
    },
    "name": "kangaroo",
    "photoUrls": [
      "yahoo.com"
    ],
    "tags": [
      {
        "id": -5577694387611839000,
        "name": "5c76vbGv5oXJeh3bVikB6GA2"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 111888999,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Собакен",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "cat",
    "photoUrls": [
      "https://klike.net/uploads/posts/2023-01/1675061232_3-62.jpg"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 722,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Valleys",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 3938809598525080000,
      "name": "1KwdUiefGpVeJ8cyZjTAOgYF"
    },
    "name": "hedgehog",
    "photoUrls": [
      "yahoo.com"
    ],
    "tags": [
      {
        "id": -4731613686086240000,
        "name": "fteDoNVMiGsFccNq4s1AKNni"
      }
    ],
    "status": "available"
  },
  {
    "id": 1488148814881488,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggietest",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 8212614,
      "name": "voluptate ea qui sint"
    },
    "name": "doggie",
    "photoUrls": [
      "quis Lorem Duis aute",
      "veniam nulla culpa"
    ],
    "tags": [
      {
        "id": -42092226,
        "name": "labore"
      },
      {
        "id": -72688380,
        "name": "consectetur sint qui"
      }
    ],
    "status": "available"
  },
  {
    "id": 555111222333,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Rowena7",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 987,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "Open-architected",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 1245,
    "category": {
      "id": 1245,
      "name": "xyz"
    },
    "name": "xyz",
    "photoUrls": [
      "test"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 75,
    "category": {
      "id": 0,
      "name": "parallelism"
    },
    "name": "doggie888",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 812,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "deposit",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "#%status%#"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 123123,
    "category": {
      "id": 0,
      "name": "Taimas"
    },
    "name": "shepherd",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 8486587777399703000,
    "category": {
      "id": -4068877518353426000,
      "name": "BYALQfTyQTLWfC6dzoQpucwF"
    },
    "name": "louse",
    "photoUrls": [
      "gmail.com"
    ],
    "tags": [
      {
        "id": -1313867995396035800,
        "name": "7uO3al1fLinqOwwWevCWeEBN"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "#%status%#"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 47,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "tag"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 26042025,
    "category": {
      "id": 0,
      "name": "Grey"
    },
    "name": "PitbullDOGG",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 1987,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Rex",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 3987,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Lucky",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "New Doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9391755531866040,
    "name": "Тревога Адвокат",
    "photoUrls": [
      "https://img.freepik.com/free-photo/market.jpg",
      "https://img.freepik.com/free-photo/mouth.jpg",
      "https://img.freepik.com/free-photo/tend.jpg",
      "https://img.freepik.com/free-photo/forward.jpg",
      "https://img.freepik.com/free-photo/forward.jpg",
      "https://img.freepik.com/free-photo/pattern.jpg"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 4723472410578287,
    "category": {
      "id": 6453,
      "name": "Витрина"
    },
    "name": "Падать Умолять",
    "photoUrls": [
      "https://img.freepik.com/free-photo/next.jpg",
      "https://img.freepik.com/free-photo/government.jpg",
      "https://img.freepik.com/free-photo/capital.jpg",
      "https://img.freepik.com/free-photo/system.jpg",
      "https://img.freepik.com/free-photo/standard.jpg",
      "https://img.freepik.com/free-photo/tonight.jpg",
      "https://img.freepik.com/free-photo/fast.jpg"
    ],
    "tags": [
      {
        "id": 505,
        "name": "#Покинуть"
      },
      {
        "id": 127,
        "name": "#Сверкающий"
      },
      {
        "id": 596,
        "name": "#Тюрьма"
      },
      {
        "id": 339,
        "name": "#Торговля"
      },
      {
        "id": 998,
        "name": "#Заявление"
      }
    ],
    "status": "available"
  },
  {
    "id": 4987,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Leo",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "Jerry"
    },
    "name": "Mouse",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "Mouse"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 6679584200498434000,
      "name": "QIe3rp6hqzQxRuH2y6lJtKcn"
    },
    "name": "gorilla",
    "photoUrls": [
      "gmail.com"
    ],
    "tags": [
      {
        "id": -1188396136924237600,
        "name": "ZoqgktNZQM8nY043BtNofFZ6"
      }
    ],
    "status": "available"
  },
  {
    "id": 8483349040808242,
    "name": "Разуметься Школьный",
    "photoUrls": [
      "https://img.freepik.com/free-photo/tend.jpg",
      "https://img.freepik.com/free-photo/interest.jpg",
      "https://img.freepik.com/free-photo/bank.jpg"
    ],
    "tags": [],
    "status": "available"
  },
  {
    "id": 6108999734524706,
    "category": {
      "id": 3179,
      "name": "Пастух"
    },
    "name": "Скользить Достоинство",
    "photoUrls": [
      "https://img.freepik.com/free-photo/seat.jpg",
      "https://img.freepik.com/free-photo/however.jpg",
      "https://img.freepik.com/free-photo/dark.jpg",
      "https://img.freepik.com/free-photo/adult.jpg",
      "https://img.freepik.com/free-photo/similar.jpg"
    ],
    "tags": [
      {
        "id": 998,
        "name": "#Горький"
      },
      {
        "id": 516,
        "name": "#Тысяча"
      },
      {
        "id": 400,
        "name": "#Присесть"
      },
      {
        "id": 452,
        "name": "#Грудь"
      },
      {
        "id": 627,
        "name": "#Роса"
      },
      {
        "id": 213,
        "name": "#Отдел"
      },
      {
        "id": 774,
        "name": "#Стакан"
      }
    ],
    "status": "available"
  },
  {
    "id": 8245937822493981000,
    "category": {
      "id": -7103491746136615000,
      "name": "hOhe2kPE9hJeCksWMQunFbgu"
    },
    "name": "mouse",
    "photoUrls": [
      "gmail.com"
    ],
    "tags": [
      {
        "id": -1624871945963098600,
        "name": "4m9OISnqRIoC8lcldjFmSjXG"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": ""
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 8789944074696464,
    "category": {
      "id": 5731,
      "name": "Расстегнуть"
    },
    "name": "Даль Сохранять",
    "photoUrls": [
      "https://img.freepik.com/free-photo/purpose.jpg",
      "https://img.freepik.com/free-photo/least.jpg"
    ],
    "tags": [
      {
        "id": 166,
        "name": "#Палка"
      },
      {
        "id": 657,
        "name": "#Витрина"
      },
      {
        "id": 373,
        "name": "#Плясать"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 929,
    "category": {
      "id": 0,
      "name": "animals"
    },
    "name": "boliviano",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      },
      {
        "id": 2,
        "name": "y.aliyev"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 1,
    "category": {
      "id": 1,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 69,
    "name": "Bvandewe",
    "photoUrls": [],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Puff",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": -1125086433420020100,
      "name": "Ai0ZscSLI2tvX4trGRtE850f"
    },
    "name": "caribou",
    "photoUrls": [
      "hotmail.com"
    ],
    "tags": [
      {
        "id": 7237577751586263000,
        "name": "d8Fmkc6kl7wu4asKt1l8bznJ"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "Prince",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 4278,
    "name": "Sloughi",
    "photoUrls": [],
    "tags": [],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  },
  {
    "id": 9223372036854753000,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "fish",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
*/

});
  