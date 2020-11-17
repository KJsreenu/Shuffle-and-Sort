function extractData() {
let ret = "";
for (let i=1; i<=9; i++){
        let el = document.getElementById(i);
ret = ret + el.innerHTML.toString();
}
return ret;
}

function testSort(){
sort();
console.log("Testing Sort");
for (let i=1; i<=9; i++){
        let el = document.getElementById(i);
console.log(i+"th element is "+ i + " : Result " + (i.toString() ===(el.innerHTML)).toString());
}
}

function testShuffle(){
sort();
let sortedData = extractData();
shuffle();
let shuffledData1 = extractData();
console.log("Testing Shuffle");
console.log("\nFirst Shuffle Result"+ sortedData!==shuffledData1);
shuffle();
let shuffledData2 = extractData();
console.log("\nFirst Shuffle Result"+ shuffledData1!==shuffledData2);
}


testShuffle();
testSort();