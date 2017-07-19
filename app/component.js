import styles from './main.css';

export default (text = 'Beautiful World - Hello World') => {
  const element = document.createElement('button');
  element.className = styles.buttonItem;
  element.innerHTML = text;

  return element ;
};
