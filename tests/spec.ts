import { HomePage } from "../pages/HomePage";

describe('Test suite', ()=> {
    
    let homePage: HomePage = new HomePage();

    it('first Test', async ()=> {
        await homePage.get();
        await homePage.setName('nnaame');
        expect(await homePage.getGreetingText()).toBe('Hello nnaame!');
    })
})