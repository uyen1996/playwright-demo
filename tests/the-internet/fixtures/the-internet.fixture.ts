import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxesPage } from '../pages/checkbox.page';
import { TablePage } from '../pages/table.page';
import { DownloadPage } from '../pages/download.page';


type TheInternetFixtures = {
    loginPage: LoginPage,
    checkboxesPage: CheckboxesPage,
    tablePage: TablePage,
    downloadPage : DownloadPage
}
export const test = base.extend<TheInternetFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkboxesPage: async ({ page }, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await use(tablePage);
    },
    downloadPage: async ({ page }, use) => {
        const downloadPage = new DownloadPage(page);
        await use(downloadPage);
    }
}); 
export { expect } from '@playwright/test';