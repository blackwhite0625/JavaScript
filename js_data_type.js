// 資料類型 data type

// 數值資料 numder type
console.log(5);
console.log(92.23);

// 字串 string
console.log("halo world");
console.log('妳好');
console.log(`世界`);

// 布林值 邏輯判斷 bool
console.log(true);
console.log(false);
console.log(99 > 22);

// 時間資料 time 
console.log(new Date());
let time = new Date();
console.log(time.getFullYear);

// repeat重複字串
console.log("-".repeat(50))

// array陣列資料
let arr1 = [5,32,21,4]; //陣列裡的資料 -> 元素
let arr2 = ["小黑","小白","小黃","小綠"]; 
let arr3 = [32.13,"小粉",true,{'message':'halo'}];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// object物件資料
let obj1 = {'id':'1','name':'heabie'};
let obj2 = {'id1':'2','name1':'xiao'}; //成對資料key value pair
let obj3 = {'id2':'3','name2':'iopp','message':{'halo':'妳好','bye':'再見'}}; // object裡面可以再存object
console.log(obj1);
console.log(obj2);
console.log(obj3);

// null 空值 無 (有值,但它是空的)
let data1 = null;
console.log(data1);

// undefined 無宣告的值
let data2;
console.log(data2);