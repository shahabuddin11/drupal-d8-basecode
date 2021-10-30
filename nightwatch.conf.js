module.exports = {
    src_folders : ["tests"],
    output_folder : "reports",
   
    // webdriver: {
    //   start_process: true,
    //   server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    //   port: 4444,
    //   host: "localhost"
    // },
    // webdriver: {
    //   start_process: true,
    //   server_path: require("chromedriver").path,
    //   port: 9512,
    // },
    // webdriver: {
    //     start_process : true,
    //     server_path: "node_modules/.bin/geckodriver",
    //     cli_args: [
    //       "--log", "debug"
    //     ],
    //     "port": 0
    //   },
      "test_settings" : {
        "default" : {
          "desiredCapabilities" : {
            "browserName" : "chrome",
            "chromeOptions": {
              "args" : ["--headless","--no-sandbox"]
            },
            "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
          }
        }
      }
};