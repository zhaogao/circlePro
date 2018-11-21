var config = {
    img_root:'http://120.79.19.33:8004/',
    ios_app:'https://itunes.apple.com/cn/app/id1415575117?l=zh&ls=1&mt=8',
    android_app:'https://www.circledin.net/download/app-release.apk',
    isIphoneX:function(){
        return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
    }
}
