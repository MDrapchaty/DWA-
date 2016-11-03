

var expect = require("chai").expect;
var tools = require("../lib/tools");


describe("Tools", function(){
	describe("printName()", function(){
		it("should print the last name first", function(){
			var results = tools.printName({ first: "Matt", last: "Drap"});

			expect(results).to.equal("Drap, Matt");
		});
	});

	describe("loadWiki()", function(done){
		
		this.timeout(5000);

		it("Load Abraham Lincoln's wikipedia page");

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html){
				expect(html).to.be.ok;
				done();
			});

	});

});

