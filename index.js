var tree;

function setup(){
    createCanvas(1000,500);
    background(51);
   tree=new Tree();
    for(var i=0;i<7;i++){
        tree.addValue(floor(random(0, 100)));
    }

    tree.traverse();

    var result=tree.search(10);

    if(result==null){
        console.log('not found');
    }else{
        console.log(result);
    }
}