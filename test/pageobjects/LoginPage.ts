import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page{
    private loginLink = $("#login2");
    private usernameInput = $("#loginusername");
    private passwordInput = $("#loginpassword");
    private loginButton = $("#logInModal button.btn-primary");
  
    async login(username: string, password: string): Promise<void> {
      await this.loginLink.click();
      await this.usernameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  
  export default new LoginPage();