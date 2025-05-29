const operations = require("./operations");
const assert = require("assert");
 
it("should multiply two numbers", function(){

    const expected = 15;
    const result = operations.multiply(3, 5);
    assert.strictEqual(result, expected)
});

it("shoud async multiply two numbers", function(done){
     
    const expectedResult = 12;
    operations.multiplyAsync(4, 3, function(result){
        if(result!==expectedResult){
            throw new Error(`Expected ${expectedResult}, but got ${result}`);
        }
        done();
    });
});