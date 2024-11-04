// pageobjects/LoginPage.js

class LoginPage {
    get usernameField() {
        return $('~test-Username');
    }

    get passwordField() {
        return $('~test-Password');
    }

    get loginButton() {
        return $('~test-LOGIN');
    }

    async login(username, password) {
        await this.usernameField.waitForDisplayed({ timeout: 30000 });
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

}

export default new LoginPage();
