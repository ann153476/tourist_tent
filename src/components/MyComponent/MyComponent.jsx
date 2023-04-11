import s from './my_component.module.scss';
export const MyComponent = () => {
  return (
    <>
      <h1 className={s.red}>MyComponent надеюсь єтот буде работать</h1>
      <p>создать проэкт на git hub</p>
      <p>
        выбрать Settings Actions General в последнем абзаце парвый пункт выбрат
        и поставить галочку{' '}
      </p>
      <p>склонировать репозиторий себе на комп</p>
      <p>
        перенести все файлы из этого репозитория в новый кроме папки
        node_modules
      </p>
      <p>в файле package.json изменить имя репозитория на новое</p>
      <p>npm install npm start</p>
      <p>пушим теперь</p>
      <p>ждём пока пройдет деплой</p>
      <p>Settings pages gh-pages save</p>
      <p>появляеться ссылка на сайт теперь можно редактировать и сайт готов</p>
    </>
  );
};
