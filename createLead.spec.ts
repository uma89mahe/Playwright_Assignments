/* Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

/*
https://login.salesforce.com/
credentials:
dilipkumar.rajendran@testleaf.com
TestLeaf@2025
*/

import {test,expect} from '@playwright/test'

test("creation of new Lead", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")   
    await page.locator("#Login").click()

  await page.locator(".slds-icon-waffle").click()
  await page.locator("[aria-label='View All Applications']").click()
  await page.locator("div[data-name='Sales']").click()
  await page.locator("//a[@title='Leads']/span").click()
  await page.locator("[name='New']").click();
  await page.locator("[name='salutation']").click()
  await page.locator("[title='Ms.']").click()
  await page.locator("[name='lastName']").fill("Uma")
  await page.locator("[name='Company']").fill("Innovation")
  await page.locator("[name='SaveEdit']").click()
  
  const expectedName="Ms.  Uma"
  const leadName= await page.textContent("//slot[@name='primaryField']/lightning-formatted-name")
  expect(leadName).toEqual(expectedName)

})