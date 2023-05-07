const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "en"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "en";
let currentTexts = {};

const homeTexts = {
  "home_page-title": {
    ua: "Прокладання маршруту",
    en: "Web Map",
  },
  "home_page-1": {
    ua: "Головна",
    en: "Home",
  },
  "home_page-2": {
    ua: "Оптимізація доставки ",
    en: "Delivery optimization",
  },
  "home_page-3": {
    ua: "Прокладання маршрутів",
    en: "Creating routes",
  },
  "home_page-4": {
    ua: "Карта",
    en: "Map",
  },
  "home_page-5": {
    ua: "Контакти",
    en: "Contact",
  },

  "home_page-6": {
    ua: "Англійська",
    en: "English",
  },
  "home_page-7": {
    ua: "Українська",
    en: "Ukrainian",
  },
  "home_page-8": {
    ua: "Ласкаво просимо на сторінку!",
    en: "Welcome To Page!",
  },
  "home_page-9": {
    ua: "Планування маршрутів та оптимізація процесу доставки",
    en: "Planning routes and optimizing the delivery process",
  },
  "home_page-10": {
    ua: "Мета прокладання маршрутів і оптимізації процесу доставки товарів полягає в забезпеченні ефективності та економічної вигоди при здійсненні доставки товарів. Це означає зменшення часу та витрат на доставку, зниження витрат на паливо та інші експлуатаційні витрати, покращення обслуговування клієнтів та забезпечення надійної та швидкої доставки товарів до клієнтів. Мета оптимізації процесу доставки полягає у забезпеченні максимальної ефективності та оптимальності маршруту, забезпечення вчасної доставки та задоволення потреб клієнтів.",
    en: "The purpose of route planning and optimization is to ensure efficiency and cost-effectiveness in the delivery of goods. This means reducing delivery time and costs, lowering fuel and other operating costs, improving customer service, and ensuring that goods are delivered reliably and quickly to customers. The goal of optimizing the delivery process is to maximize efficiency and route optimization, ensure on-time delivery, and meet customer needs.",
  },
  "home_page-11": {
    ua: "Оптимізація доставки",
    en: "Delivery optimization",
  },
  "home_page-12": {
    ua: "Оптимізація доставки - це процес підвищення ефективності та зниження вартості доставки товарів або послуг від місця виробництва до місця призначення.Цей процес включає вибір найефективніших маршрутів доставки, найкраще використання ресурсів (наприклад, транспортних засобів і працівників), а також мінімізацію витрат на паливо, знос транспортних засобів та інших операційних витрат.",
    en: "Delivery optimization is the process of increasing the efficiency and reducing the cost of delivering goods or services from the point of production to the destination. This process includes selecting the most efficient delivery routes, making the best use of resources (e.g., vehicles and employees), and minimizing fuel costs, vehicle wear and tear, and other operating expenses.",
  },
  "home_page-13": {
    ua: "Оптимізація доставки може бути особливо важливою для компаній електронної комерції, які мають велику кількість замовлень, а також для компаній, які керують складами та розподільчими центрами. Оптимізація доставки може допомогти зменшити витрати на доставку та покращити клієнтський досвід.",
    en: " Delivery optimization can be especially important for e-commerce companies that have a large number of orders, as well as for companies that operate warehouses and distribution centers. Delivery optimization can help reduce shipping costs and improve customer experience.",
  },
  "home_page-14": {
    ua: "Для безпечної доставки речей необхідно дотримуватися кількох простих кроків:Виберіть правильну упаковку: Використовуйте міцні коробки або контейнери, які можуть витримати вагу ваших речей. Для хрупких речей краще використовувати спеціальні коробки або контейнери, які мають додаткову захист.",
    en: "    There are a few simple steps you need to follow to ensure the safe delivery of your items:Choose the right packaging: Use sturdy boxes or containers that can support the weight of your items. For fragile items,it is better to use special boxes or containers that have additional protection. ",
  },
  "home_page-15": {
    ua: "Запакуйте речі правильно: Розмістіть важкі речі внизу, а легкі - зверху. Використовуйте кріплення, такі як пластикові пакети, скотч або ремені, щоб утримувати речі на місці. Якщо у вас є хрупкі речі, обгорніть їх в пухкі матеріали, такі як бульбашкова плівка або папір, щоб запобігти пошкодженню. Позначте коробку: Напишіть назву або опис вмісту коробки на зовнішній стороні, щоб уникнути помилок при пересиланні. Також вкажіть, якщо в коробці містяться хрупкі речі.",
    en: "Pack your belongings properly: Place heavy items at the bottom and light items at the top. Use fasteners, such as plastic bags, tape, or straps, to keep things in place. If you have fragile items, wrap them in loose materials such as bubble wrap or paper to prevent damage. Label the box: Write the name or description of the contents of the box on the outside to avoid mistakes during shipping. Also indicate if the box contains fragile items.",
  },
  "home_page-16": {
    ua: "Виберіть доставку: Виберіть доставку з достатньою кількістю захисту, який вам потрібен. Якщо у вас є дуже хрупкі речі, можливо, вам потрібно використовувати послугу зі страхуванням. Перевірте упаковку: Перед відправленням впевніться, що коробка добре запакована і все з кріпленням на місці. Потрібно перевірити, що нічого не рухається всередині коробки і що упаковка не має слабких місць. Враховуючи ці прості кроки, ви можете зробити безпечну доставку своїх речей.",
    en: "Choose the shipping: Choose a shipping service with enough protection that you need. If you have very fragile items, youmay need to use a service with insurance. Check the packaging: Before shipping, make sure that the box is well packed and everything with fasteners is in place.You need to check that nothing is moving inside the box and that the packaging has no weaknesses.By keeping these simple steps in mind, you can make sure your items are shipped safely. ",
  },
  "home_page-17": {
    ua: "Зважаючи на те, що доставка товару є важливою частиною бізнесу, особливо для онлайн-магазинів, в яких багато товарів продаються в Інтернеті, оптимізація процесу доставки може значно зменшити витрати і покращити задоволеність клієнтів. Ось кілька пунктів, які можуть допомогти оптимізувати доставку товару:",
    en: "Given that shipping is an important part of a business, especially for online retailers with many products products are sold online, optimizing the shipping process can significantly reduce costs and improve customer satisfaction. Here are a few points that can help optimize product delivery:",
  },
  "home_page-18": {
    ua: "Використовуйте автоматизовану систему відстеження",
    en: "Use an automated tracking system",
  },
  "home_page-19": {
    ua: "Використовуйте інформаційну систему щоб визначити, які товари можуть бути доставлені разом, щоб зменшити кількість поїздок",
    en: "Use the information system to determine which products can be delivered together to reduce the number of trips",
  },
  "home_page-20": {
    ua: "Співпрацюйте з надійними перевізниками",
    en: "Cooperate with reliable carriers",
  },
  "home_page-21": {
    ua: "Встановіть різні тарифи на доставку залежно від розміру і ваги товару",
    en: "Set different shipping rates depending on the size and weight of the product",
  },
  "home_page-22": {
    ua: "Плануйте доставку заздалегідь. .",
    en: "Plan your delivery in advance. ",
  },
  "home_page-23": {
    ua: "Використовуйте маршрутизацію доставки",
    en: "Use delivery routing to reduce the time required for order delivery.",
  },

  "home_page-24": {
    ua: "Співпрацюйте з надійними перевізниками, які забезпечать швидку та якісну доставку товару",
    en: "Cooperate with reliable carriers",
  },
  "home_page-25": {
    ua: "Надавайте можливість клієнтам обирати дату та час доставки",
    en: "Allow customers to choose the date and time of delivery",
  },
  "home_page-26": {
    ua: "Поради щодо оптимізації",
    en: "Tips for optimization",
  },
  "home_page-27": {
    ua: "Створення маршрутів",
    en: "Creating routes",
  },
  "home_page-28": {
    ua: "Поради щодо створення маршруту",
    en: "Tips for creating a route",
  },
  "home_page-29": {
    ua: "Визначте область доставки: Почніть з визначення території, яку потрібно охопити при доставці товарів. Це може бути місто, регіон або країна, залежно від масштабу вашого бізнесу.",
    en: "Define the delivery area: Start by defining the territory you need to cover when delivering goods. This can be a city, region, or country, depending on the scale of your business.",
  },
  "home_page-30": {
    ua: "Зібрати дані про клієнтів: Зібрати інформацію про клієнтів, які будуть отримувати товари. Це може включати їхні адреси, графіки та будь-які інші вимоги щодо доставки.",
    en: "Collect customer data: Collect information about the customers who will be receiving the goods. This can include their addresses, schedules, and any other shipping requirements.",
  },
  "home_page-31": {
    ua: "Визначте ресурси: Визначте кількість вантажних машин, які ви маєте, та їхню грузопідйомність. Це допоможе вам зрозуміти, скільки товарів ви зможете доставити за один раз.",
    en: "Identify resources: Determine the number of trucks you have and their carrying capacity. This will help you understand how many goods you can deliver at one time.",
  },
  "home_page-32": {
    ua: "Використовуйте програмне забезпечення для маршрутизації: Використовуйте програмне забезпечення для маршрутизації, щоб знайти найкоротший та найефективніший маршрут для доставки товарів. Це допоможе зменшити витрати на паливо та скоротити час доставки.",
    en: "Use routing software: Use routing software to find the shortest and most efficient route to deliver your goods. This will help reduce fuel costs and shorten delivery times.",
  },
  "home_page-33": {
    ua: "Переглянути та оптимізувати маршрут: Перегляньте знайдений маршрут та оптимізуйте його, якщо потрібно. Розгляньте можливості змінити порядок доставки товарів, щоб зменшити відстань між адресами.",
    en: "Review and optimize the route: Review the route found and optimize it if necessary. Consider changing the order of delivery to reduce the distance between addresses.",
  },
  "home_page-34": {
    ua: "Плануйте доставку: Заплануйте доставку таким чином, щоб забезпечити доставку товарів вчасно та відповідно до вимог клієнтів. Розгляньте можливість використання різних типів доставки, таких як повітряна або водна, для забезпечення швидкої та ефективної доставки.",
    en: "Schedule a delivery: Schedule your deliveries to ensure that they are delivered on time and in accordance with customer requirements. Consider using different types of shipping, such as air or water, to ensure fast and efficient delivery.",
  },
  "home_page-35": {
    ua: "Контакти",
    en: "Contact",
  },
  "home_page-36": {
    ua: "Головна",
    en: "Home",
  },
  "home_page-37": {
    ua: "Оптимізація доставки",

    en: "Delivery optimization",
  },
  "home_page-38": {
    ua: "Прокладання маршрутів",
    en: "Creating routes",
  },
  "home_page-39": {
    ua: "Карта",
    en: "Map",
  },
  "home_page-40": {
    ua: "Контакти",
    en: "Contact",
  },
  "home_page-41": {
    ua: "Карта",
    en: "Map",
  },
  "home_page-btn": {
    ua: "Відправити",
    en: "Send",
  },
  "home_page-email": {
    ua: "Напишіть на електронну пошту",
    en: "Write by email",
  },
};

// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;
    // case "/another_page.html":
    //   currentTexts = anotherTexts;
    //   break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
function checkActiveLangButton() {
  switch (currentLang) {
    case "ua":
      document
        .querySelector('[data-btn="ua"]')
        .classList.add("header__btn_active");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;

    default:
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;
  }
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log("navigator.language", checkBrowserLang());

//JS Scroll

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()

//     const blockID = anchor.getAttribute('href')
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })

//   })
// }

// //burger
// const burger = document?.querySelector('[data-burger]');
// const nav = document?.querySelector('[data-nav]');
// const navItems = nav?.querySelectorAll('a');
// const body = document.body;
// burger?.addEventListener('click', () => {
//   body.classList.toggle('stop-scroll');
//   burger?.classList.toggle('burger--active');
//   nav?.classList.toggle('nav--visible');
// });
// navItems.forEach(el=>{
//   el.addEventListener('click',()=>{
//     body.classList.remove('stop-scroll');
//     burger?.classList.remove('burger--active');
//     nav?.classList.remove('nav--visible');
//   });
// });
//Зміна теми
document.querySelector(".themetoggle").addEventListener("click", (event) => {
  // event.preventDefault();
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }

  addDarkClassToHTML();
});

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector(".themetoggle span").textContent = "dark_mode";
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      isDarkTheme = true;
      // Оновлюємо відображення кнопки переключення теми
      document.getElementById("myImageGitHub").src = "images/github_light.png";
      document.getElementById("myImageInstagram").src =
        "images/instagram_light.png";
      document.getElementById("myImageTelegram").src =
        "images/telegram_light.png";
      document.getElementById("myImageEmail").src = "images/email_light.png";
      document.querySelector(".themetoggle span").textContent = "light_mode";
    } else {
      isDarkTheme = false;
      // Оновлюємо відображення кнопки переключення теми
      document.getElementById("myImageGitHub").src = "images/github.png";
      document.getElementById("myImageInstagram").src = "images/instagram.png";
      document.getElementById("myImageTelegram").src = "images/telegram.png";
      document.getElementById("myImageEmail").src = "images/mail.png";

      document.querySelector(".themetoggle span").textContent = "dark_mode";
    }
  } catch (err) {}
};

addDarkClassToHTML();
const button = document.getElementById("myButton");
const image = document.getElementById(
  "myImageGitHub"
);
const image2 = document.getElementById("myImageInstagram") ;
const image3 = document.getElementById("myImageTelegram") ;
const image4 = document.getElementById("myImageEmail") ;
let isDarkTheme = false; // true, якщо встановлена темна тема, false - якщо встановлена світла тема
button.addEventListener("click", function () {
  if (isDarkTheme) {
    image4.src = "images/mail.png";
    image2.src = "images/instagram.png";
    image3.src = "images/telegram.png";
    image.src = "images/github.png";
  } else {
    image4.src = "images/email_light.png";
    image2.src = "images/instagram_light.png";
    image3.src = "images/telegram_light.png";
    image.src = "images/github_light.png";
  }
  isDarkTheme = !isDarkTheme; // змінюємо тему сайту на протилежну
});

function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
}
//burger

  // const burger = document?.querySelector('[data-burger]');
  
  // const nav = document?.querySelector('[data-nav]');

  // burger?.addEventListener('click', () => {
  //   nav.classList.toggle('nav--visible');
  // });

//   const burger = document?.querySelector('[data-burger]');
// const nav = document?.querySelector('[data-nav]');
// const navItems = nav?.querySelectorAll('a');
// const body = document.body;
// const header = document?.querySelector('.header');
// const headerHeight = header.offsetHeight;
// console.log(headerHeight)
// document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

// burger?.addEventListener('click', () => {
//   body.classList.toggle('stop-scroll');
//   burger?.classList.toggle('burger--active');
//   nav?.classList.toggle('nav--visible');
// });

// navItems.forEach(el => {
//   el.addEventListener('click', () => {
//     body.classList.remove('stop-scroll');
//   burger?.classList.remove('burger--active');
//   nav?.classList.remove('nav--visible');
//   });
// });

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});

let scrollTop;
let bodyStyleOverflow;

// функція для відключення прокручування
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  bodyStyleOverflow = document.body.style.overflow;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
}


// функція для відновлення прокручування
function enableScroll() {
document.body.style.position = '';
document.body.style.top = '';
document.body.style.width = '';
document.body.style.overflow = bodyStyleOverflow;
window.scrollTo(0, scrollTop);
}