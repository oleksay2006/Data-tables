function DataTable(config, data) {
   // … // содержимое этой функции вам и нужно написать :)
   	let parent = document.getElementById(Object.keys(config1));
   	let table = document.createElement('table');
   	table.style.border = '1px solid black';
   	for (let i = 0; i < data.length + 1; i++) {
	  	let tr = document.createElement('tr');
	  	for (let j = 0; j < 4; j++) {
		  	let td = document.createElement('td');
		  	if (j == 0 && i == 0) {
      		td.innerHTML = '№';
      		}
      		if (j == 1 && i == 0) {
      		td.innerHTML = 'Имя';
      		}
      		if (j == 2 && i == 0) {
      		td.innerHTML = 'Фамилия';
      		}
      		if (j == 3 && i == 0) {
      		td.innerHTML = 'Возраст';
      		}
		  	tr.appendChild(td);
		}
		table.appendChild(tr);
    //div.innerHTML = table;
	}
	// parent.appendChild(table);
  Object.entries(config).map(([key, value]) => [key, value])
	console.log(config1);
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