// function DataTable(config, data) {
//    // … // содержимое этой функции вам и нужно написать :)
//    	let parent = document.querySelector(config1.parent);
//    	let table = document.createElement('table');
//    	table.style.border = '1px solid black';
//     let number = 0;
//     let keys = Object.keys(data)
//    	for (let i = 0; i < data.length + 1; i++) {
// 	  	let tr = document.createElement('tr');

// 	  	for (let j = 0; j <= config.columns.length; j++) {
// 		  	let td = document.createElement('td');
//         td.style.border = '1px solid black';
// 		  	if (j == 0 && i == 0) {
//       		td.innerHTML = '№';
//       		}
//       	if(j != 0 && i == 0) {td.innerHTML = config.columns[j-1].title;}
//       	console.log(j);
//       	if (j == 0 && i != 0) {td.innerHTML = number}
//       	if (j != 0 && i != 0) {
//           td.innerHTML = data[i][config.columns[j].value];
//         }
      		
// 		  	tr.appendChild(td);
//         // console.log(config.columns[j].title);
// 		  }
// 		  number++;
//       table.appendChild(tr);
//     //div.innerHTML = table;
// 	 }
// 	parent.appendChild(table);
//   Object.entries(config).map(([key, value]) => [key, value])
// 	console.log(config1.columns[0].title);
// }

function DataTable(config, data) {
   // … // содержимое этой функции вам и нужно написать :)
    let parent = document.querySelector(config1.parent);
    let table = document.createElement('table');
   
    table.style.border = '1px solid black';
   
    // Add head of the table
    let head_tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = "№";
    th.style.border = '1px solid black';
    head_tr.appendChild(th);

    for (let k = 0; k < config.columns.length; k++) {
      let th = document.createElement('th');
      th.style.border = '1px solid black';
      th.innerHTML = config.columns[k].title;
      head_tr.appendChild(th);
    }

    table.appendChild(head_tr);
    
    let table_num = 1;
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      let tn = document.createElement('td'); tn.innerHTML = table_num;
      tn.style.border = '1px solid black';

      table_num++;
      tr.appendChild(tn);

      for (let j = 0; j < config.columns.length; j++) {
        
        let td = document.createElement('td');
        td.style.border = '1px solid black';
        td.innerHTML = data[i][config.columns[j].value]
        tr.appendChild(td)
      }
      table.appendChild(tr);
    }


  parent.appendChild(table);
  // Object.entries(config).map(([key, value]) => [key, value])
  // console.log(config1.columns[0].title);
  
}

const config1 = {
  parent: '#usersTable',
  columns: [
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname'},
    {title: 'Возраст', value: 'age'},
  ]
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Петя', surname: 'Васечкин', age: 15},
  {id: 30051, name: 'Петя', surname: 'Васечкин', age: 15},
  {id: 30051, name: 'Петя', surname: 'Васечкин', age: 15},
  {id: 30051, name: 'Петя', surname: 'Васечкин', age: 15},
];

// DataTable(config1, users);
DataTable(config1, users)
// var table = new Tabulator("#usersTable", {
//   // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
//   data:users, //assign data to table
//   //fit columns to width of table (optional)
//   columns:[ //Define Table Columns
//     {title:"Имя", field:"name"},
//     {title:"Фамилия", field:"surname", hozAlign:"left"},
//     // {title:"Favourite Color", field:"col"},
//     {title:"Возраст", field:"age", hozAlign:"center"},
//   ],
// });