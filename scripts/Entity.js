/**
 * Created by Tony on 5/28/14.
 */

function Entity (name) {
    this.name = name;
    this.xPos = 0;
    this.yPos = 0;
    this.width = 0;
    this.height = 0;
    this.headerheight = 0;
    this.Properties = [];
    this.Drawing = null;
    this.SubDrawings = null;
}

function Property (name) {
    this.name = name;
    this.xPos = 0;
    this.yPos = 0;
    this.width = 0;
    this.height = 0;
}

function drawEntities(document,createjs,stage,canvas,ctx,Entities)
{
    //var s = drawRectangle(createjs,5, 5, locEntity.width, locEntity.height, 5, locEntity.headerheight);
    //stage.addChild(s);


    var propertypadding = 10;
    for (i=0;i<Entities.length;i++)
    {

        var locEntity = Entities[i];


        var s = drawRectangle(locEntity.xPos, locEntity.yPos, locEntity.width, locEntity.height, 5, locEntity.headerheight);
        var Label = addLabel(locEntity.xPos + + locEntity.width/2, locEntity.yPos + 5,locEntity.width,locEntity.name,"center");
        locEntity.Drawing = s;
        stage.addChild(s);
        stage.addChild(Label);

        var childobjects = [];
        childobjects.push(Label);

        for (j=0;j<locEntity.Properties.length;j++)
        {
            var locProperty = locEntity.Properties[j];
            var PropertyLabel = addLabel(locProperty.xPos + propertypadding, locProperty.yPos + 5,locProperty.width,locProperty.name,"left");
            stage.addChild(PropertyLabel);
            childobjects.push(PropertyLabel);
        }
        stage.update();

        handleEntityLoad(document,createjs,s,childobjects,canvas,ctx,locEntity);


    }
}

function handleEntityLoad(document,createjs,s,childobjects,canvas,ctx,locEntity) {
    s.name = "bmp_1";
    s.cursor = "pointer";

    // using "on" binds the listener to the scope of the currentTarget by default
    // in this case that means it executes in the scope of the button.
    s.on("mousedown", function(evt) {

        this.parent.addChild(this);
        this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
        //drawselector(canvas,ctx,this.x + xpos ,this.y + ypos, rectwidth,rectheight,true,true);

        for (j=0;j<childobjects.length;j++)
        {
            childobjects[j].parent.addChild(childobjects[j]);
            childobjects[j].offset = {x:childobjects[j].x-evt.stageX, y:childobjects[j].y-evt.stageY};
        }
    });

    // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    s.on("pressmove", function(evt) {
        this.x = evt.stageX+ this.offset.x;
        this.y = evt.stageY+ this.offset.y;
        locEntity.xPos = this.x;
        locEntity.yPos = this.y;

        for (j=0;j<childobjects.length;j++)
        {
            childobjects[j].x = evt.stageX+ childobjects[j].offset.x;
            childobjects[j].y = evt.stageY+ childobjects[j].offset.y;
        }
        // indicate that the stage should be updated on the next tick:
        update = true;
    });



    s.on("rollover", function(evt) {
        //this.scaleX = this.scaleY = this.scale*1.2;
        //update = true;
    });

    s.on("rollout", function(evt) {
        //this.scaleX = this.scaleY = this.scale;
        //update = true;
    });

    //}

    document.getElementById("loader").className = "";
    createjs.Ticker.addEventListener("tick", tick);
}