const test = require("ava")
const btoa = require(".")

test("main", t => {
	t.is(btoa("Hello World"), "SGVsbG8gV29ybGQ=")
})
