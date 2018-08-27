var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Excel.js', 'Calculator_Dataprovider.js', 'PractiseProject.js','CalculatorTest.js'],


		onPrepare :function() {
			browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		},

		suites: {
			smoke: ['Calculator_Dataprovider.js', 'PractiseProject.js'],
			regression: ['./Tests/CalculatorTest.js']
		}

};

