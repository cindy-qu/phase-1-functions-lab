// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}


function distanceTravelledInFeet(beginning, end) {
    if (beginning < end) {
        return (end - beginning) * 264;
    } else {
        return (beginning - end) * 264;
    }

}

function calculatesFarePrice(beginning, end) {
    const distance = distanceTravelledInFeet(beginning, end);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}