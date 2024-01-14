
const { Telegraf } = require('telegraf');

const bot = new Telegraf('6531843554:AAFLHZST1IG98trGSHEIG9e8k4wP4AIsf1U');

// Функция для получения случайной фразы
function getRandomPhraseVlad() {
  const randomIndex = Math.floor(Math.random() * 13);
  return [
    'Влад: Довольный, выехал на треугольник.',
    'Влад: Печальный, плачу алименты.',
    'Влад: Грустный, жду эвакуатор.',
    'Влад: Счастливый, иду в сельсовет.',
    'Влад: Долбаеб, еду без давления масла.',
    'Влад: Ебанутый, смотрю банан 5.5',
    'Влад: Дерзкий, ругаюсь с Тимуром',
    'Влад: Туристический, грублю Максу чтоб уехать в лес',
    'Влад: Модный, купил футболку за сотку',
    'Влад: Фонтанный, выпил боль залпом',
    'Влад: Богатый, наебал студентов',
    'Влад: Гонщик, кручу до 9 тыщ',
    'Влад: Морошу, кусаюсь со зверьгордеевым'
  ][randomIndex];
}

function getRandomPhraseZman() {
  const randomIndex = Math.floor(Math.random() * 17);
  return [
    'Зман: Довольный, стою на набережной.',
    'Зман: Мамин бизнесмен - зашёл на озон с линзами.',
    'Зман: Грустный, жду эвакуатор.',
    'Зман: Счастливый, еду в шампур.',
    'Зман: Уникальный, рассказываю про m40d.',
    'Зман: Работящий, сижу в баварии',
    'Зман: Дерзкий, ругаюсь со Зверьгордеевым',
    'Зман: Приключенческий, пытаюсь бухать в сельсовете на равных с пацанами',
    'Зман: Наблюдательный, слежу за набережкой весь вечер',
    'Зман: Электрик - присоединяюсь к трансформаторной будке',
    'Зман: Скрытный - оставил машину на мажорке, сам в боровом',
    'Зман: Эксклюзивный - таримся на алишке',
    'Зман - дизельный еблан',
    'Зман: Юморной - узнаю че со скаем',
    'Зман: грустный , включает звук выхлопа попкорна только в магнитоле',
    'Зман: Юридический, покажет сколько стоит пленка',
    'Зман: Властный, удаляю сообщения которые мне не нравятся'
  ][randomIndex];
}

function getRandomPhraseCars() {
  const randomIndex = Math.floor(Math.random() * 2);
  return [
    'Квотер - ',
    '100 - 200: ',
  ][randomIndex];
}

function count() {
    const min = 4;
    const max = 30;
    const randomNum = Math.random() * (max - min) + min;
    return parseFloat(randomNum.toFixed(2));
  }
  

// Обработчик для инлайн запросов
bot.on('inline_query', (ctx) => {
  const queryId = ctx.inlineQuery.id;
  const fromUser = ctx.inlineQuery.from;
  const username = fromUser.username || fromUser.first_name || 'Анонимный пользователь';

  const randomPhraseVlad = getRandomPhraseVlad();
  const randomPhraseZman = getRandomPhraseZman();
  const countSpeed = getRandomPhraseCars()
  const summSpeed = count()

  const results = [
    {
      type: 'article',
      id: '1',
      title: '⭐️ Какой ты сегодня Владик? ⭐️',
      thumb_url: 'https://a.d-cd.net/ff4566s-1920.jpg',
      parse_mode: 'HTML',
      input_message_content: {
        message_text: `@${username} сегодня - ${randomPhraseVlad}`
      }
    },
    {
      type: 'article',
      id: '2',
      title: '⭐️ Какой ты сегодня Зман? ⭐️',
      thumb_url: 'https://suzar.ru/system/images/images/000/000/366/original/bmw_x3_e83_rest_1.jpeg?1649892296',
      parse_mode: 'HTML',
      input_message_content: {
        message_text: `@${username} сегодня - ${randomPhraseZman}`
      }
    },
    {
      type: 'article',
      id: '3',
      title: '⭐️ Какой ты гонщик? ⭐️',
      thumb_url: 'https://journal.ab-club.ru/wp-content/uploads/2021/03/11-2.jpg',
      parse_mode: 'HTML',
      input_message_content: {
        message_text: `@${username} поехал - ${countSpeed} ${summSpeed} секунд`
      }

    },
  ];
  ctx.answerInlineQuery(results, { cache_time: 0 })
    .catch(error => console.log(error));
});

bot.launch();
