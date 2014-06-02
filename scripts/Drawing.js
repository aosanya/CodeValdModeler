/**
 * Created by Tony on 5/28/14.
 */

function drawRectangle(x,y,w,h,r,headerheight) {
    var s = new createjs.Shape();
    var g = s.graphics;

    //draw main section
    g.setStrokeStyle(.1, 'round', 'round');
    g.beginStroke("#000");
    g.beginFill("#fff");
    g.drawRoundRect(x, y, w, h, r);
    g.endFill();

    //draw bottom section
    sectionheight = 10;
    g.beginStroke("#000");
    g.beginFill("#33CCFF");
    g.drawRoundRectComplex(x,y+h-sectionheight,w,sectionheight,0,0,r,r);
    g.endFill();

    //draw top section
    sectionheight = headerheight;
    g.beginStroke("#000");
    g.beginFill("#33CCFF");
    g.drawRoundRectComplex(x,y,w,sectionheight,r,r,0,0);
    g.endFill();


    return s;
}

function addLabel(x,y,w,text,alignment) {
    // create the label at the bottom of the bar:
    var label = new createjs.Text(text, "11px Arial", "#000");
    label.textAlign = alignment;
    label.x = x;
    label.maxWidth = w;
    label.y = y;
    label.alpha = 0.9;

    return label;
}

function drawselector(canvas,ctx,xPos,yPos,Width,Height,withAnchors,withBorders){

    // clear the canvas
    //ctx.clearRect(xPos,yPos,Width,Height);

    RightPos = xPos + Width;

    BottomPos = yPos + Height
    // optionally draw the draggable anchors
    if(withAnchors){
        drawDragAnchor(ctx,xPos,yPos,2);
        drawDragAnchor(ctx,RightPos,yPos,2);
        drawDragAnchor(ctx,RightPos,BottomPos,2);
        drawDragAnchor(ctx,xPos,BottomPos,2);
    }

    // optionally draw the connecting anchor lines
    if(withBorders){
        ctx.beginPath();
        ctx.moveTo(xPos,yPos);
        ctx.lineTo(RightPos,yPos);
        ctx.lineTo(RightPos,BottomPos);
        ctx.lineTo(xPos,BottomPos);
        ctx.closePath();
        ctx.stroke();
    }
}

function drawDragAnchor(ctx,x,y,resizerRadius){
    var pi2=Math.PI*2;
    ctx.beginPath();
    ctx.arc(x,y,resizerRadius,0,pi2,false);
    //ctx.closePath();
    ctx.fill();
}


function drawSmiley() {
    var s = new createjs.Shape();
    var g = s.graphics;

    //Head
    g.setStrokeStyle(15, 'round', 'round');
    g.beginStroke("#000");
    g.beginFill("#F00");
    g.drawCircle(170, 170, 170); //55,53
    g.endFill();
    g.setStrokeStyle(1, 'round', 'round');

    //Right eye
    g.setStrokeStyle(5, 'round', 'round');
    g.beginStroke("#000");
    g.beginFill("#000");
    g.drawRoundRect(125, 64, 20, 50, 10);
    g.endFill();

    //Left eye
    g.setStrokeStyle(5, 'round', 'round');
    g.beginStroke("#000");
    g.beginFill("#000");
    g.drawRoundRect(200, 64, 20, 50, 10);
    g.endFill();

    //Mouth
    g.setStrokeStyle(15, 'round', 'round');
    g.beginStroke("#000");
    g.moveTo(45, 155);
    g.bezierCurveTo(83, 307, 254, 317, 296, 152);
    return s;
}
