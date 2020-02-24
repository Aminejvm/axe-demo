import { updateElement } from "../helpers";

const mapImpactToClass = {
  serious: "axe__serious",
  critical: "axe__serious",
  moderate: "axe__moderate",
  minor: "axe__minor",
};

export const decorateViolance = (element, node) => {
  element.classList.add(mapImpactToClass[node.impact]);
};

/**
 * @returns
 * [x.y] positions
 */
export const findPosition = element => {
  return [element.getBoundingClientRect().left, element.getBoundingClientRect().top];
};

export const addEvent = ({ element, violation, node, position, openAlert }) => {
  const [x, y] = position;
  updateElement(element, {
    onmouseenter: () => {
      openAlert({
        impact: node.impact,
        failureSummary: node.failureSummary,
        help: violation.help,
        x,
        y,
      });
    },
  });
};
