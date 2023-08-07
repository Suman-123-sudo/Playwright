const { test, expect } = require('@playwright/test');
import {Page } from "@playwright/test";
import HomePage from '../src/Pages/HomePage';
import ElementPage from "../src/Pages/ElementPage";
import AlertWindowsPage from "../src/Pages/AlertWindosPage";
import FormPage from "../src/Pages/FormPage";
import WidgetsPage from "../src/Pages/WidgetsPage";

const hp=new HomePage(Page);
const ep=new ElementPage(Page);
const Awp= new AlertWindowsPage(Page);
const Fg = new FormPage(Page)
const Wp= new WidgetsPage(Page)

test.describe("Element Page Test",()=>{

    test('TC_10 Verify the Text', async ({ page }) => {
        await test.step('Login to Application',async()=>{
            await page.goto('https://demoqa.com');
        })
        await test.step('Click On Widgets',async()=>{
            await Wp.clickWidgets();
        })
        await test.step('Click on Date picker',async()=>{
            await Wp.clickDatePicker();
        })
        await test.step('verify the Text',async()=>{
         //pending
        })
    })
})