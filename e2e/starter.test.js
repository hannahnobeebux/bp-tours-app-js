describe('Verifying Detox works', () => {
  it('should launch the app and show the splash screen', async () => {
    await device.launchApp({ newInstance: true });
    await expect(element(by.id('splashScreen'))).toBeVisible();
  });
});