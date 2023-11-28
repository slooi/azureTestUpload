import request from "supertest"
import { app } from "./express"

describe("Setting basic routes",()=>{
	it("fetch / route",()=>{
		request(app)
			.get("/")
			.then(res=>{
				expect(res.text).toBe("<h1>Hello :)</h1>")
			})
	})
})