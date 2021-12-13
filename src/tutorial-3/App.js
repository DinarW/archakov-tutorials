const tasks = ['Изучить первый блок Reac Js'];

const handleClickRemove = (event) => {
  const index = event.target.dataset.taskId;
  tasks.splice(index, 1);
  render();
};

const handleClickAdd = () => {
  const input = document.querySelector('input');
  const { value } = input;
  tasks.push(value);
  render();
  input.value = '';
}

const render = () => {
  // помещаем внутрь ul список задач из массива tasks
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  const ulContent = tasks
    .map((task, index) => `<li>${task} <button data-task-id=${index}>X</button>`)
    .join('\n');  
  ul.innerHTML = ulContent;

  // навешиваем на каждую кнопку задачи событие удаления из списка
  const liTasks = [...ul.querySelectorAll('li')];
  liTasks.forEach((li) => {
    const button = li.querySelector('button');
    button.addEventListener('click', handleClickRemove);
  });
};

// рендерим задачи после загрузки/перезагрузки страницы
window.onload = render;

const addButton = document.querySelector('.addTask');
addButton.addEventListener('click', handleClickAdd);