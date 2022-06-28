import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function()
{
    console.log("Before opening the browser...");
    await browser.url("https://www.google.com")
    await browser.pause(7000)
    console.log("After opening the browser...");
})

When(/^Search with (.*)$/, async function(searchItem) {
    console.log('>> searchItem: ${searchItem}');
    let ele = await $('[name=q]')
    ele.click()
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $('<h3>')
    ele.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log('>> expectedURL: ${expectedURL}');
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})