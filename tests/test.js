const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {

    //Set Chrome option
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu')
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        //Send driver to website
        await driver.get("http://3.81.20.62/");

        // Find and click on a cell
        let cell = await driver.findElement(By.className('td_game'));
        await cell.click();

        // Wait for a brief moment to ensure the update is reflected (adjust as necessary)
        await driver.sleep(1000);

        // Check the content of the cell after click
        let cellContent = await cell.getAttribute('innerHTML');

        // Check if it shows "<span class=\"x\">&times;</span>"
        if (cellContent.trim() === '<span class="x">&times;</span>') {
            console.log('Test Success');
        } else {
            console.log('Test Failed');
        }
    } catch (error) {
        console.log('An error accurred:', error);
    } finally {
        await driver.quit();
    }

}
test_case();