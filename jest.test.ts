import request from "supertest"
import { app } from "./express"

describe("Setting basic routes",()=>{
	it("fetch / route",()=>{
		request(app)
			.get("/")
			.then(res=>{
				console.log(res)
				expect(res.text).toBe("hi")
			})
	})
})