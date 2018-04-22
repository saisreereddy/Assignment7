var Facebook = /** @class */ (function () {
    function Facebook(birthday, yearBorn, location, work, education_school, education_college, contact) {
        var languagesKnown = [];
        for (var _i = 7; _i < arguments.length; _i++) {
            languagesKnown[_i - 7] = arguments[_i];
        }
        var _this = this;
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            var currentYear = 2018;
            var age = currentYear - _this.yearBorn;
            return age;
        };
        this.getLanguagesKnown = function () {
            return _this.languagesKnown;
        };
        this.getLocation = function () {
            return _this.location;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducationSchool = function () {
            return _this.education_school;
        };
        this.getEducationCollege = function () {
            return _this.education_college;
        };
        this.birthday = birthday;
        this.yearBorn = yearBorn;
        this.location = location;
        this.contact = contact;
        this.languagesKnown = languagesKnown;
        this.work = work;
        this.education_school = education_school;
        this.education_college = education_college;
    }
    return Facebook;
}());
var facebook1 = new Facebook("11thSeptember", 1995, "anantapur", "TCS", "CVR", "Gitam", undefined, "English", "Telugu", "Hindi");
console.log(facebook1.getBirthday());
console.log(facebook1.getAge());
console.log(facebook1.getLanguagesKnown());
console.log(facebook1.getLocation());
console.log(facebook1.getWork());
console.log(facebook1.getEducationCollege());
console.log(facebook1.getEducationSchool());
