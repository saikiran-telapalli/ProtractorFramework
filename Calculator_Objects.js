function calc(){
	
	
	//properties
	this.firstinput = element(by.model("first"));    // State = Behaviour
	this.secondinput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
	
	//Methods
	this.getURL = function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/');
	}
}

module.exports = new calc();
