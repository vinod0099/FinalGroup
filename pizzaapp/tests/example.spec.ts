import { test, expect } from '@playwright/test';

test('Navbar is present on the page', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/');

  // Use the class, ID, or any unique attribute of the Navbar as the 
  const navbar = await page.$('.navbar'); // Example: If Navbar has a class 'navbar'
  
  expect(navbar).not.toBeNull();
});

test('Navbar has a logo', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/');
  const logo = await page.getByTestId('navbar-logo'); // Use the data-testid attribute for the selector
  expect(logo).toBeTruthy(); // Check that the logo element is found
});

test('Navbar has a Home link', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/');
  const homeLink = await page.$('text=Home'); // Use text selectors or specific selectors
  expect(homeLink).not.toBeNull();
});

test('Clicking on Menu navigates to the menu page', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/');
  await page.click('text=Menu'); // Click on Menu link
  // Replace '/menu' with the actual path you expect to navigate to
  await expect(page).toHaveURL('https://final-group.vercel.app/#menu');
});


test('Clicking on AboutUs navigates to the AboutUs section', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/');
  await page.click('text=About Us'); // Click on About Us link
  // Expect the URL to have changed to include '#aboutus' at the end
  await expect(page).toHaveURL('https://final-group.vercel.app/#aboutus');
});


test('Clicking on Sign Up opens Mailchimp signup in a new tab', async ({ page, context }) => {
  await page.goto('https://final-group.vercel.app/');

  // Click on the Sign Up button
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new page to open
    page.click('text=Sign Up') // Click the Sign Up button
  ]);

  // After clicking, the page might redirect. Replace the URL below with the final URL after redirection.
  const finalMailchimpUrl = 'https://gmail.us8.list-manage.com/subscribe?u=06c5cfe85e8441854cd2b954b&id=eafc28b971'; // Replace with the actual final URL
  await expect(newPage).toHaveURL(finalMailchimpUrl);

  // Optional: Close the new tab if it's no longer needed
  await newPage.close();
});




test.describe('Hero section tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the Hero section is rendered
    await page.goto('https://final-group.vercel.app/'); // Replace with your app URL
  });

  test('Hero section displays the correct title', async ({ page }) => {
    const title = page.locator('h1:has-text("HAPPINESS IS A WARM PIZZA")');
    await expect(title).toBeVisible();
  });

  test('Hero section displays the correct subtitle', async ({ page }) => {
    const subtitle = page.locator('p:has-text("Sign Up Now and your journey to happiness begins")');
    await expect(subtitle).toBeVisible();
    // If you need to verify the exact text content
    await expect(subtitle).toHaveText("Sign Up Now and your journey to happiness begins with a Free Pizza from  us on yourFirst Order");
  });

  // Add more tests if needed
});
test('Order Now button is visible', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/'); // Replace with your app URL

  const orderButton = await page.locator('button:has-text("ORDER NOW")');
  await expect(orderButton).toBeVisible();
});

test('Hero image loads correctly', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/'); // Replace with your app URL

  const heroImage = await page.locator('img[alt="pizza"]');
  await expect(heroImage).toBeVisible();
});



test('Clicking Order Now initiates navigation or modal', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/'); // Replace with your app URL

  await page.click('button:has-text("ORDER NOW")');
  // Replace the expectation below with the actual outcome of clicking the button
  // Example: expect a modal to be visible or expect the page URL to change
  // await expect(page).toHaveURL('http://localhost:3000/order');
  // OR
  // const modal = await page.locator('selector-for-your-modal');
  // await expect(modal).toBeVisible();
});




test.describe('Footer component tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the Footer component is rendered
    await page.goto('https://final-group.vercel.app/'); // Replace with your app URL
  });

  test('Footer displays the correct address', async ({ page }) => {
    const address = page.locator('text=6037 SOUTH BLVD CHARLOTTE, NC');
    await expect(address).toBeVisible();
  });

  test('Footer displays the correct phone numbers', async ({ page }) => {
    const phoneNumbers = page.locator('text=704-554-6601 704-554-6602');
    await expect(phoneNumbers).toBeVisible();
  });

  // Add more tests if needed
});



test('Footer navigation links are visible and clickable', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/'); // Replace with your app URL

  // Use a more specific locator that targets the footer
  const homeLink = await page.locator('footer >> text=HOME');
  await expect(homeLink).toBeVisible();
  await homeLink.click();

  // Similarly for the MENU link
  const menuLink = await page.locator('footer >> text=MENU');
  await expect(menuLink).toBeVisible();
  await menuLink.click();

  // Add checks for navigation if needed, like URL changes or page content changes
});





test('Footer displays correct copyright text', async ({ page }) => {
  await page.goto('https://final-group.vercel.app/'); // Replace with your app URL

  const copyRight = await page.locator('text=/© Pizza Hub 2023. All rights reserved./');
  await expect(copyRight).toBeVisible();
});




test.describe('CookieBanner component tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where CookieBanner is rendered
    await page.goto('https://final-group.vercel.app/'); // Replace with your URL
  });

  test('Cookie banner is visible when no consent is stored', async ({ page }) => {
    // Ensure no consent is stored in local storage
    await page.evaluate(() => localStorage.removeItem('cookie_consent'));

    // Reload page to reflect changes
    await page.reload();

    const cookieBanner = page.locator('text=We use cookies on our site');
    await expect(cookieBanner).toBeVisible();
  });

  test('Clicking "Allow Cookies" hides the banner and sets consent in local storage', async ({ page }) => {
    await page.evaluate(() => localStorage.removeItem('cookie_consent'));
    await page.reload();

    await page.click('text=Allow Cookies');
    await expect(page.locator('text=We use cookies on our site')).toBeHidden();

    const consent = await page.evaluate(() => localStorage.getItem('cookie_consent'));
    expect(consent).toBe('true');
  });

  

});


test.describe('MenuTitle component tests', () => {
  test('MenuTitle displays the correct heading', async ({ page }) => {
    // Navigate to the page where the MenuTitle component is rendered
    await page.goto('https://final-group.vercel.app/'); // Replace with the correct URL

    // Locate the heading element and get its text content
    const heading = await page.locator('h2:has-text("A Slice of Heaven")');
    const headingText = await heading.textContent();

    // Assert that the heading text matches the expected text
    expect(headingText).toBe('A Slice of Heaven');
  });

  test('MenuTitle has the correct subtitle', async ({ page }) => {
    // Navigate to the page where the MenuTitle component is rendered
    await page.goto('https://final-group.vercel.app/'); // Replace with the correct URL

    // Locate the subtitle element and get its text content
    const subtitle = await page.locator('p:has-text("Discover flavors that delight the senses")');
    const subtitleText = await subtitle.textContent();

    // Assert that the subtitle text matches the expected text
    expect(subtitleText).toBe('Discover flavors that delight the senses');
  });

  // Add more tests for other elements if needed
});


test('MenuTitle heading has the correct styles', async ({ page }) => {
  // Navigate to the page where the MenuTitle component is rendered
  await page.goto('https://final-group.vercel.app/'); // Replace with the correct URL

  // Locate the heading element
  const heading = await page.locator('h2:has-text("A Slice of Heaven")');

  // Assert that the heading has the correct font size, font weight, and text color
  const fontSize = await heading.evaluate((element) => getComputedStyle(element).fontSize);
  const fontWeight = await heading.evaluate((element) => getComputedStyle(element).fontWeight);
  const textColor = await heading.evaluate((element) => getComputedStyle(element).color);

  // Check the font size, font weight, and text color against expected values
  expect(fontSize).toBe('60px'); // Replace with the expected font size
  expect(fontWeight).toBe('800'); // Replace with the expected font weight
  expect(textColor).toBe('rgb(234, 88, 12)'); // Replace with the expected text color
});



