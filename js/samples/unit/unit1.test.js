import { sayHello } from "./unit1";

describe('Say hello connard', ()=>{
    it('should return helloworld', ()=> {
        expect(sayHello()).toBe("Hello, World")
    });

    it('should return Thomas', ()=> {
        expect(sayHello("Thomas")).not.toBe("Hello, Thomas")
    });
})