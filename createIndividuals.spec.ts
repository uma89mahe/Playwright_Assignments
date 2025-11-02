/* Assignment: 3 Create Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

import {test, expect} from '@playwright/test'

test("create individuals", async({page})=>{

    //page navigation and login
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")   
    await page.locator("#Login").click()

    //Click on the toggle menu button from the left corner
    await page.locator(".slds-icon-waffle").click()
    //Click View All and click Individuals from App Launcher
    await page.locator("[aria-label='View All Applications']").click()
    await page.locator("//a[@data-label='Individuals']").click()
    //Click on the Dropdown icon in the Individuals tab
    await page.locator("//a[@title='Individuals']/following::one-app-nav-bar-item-dropdown").click()
    //Click on New Individual
    await page.locator("//span[text()='New Individual']").click()
    //Enter the Last Name
    await page.locator("//input[@placeholder='Last Name']").fill("Uma D1")
    //Click save and verify Individuals Name
    await page.locator("//button[@title='Save & New']/following-sibling::button[@title='Save']").click()
    const expectedValue="Uma D"
    const actualValue = await page.textContent("(//div[text()='Individual']/following::span)[1]")

    expect(actualValue).toEqual(expectedValue)
})