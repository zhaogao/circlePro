var express = require('express');
var router = express.Router();
var request = require('request')
var fs = require('fs')

var getRealParams = function (val) {
    return new Buffer(val.trim(), 'base64').toString();
}

var url_root = 'http://120.79.19.33:8008/';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/getProductDetail', function (req, res, next) {
    var code = req.body.id;

    request({
        url: 'http://220.248.87.150:8013/getwebproductinfo',
        // url:url_root+'getwebproductinfo',
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
            hscode: getRealParams(code)
        }),
    }, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        } else {
            res.json({
                code: 1,
                ret_msg: error
            })
        }
    })
});


router.post('/getuserdata', function (req, res, next) {
    var userid = req.body.id;

    request({
        // url: 'http://220.248.87.150:8017/getuserinfo',
        url: url_root + 'getuserinfo',
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
            'KEY': '1GIL=223098ladj97100=-9dskja',
            'PHONE': '18701766820'
        },
        body: JSON.stringify({
            // userid:''
            // toUserId: userid
            userid: getRealParams(userid)
        }),
    }, function (error, response, body) {

        if (!error && response.statusCode) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        } else {
            res.json({
                code: 1,
                ret_msg: error
            })
        }
    })
});

router.post('/getcompanyinfo', function (req, res, next) {
    var companycode = req.body.id;

    request({
        // url: 'http://220.248.87.150:8017/getcompanyinfo',
        url: url_root + 'getcompanyinfo',
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
            'KEY': '1GIL=223098ladj97100=-9dskja',
            'PHONE': '18701766820'
        },
        body: JSON.stringify({
            // userid:''
            // toUserId: userid
            companycode: getRealParams(companycode)
        }),
    }, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        } else {
            res.json({
                code: 1,
                ret_msg: error
            })
        }
    })
});

router.post('/getproductinfo', function (req, res, next) {
    var hscode = req.body.id;

    request({
        // url: 'http://220.248.87.150:8017/getproductinfo',
        url: url_root + 'getproductinfo',
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
            'KEY': '1GIL=223098ladj97100=-9dskja',
            'PHONE': '18701766820'
        },
        body: JSON.stringify({
            // userid:''
            // toUserId: userid
            hscode: getRealParams(hscode)
        }),
    }, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        } else {
            res.json({
                code: 1,
                ret_msg: error
            })
        }
    })
});

router.post('/getcountryinfo', function (req, res, next) {
    var country = req.body.id;

    request({
        // url: 'http://220.248.87.150:8017/getproductinfo',
        url: url_root + 'getcountryinfo',
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
            'KEY': '1GIL=223098ladj97100=-9dskja',
            'PHONE': '18701766820'
        },
        body: JSON.stringify({
            // userid:''
            // toUserId: userid
            country: getRealParams(country)
        }),
    }, function (error, response, body) {

        // fs.writeFile('country.js', body, function (err) {
        //     if (err) console.error(err);
        //     console.log('数据写入的数据');
        // })

        if (!error && response.statusCode == 200) {
            res.json({
                code: 0,
                ret_msg: JSON.parse(body)
            });
        } else {
            res.json({
                code: 1,
                ret_msg: error
            })
        }
    })
});


module.exports = router;