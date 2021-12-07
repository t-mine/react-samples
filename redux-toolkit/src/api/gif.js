const API_URL = "https://ruddy-mail.glitch.me/api/gacha";

const gif = {
  random() {
    return fetch(API_URL).then((response) => response.json());
  },
};

export default gif;
