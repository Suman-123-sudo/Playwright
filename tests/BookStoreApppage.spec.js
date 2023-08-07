const { test, expect } = require('@playwright/test');
import {Page } from "@playwright/test";
import HomePage from '../src/Pages/HomePage';
import ElementPage from "../src/Pages/ElementPage";
import AlertWindowsPage from "../src/Pages/AlertWindosPage";
import BookStoreAppPage from "../src/Pages/BookStoreAppPage";

const hp=new HomePage(Page);
const ep=new ElementPage(Page);
const Awp= new AlertWindowsPage(Page);
const Bsp= new BookStoreAppPage(Page);

test.describe("Element Page Test",()=>{

    test('TC03_Click on the BookStoreApplication', async ({ page }) => {
        await test.step('Login to Application',async()=>{
            await page.goto('https://demoqa.com');
        })

        await test.step('Click On AlertWindow',async()=>{
            await hp.clickBookStoreApplication();
        })
        await test.step('Click On Searchbox',async()=>{
            await Bsp.clicksearch();
        })
        await test.step('Fill the Value under the search box"JavaScript"',async()=>{
            await Bsp.clicksearch()
            await page.fill('javascript');
         })
         await test.step('Verify the book count',async()=>{
            await page.waitForSelector('.book');

            // Get the count of visible book elements
            const bookCount = await page.evaluate(() => {
              const bookElements = document.querySelectorAll('.book');
              return bookElements.length;
            });
          
            // Define the expected book count (replace with your expected value)
            const expectedBookCount = 4;
          
            // Assert the book count
            if (bookCount === expectedBookCount) {
              console.log(`Success! ${expectedBookCount} books are visible.`);
            } else {
              console.error(`Assertion failed! Expected ${expectedBookCount} books, but found ${bookCount} books.`);
            }
          
            // Close the browser
            await browser.close();

            

        })

    })

})



