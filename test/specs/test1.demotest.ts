import { jiraObject } from '../../utils/tcupdate.ts';
import * as AssertionError from 'assert';

//Test Case 1 starts here
describe("Opening Demo Page", () => {
     //set up to Establish Jira Execution
    
      let countIt = 0;
      const zephyrVar = new jiraObject();
      //Setting Count Iteration and TestItegration Counters for Comparison in end
      before(function () {
        countIt = 2; //count is no. of steps used
      });
      beforeEach(function () {
        //here we are increasing the Test iteration
        zephyrVar.incrementTestIteration;
      }); 

     //JiraSync Statement Starts here against each step
          it("Hit the URL in Browser", async () => {
                    try {
                    await browser.url("https://www.demoblaze.com/index.html")
                    zephyrVar.addTestStepStatus('Pass');
                    zephyrVar.addActualResultString('URL opened Sucessfully');
                  } catch (err) {
                    //flag to Set Failure occured
                    zephyrVar.statusFlagIncreamenter();
                    //JiraSyncStatements
                    zephyrVar.addTestStepStatus('Fail');
                    zephyrVar.addActualResultString('Step Failed, URL didnt open');
                    throw  AssertionError({ message: err });
                  }
          });
          it("Vaidate the Correct URL is present or not", async () => {

                  try {
                    await browser.pause(1000);
                    await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html")
                    zephyrVar.addTestStepStatus('Pass');
                    zephyrVar.addActualResultString('Page is correct');
                  } catch (err) {
                    //flag to Set Failure occured
                    zephyrVar.statusFlagIncreamenter();
                    //JiraSyncStatements
                    zephyrVar.addTestStepStatus('Fail');
                    zephyrVar.addActualResultString('Step Failed, Page opened is worng');
                    throw AssertionError({ message: err });
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
                process.env.testCaseKey1,
                process.env.testCycleKey,
                zephyrVar.gettestcaseStatus,
                countIt
              );
             console.log(jSync);
            }
          });    
});
