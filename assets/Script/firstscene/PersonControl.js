var projectgroup=require("ProjectGroup");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        //调试用的新建员工的代码
        //var newperson=new person();
        //this.hire(newperson);
        this.maxNum_=5;
        // 员工列表
        this.persons_ = [];
        // 当前员工数
        this.currentNum_ = 0;
        //声誉
        this.credit_ = 10;
        //项目组数组初始化
        this.projectGroups_ = [];
        //名字
        this.name_ = "体验极其差的公司";
        var temp =[
            {
                name_ : "客户端",
                index_ : 0,
                unlock_ : true,
                budget_ : 100,
                difficulty_ : 1,
                function_ : 0,
                
            },
            {
                name_ : "网页",
                index_ : 1,
                unlock_ : false,
                budget_ : 100,
                difficulty_ : 1,
                function_ : 0,
            },
            {
                name_ : "跨平台",
                index_ : 2,
                unlock_ : false,
                budget_ : 100,
                difficulty_ : 1,
                function_ : 0,
            }

        ];
        this.platforms_ = temp;
        this.categories_ = [
            {
                name_ : "社交软件",
                index_ : 0,
                difficulty_ : 5,
                budget_ : 10 * 10000,
                function_ : 100,
                unlock_ : true,
            },
            {
                name_ : "多媒体软件",
                index_ : 1,
                difficulty_ : 5,
                budget_ : 10 * 10000,
                function_ : 100,
                unlock : false,
            },
            {
                name_ : "游戏软件",
                index_ : 2,
                difficulty_ : 15,
                budget_ : 30 * 10000,
                function_ : 200,
                unlock : false,
            },
            {
                name_ : "安全软件",
                index_ : 3,
                difficulty_ : 60,
                budget_ : 80 * 10000,
                function_ : 500,
                unlock : false, 
            },
            {
                name_ : "数据科学软件",
                index_ : 4,
                difficulty_ : 60,
                budget_ : 80 * 10000,
                function_ : 500,
                unlock : false,
            },
            {
                name_ : "办公软件",
                index_ : 5,
                difficulty_ : 30,
                budget_ : 50 * 10000,
                function_ : 300,
                unlock : false,
            },
            {
                name_ : "电商软件",
                index_ : 6,
                difficulty_ : 30,
                budget_ : 50 * 10000,
                function_ : 300,
                unlock : false,
            }
        ];
        this.functions_ = [
            {
                name_ : "收发邮件",
                index_ : 0,
                function_ : 50,
                unlock_ : true,
                times_ : 1.5,
                budget_ : 100,
            },
            {
                name_ : "音频播放",
                index_ : 1,
                function_ :50,
                unlock_ : true,
                times_ : 1.5,
                budget_ : 100,
            },
            {
                name_ : "游戏场景",
                index_ : 2,
                function_ :100,
                unlock_ : true,
                times_ : 1.5,
                budget_ : 100,
            },
            {
                name_ : "整理内存",
                index_ : 3,
                function_ :100,
                unlock_ : true,
                times_ : 1.5,
                budget_ : 100,
            },
            {
                name_ : "数据统计",
                index_ : 4,
                function_ :100,
                unlock_ : true,
                times_ : 1.2,
                budget_ : 100,
            },
            {
                name_ : "编辑文档",
                index_ : 5,
                function_ :50,
                unlock_ : true,
                times_ : 1.1,
                budget_ : 100,
            },
            {
                name_ : "发布广告",
                index_ : 6,
                function_ :50,
                unlock_ : true,
                times_ : 1.1,
                budget_ : 100,
            },
            {
                name_ : "即时聊天",
                index_ : 7,
                function_ :200,
                unlock_ : false,
                times_ : 3,  
                budget_ : 100,
            },
            {
                name_ : "视频播放",
                index_ : 8,
                function_ :200,
                unlock_ : false,
                times_ : 3,
                budget_ : 100,
            },
            {
                name_ : "数值平衡",
                index_ : 9,
                function_ :200,
                unlock_ : false,
                times_ : 2,
                budget_ : 100,
            },
            {
                name_ : "病毒查杀",
                index_ : 10,
                function_ :600,
                unlock_ : false,
                times_ : 2.2,
                budget_ : 100,
            },
            {
                name_ : "数据挖掘",
                index_ : 11,
                function_ :400,
                unlock_ : false,
                times_ : 1.8,
                budget_ : 100,
            },
            {
                name_ : "图表制作",
                index_ : 12,
                function_ :200,
                unlock_ : false,
                times_ : 1.6,
                budget_ : 100,
            },
            {
                name_ : "即时通讯",
                index_ : 13,
                function_ :400,
                unlock_ : false,
                times_ : 5,
                budget_ : 100,
            },
            {
                name_ : "图片编辑",
                index_ : 14,
                function_ :400,
                unlock_ : false,
                times_ : 5,
                budget_ : 100,
            },
            {
                name_ : "剧情设计",
                index_ : 15,
                function_ :800,
                unlock_ : false,
                times_ : 5,
                budget_ : 100,
            },
            {
                name_ : "文件管理",
                index_ : 16,
                function_ :600,
                unlock_ : false,
                times_ : 2.2,
                budget_ : 100,
            },
            {
                name_ : "机器学习",
                index_ : 17,
                function_ :1000,
                unlock_ : false,
                times_ : 3,
                budget_ : 100,
            },
            {
                name_ : "插件制作",
                index_ : 18,
                function_ :600,
                unlock_ : false,
                times_ : 3,
                budget_ : 100,
            },
            {
                name_ : "用户分析",
                index_ : 19,
                function_ :1000,
                unlock_ : false,
                times_ : 4.3,
                budget_ : 100,
            }
        ];
        this.techs_ = [
            {
                name_ : "技术1",
                index_ : 0,
                difficulty_ :10,
                budget_ : 100,
                unlock_ :true,
                function_ :0,
            },
            {
                name_ : "技术2",
                index_ : 1,
                difficulty_ : 20,
                budget_ : 10,
                unlock_ : true,
                function_ : 0,
            }
        ];
    },

    unlockPlatform:function(id){
        this.platforms_[id].unlock_ = true;
    },
    unlockType:function(id)
    {
        this.categories_[id].unlock_ = true;
    },

    unlockFunction:function(id){
        this.functions_[id].unlock_ = true;
    },

    getName:function(){
        return this.name_;
    },

    init:function(platforms){
        //接受外界的平台数组
        this.platforms_ = platforms;
    },

    getAvailablePlatforms:function(){
        var list = [];
        for(let i = 0 ; i < this.platforms_.length ; i++)
        {
            if(this.platforms_[i].unlock_)
            {
                list.push(this.platforms_[i]);
            }
        }
        console.log(list);
        return list;
    },

    getAvailableFunctions:function(){
        var list = [];
        for(let i = 0 ; i < this.functions_.length ; i++)
        {
            if(this.functions_[i].unlock_)
            {
                list.push(this.functions_[i]);
            }
        }
        console.log(list);
        return list;
    },

    getAvailableCategories:function(){
        var list = [];
        for(let i = 0 ; i < this.categories_.length ; i++)
        {
            if(this.categories_[i].unlock_)
            {
                list.push(this.categories_[i]);
            }
        }
        console.log(list);
        return list;
    },

    getAvailablePersons:function(){
        var list = [];
        for(let i = 0 ; i <this.persons_.length ; i++)
        {
            if(this.persons_[i].state_ == 1)
            {
                list.push(this.persons_[i]);
            }
        }
        console.log(list);
        return list;
    },

    getAllGroups:function(){
        return this.projectGroups_;
    },

    changeCredit:function(num){
        this.credit_+=num;
    },

    getCredit:function(num){
        return this.credit_ <= 0 ? 0 : this.credit_;
    },

    canHire:function(){
        return this.currentNum_<this.maxNum_;
    },

    //测试

    receive:function(){
        var prog = cc.find("Event/Game/Date/Account/ProjectGenerator").getComponent("ProjectGenerator");
        var projs = prog.getProjects();
        console.log(this.persons_);
        this.begin(projs[0], this.persons_);
        this.project_ = projs[0];
    },

    hire: function (person) {
        // 雇佣一个员工，如果已达人数上限，则返回false

        if(this.currentNum_>=this.maxNum_){
            return false;
        }
        var event=new cc.Event.EventCustom('MONEYCUT', true);
        event.force=false;
        event.money=person.employMoney_;
        this.node.dispatchEvent(event);
        if(event.back==true){
            this.currentNum_++;
            this.persons_.push(person);
            person.node = this.node;
            return true;
        }
        else{
            return false;
        }
    },

    fire: function (index){     // 解雇老员工
        for(let i=0;i<this.currentNum_;i++){
            if(this.persons_[i].index_== index){
                for(let j=0;j<this.projectGroups_.length;j++){
                    this.projectGroups_[j].removePerson(this.persons_[i]);
                }
                var oldperson=this.persons_[i];
                this.persons_.splice(i,1);
                this.currentNum_--;
                console.log(oldperson);
                return oldperson;
            }
        }
        return null;
    },

    begin:function(project,persons){
        //预算什么的需要放在前端判断
        var group=new projectgroup();
        group.node=this.node;
        //这里需要设置一下接受时间
        var event = new cc.Event.EventCustom("GETDATE", true);
        this.node.dispatchEvent(event);
        var date = event.back;
        project.node = this.node;
        project.setReceiveDay(date);
        group.begin(project,persons);
        this.projectGroups_.push(group);
        var time = cc.find("Event/Game").getComponent("Game").time_;
        group.resume(time);
    },


    stop: function (group){
        group.stop();
        var i=0;
        console.log(this.projectGroups_);
        while(this.projectGroups_[i]!=group){
            i++;
        }
        if(i<this.projectGroups_.length){
            this.projectGroups_.splice(i,1);
        }
    },

    work:function(){
        for(i=0;i < this.projectGroups_.length;i++){
            var group=this.projectGroups_[i];
            console.log("work");
            group.work();
            if(group.state_ == 3)
            {
                this.stop(group);
                i--;
            }
        }
    },

    showPersons: function() {   // 返回所有员工信息
        return this.persons_;
    },

    paySalary:function(){
        var event=new cc.Event.EventCustom('GETDATE', true);
        this.node.dispatchEvent(event);
        if(event.back%30 != 1){
            return ;
        }
        var sumSalary = 0;
        for(let i = 0;i<this.persons_.length ; i++){
            sumSalary = sumSalary + this.persons_[i].salary_;
        }
        event=new cc.Event.EventCustom('MONEYCUT', true);
        event.money = sumSalary;
        event.record = "付工资";
        event.force = true;
        this.node.dispatchEvent(event);
    },

    updateCoef:function(coef){
        for(let i = 0 ; i < this.persons_.length ; i++)
        {
            this.persons_[i].updateCoef(coef);
        }
    },

    addLimit:function(){
        this.maxNum_ += 1;
    },

    pause:function(){
        this.unschedule(this.work);
        this.unschedule(this.paySalary);
        this.unschedule(this.dialogue);
    },

    dialogue:function(){
        for(let i = 0 ; i < this.projectGroups_.length ; i++)
        {
            var group = this.projectGroups_[i];
            group.dialogueSystem();
        }
    },

    resume:function(time){
        console.log("personcontrol");
        this.schedule(this.work,time);
        this.schedule(this.paySalary,time);
        this.schedule(this.dialogue, time);
    },
});
