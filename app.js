


studentArrayData.sort().map((data, i) =>{

   
    total_admission_fee+= +data[6]
});
// --------------------------Total Admnission fees-----------------------------------
console.log(`
<---------------------------Total admission fee---------------------------->
 Total admission fee = ${total_admission_fee}
`);

// ----------------------------Find All Female Students---------------------------
console.log(`

<-------------------------Female Students---------------------------->`
);
let totalFemaleStudent=0;
studentArrayData.sort().map((data, i) =>{

    if(data[4]==='Female'){
      console.log(`
      Roll : ${data[1]}
      Calss : ${data[3]}
      Name : ${data[0]}
      Students gender : ${data[4]}

      `);
    }
    totalFemaleStudent++
});
// ----------------------------Find class wise student result---------------------------
console.log(`

<-------------------------Find class wise student result---------------------------->`
);

let total_students=0;
studentArrayData.sort().map((data, i) =>{
  if(data[3]=='Five'){
      console.log(`
      Roll : ${data[1]}
      Age : ${data[2]}
      Calss : ${data[3]}
      Name : ${data[0]}
      Students gender : ${data[4]}
      Location : ${data[5]}

      `);
      total_students++
    }
});
console.log(`--------------------------Total students of class five : ${total_students}`);
// ----------------------------Location wise student result---------------------------
console.log(`

<-------------------------Location wise student result---------------------------->`
);

studentArrayData.sort().map((data, i) =>{

      if(data[5]==='Jamilnogor' || data[5]=='Kamargari' || data[5]=='Siusgari'){
        console.log(`
        Roll : ${data[1]}
        Age : ${data[2]}
        Calss : ${data[3]}
        Name : ${data[0]}
        Location : ${data[5]}
  
        `);
      }
  
});
// ---------------------------- find student between 10 - 25 age---------------------------
console.log(`

<------------------------- find student between 10 - 25 age---------------------------->`
);
let totals=0;
studentArrayData.sort().map((data, i) =>{

      if(data[2]>=10 && data[2]<=25){
        console.log(`
        Age : ${data[2]}
        Roll : ${data[1]}
        Calss : ${data[3]}
        Name : ${data[0]}
        
  
        `);
        totals++
      }
      
});
console.log(`--------------------------Total students between 10 - 25 age : ${totals}`);
