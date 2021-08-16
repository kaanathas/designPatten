interface ThirdPartyYoutubeLib{
    listVideos():any;
    getVideoInfo(id:number):any;
    downloadVideo(id:number):any

}

class ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib{


    listVideos() {
        console.log("list the videos")
    }
    getVideoInfo(id: number) {
       console.log(" get the video infomations id "+id)
    }
    downloadVideo(id: number) {
       console.log("download the video file id "+id)
    }

}

class CachedYoutubeClass implements ThirdPartyYoutubeLib{

    private servic:ThirdPartyYoutubeClass
    private listCache:any=null;
    private videoCache:any=null;
            needReset:any;
    private downloadExists(id:number){
        return true
    }
    constructor(ser:ThirdPartyYoutubeLib){
        this.servic=ser;
    }
    listVideos() {
        if(this.listCache==null|| this.needReset){
            this.listCache=this.servic.listVideos()
        }
        return this.listCache
    }
    getVideoInfo(id: number) {
        if(this.videoCache==null||this.needReset){
            this.videoCache=this.servic.getVideoInfo(id)
        }
    }
    downloadVideo(id: number) {
        if(!this.downloadExists(id) || this.needReset){
            this.servic.downloadVideo(id)
        }
    }

}


class YoutubeManager{

    private service: ThirdPartyYoutubeLib
    constructor(ser:ThirdPartyYoutubeLib){
        this.service=ser;
    }

    renderVideoPage(id:number){
        return this.service.getVideoInfo(id)
    }

    renderListPanel(){
        return this.service.listVideos()
    }

    reactOnUserInput(){
        this.renderVideoPage(2)
        this.renderListPanel()
    }
}


let aYoutubeService=new ThirdPartyYoutubeClass()
let aYouTubeProxy=new CachedYoutubeClass(aYoutubeService)
let maner=new YoutubeManager(aYouTubeProxy)
maner.reactOnUserInput()
