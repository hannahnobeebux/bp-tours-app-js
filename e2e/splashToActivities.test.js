//INTEGRATION TEST: I-001
describe('Splash to Activities Navigation', () => {
    beforeAll(async () => {
      await device.launchApp({ newInstance: true });
    });
  
    it('should display the splash screen and navigate to activities', async () => {
      await expect(element(by.id('splashScreen'))).toBeVisible();
  
      await element(by.id('beginButton')).tap();
  
      await expect(element(by.id('activitiesScreen'))).toBeVisible();
    });
  });
  