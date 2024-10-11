const loadAllPhones = async () => {
  console.log("Wow 3 seconds gone");
  document.getElementById("spinner").style.display = "none";

  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=iphone`
  );
  const data = await response.json();
  displayAllPhones(data.data);
};

const displayAllPhones = (phones) => {
  console.log(phones);
};

const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";

  setTimeout(function () {
    loadAllPhones();
  }, 2000);
};

loadAllPhones();
