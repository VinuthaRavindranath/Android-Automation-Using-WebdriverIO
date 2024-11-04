describe('Login Test', () => {

    it('should log in with valid credentials', async () => {
        // Wait for the app to load (optional)
        await driver.pause(8000);

        // Locate the username input field using accessibility ID
        
        const usernameField = await $('~test-Username');
        await usernameField.waitForDisplayed({ timeout: 30000 }); 
        
        // Clear the field (optional) and send the username
        await usernameField.setValue('standard_user');  // Replace with actual username

        // Locate the password input field using accessibility ID
        const passwordField = await $('~test-Password');
        
        // Clear the field (optional) and send the password
        await passwordField.setValue('secret_sauce');  // Replace with actual password

        // Locate and click the login button
        const loginButton = await $('~test-LOGIN');
        await loginButton.click();

        // Optionally, add assertions to verify successful login
        // const successMessage = await $('~success-message-selector'); // Change selector as needed
        // await expect(successMessage).toBeDisplayed(); // Check if success message is displayed
    });
});