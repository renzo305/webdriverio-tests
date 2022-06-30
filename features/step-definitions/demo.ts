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

Given(/^A web page is opened$/, async function(){
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function(){
    /**
     * 1. Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just add value
     * 3. Click and type
     * 4. Slow typing
     * 
     */

    // let inputs = await $['a[@href="Inputs"]']
    // inputs.click()
    let num = "12345"
    let strNum = num.toString()

    let ele = await $('[type=number]')
    //await ele.addValue()
    //await ele.click()
    //await ele.setValue(strNum)
    //type slowly
    for(let i = 0; i < strNum.length; i++){
        let charStr = strNum.charAt(i)
        await browser.pause(500)
        await browser.keys(charStr)
    }

    await browser.closeWindow()
})