var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/getlist', function (req, res, next) {
    var code = req.body.code;
    // var page_num = req.body.page_num;

    request({
        url: 'http://220.248.87.150:8013/getproductinfo',
        method: "POST",
        headers: {
            'API-VERSION': '1.1',
            'USER-TOKEN': 'TEST',
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
            // hscode: '7404000090'
            hscode: code
        }),
    }, function (e, r, body) {
        // var data = qs.parse(body)
        var data = JSON.parse(body)
        console.log('da', data)
        res.json({
            code: 0,
            ret_msg: data
        });
    })
    
});

module.exports = router;