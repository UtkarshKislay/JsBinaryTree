function Tree(){
    this.root=null;
}
Tree.prototype.traverse=function(){
    this.root.visit(this);
}

Tree.prototype.search=function(val){
    var found=this.root.search(val);
    return found;
}
Tree.prototype.addValue=function(val){
    var n = new node(val);
    if(this.root==null){
        this.root=n;
        this.root.x=width/2;
        this.root.y=20;
    }else{
        this.root.addNode(n);
    }
}