import { $ } from '@wdio/globals'
import Page from './page.js';

class CategoriesPage extends Page{
    private categoriesLink = $("#itemc");
  
    async goToCategories(): Promise<void> {
      await this.categoriesLink.click();
    }
  }
  
  export default new CategoriesPage();