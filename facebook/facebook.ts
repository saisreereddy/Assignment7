class Facebook {
   public birthday:String;
   public yearBorn:number;
   public location:String[];
   public work:String[];
   public education_school:String[];
   public education_college:String[];
   public contact?:Number;
   public languagesKnown:String[];


    constructor(birthday: String,yearBorn:number,location:String[],work:String[],education_school:String[],education_college:String[],contact?:Number,...languagesKnown:String[]) {
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
console.log("Languages Known");
    for(let i of this.languagesKnown){

        console.log(i);
    }
}
 getLocation=()=>{
     console.log("Places Lived")
    for(let i of this.location){
        console.log(i);

    }
 }

getWork=()=>{
    console.log("Worked with the following organizations")
    for(let i of this.work){
        console.log(i);

    }
}
getEducationSchool=()=>{
    console.log("Went to these schools")
    for(let i of this.education_school){
        console.log(i);

    }
}
getEducationCollege=()=>{

    console.log("Went to these colleges")
    for(let i of this.education_college){
        console.log(i);

    }
}


}


let location1=["Anantapur","Hyderabad"];
let work1=["TCS","CSI"];
let school1=["LRG  High School","CVR Memorial School ENG"];
let collage1=["PSET","Gitam Universiy"]
let facebook1 = new Facebook("11-September-1995",1995,location1,work1,school1,collage1,1234567890,"English","Telugu","Hindi");

console.log("Your birthday is on "+facebook1.getBirthday());
console.log("Your age is "+facebook1.getAge()+" years");
facebook1.getLanguagesKnown();
facebook1.getLocation();
facebook1.getWork();
facebook1.getEducationCollege();
facebook1.getEducationSchool();

