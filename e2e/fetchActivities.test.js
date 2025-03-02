//INTEGRATION TEST: I-002
describe('Fetching Available Activities', () => {
    beforeAll(async () => {
      await device.launchApp({ newInstance: true });
    });
  
    it('should navigate to activities screen and display content', async () => {
      // 1 - ensure splash screen is visible
      await expect(element(by.id('splashScreen'))).toBeVisible();
  
      // 2 - tap "Let's begin!" button
      await element(by.id('beginButton')).tap();
  
      // wait for the Home screen to load
      await waitFor(element(by.id('activitiesScreen')))
        .toBeVisible()
        .withTimeout(10000);
  
      // 4 - wait for UI to settle
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      // 5 - verify that the main view exists
      await expect(element(by.id('allActivities')))
        .toExist();
    });
  });
  
  
  
  