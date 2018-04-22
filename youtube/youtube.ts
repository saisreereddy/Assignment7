class Youtube {
    public title:String;
    public views:Number;
    public likes:Number;
    public dislikes:Number;
    public quality:String;
    public noOfComments:Number;
    public autoPlayOption:Boolean;
    private canShare:Boolean;
    private information:String;

    constructor(title: String,views:Number,likes:Number,dislikes:Number,quality:String,noOfComments:Number,autoPlayOption:Boolean,canShare:Boolean,information:String) {

        this.title=title;
        this.views=views;
        this.likes=likes;
        this.dislikes=dislikes;
        this.quality=quality;
        this.noOfComments=noOfComments;
        this.autoPlayOption=autoPlayOption;
        this.canShare=canShare;
        this.information=information;
        }
    
getTitle=()=>{
return this.title;

}

getNoOfViews=()=>{
    return this.views;
}
 getNoOfLikes=()=>{

    return this.likes;
 }
 getNoOfDisikes=()=>{
    
        return this.dislikes;
     }
     getQuality=()=>{
        
            return this.quality;
         }

         getNoOfComments=()=>{
            
                return this.noOfComments;
             }
             hasAutoPlayOption=()=>{
                
                    return this.autoPlayOption;
                 }
                 hasSharingOption=()=>{
                    
                        return this.canShare;
                     }
                     getInformation=()=>{
                        
                            return this.information;
                         }

getRealtedVideos=()=>{
 return "Check out Youtube page for related videos"; 

}
hasSubscription=()=>{
    return "subscribed";
}

}
let youtube1 = new Youtube("The tales of madagascar",500,300,200,"Auto 360p",500,true,true,"created by saisree");
console.log(youtube1.getTitle());
console.log("Your video has " +youtube1.getNoOfViews() + " views");
console.log(youtube1.getNoOfLikes());
console.log(youtube1.getNoOfDisikes());
console.log(youtube1.getQuality());
console.log(youtube1.getNoOfComments());
console.log(youtube1.hasAutoPlayOption());
console.log(youtube1.hasSharingOption());
console.log(youtube1.getInformation());
console.log(youtube1.getRealtedVideos());
console.log(youtube1.hasSubscription());
