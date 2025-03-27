import { test, expect } from '@playwright/test';

test('search and coverage', async ({ page }) => {
  await page.goto('');

  // check if searchbar is visible
  await expect(page.getByTestId('search-bar')).toBeVisible();

  // check if error shows when unknown hospital is entered
  await page.getByTestId('search-bar').fill('unknown service provider');
  await expect(page.getByTestId('no-service-provider-found')).toBeVisible();

  // check if service provider can be selected
  await page.getByTestId('search-bar').fill('Hirslanden Klinik St. Anna');
  await page.getByTestId('autocomplete-option').first().click();

  // check if coverage is shown
  await expect(page.getByTestId('coverage-information')).toBeVisible();

  // check if multiple types are shown
  await page
    .getByTestId('search-bar')
    .fill('Universitäts-Kinderspital Zürich-Eleonorenstiftung');
  await page.getByTestId('autocomplete-option').first().click();
  await expect(page.getByTestId('coverage-information')).toHaveCount(3);

  // check if maxRateNote is shown for certain providers
  await page.getByTestId('search-bar').fill('Hirslanden Clinique La Colline');
  await page.getByTestId('autocomplete-option').first().click();
  await expect(page.getByTestId('max-rate-note')).toBeVisible();
});
