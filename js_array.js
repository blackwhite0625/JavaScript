//定義
let arr1 = [1,2,3,4,5];
let arr2 = ['輝達','小米','谷歌','特斯拉','蘋果']

//取值
let a = arr1[3];
let b = arr2[0];
console.log('修改前:',a);
console.log('修改前:',b);

//修改值
arr1[3] = 3223232;
arr2[0] = '台積電';
let c = arr1[3];
let d = arr2[0];
console.log('修改後:',c)
console.log('修改後:',d);
// console.log(arr1[2]);
// console.log(arr2[2]);

//新增值 .push
arr1.push(6);
arr1.push(7);
arr1.push(8);
arr1.push(9);
arr1.push(10);
console.log(arr1);