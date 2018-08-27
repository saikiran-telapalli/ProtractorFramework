var Excel = require('exceljs');


describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Read from Excel File Operation', function() {

		// create object for workbook
		var wrkbook = new Excel.Workbook();

		// read xlsx file type
		wrkbook.xlsx.readFile("/Users/saikiran/Desktop/Test.xlsx").then(function(){
			//sheet object
			let sheet = wrkbook.getWorksheet("Master");

			let totalRowsIncludingEmptyRows = sheet.rowCount
			console.log("total nuumber of rows : "+totalRowsIncludingEmptyRows)

			// loop till end of row
			for(let i=2; i <=totalRowsIncludingEmptyRows; i++){
				let cellValue = sheet.getRow(i).getCell(2).toString();
				console.log("Column B value from the row '"+i+"': "+ cellValue)
			}
		});
	});
});


