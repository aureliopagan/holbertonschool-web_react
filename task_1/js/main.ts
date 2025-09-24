// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  // Extend Teacher interface to create Directors
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Interface for the printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Interface for StudentClass constructor
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface for StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Create the example teacher
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  // Create the example director
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Test the printTeacher function
  console.log(printTeacher("John", "Doe"));  // Should print: J. Doe
  console.log(printTeacher("Jane", "Smith")); // Should print: J. Smith
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Test the StudentClass
  const student1: StudentClassInterface = new StudentClass("John", "Doe");
  console.log(student1.displayName());     // Should print: John
  console.log(student1.workOnHomework());  // Should print: Currently working
  
  const student2: StudentClassInterface = new StudentClass("Jane", "Smith");
  console.log(student2.displayName());     // Should print: Jane
  console.log(student2.workOnHomework());  // Should print: Currently working