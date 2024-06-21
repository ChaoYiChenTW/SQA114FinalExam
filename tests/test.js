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
        console.log('Website opened');
        driver.sleep(1000);

        let playButton = driver.findElement(By.id('okBtn'));
        playButton.click();
        console.log('Play button clicked');

        // Find and click on a cell
        let cell = driver.findElement(By.id('cell0'));
        cell.click();
        console.log('Cell clicked');

        // Wait for a brief moment to ensure the update is reflected (adjust as necessary)
        driver.sleep(1000);

        // Check the content of the cell after click
        let cellContent = cell.getAttribute('innerHTML');

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