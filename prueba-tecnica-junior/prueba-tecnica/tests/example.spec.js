// @ts-check
import { test, expect } from '@playwright/test'

const url = 'http://localhost:5173'

test('has text', async ({ page }) => {
  await page.goto(url)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgContent = await img.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imgContent?.startsWith('https://cataas.com/')).toBeTruthy()
})
