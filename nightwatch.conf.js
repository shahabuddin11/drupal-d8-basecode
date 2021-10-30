module.exports = {
    src_folders : ["tests"],
    output_folder : "reports",
   
    // webdriver: {
    //   start_process: true,
    //   server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    //   port: 4444,
    //   host: "localhost"
    // },
    webdriver: {
      start_process: true,
      server_path: require("firefoxdriver").path,
      port: 9512,
    },
    // firefox: {
    //     // extends: "selenium",
    //     desiredCapabilities: {
    //       browserName: "firefox",
    //       "moz:firefoxOptions": {
    //         args: ["--headless"],
    //       },
   
    test_settings: {
      default: {    
        desiredCapabilities: {
          browserName: 'firefox'
        }
      }
    }
  };