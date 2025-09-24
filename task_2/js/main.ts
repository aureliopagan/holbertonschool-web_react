// Create the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Create the TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Create Director class that implements DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Create Teacher class that implements TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Create the createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Test the createEmployee function
  console.log(createEmployee(200));   // Should return Teacher instance
  console.log(createEmployee(1000));  // Should return Director instance
  console.log(createEmployee('$500')); // Should return Director instance
  
  // Additional tests to verify the methods work
  const employee1 = createEmployee(200);
  console.log(employee1.workFromHome()); // "Cannot work from home"
  
  const employee2 = createEmployee(1000);
  console.log(employee2.workFromHome()); // "Working from home"
  
  const employee3 = createEmployee('$500');
  console.log(employee3.getCoffeeBreak()); // "Getting a coffee break"