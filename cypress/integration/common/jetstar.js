import { Given } from 'cypress-cucumber-preprocessor/steps';
import JetstarHomePage from '../../pages/jetstar/jetstar.com';

Given(/^I visit Jetstar website$/, () => {
    JetstarHomePage.visit();
});


