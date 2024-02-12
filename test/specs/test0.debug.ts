import * as dotenv from "dotenv";
//import * as assert from  "assert";
dotenv.config();

describe("debug", () => {
   /* it("debug - child", async () => {
      console.log(process.env.JIRAURL as string);
      console.log(process.env.JIRAURLPARAM as string);
      console.log(process.env.JIRATOKENKEY as string);

    });*/
      it("Hit the URL in Browser", async () => {

                    await browser.url("https://www.demoblaze.com/index.html")
 
          });
          it("Vaidate the Correct URL is present or not", async () => {

              
                    await browser.pause(1000);
                    await expect(browser).toHaveUrl("https://www.demoblaze.com/index.html")


          });

  });
  