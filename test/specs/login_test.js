import LoginPage from '../../pages/login_page'

describe('Login Test', () => {

    it('should log in with valid credentials', async () => {

        await LoginPage.login('standard_user', 'secret_sauce');

    });
});