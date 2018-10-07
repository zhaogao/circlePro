var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/getProductDetail', function (req, res, next) {
    var code = req.body.code;

    request({
        url: 'http://220.248.87.150:8013/getwebproductinfo',
        method: "POST",
        headers: {
            'API-VERSION': '1.1',
            'USER-TOKEN': 'gaozhao',
            'PLATFORM': 'IOS',
            'DEVICE-ID': '1234234',
            'APP-LEVEL-VERSION': '1.0.3',
            'USER-MPHONE-BRAND': 'request',
            'USER-MPHONE-MODELS': 'HAWEI',
            'USER-MPHONE-OS-VER': '9.0',
            "content-type": "application/json",
            'User-Agent': 'request',
            'CC': '86',
            'PHONE': '18116352909'
        },
        body: JSON.stringify({
            hscode: code
        }),
    }, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        }else{
            res.json({
                code:1,
                ret_msg:error
            })
        }
    })
});


router.post('/getuserdata', function (req, res, next) {
    var userid = req.body.userid;

    request({
        url: 'http://220.248.87.150:8017/getuserinfo',
        method: "POST",
        headers: {
            'API-VERSION': '1.1',
            'USER-TOKEN': 'NryMrzKonYLE8KK1zSutUf4a2G32r1Gc',
            'PLATFORM': 'IOS',
            'DEVICE-ID': '1234234',
            'APP-LEVEL-VERSION': '1.0.3',
            'USER-MPHONE-BRAND': 'request',
            'USER-MPHONE-MODELS': 'HAWEI',
            'USER-MPHONE-OS-VER': '9.0',
            "content-type": "application/json",
            'User-Agent': 'request',
            'CC': '86',
            'KEY':'1GIL=223098ladj97100=-9dskja',
            'PHONE': '18701766820'
        },
        body: JSON.stringify({
            // userid:''
            // toUserId: userid
            userid: userid
        }),
    }, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        }else{
            res.json({
                code:1,
                ret_msg:error
            })
        }
    })
});

module.exports = router;