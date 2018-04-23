class Facebook {
   public birthday:String;
   public yearBorn:number;
   public location:String[];
   public work:String[];
   public education_school:String[];
   public education_college:String[];
   public description:String;
   public nickName:String;
   public gender:String;
   public websiteLinks:String[];
   public socialMediaLinks:String[];
   public noOfFamilyMembers:number;
   public noOfFriends:number;
   public contact?:Number;
   public languagesKnown:String[];
 


   
    constructor(birthday: String,yearBorn:number,location:String[],work:String[],education_school:String[],education_college:String[],description:String,nickName:String,gender:String,websiteLinks:String[],socialMediaLinks:String[],noOffamilyMembers:number,noOfFriends:number,contact?:Number,...languagesKnown:String[]) {
this.birthday=birthday;
this.yearBorn=yearBorn;
this.location=location;
this.contact=contact;
this.languagesKnown=languagesKnown;
this.work=work;
this.education_school=education_school;
this.education_college=education_college;
this.description=description;
this.nickName=nickName;
this.gender=gender;
this.websiteLinks=websiteLinks;
this.socialMediaLinks=socialMediaLinks;
this.noOfFamilyMembers=noOffamilyMembers;
this.noOfFriends=noOfFriends;

      
        }
    
getBirthday=()=>{
return this.birthday;

}

getAge=()=>{
    var date = new Date();
    var year = date.getFullYear();
    let currentYear:number=year;
    console.log("This year is " +year);
    

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

getDescription=()=>{
return this.description;

}

getNickName=()=>{
    return this.nickName;
}


getGender=()=>{
    return this.gender;
}

getNoOfFamilyMembers=()=>{

    return this.noOfFamilyMembers;
}
getNoOfFriends=()=>{

    return this.noOfFriends;
}

getSocialMediaLinks=()=>{
    console.log("Here are my social media links")
    for(let i of this.socialMediaLinks){
        console.log(i);

    }

}



getWebsiteLinks=()=>{

    console.log("Here are my few website links")
    for(let i of this.websiteLinks){
        console.log(i);

    }
}


}


let location1=["Anantapur","Hyderabad"];
let work1=["TCS","CSI"];
let school1=["LRG  High School","CVR Memorial School ENG"];
let collage1=["PSET","Gitam Universiy"]
let websitelinks=["https://saisreereddy.github.io/SaisreeVennapusa/","https://saisreereddy.github.io/WhatsappDesignCloneV1/"];
let sociallinks=["https://github.com/saisreereddy","https://www.linkedin.com/in/saisree-reddy-8a5b6a113/"]
let facebook1 = new Facebook("11-September-1995",1995,location1,work1,school1,collage1,"A great follower of abdul kalam","chikki","Female",websitelinks,sociallinks,9,882,1234567890,"English","Telugu","Hindi");

console.log("Your birthday is on "+facebook1.getBirthday());
console.log("Your age is "+facebook1.getAge()+" years");
facebook1.getLanguagesKnown();
facebook1.getLocation();
facebook1.getWork();
facebook1.getEducationCollege();
facebook1.getEducationSchool();
console.log("Describing myself as "+facebook1.getDescription());
console.log("My nickname is "+facebook1.getNickName());
console.log("My gender is " +facebook1.getGender());
console.log("I have " +facebook1.getNoOfFamilyMembers()+ " family members as friends in facebook");
console.log("I have " +facebook1.getNoOfFriends()+" friends in total");
facebook1.getSocialMediaLinks();
facebook1.getWebsiteLinks();
