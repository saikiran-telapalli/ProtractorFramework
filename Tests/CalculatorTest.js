var calc_obj = require("../Calculator_Objects.js");

var data = require('../Reader/Data.js');
	
describe('Chain locators demo',function() {  


	beforeEach(function() {
		calc_obj.getURL();
	})

	it('Testing Calculator Functionality',function() {
		

//		repeater ,  chain locators, And css for identical tags

		calc_obj.firstinput.sendKeys(data.Datadriver.firstinput);
		calc_obj.secondinput.sendKeys(data.Datadriver.secondinput);

		calc_obj.goButton.click();

		calc_obj.result.getText().then(function(text)
				{

			console.log(text);
			expect(text).toBe(data.Datadriver.result);
				})


//				element(by.model("operator")).element(by.css("option:nth-child(4)")).click();


	})
	
	afterEach(function() {
		//Here i can write the code like 1.Take screenshots  2.Close browser
		console.log("Test Completed");
		
	})

})