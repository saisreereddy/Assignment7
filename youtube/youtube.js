var Youtube = /** @class */ (function () {
    function Youtube(title, views, likes, dislikes, quality, noOfComments, autoPlayOption, canShare, information) {
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
            return _this.information;
        };
        this.getRealtedVideos = function () {
            return "Check out Youtube page for related videos";
        };
        this.hasSubscription = function () {
            return "subscribed";
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.quality = quality;
        this.noOfComments = noOfComments;
        this.autoPlayOption = autoPlayOption;
        this.canShare = canShare;
        this.information = information;
    }
    return Youtube;
}());
var youtube1 = new Youtube("The tales of madagascar", 500, 300, 200, "Auto 360p", 500, true, true, "created by saisree");
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
