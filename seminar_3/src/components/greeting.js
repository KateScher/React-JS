/* Задание 1 (тайминг 15 минут)
● Создайте функциональный компонент Greeting, который принимает проп name и отображает сообщение Привет, {name}!.● Используйте компонент Greeting в вашем основном компоненте App, передавая разные имена в качестве пропсов. */

function Greeting({ name }) {
  return (
    <div>
      <h1>Привет, {name}</h1>
    </div>
  );
}

export default Greeting;
