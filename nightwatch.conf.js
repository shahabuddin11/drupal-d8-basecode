module.exports = {
    src_folders : ["tests"],
    output_folder : "reports",
   
    // webdriver: {
    //   start_process: true,
    //   server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    //   port: 4444,
    //   host: "localhost"
    // },  
    test_settings: {
        default: {
          launch_url: process.env.BASE_URL,
        },
        selenium: {
          selenium: {
            start_process: true,
            server_path: require("selenium-server").path,
            port: 4444,
            cli_args: {
              "webdriver.gecko.driver": require("geckodriver").path,
              "webdriver.chrome.driver": require("chromedriver").path,
            },
          },
          webdriver: {
            start_process: false,
          },
        },
    
        chrome: {
          extends: "selenium",
          desiredCapabilities: {
            browserName: "chrome",
            chromeOptions: {
              args: ["--headless", "--no-sandbox", "--disable-gpu"],
              w3c: false,
            },
          },
        },
    
        firefox: {
          extends: "selenium",
          desiredCapabilities: {
            browserName: "firefox",
            "moz:firefoxOptions": {
              args: ["--headless"],
            },
          },
        },
      },
  };