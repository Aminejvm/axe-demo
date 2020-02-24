export const createGlobalStyle = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      box-sizing: border-box;
    }
    .axe__critical, .axe__serious{
      background-color:rgba(249, 147, 147, 0.35) !important;
      border: 2px solid red;
    }

    .axe__moderate {
      background-color:rgba(240, 240, 177, 0.4                                                                                                                                                                                                                                                                                                                                                                                                                                                   ) !important;
      border: 2px solid yellow;
    }

    .axe__minor {
      border: 2px solid yellow;      
    }
    .axe__alert--container {
      position: absolute;
      background-color: white;
      visibility: visible;
      opacity: 0;
      z-index: 99999;
      max-width: 455px;
      padding: 28px;
      margin-top: 16px;
      border-radius: 25px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.005), 0px 15px 25px rgba(0, 0, 0, 0.15);
      transition: 0.2s all;
    }

    .axe__alert--title > h1 {
      font-size: 1rem;
      color: #52606D;
      line-height: 19px;
    }
    .axe__alert--title > p {
      font-size: 0.75rem;
      color: #9AA5B1;
    }

    .axe__alert--header{
      display: flex;
      align-items: flex-start;
    }

    .axe__alert--header > * + * {
      margin-left: 16px;
    }
    .axe__alert--header > button {
      border-style: none;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      background-color: #F5F7FA;
      margin-left: auto;
    }
    .axe__alert--header > img {
      width: 46px;
      height: 46px;
    }
  `;
  const ref = document.querySelector("script");
  ref.parentNode.insertBefore(style, ref);
};
