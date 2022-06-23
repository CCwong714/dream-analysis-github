const changePageContent = (
  languageCode,
  currentPageLanguage,
  navigate,
  cat
) => {
  if (languageCode !== currentPageLanguage) {
    navigate(`/${cat}/${languageCode}`);
  } else {
    navigate(`/${cat}/${currentPageLanguage}`);
  }
};

export default changePageContent;
