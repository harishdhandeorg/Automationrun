/*
import LoginPage from "../pageobjects/LoginPage";
import { expect } from '@wdio/globals'
describe("Perform Login and Logout with Test", () => {
  it("Open URL", async () => {
    await browser.url("https://www.demoblaze.com/index.html");
    await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html");
  });

  it("Click on Login Link and Enter Creds", async () => {
    await LoginPage.login("admin", "admin");
  });

  it("Click on Logout and check if User Logs out", async () => {
    // Add logout steps here
  });
});
*/

import { jiraObject } from '../../utils/tcupdate.ts';
import * as AssertionError from 'assert';


//Start Test case 2..
describe("Perform Login and Logout with Test", () => {
     //set up to Establish Jira Execution
    
     let countIt = 0;
     const zephyrVar = new jiraObject();
     //Setting Count Iteration and TestItegration Counters for Comparison in end
     before(function () {
       countIt = 3; //count is no. of steps used
     });
     beforeEach(function () {
       //here we are increasing the Test iteration
       zephyrVar.incrementTestIteration;
     }); 
         //JiraSync Statement Starts here against each step
                it("Open URL", async () => {
                      try{
                      await browser.url("https://www.demoblaze.com/index.html")
                      await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html")
                      zephyrVar.addTestStepStatus('Pass');
                      zephyrVar.addActualResultString('Step Passed URL Opened');
                      }catch (err) {
                      //flag to Set Failure occured
                      zephyrVar.statusFlagIncreamenter();
                      //JiraSyncStatements
                      zephyrVar.addTestStepStatus('Fail');
                      zephyrVar.addActualResultString('Step Failed, URL didnt open');
                      throw  AssertionError({ message: err });
                    }
                });
                it("Click on Login Link and Enter Creds", async () => {
                      try{
                      await browser.$("#login2").click()
                      await browser.$("#loginusername").click()
                      await browser.$("#loginusername").setValue("admin")
                      await browser.$("#loginpassword").click()
                      await browser.$("#loginpassword").setValue("admin")
                      await browser.$("//*[@id=\"logInModal\"]/div/div/div[3]/button[2]").click()
                    // await browser.$("//*[@id=\"logInModal\"]/div/div/div[3]/button[2]")
                    zephyrVar.addTestStepStatus('Pass');
                    zephyrVar.addActualResultString('Step Passed Login Worked');
                      }catch (err) {
                    //flag to Set Failure occured
                    zephyrVar.statusFlagIncreamenter();
                    //JiraSyncStatements
                    zephyrVar.addTestStepStatus('Fail');
                    zephyrVar.addActualResultString('Clicking to Login didnt work');
                    throw  AssertionError({ message: err });
                    }


                });
                it("Click on Logout and check if User Logsout", async () => {
                    try{
                  await browser.$("#logout2").click()
                  await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html#")
                  zephyrVar.addTestStepStatus('Pass');
                  zephyrVar.addActualResultString('Step Passed Logout Worked');
                  }catch (err) {
                    //flag to Set Failure occured
                    zephyrVar.statusFlagIncreamenter();
                    //JiraSyncStatements
                    zephyrVar.addTestStepStatus('Fail');
                    zephyrVar.addActualResultString('Clicking to logout didnt logout the user');
                    throw  AssertionError({ message: err });
                    }
                });

            after(async function () {
              //setting Variable to fail before sending it for next
              if (zephyrVar.getstatusflag > 0) {
                zephyrVar.settestcaseStatus = 'Fail';
              }
          
              //Validating if JiraSyncFlag is true or not
              if (process.env.jiraSyncflag == 'true') {
                const jSync = await zephyrVar.jiraSync(
                  process.env.projectKey,
                  process.env.testCaseKey2,
                  process.env.testCycleKey,
                  zephyrVar.gettestcaseStatus,
                  countIt
                );
               console.log(jSync);
              }
            });    
});
