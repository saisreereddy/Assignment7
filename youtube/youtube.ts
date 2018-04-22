class Youtube {
    public title:String;
    public views:Number;
    public likes:Number;
    public dislikes:Number;
    public quality:String;
    public noOfComments:Number;
    public autoPlayOption:Boolean;
    public canShare:Boolean;
    public description:String;
    public tags:String[];
    public category:String;
    public allowComments:Boolean;
    private licenseAndCopyRights:String;
    private allowEmbedding:Boolean;
    private ageRestriction:number;
    public language:String;  

    constructor(title: String,views:Number,likes:Number,dislikes:Number,quality:String,noOfComments:Number,autoPlayOption:Boolean,canShare:Boolean,descrition:String,tags:String[],category:String,allowComments:Boolean,licenseAndCopyRights:String,allowEmbedding:Boolean,ageRestriction:number,language:String) {


        this.title=title;
        this.views=views;
        this.likes=likes;
        this.dislikes=dislikes;
        this.quality=quality;
        this.noOfComments=noOfComments;
        this.autoPlayOption=autoPlayOption;
        this.canShare=canShare;
        this.description=descrition;
        this.tags=tags;
        this.category=category;
        this.allowComments=allowComments;
        this.licenseAndCopyRights=licenseAndCopyRights;
        this.allowEmbedding=allowEmbedding;
        this.ageRestriction=ageRestriction;
        this.language=language;
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
                        
                            return this.description;
                         }

getRealtedVideos=()=>{
 return "Check out Youtube page for related videos"; 

}
hasSubscription=()=>{
    return "subscribed";
}



getTags=()=>{


    return this.tags.join('#');
}


getCategory=()=>{
    return this.category;
}


willAllowComments=()=>{
    return this.allowComments;
}
getLicenseAndCopyRights=()=>{
    return this.licenseAndCopyRights;
}
willAllowEmbedding=()=>{
    return this.allowEmbedding;
}
ageRequiredToWatch=()=>{

    if(this.ageRestriction>=18){

        return "You can watch this video"
    }
    else{

        return "You must be 18 or more to watch this video"
    }
}
getLanguage=()=>{
    return this.language;
}


}
let tags=["Animals","Dogs","Love","Funny","DogsandPals","Delight_pets","Dogscorner"]
let youtube1 = new Youtube("The tales of Bolt",500,300,200,"Auto 360p",500,true,true,"created by saisree",tags,"Viewer",true,"Standard Youtube Lessons",true,17,"English");
console.log(youtube1.getTitle());
console.log("Your video has " +youtube1.getNoOfViews() + " views");
console.log("Your video is liked by "+youtube1.getNoOfLikes()+" people");
console.log("Your video is disliked by" +youtube1.getNoOfDisikes()+" people");
console.log("Quality standards "+youtube1.getQuality());
console.log("Your video has "+youtube1.getNoOfComments()+" comments");
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

