//dom elements hotel
const rooms = document.getElementById("norooms");
const roomTypeElem = document.getElementById("typeofroom");
const adultsElem = document.getElementById("adults");
const kidsElem = document.getElementById("kids");
const durationElem = document.getElementById("days");
const childMealsElem = document.getElementById("childmeals");
const currentCostElem = document.getElementById("price");
const hotelBookBtn = document.getElementById("hotelbook");
const outputtextElem = document.getElementById('output');
const extraBedElem = document.getElementById("extrabed");
const promoCodeElem = document.getElementById("promocode");
const loyaltyBtnElem = document.getElementById("loyaltybtn");
const favouriteBtnElem = document.getElementById("favourite");


// dom elements for adventure
const adults2Elem = document.getElementById("adults2");
const kids2Elem = document.getElementById("kids2");
const guideAdultsElem = document.getElementById("guidead");
const guideKidsElem = document.getElementById("guidechid");
const duration2Elem = document.getElementById("days2");
const bookAdventureBtnElem = document.getElementById("bookadventure");
const outputText2Elem = document.getElementById('output2');
const adventureTypeElem = document.getElementById("type");

// add event listeners
hotelBookBtn.addEventListener("click", showHotel);
bookAdventureBtnElem.addEventListener("click", showAdventure);
loyaltyBtnElem.addEventListener("click", showLoyalty);
favouriteBtnElem.addEventListener("click", addToFavorites);


// initialize variables
let roomCount;
let totalCost;
let totalCostAdventure;
let adultsCount;
let kidsCount;
let roomType;
let additionalCost;
let extraBed;
let stayDuration;
let loyaltyPoints;
let promoCode;
let totalCostOverall;
let mathcost;
let adventureType;
let adadults;
let adkids;
let adventureDuration;
let adventureCost;
let guideCost;
let totalCostAdventureOverall;

initialize();

// initialization function
function initialize() {
    roomCount = 0;
    totalCost = 0;
    totalCostAdventure = 0;
    adultsCount = 0;
    kidsCount = 0;
    roomType = 0;
    additionalCost = 0;
    extraBed = 0;
    stayDuration = 0;
    loyaltyPoints = 0;
    promoCode = '';
    totalCostOverall = 0;

    adventureType = 0;
    adadults = 0;
    adkids = 0;
    kidsCountAdventure = 0;
    adventureDuration = 0;
    adventureCost = 0;
    guideCost = 0;
    totalCostAdventureOverall = 0;

    totalCost = (((roomCount * additionalCost) + extraBed ) * stayDuration) + ((adventureCost * adventureDuration) + guideCost);
    currentCostElem.innerText = `Your current cost is ${totalCost} LKR`;
}

// functions for current cost
function calculateCost() {
    roomType = roomTypeElem.value;
    if (roomType === "single") {
        additionalCost = 25000;
    } else if (roomType === "Double") {
        additionalCost = 35000;
    } else if (roomType === "Thrible") {
        additionalCost = 40000;
    } else {
        additionalCost = 0;
    }

    totalCost =( [(((roomCount * additionalCost) + extraBed) )* stayDuration] + ((adventureCost * adventureDuration) + guideCost));
    currentCostElem.innerText = `Your current cost is ${totalCost} LKR`;
}

function showHotel() {
    roomCount = parseInt(rooms.value);
    roomType = roomTypeElem.value;
    extraBed = extraBedElem.value;
    stayDuration = parseInt(durationElem.value);
    kidsCount = parseInt(childMealsElem.value);
    kidsCount = kidsCount * 5000;
    promoCode = promoCodeElem.value;

    if (roomType === "single") {
        additionalCost = 25000;
    } else if (roomType === "Double") {
        additionalCost = 35000;
    } else if (roomType === "Thrible") {
        additionalCost = 40000;
    } else {
        additionalCost = 0;
    }

    if (extraBed.checked) {
        extraBed = 8000;
    } else {
        extraBed = 0;
    }

   calculateCost();

    totalCost = (((roomCount * additionalCost) + kidsCount  + extraBed ) * stayDuration) ;

    // promo code
    if (promoCode == "Promo123") {
        totalCost *= (95/100);
        alert(`You have 5% discount`);
    } else if (promoCode == "") {
        totalCost = totalCost
    } else {
        alert(`Sorry, Invalid voucher number`);
        totalCost = totalCost
    }

    alert(`Thank you for booking our hotel, Your total cost is ${totalCost}`);
    outputtextElem.innerText = `The total cost is ${totalCost}`
}
// functions for adventure
function showAdventure() {
    adadults = parseInt(adults2Elem.value);
    adkids = parseInt(kids2Elem.value);
    adventureDuration = parseInt(duration2Elem.value);
    adventureType = adventureTypeElem.value;
    

    if (adventureType == "Local") {
        adventureCost = (adadults * 5000) + (adkids * 2000);
    } else {
        adventureCost = (adadults * 10000) + (adkids * 5000);
    }

    guideCost = guideAdultsElem.checked ? 1000 : 0;
    guideCost += guideKidsElem.checked ? 500 : 0;

    totalCostAdventure = adventureCost + guideCost;

    alert(`Thank you for booking the Adventure in our hotel \nYour selection cost is ${totalCostAdventure} LKR`);

    
}


// function for add to favorite
function addToFavorites() {
    const favoriteBooking = {
        roomNumber: roomCount,
        roomType: roomType,
        extraBed: extraBed,
        duration: stayDuration,
        kidsNumber: kidsCount,
        promoCode: promoCode,
        totalCost: totalCostOverall,
        adventureDetails: {
            adultsNumber: adadults,
            kidsNumber: adkids,
            duration: adventureDuration,
            guide: guideCost,
            type: adventureType,
            adventureCost: totalCostAdventure,
        },
    };

    localStorage.setItem("favoriteBooking", JSON.stringify(favoriteBooking));

    alert("Booking added to favorites!");
}

// functions for show loyalty points
function showLoyalty() {
    roomCount = parseInt(rooms.value);
    loyaltyPoints = roomCount > 3 ? roomCount * 20 : 0;
    alert(`You have ${loyaltyPoints} loyalty points`);
}