cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        isload:cc.Boolean,
    },

    // use this for initialization
    onLoad: function () {
        console.log("fdsafadsfasd");
        isload=false;
    },
   

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
var eProjectState=cc.Enum({
    notReceived:0,
    received:1,
    finished:2,
    overdue:3,
});
module.exports.projectState=eProjectState;
module.exports.datePath='Date';
module.exports.companyPath='Company';
module.exports.accountPath='Company/Account';
module.exports.personControlPath='Company/PersonControl';


