import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import { jiraObject } from '../../utils/tcupdate.ts';
import * as AssertionError from 'assert';

describe('My Login application', () => {
       //set up to Establish Jira Execution
       let countIt = 0;
       const zephyrVar = new jiraObject();
       //Setting Count Iteration and TestItegration Counters for Comparison in end
       before(function () {
         countIt = 1; //count is no. of steps used
       });
       beforeEach(function () {
         //here we are increasing the Test iteration
         zephyrVar.incrementTestIteration;
       });     
    it('should login with valid credentials', async () => {
        try{
            await LoginPage.open()

            await LoginPage.login('tomsmith', 'SuperSecretPassword!')
            await expect(SecurePage.flashAlert).toBeExisting()
            await expect(SecurePage.flashAlert).toHaveTextContaining(
                'You logged into a secure area!')
            zephyrVar.addTestStepStatus('Pass');
            zephyrVar.addActualResultString('Step Passed, Login with creds worked');
            
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
            if (zephyrVar.getstatusflag > 0) {
              zephyrVar.settestcaseStatus = 'Fail';
            }
        
            //Validating if JiraSyncFlag is true or not
            if (process.env.jiraSyncflag == 'true') {
              const jSync = await zephyrVar.jiraSync(
                process.env.projectKey,
                process.env.testCaseKey5,
                process.env.testCycleKey,
                zephyrVar.gettestcaseStatus,
                countIt
              );
             console.log(jSync);
            }
          });   
})