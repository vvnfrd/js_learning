const request = require("supertest");

const {app} = require("../app");

it("should return Hello Test", function(done){

    request(app)
        .get("/")
        .expect("Hello Test")
        .end(done);
});