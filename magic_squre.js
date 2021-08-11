var magicSquare=[[8,3,4],
      [1,5,9],
      [6,7,2]];

var diag=0;
var diag1=0;
for (x in magicSquare){
    diag+=magicSquare[x][x];
    y=(magicSquare.length)-1
    diag1+=magicSquare[x][y]
}console.log(diag1)
var row=[];
var col =[];
for (x in magicSquare){
    var row_sum=0;
    var col_sum=0;
    for (y in magicSquare){
        row_sum+=magicSquare[x][y]
        col_sum+=magicSquare[y][x]
    }
    row.push(row_sum)
    col.push(col_sum)
}console.log(row_sum)
console.log(col_sum)
if (row[0]==col[0]){
    if (diag==diag1){
        console.log("It is a Magic Square");}
}
else{
    console.log("It is not a Magic Square")
}
