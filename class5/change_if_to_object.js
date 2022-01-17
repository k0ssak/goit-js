function getSpecialDiscount(specialDay) {
  if (specialDay === "blackFriday") {
    return 10;
  }

  if (specialDay === "christmas") {
    return 5;
  }

  if (specialDay === "childrensDay") {
    return 8;
  }

  if (specialDay === "newYear") {
    return 3;
  }
}

const specialDay = "blackfriday";

const discount = getSpecialDiscount(specialDay);

const specialDaysDiscounts = {
  blackFriday: 10,
  christmas: 5,
  childrensDay: 8,
  newYear: 3,
};

const discount = specialDaysDiscounts[specialDay];
