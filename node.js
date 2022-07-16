function node(val,x,y){
    this.value=val;
    this.left=null;
    this.right=null;
    this.x=x;
    this.y=y;
}

node.prototype.search=function(val){
    if(this.value==val){
        return this.val;
    }else if(this.val<val){
        return this.left.search(val);
    }else if(this.val>val){
        return this.right.search(val);
    }
    return null;
}

node.prototype.visit=function(parent){
   if(this.left!=null){
    this.left.visit(this);
   }
   
   console.log(this.value);
   fill(255);
   noStroke();
   
   text(this.value,this.x,this.y+4);
   noFill()
   stroke(255);
   ellipse(this.x, this.y, 30, 30);
  
   line(parent.x,parent.y,this.x,this.y);
   if(this.right!=null){
    this.right.visit(this);
   }
}

node.prototype.addNode=function(n){
    if(n.value<this.value){
        if(this.left==null){
            this.left=n;
            this.left.x=this.x-45;
            this.left.y=this.y+20;
        }else{
            this.left.addNode(n);
        }
    }else if(n.value>this.value){
        if(this.right==null){
            this.right=n;
            this.right.x=this.x+55;
            this.right.y=this.y+20;
        }else{
            this.right.addNode(n);
        }
    }
}