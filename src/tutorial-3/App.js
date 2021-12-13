const tasks = ['Изучить первый блок Reac Js'];

const handleClickRemove = (event) => {
  if (event.target.type === 'submit') {
    const index = event.target.dataset.taskId;
    tasks.splice(index, 1);
    render();
  }
};

const handleClickAdd = () => {
  const input = document.querySelector('input');
  const { value } = input;
  if (!value) {
    alert('Введите текст задачи!');
    return;
  }
  tasks.push(value);
  render();
  input.value = '';
}

const render = () => {
  // помещаем внутрь ul список задач из массива tasks
  const ul = document.querySelector('ul');
  const ulContent = tasks
    .map((task, index) => `<li>${task} <button data-task-id=${index}>X</button></li>`)
    .join('\n');  
  ul.innerHTML = ulContent;  
};

// рендерим задачи после загрузки/перезагрузки страницы
window.onload = render;
// вешаем событие клика на кнопку и список
const addButton = document.querySelector('.addTask');
const ul = document.querySelector('ul');
addButton.addEventListener('click', handleClickAdd);
ul.addEventListener('click', handleClickRemove);
