// Get dynamic page title for different languages
// TODO: Maybe use the data we get from the api instead of hardcoding
const getPageTitle = (category, t) => {
  let title = '';
  if (category === 'qzt') {
    title = t('dictionary1');
  } else if (category === 'gzt') {
    title = t('dictionary2');
  } else if (category === 'wzt') {
    title = t('dictionary3');
  }
  return title;
};

export default getPageTitle;
