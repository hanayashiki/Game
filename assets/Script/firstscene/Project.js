var projectstate=require('global').projectState;
var datepath=require('global').datePath;
cc.Class({
    extends: cc.Component,

    properties: {
        //cocos creator对于自己定义的复杂类型不支持，所以这里分开写了
        requireUi_:{
            visible:false,
            default:0.,
        },
        
        requireFunc_:{
            visible:false,
            default:0.,
        },

        currentUi_:{
            visible:false,
            default:0.,
        },
        currentFunc_:{
            visible:false,
            default:0.,
        },

        state_:projectstate.received,
        category_:"",
        reward_:0,
        deadline_:0,
        level_:0,
        company_:{
            default:null,
            type:cc.Node,
        },
        receiveDay_:0,
        finishDay_:0,
        content_:"",
        unlock_:false,
        unlockRequire_:"",
        index_: 0,
        
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
    },

    // use this for initialization
    onLoad: function () {
    },
    augment:function(attribute,increment){
        switch(attribute){
            case 'ui':
            this.currentUi_+=increment;
            if (this.currentUi_ > this.requireUi_) {
                this.currentUi_ = this.requireUi_
            }
            break;
            case 'func':
            this.currentFunc_+=increment;
            if (this.currentFunc_ > this.requireFunc_) {
                this.currentFunc_ = this.requireFunc_
            }
            break;
            default:
            throw "error attribute" + attribute;
            break;
        }
    },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    isFinished: function() {
        return this.requireUi_<=this.currentUi_
        &&this.requireFunc_<=this.currentFunc_;
    },
    isOverdue: function() {
        var date=cc.find(datepath).getComponent('Date');
        var currentday=date.getDate();
        //注意这里deadline是以周围单位而其他的是以天为单位
        return currentday>(this.receiveDay_ + this.deadline_ * 7);
    },
    setRequire:function(require){
        this.requireUi_=require.ui;
        this.requireFunc_=require.func;
    },
    getRequire:function(){
        var require=new Object();
        require.func=this.requireFunc_;
        require.ui=this.requireUi_;
        return require;
    },
    getCurrent:function(){
        var current=new Object();
        current.func=this.currentFunc_;
        current.ui=this.currentUi_;
        return current;      
    },
    setState:function(state){
        this.state_=state;
    },
    getState:function(){
        return this.state_;
    },
    setCategory:function(type){
        this.category_=type;
    },
    getCategory:function(){
        return this.category_;
    },
    setReward:function(reward){
        this.reward_=reward;
    },
    getReward:function(){
        return this.reward_;
    },
    setDeadline:function(deadline){
        this.deadline_=deadline;
    },
    getDeadline:function(){
        return this.deadline_;
    },
    setReceiveDay:function(receiveday){
        this.receiveDay_=receiveday;
    },
    getReceiveDay:function(){
        return this.receiveDay_;
    },
    setFinishDay:function(finishDay){
        this.finishDay_=finishDay;
    },
    getFinishDay:function(){
        return this.finishDay_;
    },
    setContent:function(content){
        this.content_=content;
    },
    getContent:function(){
        return this.content_;
    },
    setName:function(name){
        this.name_=name;
    },
    getName:function(){
        return this.name_;
    },
    /*调试用的init函数，便于初始化一个project */
    init:function(project){
        this.content_=project.content;
        this.reward_=project.reward;
        this.deadline_=project.deadline;
        this.category_=project.category;
        this.name_=project.name;
        this.requireUi_=project.requireUi;
        this.requireFunc_=project.requireFunc;
        this.level_=project.level;
        this.index_ = project.index;
    },
    // },
});