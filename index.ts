// @ts-check
function test (a: number, b: number): number {
    return a + b
};


console.log(test(2, 1));


const numArray: number[] = [1, 7, 6, 10];

console.log(numArray);

interface Learner {
    // Add an optional id property:
    id?: string;
    name: {
      first: string;
      last?: string;
      // Make last optional using "last?"
    };
    course: string;
    grades: number[];
  }
  
  const john: Learner = {
    id: "1208365",
    name: {
      first: "John"
    },
    course: "Introduction to TypeScript",
    grades: [96, 88, 100, 94]
  };
  
  function logLearner(l: Learner) {
    console.log(
      `Learner ${l.name.first} ${l.name.last} is currently enrolled in ${l.course}.`
    );
  }
  
  logLearner(john);
  console.log(john.name.last);

  function average(arr: number[]) {
    return arr.reduce((a, b) => a + b) / arr.length;
  }
  
  console.log(average([42, 100, 50, 6, 90]));
//   console.log(average(6));
//   console.log(average(["ten", "6", 10]));

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;


class Demo {
    private postfix = "nstration";
    protected prefix = "mini";
    public fix = "demo";
  }
  
  class MegaDemo extends Demo {
    log() {
      // TypeScript warns us against accessing
      // a private class feature outside of the class,
      // but we can access protected or public members.
      console.log(this.prefix + this.fix /*+ this.postfix*/);
    }
  }
  
  let tuple: readonly [boolean, string, number, string, number];
  tuple = [true, "Kaiba", 10, "Negative", 20];
  
  // TypeScript will show an error here,
  // because tuple is read-only.
//   tuple[0] = false;

  type CarYear = number;
  type CarMake = string;
  type CarModel = string;

  const carMake: CarMake = "Something"

  console.log(carMake);

  let myString: string = "Hello";
  myString = "something else";

  let anotherString: "Hello" = "Not Hello";
  anotherString = "AnotherThing";