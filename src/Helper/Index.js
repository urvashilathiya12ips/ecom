export const getdata = () => {
  const data = localStorage.getItem("CartData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
