export const createTextElement = text => {
  return document.createTextNode(text);
};

export const createElement = (type, props, childrens) => {
  const node = document.createElement(type);
  childrens.forEach(item => {
    typeof item === "object" ? node.appendChild(item) : node.appendChild(createTextElement(item));
  });
  if (props === null) return node;
  for (const key in props) {
    node[key] = props[key];
  }
  return node;
};

export const updateElement = (node, props) => {
  for (const key in props) {
    if (typeof props[key] === "object") {
      for (const secondKey in props[key]) {
        node[key][secondKey] = props[key][secondKey];
      }
    } else {
      node[key] = props[key];
    }
  }
};

export const findElement = query => document.querySelector(query);
export const appendElement = (container, element) => {
  container.appendChild(element);
};
