// 'use strict';

// const table = document.querySelector('table');
// const todo = document.getElementById('todo');
// const submit = document.getElementById('submit');

// let list = [];

// const addItem = (item) => {
//   const tr = document.createElement('tr');
//   for (const prop in item) {
//     const td = document.createElement('td');
//     if (prop == 'done') {
//       const checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.checked = item[prop];
//       td.appendChild(checkbox);
//       checkbox.addEventListener('change', checkBoxListener);
//     } else {
//       td.textContent = item[prop];
//     }
//     tr.appendChild(td);
//   }
//   table.append(tr);
// };

// const checkBoxListener = (ev) => {
//   const trList = Array.from(document.getElementsByTagName('tr'));
//   const currentTr = ev.currentTarget.parentElement.parentElement;
//   const idx = trList.indexOf(currentTr) - 1;
//   list[idx].done = ev.currentTarget.checked;

// };

// submit.addEventListener('click', () => {
//   const item = {};

//   if (todo.value != '') {
//     item.todo = todo.value;
//   } else {
//     item.todo = 'ダミーTODO';
//   }

//   item.done = false;
//   todo.value = '';

//   addItem(item);

//   list.push(item);
//   storage.todoList = JSON.stringify(list);
// });

// const main = document.querySelector('main');
// const clearTable = () => {
//   const trList = Array.from(document.getElementsByTagName('tr'));
//   trList.shift();
//   for (const tr of trList) {
//     tr.remove();
//   }
// };

// const remove = document.createElement('button');
// remove.textContent = '完了したTODOを削除する';
// remove.id = 'remove';
// const br = document.createElement('br');
// main.appendChild(br);
// main.appendChild(remove);
// remove.addEventListener('click', () => {
//   clearTable();
//   list = list.filter((item) => item.done == false);
//   for (const item of list) {
//     addItem(item);
//   }
// });
// 






//完了すると文字がグレイアウトする

// 'use strict';

// const table = document.querySelector('table');
// const todo = document.getElementById('todo');
// const submit = document.getElementById('submit');
// const remove = document.getElementById('remove');
// let list = [];

// const addItem = (item) => {
//   const tr = document.createElement('tr');
//   tr.innerHTML = `
//     <td><input type="checkbox" ${item.done ? 'checked' : ''}></td>
//     <td><label>${item.todo}</label></td>`;
//   tr.querySelector('input').addEventListener('change', (e) => {
//     item.done = e.target.checked;
//     const label = tr.querySelector('label');
//     if (item.done) {
//       label.style.color = 'lightgray';
//       label.style.textDecoration = 'line-through';
//     } else {
//       label.style.color = 'black';
//       label.style.textDecoration = 'none';
//     }
//   });
//   table.appendChild(tr);
// };

// const renderList = () => {
//   table.querySelectorAll('tr:not(:first-child)').forEach(tr => tr.remove());
//   list.forEach(addItem);
// };

// submit.addEventListener('click', () => {
//   const item = { todo: todo.value || 'ダミーTODO', done: false };
//   list.push(item);
//   addItem(item);
//   todo.value = '';
// });

// remove.addEventListener('click', () => {
//   list = list.filter(item => !item.done);
//   renderList();
// });





// 'use strict';

const table = document.querySelector('table');
const todo = document.getElementById('todo');
const submit = document.getElementById('submit');
const remove = document.getElementById('remove');
let list = [];

const addItem = (item) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><input type="checkbox" ${item.done ? 'checked' : ''}></td>
                  <td>${item.todo}</td>`;
  tr.querySelector('input').addEventListener('change', (e) => {
    item.done = e.target.checked;
  });
  table.appendChild(tr);
};

const renderList = () => {
  table.querySelectorAll('tr:not(:first-child)').forEach(tr => tr.remove());
  list.forEach(addItem);
};

submit.addEventListener('click', () => {
  const item = { todo: todo.value || '未定のTODO', done: false };
  list.push(item);
  addItem(item);
  todo.value = '';
});

remove.addEventListener('click', () => {
  list = list.filter(item => !item.done);
  renderList();
});

