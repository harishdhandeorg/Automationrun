/*import LoginPage from "../pageobjects/LoginPage";
import CategoriesPage from "../pageobjects/CategoriesPage";

describe("Test for Verification of Categories in Blaze Demo", () => {
  it("Open URL", async () => {
    await browser.url("https://www.demoblaze.com/index.html");
    await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html");
  });

  it("Click on Login Link and Enter Creds", async () => {
    await LoginPage.login("admin", "admin");
  });

  it("Click on Categories and it will show the data", async () => {
    await CategoriesPage.goToCategories();
    // Add assertion or further steps here
  });
});*/
import { jiraObject } from '../../utils/tcupdate.ts';
import * as AssertionError from 'assert';
describe("Test for Verification of Categories in Blaze Demo", () => {
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
          
          it("Open URL", async () => {
           try{
            await browser.url("https://www.demoblaze.com/index.html")
            await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html")
            zephyrVar.addTestStepStatus('Pass');
            zephyrVar.addActualResultString('Step Passed- URL opened ');
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
          zephyrVar.addActualResultString('Step Passed, Click on Login Link and Enter Creds worked');
          }catch (err) {
          //flag to Set Failure occured
          zephyrVar.statusFlagIncreamenter();
          //JiraSyncStatements
          zephyrVar.addTestStepStatus('Fail');
          zephyrVar.addActualResultString('Step Failed, Click on Login Link and Enter Creds  didnt worked');
          throw  AssertionError({ message: err });
        }

          });
          it("Click on to Categories and it will show the data", async () => {
           try{
            await browser.$("//*[@id=\"itemc\"]").click()
            await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html#")
            zephyrVar.addTestStepStatus('Pass');
            zephyrVar.addActualResultString('Step Passed, Click on to Categories and data shows up');
           }catch (err) {
            //flag to Set Failure occured
            zephyrVar.statusFlagIncreamenter();
            //JiraSyncStatements
            zephyrVar.addTestStepStatus('Fail');
            zephyrVar.addActualResultString('Step Failed, Categries didnt find or data didnt show up');
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
                process.env.testCaseKey3,
                process.env.testCycleKey,
                zephyrVar.gettestcaseStatus,
                countIt
              );
             console.log(jSync);
            }
          });         
});
