//UC11 Employee payroll class
class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get name() { return this._name;}
    set name(name) {
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
        if( nameRegex.test(name)){
            this._name = name;
        }
        else{
            throw "Name is incorrect format";
        }
    }        

    //method
    toString(){
        const option = { year: 'numeric', month : 'long', day : 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",option);
        return "id ="+this.id+", name = "+this.name+", salary = "+this.salary+", gender = "+this.gender+", startDate "+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Vishal",50000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let newemployeePayrollData = new EmployeePayrollData(2,"Terissa",70000,"Female",new Date());
console.log(newemployeePayrollData.toString());
