/*
import ContactsPage from "../pageobjects/ContactsPage";

describe("Test to Validate the Contacts", () => {
  it("Open URL", async () => {
    await browser.url("https://www.demoblaze.com/index.html");
    await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html");
  });

  it("Open the Contact Popup and Close", async () => {
    await ContactsPage.openContactPopup();
    await ContactsPage.closeContactPopup();
  });
});
*/
import { jiraObject } from '../../utils/tcupdate.ts';
import * as AssertionError from 'assert'

describe("Test to Validate the Contacts ", () => {
        //set up to Establish Jira Execution
        let countIt = 0;
        const zephyrVar = new jiraObject();
       // console.info("started test");
        //Setting Count Iteration and TestItegration Counters for Comparison in end
        before(function () {
          countIt = 2; //count is no. of steps used
          //console.info("Before function test");
        });
        beforeEach(function () {
          //here we are increasing the Test iteration
          zephyrVar.incrementTestIteration;
          //console.info("Before each func test");
        });     
        it("Open URL", async () => {
          try{
           // console.info("try console info test");
          await browser.url("https://www.demoblaze.com/index.html")
          await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html")
          zephyrVar.addTestStepStatus('Pass');
          zephyrVar.addActualResultString('Step 1 is Passed and URL opened');
        }catch (err) {
          //flag to Set Failure occured
          zephyrVar.statusFlagIncreamenter();
          //JiraSyncStatements
          zephyrVar.addTestStepStatus('Fail');
          zephyrVar.addActualResultString('Step Failed, URL didnt open');
          throw  AssertionError({ message: err });
        }
        });
        it("Open the Contact Popup and Close", async () => {
          try{
          await browser.$("li:nth-of-type(2) > a").click()
          await browser.pause(1000)
          await browser.$("#exampleModal button.btn-secondary").click()
          zephyrVar.addTestStepStatus('Pass');
          zephyrVar.addActualResultString('contact open and closed');
        }catch (err) {
          //flag to Set Failure occured
          zephyrVar.statusFlagIncreamenter();
          //JiraSyncStatements
          zephyrVar.addTestStepStatus('Fail');
          zephyrVar.addActualResultString('Step Failed, pop up didnt open');
          throw  AssertionError({ message: err });
        }

        });

        after(async function () {
          //setting Variable to fail before sending it for next
         // console.log("Äfter test started")
          if (zephyrVar.getstatusflag > 0) {
            zephyrVar.settestcaseStatus = 'Fail';
         //   console.log("in first jirazephyr condition")
          }
      
          //Validating if JiraSyncFlag is true or not
          if (process.env.jiraSyncflag == 'true') {
           // console.log("in second jirazephyr condition")
            const jSync = await zephyrVar.jiraSync(
              process.env.projectKey,
              process.env.testCaseKey4,
              process.env.testCycleKey,
              zephyrVar.gettestcaseStatus,
              countIt
            );
         //   console.log("printing jsync")
          console.log(jSync);
          }
        });   
});
