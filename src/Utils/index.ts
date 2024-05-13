export const parseCommas = (number: string) => {
  // Convert number to string
  let strNumber = number.toString();
  // Regular expression to add commas
  strNumber = strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return strNumber;
};
