var Youtube = /** @class */ (function () {
    function Youtube(title, views, likes, dislikes, quality, noOfComments, autoPlayOption, privacy, descrition, tags, category, allowComments, licenseAndCopyRights, allowEmbedding, ageRestriction, language) {
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
        this.pricavyListed = function () {
            return _this.privacy;
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
            console.log("Tags listed for the following video");
            var result = _this.tags.join('#');
            return result;
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
        this.privacy = privacy;
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
var youtube1 = new Youtube("The tales of Bolt", 500, 300, 200, "Auto 360p", 500, true, "public", "created by saisree", tags, "Viewer", true, "Standard Youtube Lessons", true, 17, "English");
console.log(youtube1.getTitle());
console.log("Your video has " + youtube1.getNoOfViews() + " views");
console.log("Your video is liked by " + youtube1.getNoOfLikes() + " people");
console.log("Your video is disliked by " + youtube1.getNoOfDisikes() + " people");
console.log("Quality standards as of  this year " + youtube1.getQuality());
console.log("Your video has " + youtube1.getNoOfComments() + " comments");
console.log("Auto play option - " + youtube1.hasAutoPlayOption());
console.log("Privacy Listed as - " + youtube1.pricavyListed());
console.log("Info - " + youtube1.getInformation());
console.log(youtube1.getRealtedVideos());
console.log("Subscription - " + youtube1.hasSubscription());
console.log(youtube1.getTags());
console.log("Category - " + youtube1.getCategory());
console.log("Allows Comments - " + youtube1.willAllowComments());
console.log("Allows Embedding - " + youtube1.willAllowEmbedding());
console.log("License and Copyrights - " + youtube1.getLicenseAndCopyRights());
console.log(youtube1.ageRequiredToWatch());
console.log("Language - " + youtube1.getLanguage());
