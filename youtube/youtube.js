var Youtube = /** @class */ (function () {
    function Youtube(title, views, likes, dislikes, quality, noOfComments, autoPlayOption, canShare, descrition, tags, category, allowComments, licenseAndCopyRights, allowEmbedding, ageRestriction, language) {
        var _this = this;
        this.getTitle = function () {
            return _this.title;
        };
        this.getNoOfViews = function () {
            return _this.views;
        };
        this.getNoOfLikes = function () {
            return _this.likes;
        };
        this.getNoOfDisikes = function () {
            return _this.dislikes;
        };
        this.getQuality = function () {
            return _this.quality;
        };
        this.getNoOfComments = function () {
            return _this.noOfComments;
        };
        this.hasAutoPlayOption = function () {
            return _this.autoPlayOption;
        };
        this.hasSharingOption = function () {
            return _this.canShare;
        };
        this.getInformation = function () {
            return _this.description;
        };
        this.getRealtedVideos = function () {
            return "Check out Youtube page for related videos";
        };
        this.hasSubscription = function () {
            return "subscribed";
        };
        this.getTags = function () {
            return _this.tags.join('#');
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.willAllowComments = function () {
            return _this.allowComments;
        };
        this.getLicenseAndCopyRights = function () {
            return _this.licenseAndCopyRights;
        };
        this.willAllowEmbedding = function () {
            return _this.allowEmbedding;
        };
        this.ageRequiredToWatch = function () {
            if (_this.ageRestriction >= 18) {
                return "You can watch this video";
            }
            else {
                return "You must be 18 or more to watch this video";
            }
        };
        this.getLanguage = function () {
            return _this.language;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.quality = quality;
        this.noOfComments = noOfComments;
        this.autoPlayOption = autoPlayOption;
        this.canShare = canShare;
        this.description = descrition;
        this.tags = tags;
        this.category = category;
        this.allowComments = allowComments;
        this.licenseAndCopyRights = licenseAndCopyRights;
        this.allowEmbedding = allowEmbedding;
        this.ageRestriction = ageRestriction;
        this.language = language;
    }
    return Youtube;
}());
var tags = ["Animals", "Dogs", "Love", "Funny", "DogsandPals", "Delight_pets", "Dogscorner"];
var youtube1 = new Youtube("The tales of Bolt", 500, 300, 200, "Auto 360p", 500, true, true, "created by saisree", tags, "Viewer", true, "Standard Youtube Lessons", true, 17, "English");
console.log(youtube1.getTitle());
console.log("Your video has " + youtube1.getNoOfViews() + " views");
console.log(youtube1.getNoOfLikes());
console.log(youtube1.getNoOfDisikes());
console.log(youtube1.getQuality());
console.log(youtube1.getNoOfComments());
console.log(youtube1.hasAutoPlayOption());
console.log(youtube1.hasSharingOption());
console.log(youtube1.getInformation());
console.log(youtube1.getRealtedVideos());
console.log(youtube1.hasSubscription());
console.log(youtube1.getTags());
console.log(youtube1.getCategory());
console.log(youtube1.willAllowComments());
console.log(youtube1.willAllowEmbedding());
console.log(youtube1.getLicenseAndCopyRights());
console.log(youtube1.ageRequiredToWatch());
console.log(youtube1.getLanguage());
