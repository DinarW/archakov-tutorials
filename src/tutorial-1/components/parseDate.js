function parseDate(date) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString("ru", options).replace('г.', '');
}

export default parseDate;
