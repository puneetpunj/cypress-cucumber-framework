import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import JetstarHomePage from '../../../pages/jetstar/jetstar.com';


When(`I click on Sign In button`, () => {
    JetstarHomePage.clickSignIn();
});

When(`I enter {string} and {string}`, (username, password) => {
    JetstarHomePage.enterCredentials(username, password);
});

Then(`I get an invalid email error message`, () => {
    JetstarHomePage.checkInvalidEmailErrorMessage();
})