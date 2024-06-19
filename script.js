'use strict';

const table = document.querySelector('table');
const todo = document.getElementById('todo');
const submit = document.getElementById('submit');
const remove = document.getElementById('remove');
let list = [];

const addItem = (item) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input type="checkbox" ${item.done ? 'checked' : ''}></td>
    <td><label>${item.todo}</label></td>`;
  tr.querySelector('input').addEventListener('change', (e) => {
    item.done = e.target.checked;
    const label = tr.querySelector('label');
    if (item.done) {
      label.style.color = 'lightgray';
      label.style.textDecoration = 'line-through';
    } else {
      label.style.color = 'black';
      label.style.textDecoration = 'none';
    }
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
  // チェックが入っている項目があるかどうかを確認
  const hasCheckedItems = list.some(item => item.done);

  if (hasCheckedItems) {
    // チェックが入っている項目だけを削除
    list = list.filter(item => !item.done);
  } else {
    // チェックが入っていない場合は全て削除する前に確認
    if (confirm("全て削除しても良いですか？")) {
      list = [];
    }
  }

  renderList();
});