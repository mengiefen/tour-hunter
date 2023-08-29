const getAPIdata = async () => {
  await fetch('https://tour-hunter-bakcend.onrender.com/tours')
    .then((response) => response.json())
    .then((data) => data);
};

export default getAPIdata;
