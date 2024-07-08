function trafficLights(road, n) {
  const result = [];
  let roadArray = road.split('');
  const lightStates = ['G', 'O', 'R'];
  const lightCycles = { G: 5, O: 1, R: 5 };
  let lightTimers = {};

  // Initialize light timers
  roadArray.forEach((char, index) => {
    if (['G', 'R', 'O'].includes(char)) {
      lightTimers[index] = { state: char, timer: lightCycles[char] };
    }
  });

  // Helper to update lights
  const updateLights = () => {
    Object.keys(lightTimers).forEach((index) => {
      let light = lightTimers[index];
      light.timer--;
      if (light.timer === 0) {
        let newStateIndex =
          (lightStates.indexOf(light.state) + 1) % lightStates.length;
        light.state = lightStates[newStateIndex];
        light.timer = lightCycles[light.state];
      }
      if (roadArray[index] !== 'C') roadArray[index] = light.state;
    });
  };

  // Helper to move cars
  const moveCars = () => {
    let newRoadArray = Array(roadArray.length).fill('.');
    let trafficJam = false;
    for (let i = roadArray.length - 1; i >= 0; i--) {
      if (trafficJam) {
        newRoadArray[i] = roadArray[i];
        break;
      }
      if (roadArray[i] === 'C') {
        let nextPos = i + 1;
        switch (roadArray[nextPos]) {
          case '.':
            newRoadArray[nextPos] = 'C';
            break;

          case 'G':
            if (newRoadArray[i + 2] !== 'C') {
              newRoadArray[nextPos] = 'C';
            } else {
              newRoadArray[i] = 'C';
            }
            break;

          case 'C':
            // this condition will prevent cars from 'piling up'
            if (!Object.keys(lightTimers).includes((i + 1).toString())) {
              newRoadArray[nextPos] = 'C';
            } else {
              newRoadArray[i] = 'C';
              trafficJam = true;
            }
            break;

          case undefined:
            newRoadArray[i] = '.';
            break;

          default:
            newRoadArray[i] = 'C';
            break;
        }
      }
    }
    return newRoadArray;
  };

  for (let t = 0; t <= n; t++) {
    result.push(roadArray.join(''));

    // Update light states
    updateLights();

    // Move the cars
    roadArray = moveCars();

    // Overlay traffic lights
    Object.keys(lightTimers).forEach((index) => {
      if (roadArray[index] !== 'C') {
        roadArray[index] = lightTimers[index].state;
      }
    });
  }

  return result;
}

function doTest(init, expected, n) {
  let actual = trafficLights(init, n);
  console.log('Expected: ');
  for (let i = 0; i < expected.length; i++) {
    console.log(display(expected[i]));
  }
  // Only show expected result if your result is incorrect
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log('\nYour result: ');
    for (let i = 0; i < actual.length; i++) {
      console.log(display(actual[i]));
    }
  }
  assert.deepEqual(actual, expected);
}

describe('Sample test', () => {
  it('Should work for example test', () => {
    let n = 16;
    let sim = [
      'CCC.G...R...', // 0 initial state as passed
      '.CCCG...R...', // 1
      '..CCC...R...', // 2 show 1st car, not the green light
      '..CCGC..R...', // 3 2nd car cannot enter intersection because 1st car blocks the exit
      '...CC.C.R...', // 4 show 2nd car, not the green light
      '...COC.CG...', // 5 3rd car stops for the orange light
      '...CR.C.C...', // 6
      '...CR..CGC..', // 7
      '...CR...C.C.', // 8
      '...CR...GC.C', // 9
      '...CR...O.C.', // 10
      '....C...R..C', // 11 3rd car can proceed
      '....GC..R...', // 12
      '....G.C.R...', // 13
      '....G..CR...', // 14
      '....G..CR...', // 15
      '....O...C...', // 16
    ];

    doTest(sim[0], sim, n);
  });
});

describe('Second test', () => {
  it('Should handle an empty road', () => {
    let n = 10;
    let sim = [
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
      '.....',
    ];
    doTest(sim[0], sim, n);
  });
});

describe('third test', () => {
  it('Should handle a single light and car', () => {
    let n = 10;
    let sim = [
      '.C.G.....',
      '..CG.....',
      '...C.....',
      '...GC....',
      '...G.C...',
      '...O..C..',
      '...R...C.',
      '...R....C',
      '...R.....',
      '...R.....',
      '...R.....',
    ];
    doTest(sim[0], sim, n);
  });
});

describe('fourth test', () => {
  it('Should handle multiple lights in different states with no cars', () => {
    let n = 10;
    let sim = [
      'G...O...R....',
      'G...R...R....',
      'G...R...R....',
      'G...R...R....',
      'G...R...R....',
      'O...R...G....',
      'R...G...G....',
      'R...G...G....',
      'R...G...G....',
      'R...G...G....',
      'R...G...O....',
    ];
    doTest(sim[0], sim, n);
  });
});

// describe("fifth test", () => {
//     it("Should handle traffic jam scenarios", () => {
//     let n = 10;
//     let sim = [
//       "CGCR.CG.C.GC.",
//       "CGCR..C..CG.C",
//       "CGCR..GC..C..",
//       "CGCR..G.C.GC.",
//       "CGCR..G..CG.C",
//       "CO.C..O..CO..",
//       "CR..C.R..CR..",
//       "CR...CR..CR..",
//       "CR...CR..CR..",
//       "CR...CR..CR..",
//       "CR...CR..CR.."
//     ];
//     doTest(sim[0], sim, n);
//   });
// })
