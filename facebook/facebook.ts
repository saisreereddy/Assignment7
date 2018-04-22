class Facebook {
   public birthday:String;
   public yearBorn:number;
   public location:String;
   public work:String;
   public education_school:String;
   public education_college:String;
   public contact?:Number;
   public languagesKnown:String[];


    constructor(birthday: String,yearBorn:number,location:String,work:String,education_school:String,education_college:String,contact?:Number,...languagesKnown:String[]) {
this.birthday=birthday;
this.yearBorn=yearBorn;
this.location=location;
this.contact=contact;
this.languagesKnown=languagesKnown;
this.work=work;
this.education_school=education_school;
this.education_college=education_college;

      
        }
    
getBirthday=()=>{
return this.birthday;

}

getAge=()=>{
    let currentYear:number=2018;
    

    let age:number=currentYear-this.yearBorn;

    return age;
}

getLanguagesKnown=()=>{

    return this.languagesKnown;
}
 getLocation=()=>{
     return this.location;
 }

getWork=()=>{
    return this.work;
}
getEducationSchool=()=>{
    return this.education_school;
}
getEducationCollege=()=>{

    return this.education_college;
}


}
let facebook1 = new Facebook("11thSeptember",1995,"anantapur","TCS","CVR","Gitam",undefined,"English","Telugu","Hindi");

console.log(facebook1.getBirthday());
console.log(facebook1.getAge());
console.log(facebook1.getLanguagesKnown());
console.log(facebook1.getLocation());
console.log(facebook1.getWork());
console.log(facebook1.getEducationCollege());
console.log(facebook1.getEducationSchool());

