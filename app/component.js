export default (text = 'Beautiful World - Hello World') => {
  const element = document.createElement('div');

  element.innerHTML = text;

  return element;
};
