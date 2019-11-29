var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BJpLMEn9r2o4qTo7tQVxWsbLLBWhPU6O0yVvpJj6icLixP5uIEPYVAr-V9boUvSVSzOR1u6TydxW3Bf3AlfVyeY",
    "privateKey": "80XLwsjwyKco9tXRK4wcXyb3-3FB4R_pZfeLPAYrFsU"
};


webPush.setVapidDetails(
    'mailto: mmalbiruni83@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cdavwi3zSyg:APA91bFba_YWtzI7Y27Iq1KkHCFpPuBB7PUws6Gme7NNrwTw-3zPvpsAMuP_SXp184_kEwomCtG7rgrFVNWVmL0AyEYEWLh6c14PAEAKN1ganSQLIEvC30ELiFQhtQuSbIs-aEdnj2fc",
    "keys": {
        "p256dh": "BP5IrrGezAGJeXfmsu+4Zx95e3VFWxdENG44p86tmtGSjRZN+G6ALCuIDAM48FxNXv9C8520HeSV50yrfe2Zj4E=",
        "auth": "5+JdCvUMGl+090LKDJSaKA=="
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