class Employee {
  public name: string;
  public age: number;
  public salary: number;
  public tasks: string[];

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
  }


  public work(): void{
    const currentTask  = this.tasks.shift();
    if (currentTask) {
        this.tasks.push(currentTask);
        console.log(`${this.name} ${currentTask}`);
    } else {
        console.log(`${this.name} has no tasks assigned.`);
    }
    
  }

  public colectSalary(): void{
    console.log(`${this.salary} reciever ${this.getSalary()} this mounth.`);
    
  }

  public getSalary(): number {
    return this.salary;
  }
}


class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a simple task.`)
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a complicated task.`)
        this.tasks.push(`${this.name} is taking time off work.`)
        this.tasks.push(`${this.name} is supervising junior workers.`)
    }
}

class Manager extends Employee {
    public divident:number;
    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(`${this.name} scheduled a meeting.`)
        this.tasks.push(`${this.name} is preparing a quarterly report.`)
    }

    
  public getSalary(): number {
    return this.salary + this.divident;
  }
}