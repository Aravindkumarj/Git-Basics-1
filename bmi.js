var mike = {
    full_name: "Mike Tyson",
    mass: 300,
    height: 5.9,
    bmiCalc: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;     
    }
};

var john = {
    full_name: "John Cena",
    mass: 250,
    height: 5.10,
    bmiCalc: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;     
    }
};

mike.bmiCalc();
john.bmiCalc();

console.log((mark.bmi > john.bmi)? "Mark's BMI is greater": ((john.bmi > mark.bmi)? "John's BMI is greater" : "Both got same BMI" ));
