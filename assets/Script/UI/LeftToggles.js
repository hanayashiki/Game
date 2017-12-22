cc.Class({
    extends: cc.Component,

    properties: {
        Main:cc.Node,
        Outsource: cc.Node,
        Platform:cc.Node,
        Hire:cc.Node,
        Fire:cc.Node,
        Research:cc.Node,
        Bank:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad :function() {
        this.node.active=true;
        this.toggles = this.node.getComponentsInChildren(cc.Toggle);    // 返回Toggle数组
    },

    showMenu :function(toggle) {    // 点击左侧toggle触发,参数为点击的Toggle组件
        for(var i in this.toggles){ // JS的for in遍历的是下标!
            if(this.toggles[i].node.getChildByName("Menu"))
                if(this.toggles[i].node.getChildByName("Menu").active==true)
                {
                    this.toggles[i].node.getChildByName("Menu").active=false;    // 关闭已打开的toggle菜单
                }
        }
        toggle.node.getChildByName("Menu").active=toggle.isChecked; // 打开或关闭当前toggle下的菜单
    },

    research_toggle:function(toggle){
        toggle.isChecked=false;
        this.Main.active = false;               // 关闭主界面 
        this.Research.active = true;
    },

    outsource_btn :function(event) {
        event.target.parent.active = false;     // 关闭菜单界面
        for(var t in this.toggles)
            this.toggles[t].isChecked=false;
        this.Main.active = false;               // 关闭主界面
        console.log(this.Outsource.active);
        this.Outsource.active = true;     // 打开委托界面
        console.log("已经打开");
    },

    independent_btn :function(event) {
        event.target.parent.active = false;     // 关闭菜单界面
        for(var t in this.toggles)
            this.toggles[t].isChecked=false;
        this.Main.active = false;               // 关闭主界面
        this.Platform.active = true;     // 打开独立开发界面
    },

    hire_btn :function(event) {
        event.target.parent.active = false;     // 关闭菜单界面
        for(var t in this.toggles)
            this.toggles[t].isChecked=false;
        this.Main.active = false;               // 关闭主界面
        this.Hire.active = true;           // 打开雇佣界面
    },

    fire_btn :function(event) {
        event.target.parent.active = false;     // 关闭菜单界面
        for(var t in this.toggles)
            this.toggles[t].isChecked=false;
        this.Main.active = false;               // 关闭主界面
        this.Fire.active = true;           // 打开解雇界面
    },

    bank_btn:function(event){

        this.Main.active = false;               // 关闭主界面
        this.Bank.active = true;
    },

});