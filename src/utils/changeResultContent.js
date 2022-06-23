const changeResultContent = (
  languageCode,
  currentPageLanguage,
  navigate,
  cat,
  index
) => {
  if (languageCode !== currentPageLanguage) {
    navigate(`/${cat}/${languageCode}/${index}`);
  } else {
    navigate(`/${cat}/${currentPageLanguage}/${index}`);
  }
};

export default changeResultContent;
