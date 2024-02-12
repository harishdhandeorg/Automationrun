import { $ } from '@wdio/globals'
import Page from './page.js';

class ContactsPage extends Page{
    private contactLink = $("li:nth-of-type(2) > a");
    private closeContactPopupButton = $("#exampleModal button.btn-secondary");
  
    async openContactPopup(): Promise<void> {
      await this.contactLink.click();
    }
  
    async closeContactPopup(): Promise<void> {
      await browser.pause(1000);
      await this.closeContactPopupButton.click();
    }
  }
  
  export default new ContactsPage();