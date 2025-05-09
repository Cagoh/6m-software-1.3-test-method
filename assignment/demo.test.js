// the require() is used for managing dependencies and modules
// in this case, the files q2-arrays-loops and q3-objects are modules for this file.
// const {} is what we call object destructuring and it allows us to unpack properties from objects into variables.
const {studentList, printStudentNames} = require("./q2-arrays-loop");
const {convert} = require("./q3-objects");

//The describe () creates a block that groups together several related tests
describe("Demo", ()=>{
    //it() describes a single test
    it("should test the printStudentNames function of q2", ()=>{
        //The spyOn creates a mock function based on the method inside, in this case console.log
        const spyFn = jest.spyOn(console, "log");
        printStudentNames();
        //Methods can be chained to check if values meet certain conditions
        //toHaveBeenCalledTimes() expects the function to be called x number of times
        expect(spyFn).toHaveBeenCalledTimes(studentList.length);
    })

    it("should test the convert function of q3", ()=>{
        const keyArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
        const valueArr = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];

        const result = convert(keyArr, valueArr);
        //the toBe() can be used to match specific values
        expect(result["NLB1"]).toBe("Lord of the Rings");
        expect(result["NLB2"]).toBe("Programming for Dummies");
        expect(result["NLB3"]).toBe("Introduction to Software Testing");
        expect(result["NLB4"]).toBe("How to be a Software Developer");
    })
})
//So when the command `npm run test` is run, it calls the test suite and runs the individual tests.
