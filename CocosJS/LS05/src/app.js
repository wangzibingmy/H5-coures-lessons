
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size=cc.winSize;
        var labelTTF=new cc.LabelTTF('玩家一',"",50);
        labelTTF.x=50;
        labelTTF.y=size.height/2;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);
        //设置样式
        labelTTF.setFontSize(50);
        labelTTF.enableStroke()

        return true;
    },
    myTime:function(dt){
        if(this.second==60){
            this.second=10
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

