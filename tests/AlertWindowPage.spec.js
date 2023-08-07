const { test, expect } = require('@playwright/test');
import {Page } from "@playwright/test";
import HomePage from '../src/Pages/HomePage';
import ElementPage from "../src/Pages/ElementPage";
import AlertWindowsPage from "../src/Pages/AlertWindosPage";

const hp=new HomePage(Page);
const ep=new ElementPage(Page);
const Awp= new AlertWindowsPage(Page);

test.describe("Element Page Test",()=>{

    test('TC02_Click on the AlertWindow', async ({ page }) => {
        await test.step('Login to Application',async()=>{
            await page.goto('https://demoqa.com');
            const newWindowPromise = new Promise(resolve => {
                context.on('page', newPage => {
                  resolve(newPage);
        })
    })
})

        await test.step('Click On AlertWindow',async()=>{
            //await page.frameLocator('iframe[title="\\33 rd party ad content"]').frameLocator('iframe[name="\\35 38b6a39"]').locator('#close_button_svg').click();
            await hp.clickAlertWindow();
        })
        await test.step('Click On BrowserWindow',async()=>{
            await Awp.clickbrowserWindow();
        })
        await test.step('Click On NewWindow',async()=>{
            await Awp.clicknewWindow();
        })
        await test.step('Verify the Text',async()=>{
         //const element = await page.$("//h1[contains(text(),'This is a sample page')]")
         //const isVisible = await element.isVisible();
         //console.log('Is element visible?',isVisible)

         await Awp.clicktext();

  // Wait for the new window to open
  
  const newPage = await newWindowPromise;

  // Assert that the text is visible in the new window
  const textVisible = await newPage.waitForSelector('text=This is a sample page');
  
  if (textVisible) {
    console.log('Text "This is a sample page" is visible in the new window.');
  } else {
    console.log('Text is not visible in the new window.');
  }
    })
})
    

test.describe("Element Page Test",()=>{

    test('TC04_Click on the AlertWindow and verify the Text', async ({ page }) => {
        await test.step('Login to Application',async()=>{
            await page.goto('https://demoqa.com');
        })

        await test.step('Click On AlertWindow',async()=>{
            await hp.clickAlertWindow();
        })

        await test.step('Click On frame',async()=>{
            await Awp.clickframes();
        })
        await test.step('Verify the Text "This is a sample page"',async()=>{
// Pending
        })
})
         })

         test.describe("Element Page Test",()=>{

            test('TC04_Click on the AlertWindow and verify the Text88', async ({ page }) => {
                await test.step('Login to Application',async()=>{
                    await page.goto('https://demoqa.com');
                })
        
                await test.step('Click On AlertWindow',async()=>{
                    await hp.clickAlertWindow();
                    await Awp.clickalerts();
                    await Awp.clickonButtonClick();
                })
                await test.step('Vetify the Text',async()=>{
                    //Pending
                })
                
            })
        })
   })