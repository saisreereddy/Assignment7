var Facebook = /** @class */ (function () {
    function Facebook(birthday, yearBorn, location, work, education_school, education_college, description, nickName, gender, websiteLinks, socialMediaLinks, noOffamilyMembers, noOfFriends, contact) {
        var languagesKnown = [];
        for (var _i = 14; _i < arguments.length; _i++) {
            languagesKnown[_i - 14] = arguments[_i];
        }
        var _this = this;
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            var date = new Date();
            var year = date.getFullYear();
            var currentYear = year;
            console.log("This year is" + year);
            var age = currentYear - _this.yearBorn;
            return age;
        };
        this.getLanguagesKnown = function () {
            console.log("Languages Known");
            for (var _i = 0, _a = _this.languagesKnown; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.getLocation = function () {
            console.log("Places Lived");
            for (var _i = 0, _a = _this.location; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.getWork = function () {
            console.log("Worked with the following organizations");
            for (var _i = 0, _a = _this.work; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.getEducationSchool = function () {
            console.log("Went to these schools");
            for (var _i = 0, _a = _this.education_school; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.getEducationCollege = function () {
            console.log("Went to these colleges");
            for (var _i = 0, _a = _this.education_college; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getNickName = function () {
            return _this.nickName;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getNoOfFamilyMembers = function () {
            return _this.noOfFamilyMembers;
        };
        this.getNoOfFriends = function () {
            return _this.noOfFriends;
        };
        this.getSocialMediaLinks = function () {
            console.log("Here are my social media links");
            for (var _i = 0, _a = _this.socialMediaLinks; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.getWebsiteLinks = function () {
            console.log("Here are my few website links");
            for (var _i = 0, _a = _this.websiteLinks; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log(i);
            }
        };
        this.birthday = birthday;
        this.yearBorn = yearBorn;
        this.location = location;
        this.contact = contact;
        this.languagesKnown = languagesKnown;
        this.work = work;
        this.education_school = education_school;
        this.education_college = education_college;
        this.description = description;
        this.nickName = nickName;
        this.gender = gender;
        this.websiteLinks = websiteLinks;
        this.socialMediaLinks = socialMediaLinks;
        this.noOfFamilyMembers = noOffamilyMembers;
        this.noOfFriends = noOfFriends;
    }
    return Facebook;
}());
var location1 = ["Anantapur", "Hyderabad"];
var work1 = ["TCS", "CSI"];
var school1 = ["LRG  High School", "CVR Memorial School ENG"];
var collage1 = ["PSET", "Gitam Universiy"];
var websitelinks = ["https://saisreereddy.github.io/SaisreeVennapusa/", "https://saisreereddy.github.io/WhatsappDesignCloneV1/"];
var sociallinks = ["https://github.com/saisreereddy", "https://www.linkedin.com/in/saisree-reddy-8a5b6a113/"];
var facebook1 = new Facebook("11-September-1995", 1995, location1, work1, school1, collage1, "A great follower of abdul kalam", "chikki", "Female", websitelinks, sociallinks, 9, 882, 1234567890, "English", "Telugu", "Hindi");
console.log("Your birthday is on " + facebook1.getBirthday());
console.log("Your age is " + facebook1.getAge() + " years");
facebook1.getLanguagesKnown();
facebook1.getLocation();
facebook1.getWork();
facebook1.getEducationCollege();
facebook1.getEducationSchool();
console.log("Describing myself as " + facebook1.getDescription());
console.log("My nickname is " + facebook1.getNickName());
console.log("My gender is " + facebook1.getGender());
console.log("I have " + facebook1.getNoOfFamilyMembers() + " family members as friends in facebook");
console.log("I have " + facebook1.getNoOfFriends() + " friends in total");
facebook1.getSocialMediaLinks();
facebook1.getWebsiteLinks();
