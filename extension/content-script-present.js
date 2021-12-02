/**
 * @format
 */

const NEXT_BUTTON_CODE = 39;
const PREV_BUTTON_CODE = 37;

const $buttonNext = document.querySelector('.punch-viewer-navbar-next');
const $buttonPre = document.querySelector('.punch-viewer-navbar-prev');

(async () => {
  async function init() {
    getGoogleData();

    // setInterval(()=>{
    //   emulateActionUser(NEXT_BUTTON_CODE);
    // },3000)
  }

  // получаем и отправляем данные в вебворкер презентации
  async function getGoogleData(params) {
    const googleData = await extractGoogleData();
    await sendGoogleData(googleData);
  }

  // загружаем данные презы из контекста страницы
  async function extractGoogleData() {
    return new Promise((res, rej) => {
      const $script = document.createElement('script');
      $script.src = chrome.runtime.getURL('execute.js');

      document.body.appendChild($script);

      document.body.addEventListener('init-slide-control', e => {
        const { googleDataView } = e.detail;
        res(googleDataView);
        $script.remove();
      });
    });
  }

  async function sendGoogleData() {
    //
  }

  init();
})();
