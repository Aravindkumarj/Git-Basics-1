var mark = {
    full_name: "Mark Waugh",
    mass: 200,
    height: 5.9,
    bmiCalc: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;     
    }
};

var john = {
    full_name: "John Dolan",
    mass: 200,
    height: 6.5,
    bmiCalc: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;     
    }
};

mark.bmiCalc();
john.bmiCalc();

console.log((mark.bmi > john.bmi)? "Mark's BMI is greater": ((john.bmi > mark.bmi)? "John's BMI is greater" : "Both got same BMI" ));
