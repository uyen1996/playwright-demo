import { type Page, type Locator, expect } from '@playwright/test';
import fs from 'fs';

export class DownloadPage {
    readonly page: Page;
    readonly downloadFolder: string = 'download';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/download');
    }

    async downloadFile(fileName: string) {
        const link = this.page.getByRole('link', { name: fileName });
        await expect(link).toBeVisible();
        await link.scrollIntoViewIfNeeded();
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            link.click(),
        ]);
        const suggestedFilename = download.suggestedFilename();
        expect(suggestedFilename).toBe(fileName);
        if (!fs.existsSync(this.downloadFolder)) {
            fs.mkdirSync(this.downloadFolder);
        }
        const filePath = `${this.downloadFolder}/${suggestedFilename}`;
        await download.saveAs(filePath);
        return filePath;
    }
}