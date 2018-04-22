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
var location1 = ["Anantapur", "Hyderabad"];
var work1 = ["TCS", "CSI"];
var school1 = ["LRG  High School", "CVR Memorial School ENG"];
var collage1 = ["PSET", "Gitam Universiy"];
var facebook1 = new Facebook("11-September-1995", 1995, location1, work1, school1, collage1, 1234567890, "English", "Telugu", "Hindi");
console.log("Your birthday is on " + facebook1.getBirthday());
console.log("Your age is " + facebook1.getAge() + " years");
facebook1.getLanguagesKnown();
facebook1.getLocation();
facebook1.getWork();
facebook1.getEducationCollege();
facebook1.getEducationSchool();
