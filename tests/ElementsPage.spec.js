const { test, expect } = require('@playwright/test');
import {Page } from "@playwright/test";
import HomePage from '../src/Pages/HomePage';
import ElementPage from "../src/Pages/ElementPage";

const hp=new HomePage(Page);
const ep=new ElementPage(Page);

test.describe("Element Page Test",()=>{

    test('TC01_Click on the Elements', async ({ page }) => {

        await test.step('Login to Application',async()=>{
            await page.goto('https://demoqa.com');
        })

        await test.step('Click On Element',async()=>{
            await hp.clickElement()
        })

        await test.step('click on checkbox btn',async()=>{
            await ep.clickCheckboxBtn()
        })
        await test.step('Verify the Text',async()=>{
            //Pending
        })
         
    })

    test.describe("Element Page Test",()=>{

        test('TC01_Click on the Elements', async ({ page }) => {
    
            await test.step('Login to Application',async()=>{
                await page.goto('https://demoqa.com');
            })
    
            await test.step('Click On Element',async()=>{
                await hp.clickElement()
            })
            await test.step('Click on Element',async()=>{
                await ep.clickuploadAndDownload();
            })
            await test.step ('Verify the file is uploaded',async()=>{
                //Pending
            })

        })
    })

    test.describe("Element Page Test",()=>{

        test('TC09_Click on the Elements and verify the button', async ({ page }) => {
    
            await test.step('Login to Application',async()=>{
                await page.goto('https://demoqa.com');
            })
    
            await test.step('Click On Element',async()=>{
                await hp.clickElement()
            })
            await test.step('Click on button',async()=>{
                await ep.clickbutton();
            })
            await test.step('Verify the button',async()=>{
                //button
            })
           })
    })
})

