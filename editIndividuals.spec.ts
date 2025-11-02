/* Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Individuals tab
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name  */

import {test, expect} from '@playwright/test'

test("edit individuals", async({page})=>{

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
    const reqName="Uma D"
    await page.locator("input[name='Individual-search-input']").fill(reqName)
    await page.locator("input[name='Individual-search-input']").press('Enter');

    await page.locator("//span[text()='Show Actions']/preceding-sibling::lightning-primitive-icon").first().click()
    await page.locator("a[title='Edit']").click()

    await page.locator("(//span[text()='Salutation']/following::div/div[@class='uiPopupTrigger'])[1]").click()
    await page.locator("//a[@title='Mr.']  ").click()
    await page.locator("input[placeholder='First Name']").fill("Tester")
    await page.locator("//button[@title='Save & New']/following-sibling::button[@title='Save']").click()

    const expectedFirstName = "Tester";
    const actualValue = await page.textContent("//span[text()='Tester Uma D']");
    // const actualFirstName = actualValue.split(" ")[0]?? "" // Extracts 'Tester' from 'Tester Uma D'

    // expect(actualFirstName).toBe(expectedFirstName); 

    let actualFirstName = "";
    if (actualValue) {
        actualFirstName = actualValue.split(" ")[0];
    }
    expect(actualFirstName).toBe(expectedFirstName);

     


})