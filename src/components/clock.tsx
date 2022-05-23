import Text from './clock-text';
import React, { useState, useEffect } from 'react';
import { VStack, HStack } from 'native-base';

const Words = () => {
  const [isActive, setActive] = useState([false]);

  useEffect(() => {
    setTimeout(() => setActive(getDate()), 100);
  });

  return (
    <VStack alignItems='center'>
      <HStack>
        <Text isActive={isActive[0]} text="IT'S" />
        <Text isActive={isActive[1]} text='HALF' />
        <Text isActive={isActive[2]} text='TEN' />
      </HStack>
      <HStack>
        <Text isActive={isActive[3]} text='QUARTER' />
        <Text isActive={isActive[4]} text='TWENTY' />
      </HStack>
      <HStack>
        <Text isActive={isActive[5]} text='FIVE' />
        <Text isActive={isActive[6]} text='MINUTES' />
        <Text isActive={isActive[7]} text='TO' />
      </HStack>
      <HStack>
        <Text isActive={isActive[8]} text='PAST' />
        <Text isActive={isActive[9]} text='ONE' />
        <Text isActive={isActive[10]} text='TWO' />
      </HStack>
      <HStack>
        <Text isActive={isActive[11]} text='THREE' />
        <Text isActive={isActive[12]} text='FOUR' />
        <Text isActive={isActive[13]} text='FIVE' />
      </HStack>
      <HStack>
        <Text isActive={isActive[14]} text='SIX' />
        <Text isActive={isActive[15]} text='SEVEN' />
        <Text isActive={isActive[16]} text='EIGHT' />
      </HStack>
      <HStack>
        <Text isActive={isActive[17]} text='NINE' />
        <Text isActive={isActive[18]} text='TEN' />
        <Text isActive={isActive[19]} text='ELEVEN' />
      </HStack>
      <HStack>
        <Text isActive={isActive[20]} text='TWELVE' />
        <Text isActive={isActive[21]} text="O'CLOCK" />
      </HStack>
    </VStack>
  );
};

function getDate() {
  var data = Array(22);
  var date = new Date();
  //Set Hours and minutes from the date
  var hours = parseFloat(
    date.toLocaleString('en', { hour: 'numeric', hour12: true }).substring(0, 2)
  );
  var minutes = date.getMinutes();
  //Show "IT'S" value always.
  data[0] = true;
  //Set the words states with minutes.
  if (minutes >= 0 && minutes < 5) {
    //O'Clock.
    data[21] = true;
  }

  if (minutes >= 5 && minutes < 10) {
    //Five.
    data[5] = true;
    //Minutes.
    data[6] = true;
    //Past.
    data[8] = true;
  }

  if (minutes >= 10 && minutes < 15) {
    //Ten.
    data[2] = true;
    //Minutes
    data[6] = true;
    //Past.
    data[8] = true;
  }

  if (minutes >= 15 && minutes < 20) {
    //Quarter.
    data[3] = true;
    //Past.
    data[8] = true;
  }

  if (minutes >= 20 && minutes < 25) {
    //Twenty.
    data[4] = true;
    //Minutes.
    data[6] = true;
    //Past.
    data[8] = true;
  }

  if (minutes >= 25 && minutes < 30) {
    //Twenty.
    data[4] = true;
    //Five.
    data[5] = true;
    //Minutes.
    data[6] = true;
    //Past.
    data[8] = true;
  }

  if (minutes >= 30 && minutes < 35) {
    //Half.
    data[1] = true;
    //Past.
    data[8] = true;
  }

  if (minutes >= 35 && minutes < 40) {
    //Twenty.
    data[4] = true;
    //Five.
    data[5] = true;
    //Minutes.
    data[6] = true;
    //To.
    data[7] = true;
  }

  if (minutes >= 40 && minutes < 45) {
    //Twenty.
    data[4] = true;
    //Minutes.
    data[6] = true;
    //To.
    data[7] = true;
  }

  if (minutes >= 45 && minutes < 50) {
    //Quarter.
    data[3] = true;
    //To.
    data[7] = true;
  }

  if (minutes >= 50 && minutes < 55) {
    //Ten.
    data[2] = true;
    //Minutes.
    data[6] = true;
    //To.
    data[7] = true;
  }

  if (minutes >= 55) {
    //Five.
    data[5] = true;
    //Minutes.
    data[6] = true;
    //To.
    data[7] = true;
  }
  //
  if (minutes >= 35) {
    hours++;
  }
  //Set the words states with hours.
  switch (hours) {
    case 1:
      data[9] = true;
      break;

    case 2:
      data[10] = true;
      break;

    case 3:
      data[11] = true;
      break;

    case 4:
      data[12] = true;
      break;

    case 5:
      data[13] = true;
      break;

    case 6:
      data[14] = true;
      break;

    case 7:
      data[15] = true;
      break;

    case 8:
      data[16] = true;
      break;

    case 9:
      data[17] = true;
      break;

    case 10:
      data[18] = true;
      break;

    case 11:
      data[19] = true;
      break;

    case 12:
      data[20] = true;
      break;

    default:
      break;
  }
  return data;
}

export default Words;
