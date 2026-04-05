import { test, expect } from './fixtures/the-internet.fixture';
import fs from 'fs';

test.use({ acceptDownloads: true });

test('download file', async ({ downloadPage }) => {
    
    await downloadPage.goto();
    
    const fileName = 'Jpeg_with_exif.jpeg';
    const filePath = await downloadPage.downloadFile(fileName);
    
    expect(fs.existsSync(filePath)).toBeTruthy();
});