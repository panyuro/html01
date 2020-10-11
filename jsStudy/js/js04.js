const input = document.querySelector("input");
    const btn = document.querySelector("button");
    const para = document.querySelector("p");

    btn.onclick = function () {
      const code = input.value;
      para.textContent = eval(code);
    };

    function Person(first, last, age, gender, interests) {
      this.name = {
        first,
        last,
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }

    Person.prototype.bio = function () {
      // First define a string, and make it equal to the part of
      // the bio that we know will always be the same.
      let string =
        this.name.first +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. ";
      // define a variable that will contain the pronoun part of
      // the second sentence
      let pronoun;

      if (
        this.gender === "male" ||
        this.gender === "Male" ||
        this.gender === "m" ||
        this.gender === "M"
      ) {
        pronoun = "He likes ";
      } else if (
        this.gender === "female" ||
        this.gender === "Female" ||
        this.gender === "f" ||
        this.gender === "F"
      ) {
        pronoun = "She likes ";
      } else {
        pronoun = "They like ";
      }

      // add the pronoun string on to the end of the main string
      string += pronoun;

      // use another conditional to structure the last part of the
      // second sentence depending on whether the number of interests
      // is 1, 2, or 3
      if (this.interests.length === 1) {
        string += this.interests[0] + ".";
      } else if (this.interests.length === 2) {
        string += this.interests[0] + " and " + this.interests[1] + ".";
      } else {
        // if there are more than 2 interests, we loop through them
        // all, adding each one to the main string followed by a comma,
        // except for the last one, which needs an and & a full stop
        for (let i = 0; i < this.interests.length; i++) {
          if (i === this.interests.length - 1) {
            string += "and " + this.interests[i] + ".";
          } else {
            string += this.interests[i] + ", ";
          }
        }
      }

      // finally, with the string built, we alert() it
      alert(string);
    };

    Person.prototype.greeting = function () {
      alert("Hi! I'm " + this.name.first + ".");
    };

    Person.prototype.farewell = function () {
      alert(this.name.first + " has left the building. Bye for now!");
    };

    let person1 = new Person("Tammi", "Smith", 17, "female", [
      "music",
      "skiing",
      "kickboxing",
    ]);

    function Teacher(first, last, age, gender, interests, subject) {
      Person.call(this, first, last, age, gender, interests);

      this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.constructor = Teacher;
    Teacher.prototype.greeting = function () {
      var prefix;

      if (
        this.gender === "male" ||
        this.gender === "Male" ||
        this.gender === "m" ||
        this.gender === "M"
      ) {
        prefix = "Mr.";
      } else if (
        this.gender === "female" ||
        this.gender === "Female" ||
        this.gender === "f" ||
        this.gender === "F"
      ) {
        prefix = "Mrs.";
      } else {
        prefix = "Mx.";
      }

      alert(
        "Hello. My name is " +
          prefix +
          " " +
          this.name.last +
          ", and I teach " +
          this.subject +
          "."
      );
    };

    var teacher1 = new Teacher(
      "Dave",
      "Griffiths",
      31,
      "male",
      ["football", "cookery"],
      "mathematics"
    );
    console.log(name.first)
    console.log(teacher1.interests[0])
    console.log(teacher1.bio())
    console.log(teacher1.subject)
    console.log(teacher1.greeting())