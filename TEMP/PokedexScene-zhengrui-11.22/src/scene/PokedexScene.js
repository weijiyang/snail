/**
 * Created by 郑蕊 on 2016/11/22.
 */
var PokedexLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //图鉴背景图层
        var pokedexbg = new cc.Sprite(res.pokedexbg);
        pokedexbg.x=size.width*0.5;
        pokedexbg.y=size.height*0.5;
        //pokedexbg.setAnchorPoint(0,0);
        this.addChild(pokedexbg);

        //图鉴标题
        var title = new cc.LabelTTF("图 鉴");
        title.setFontSize(size.width*0.05);
        title.enableStroke(cc.color.BLUE, 5);
        title.x = size.width * 0.5;
        title.y = size.height*0.93;
        this.addChild(title);


        //展示框1
        var displaycell = new cc.Sprite(res.display1);
        displaycell.setAnchorPoint(0,0);
        //displaycell.ignoreAnchorPointForPosition(false);
        //pokedexbg.ignoreAnchorPointForPosition(false);
        var localPosition =pokedexbg.convertToNodeSpace(displaycell.getPosition());
        displaycell.x=pokedexbg.width*0.03;
        displaycell.y=pokedexbg.height*0.3;
        //cc.log(localPosition.x+"    "+localPosition.y);
        pokedexbg.addChild(displaycell);

        //展示框2
        var displaytum = new cc.Sprite(res.display2);
        displaytum.setAnchorPoint(0,0);
        //displaytum.ignoreAnchorPointForPosition(false);
        //pokedexbg.ignoreAnchorPointForPosition(false);
        var localPosition =pokedexbg.convertToNodeSpace(displaytum.getPosition());
        displaytum.x=pokedexbg.width*0.52;
        displaytum.y=pokedexbg.height*0.3;
        //cc.log(localPosition.x+"    "+localPosition.y);
        pokedexbg.addChild(displaytum);


        //细胞
        var cellItem = new cc.MenuItemImage(res.pokecell, function () {
            //细胞详情页接口
            this.director.runScene(new MainScene());
        }, this);
        var menu1 = new cc.Menu(cellItem);
        menu1.x = displaycell.width*0.5;
        menu1.y = displaycell.height * 0.5;
        displaycell.addChild(menu1);


        //肿瘤
        var tumourItem = new cc.MenuItemImage(res.poketumour, function () {
            //肿瘤详情页接口
            this.director.runScene(new MainScene());
        }, this);
        var menu2 = new cc.Menu(tumourItem);
        menu2.x = displaytum.width*0.5;
        menu2.y = displaytum.height * 0.5;
        displaytum.addChild(menu2);


        //查看细胞按钮
        var cellbtnItem = new cc.MenuItemImage(res.pokecellbtn, function () {
            //细胞详情页接口
            this.director.runScene(new MainScene());
        }, this);
        var menu3 = new cc.Menu(cellbtnItem);
        menu3.x = pokedexbg.width*0.25;
        menu3.y = pokedexbg.height * 0.2;
        pokedexbg.addChild(menu3);
        cc.scaleBy()


        //查看肿瘤按钮
        var tumourbtnItem = new cc.MenuItemImage(res.poketumourbtn, function () {
            //肿瘤详情页接口
            this.director.runScene(new MainScene());
        }, this);
        var menu4 = new cc.Menu(tumourbtnItem);
        menu4.x = pokedexbg.width*0.73;
        menu4.y = pokedexbg.height * 0.2;
        pokedexbg.addChild(menu4);


        //返回按钮
        var returnbtnItem = new cc.MenuItemImage(res.pokereturnbtn, function () {
            //关卡接口
            this.director.runScene(new MainScene());
        }, this);
        var menu5 = new cc.Menu(returnbtnItem);
        menu5.x = pokedexbg.width*0.9;
        menu5.y = pokedexbg.height * 0.05;
        pokedexbg.addChild(menu5);

        return true;
    }
});

var PokedexScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new PokedexLayer();
        this.addChild(layer);
    }
});
