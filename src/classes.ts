// Deparmtnet class template
abstract class Department {
  //   Private key word makes methods and properties only accesible within the child object
  //   readonly keyword for properties that should never change
  //   Protected key word allows the property to be accessible from any class that extends the parent class
  //   Static key word allows us to use methods and properties without initializing a child class
  //   Abstract allows us to override parent class methods from child classes
  protected employees: string[] = [];
  static fiscalYear = 2022;

  constructor(protected readonly id: string, private name: string) {}

  //   The this keyword refers to an instance of the Department class
  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.name);
    console.log(this.employees);
  }
}

// ITDepartment class
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // Super is used when we extend from a parent class
    // Calls the constructor of the parent class inside the child class
    super(id, "IT");

    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID :" + this.id);
  }
}

// AccountingDepartment class
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecetReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please enter a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(this.instance){
        return this.instance;
    }

    this.instance = new AccountingDepartment("d3", []);
    return this.instance
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accounting Department - ID :" + this.id);
  }
}

const employee1 = Department.createEmployee("Petkan");
console.log(employee1);
console.log("The Fiscal year is : " + Department.fiscalYear);

// Instancce of ITDepartment class
const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Phil");
it.describe();
it.printEmployeeInformation();


// Instance of Accounting Department class
// const accounting = new AccountingDepartment("a1", []);
const accounting = AccountingDepartment.getInstance();
console.log(accounting)

accounting.describe();

