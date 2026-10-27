import {test , expect} from '@playwright/test';
test('page has correct title', async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Swag Labs');
});

test('Url is correct',async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('Login button is visible',async ({page}) =>{
    await page.goto('/');
    await expect(page.getByRole('button',{name:'Login'})).toBeVisible();
});

test('User can Log in',async ({page}) =>{
    const username = 'standard_user';
    const password = 'secret_sauce';
    await page.goto('/');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL(/inventory/);
})

test('wrong password shows an error', async({page})=>{
const username='standard_user';
const password='wrong_password';
await page.goto('/');
await page.getByPlaceholder('Username').fill(username);
await page.getByPlaceholder('Password').fill(password);
await page.getByRole('button',{name:'Login'}).click();
await expect(page.getByText('Username and password do not match')).toBeVisible();
});

test('locked user sees an error',async({page})=>{
    const username='locked_out_user';
    const password='secret_sauce';
    await page.goto('/');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Sorry, this user has been locked out')).toBeVisible();
});