var Excel = require('exceljs');

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Writing to Excel File Operation', function() {

		// create object for workbook
		var wb = new Excel.Workbook();
		// read xlsx file type
		wb.xlsx.writeFile("/Users/saikiran/Desktop/Test.xlsx").then(function(){
			//sheet object
			var sheet = wb.getWorksheet("Master");


			// write to excel sheet
			sheet.getRow(2).getCell(3).value = 65


			//console.log("Row-1 | Cell-3 - "+sheet.getRow(1).getCell(3).tostring);
//			console.log(sheet.rowCount);

			
		});
	});
});

