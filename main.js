function DataTable(config, data) {
   // … // содержимое этой функции вам и нужно написать :)
   	let parent = document.querySelector(config1.parent);
   	let table = document.createElement('table');
   	table.style.border = '1px solid black';
   	for (let i = 0; i < data.length + 1; i++) {
	  	let tr = document.createElement('tr');
	  	for (let j = 0; j < 4; j++) {
		  	let td = document.createElement('td');
        td.style.border = '1px solid black';
		  	if (j == 0 && i == 0) {
      		td.innerHTML = '№';
      		}
      	if(j != 0 && i == 0) {td.innerHTML = config.columns[j].title;}
      	console.log(j);
      		
      		
      		
		  	tr.appendChild(td);
		}
		table.appendChild(tr);
    //div.innerHTML = table;
	}
	parent.appendChild(table);
  Object.entries(config).map(([key, value]) => [key, value])
	console.log(config1.columns[0].title);
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
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

// DataTable(config1, users);
DataTable(config1, users)