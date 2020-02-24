import axeCore from "axe-core";
import styled from "styled-components";
import { Alert, openAlert } from "../axe-client/components/Alert";
import { appendElement, findElement } from "../axe-client/helpers";
import { addEvent, decorateViolance, findPosition } from "./controller";
import { createGlobalStyle } from "./styles";

export const Runner = async () => {
  createGlobalStyle();
  appendElement(findElement("#__next"), Alert());
  const results = await axeCore.run({ exclude: [[".axe__alert--container"]] });
  await results.violations.forEach(violation => {
    violation.nodes.forEach(node => {
      const currentElement = findElement(node.target[0]);
      decorateViolance(currentElement, node);
      const position = findPosition(currentElement);
      addEvent({
        element: currentElement,
        position,
        violation,
        node,
        openAlert,
      });
    });
  });
};
// Components
export const AxeButton = styled.button`
  position: fixed;
  right: 0%;
  top: 50%;
  background-color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
  padding: 16px 32px;
  z-index: 9999;
`;
