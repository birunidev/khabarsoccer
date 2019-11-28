var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BCdCq-ZjKm2KDbQEVcyRJ9RzzcdGJuhvnBI10X4I9A8mBhkycVNolJ3-dpwVnHxaZJRah9bBsI8I5tJQ3iw0LcI",
    "privateKey": "E3TZW3qhP2gFwx_bvYJqSgZecaw5_h8APxGNMuPcWCA"
};


webPush.setVapidDetails(
    'mailto: mmalbiruni83@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cHPzydj0pkY:APA91bHKMpAfAQ7nE0mT_b8F84r3Ra3YjvsPE0C2v0CR_TeTwt3w_L-SUMV0G64wYJ27ni4imol9jNUsvEwufN_d0Z3S1YtPLjVUINioe5YNNwdQAX3Kt_ylHlY-qrNZTCwwD4fTq74O",
    "keys": {
        "p256dh": "BOcPgdOFGThm1NJYlincNdIiqRT5wIfx4uRJXTLIk8VXbLqXA+JRFbxLgdcLgus6+FDCn27bIuxZiFPDvKSmQhY=",
        "auth": "3j0bEaWzIAt+o2KAHxLt+g=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '1014954977037',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);