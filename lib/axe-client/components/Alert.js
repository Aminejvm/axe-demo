/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createElement, findElement, updateElement } from "../helpers";
const MAP_STATUS_ICON = {
  critical: "/danger.png",
  serious: "/danger.png",
  moderate: "/warning.png",
  minor: "moderate.png",
};

export const openAlert = ({ impact, failureSummary, help, x, y }) => {
  updateElement(findElement(".axe__alert--container"), {
    style: {
      top: `${y}px`,
      left: `${x}px`,
      opacity: 1,
      visibility: "visible",
    },
  });
  updateElement(findElement(".axe__alert--header > img"), {
    src: MAP_STATUS_ICON[impact],
    alt: impact,
  });
  updateElement(findElement(".axe__alert--title > h1"), {
    innerText: help,
  });

  updateElement(findElement(".axe__alert--summary"), {
    innerText: failureSummary.replace("Fix any of the following:", ""),
  });
};

const closeAlert = () => {
  updateElement(findElement(".axe__alert--container"), {
    style: {
      opacity: 0,
      visibility: "hidden",
    },
  });
};

const Title = () =>
  createElement("div", { className: "axe__alert--title" }, [
    createElement("h1", null, []),
    createElement("p", null, ["Fix any of the following:"]),
  ]);

const Header = () =>
  createElement("div", { className: "axe__alert--header" }, [
    createElement("img", null, []),
    Title(),
    createElement("button", { onclick: closeAlert }, ["X"]),
  ]);

const Summary = () => createElement("p", { className: "axe__alert--summary" }, []);
export const Alert = () => createElement("div", { className: "axe__alert--container" }, [Header(), Summary()]);
