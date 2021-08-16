"use strict";
var ThirdPartyYoutubeClass = /** @class */ (function () {
    function ThirdPartyYoutubeClass() {
    }
    ThirdPartyYoutubeClass.prototype.listVideos = function () {
        console.log("list the videos");
    };
    ThirdPartyYoutubeClass.prototype.getVideoInfo = function (id) {
        console.log(" get the video infomations id " + id);
    };
    ThirdPartyYoutubeClass.prototype.downloadVideo = function (id) {
        console.log("download the video file id " + id);
    };
    return ThirdPartyYoutubeClass;
}());
var CachedYoutubeClass = /** @class */ (function () {
    function CachedYoutubeClass(ser) {
        this.listCache = null;
        this.videoCache = null;
        this.servic = ser;
    }
    CachedYoutubeClass.prototype.downloadExists = function (id) {
        return true;
    };
    CachedYoutubeClass.prototype.listVideos = function () {
        if (this.listCache == null || this.needReset) {
            this.listCache = this.servic.listVideos();
        }
        return this.listCache;
    };
    CachedYoutubeClass.prototype.getVideoInfo = function (id) {
        if (this.videoCache == null || this.needReset) {
            this.videoCache = this.servic.getVideoInfo(id);
        }
    };
    CachedYoutubeClass.prototype.downloadVideo = function (id) {
        if (!this.downloadExists(id) || this.needReset) {
            this.servic.downloadVideo(id);
        }
    };
    return CachedYoutubeClass;
}());
var YoutubeManager = /** @class */ (function () {
    function YoutubeManager(ser) {
        this.service = ser;
    }
    YoutubeManager.prototype.renderVideoPage = function (id) {
        return this.service.getVideoInfo(id);
    };
    YoutubeManager.prototype.renderListPanel = function () {
        return this.service.listVideos();
    };
    YoutubeManager.prototype.reactOnUserInput = function () {
        this.renderVideoPage(2);
        this.renderListPanel();
    };
    return YoutubeManager;
}());
var aYoutubeService = new ThirdPartyYoutubeClass();
var aYouTubeProxy = new CachedYoutubeClass(aYoutubeService);
var maner = new YoutubeManager(aYouTubeProxy);
maner.reactOnUserInput();
