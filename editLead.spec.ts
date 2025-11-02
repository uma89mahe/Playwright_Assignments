/* Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button
12.Click Edit
13.Change the company name
14.Click Update */

/*http://leaftaps.com/opentaps/control/main
credentials:
DemoSalesManager
crmsfa
*/

import {test,expect} from '@playwright/test'

test("Editing the Lead", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("DemoSalesManager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    await page.locator("//div[@class='crmsfa']/a").click()
    await page.locator("(//div[@class='frameSectionHeader']//a)[2]").click()
    await page.locator("(//div[@class='frameSectionBody']//a)[2]").click()
    await page.locator("(//input[@name='companyName'])[2]").fill("Innovation")
    await page.locator("input[id=createLeadForm_firstName]").fill("Uma")
    await page.locator("input[id=createLeadForm_lastName]").fill("D")
    await page.locator(".smallSubmit").click()
    await page.locator("//div[@class='frameSectionExtra']/a[text()='Edit']").click()
    await page.locator("(//input[@name='companyName'])[2]").clear()
    await page.locator("(//input[@name='companyName'])[2]").fill("Innovationalist")
    await page.locator("input[class=smallSubmit]").first().click()
    
    
})