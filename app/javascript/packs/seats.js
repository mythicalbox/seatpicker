
export function find(data) {
     const columns = data.venue.layout.columns;
     // assumption made that only available seats are included in data
     const result = Object.keys(data.seats).sort((keyA, keyB) => {

          const seatA = data.seats[keyA];
          const seatB = data.seats[keyB];

          const row1 = seatA.row;
          const row2 = seatB.row;

          // console.log(seatA, seatB);
          // console.log(row1, row2);

          if (row1 < row2) {
               return -1;
          }
          else if (row1 > row2) {
               return 1;
          } else { // same row, now check which is closer to aisle
               // console.log("same row");
               const col1 = seatA.column;
               const col2 = seatB.column;

               const midpoint = columns / 2;

               if (distanceFromMidpoint(midpoint, col1) < distanceFromMidpoint(midpoint, col2)) {
                    // console.log("here");
                    return -1;
               }
               else if (distanceFromMidpoint(midpoint, col1) > distanceFromMidpoint(midpoint, col2)) {
                    console.log(midpoint, col1, col2);
                    // console.log("here2");
                    return 1;
               }
               // this is so we return seat 6 out of 12 as best instead of seat 7 when they are equal
               else if (col1 < col2) {
                    return -1;
               }
               else if (col2 > col1) {
                    return 1;
               }

               console.log(col1, col2, midpoint);

               return 0;
          }
     });
      // equal is 0
      // -1 a is less than
      // 1 a is more than

      return result[0];
}

function distanceFromMidpoint(midpoint, position) {
     return Math.abs(midpoint - position);
}
