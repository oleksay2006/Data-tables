function DataTable(config, data) {
   // … // содержимое этой функции вам и нужно написать :)
   	let parent = document.getElementById('usersTable');
   	let table = document.createElement('table');
   	for (let i = 0; i < 4; i++) {
	  	let tr = document.createElement('tr');
	  	for (let j = 0; j < 4; j++) {
		  	let td = document.createElement('td');
      		tr.appendChild(td);
		}
		table.appendChild(tr);
    //div.innerHTML = table;
	}
	parent.appendChild(table);
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