import { test, expect } from '@playwright/test';

test('TC05: Validate largest due person from table', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/tables');
  const rows = await page.locator('#table1 tbody tr').all();
  
  const tableData: string[][] = [];

  // build 2D array
  for (const row of rows) {
    const cells = await row.locator('td').allTextContents();
    tableData.push(cells);
  }  
  // lấy danh sách due
  const dues = tableData.map(row => Number(row[3].replace('$', '')));

  // tìm giá trị nhỏ nhất
  const maxDue = Math.max(...dues);

  // lấy tất cả person có due = max
  const personsWithMaxDue = tableData
    .filter(row => Number(row[3].replace('$', '')) === maxDue)
    .map(row => `${row[1]} ${row[0]}`);

  console.log(personsWithMaxDue);

  // validate người có due lớn nhất
  expect(personsWithMaxDue).toContain('Jason Doe');
});

test('TC05: Web Table - Validate smallest due person', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');
  
    const rows = await page.locator('#table1 tbody tr').all();
  
    const tableData: string[][] = [];
  
    // build 2D array
    for (const row of rows) {
      const cells = await row.locator('td').allTextContents();
      tableData.push(cells);
    }  
    // lấy danh sách due
    const dues = tableData.map(row => Number(row[3].replace('$', '')));
  
    // tìm giá trị nhỏ nhất
    const minDue = Math.min(...dues);
  
    // lấy tất cả person có due = min
    const personsWithMinDue = tableData
      .filter(row => Number(row[3].replace('$', '')) === minDue)
      .map(row => `${row[1]} ${row[0]}`);
  
    console.log(personsWithMinDue);
  
    // validate 2 người có due nhỏ nhất
    expect(personsWithMinDue).toStrictEqual(['John Smith','Tim Conway']);
    // expect(personsWithMinDue).toContain('Tim Conway');
});