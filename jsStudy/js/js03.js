  // var person = {
    //   name: {
    //     first: "Bob",
    //     last: "Smith",
    //   },
    //   age: 32,
    //   gender: "male",
    //   interests: ["music", "skiing"],
    //   bio: function () {
    //     alert(
    //       this.name[0] +
    //         " " +
    //         this.name[1] +
    //         " is " +
    //         this.age +
    //         " years old. He likes " +
    //         this.interests[0] +
    //         " and " +
    //         this.interests[1] +
    //         "."
    //     );
    //   },
    //   greeting: function () {
    //     alert("Hi! I'm " + this.name[0] + ".");
    //   },
    // };
    // var myDataName = "height";
    // var myDataValue = "1.75m";
    // person[myDataName] = myDataValue;

    // function Person(name) {
    //   this.name = name;
    //   this.greeting = function () {
    //     alert("Hi! I'm " + this.name + ".");
    //   };
    // }
    // var person1 = new Person("Bob");
    // var person2 = new Person("Sarah");

    function Person(first, last, age, gender, interests) {
        this.name = {
          first: first,
          last: last,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = function () {
          alert(
            this.name.first +
              " " +
              this.name.last +
              " is " +
              this.age +
              " years old. He likes " +
              this.interests[0] +
              " and " +
              this.interests[1] +
              "."
          );
        };
        this.greeting = function () {
          alert("Hi! I'm " + this.name.first + ".");
        };
      }
      var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);