// Create MajorCredits interface with brand property
interface MajorCredits {
    credits: number;
    _brand: "major"; // Brand property to uniquely identify
  }
  
  // Create MinorCredits interface with brand property
  interface MinorCredits {
    credits: number;
    _brand: "minor"; // Brand property to uniquely identify
  }
  
  // Function to sum major credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: "major"
    } as MajorCredits;
  }
  
  // Function to sum minor credits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: "minor"
    } as MinorCredits;
  }
  
  // Test examples
  const majorSubject1: MajorCredits = { credits: 3, _brand: "major" };
  const majorSubject2: MajorCredits = { credits: 4, _brand: "major" };
  
  const minorSubject1: MinorCredits = { credits: 2, _brand: "minor" };
  const minorSubject2: MinorCredits = { credits: 1, _brand: "minor" };
  
  // Test the functions
  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log("Total Major Credits:", totalMajorCredits);
  console.log("Total Minor Credits:", totalMinorCredits);
  
  // This would cause a TypeScript error due to brand property:
  // sumMajorCredits(minorSubject1, minorSubject2); // Error: wrong type!