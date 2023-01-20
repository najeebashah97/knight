import React, { useState } from "react";
let moves: string[] = [];
function KnightMoves() {


    // Function to get all possible moves for a Knight at a given position
function getKnightMoves(x: number, y: number) {
  // Possible moves for a Knight
  moves = [];
  const moveX = [2, 1, -1, -2, -2, -1, 1, 2];
  const moveY = [1, 2, 2, 1, -1, -2, -2, -1];
  for (let i = 0; i < 8; i++) {
    const newX = x + moveX[i];
    const newY = y + moveY[i];
    if (isValidMove(newX, newY)) {
      moves.push(`${String.fromCharCode(newX + 97)}${newY + 1}`);
    }
  }
  //   const [position, setPosition] = useState("a1");
  //   const [moves, setMoves] = useState<string[]>([]);

  //   const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPosition(e.target.value);
  //   };
  return (
    <div id="main">
      <div className="boardWrapper">
        <div className="boardWrapper">
          <table role="grid" className="board" id="chessBoard">
            <tbody>
              <tr>
                <th id="rank_0">8</th>
                <td id="a8"></td>
                <td id="b8"></td>
                <td id="c8"></td>
                <td id="d8"></td>
                <td id="e8"></td>
                <td id="f8"></td>
                <td id="g8"></td>
                <td id="h8"></td>
              </tr>
              <tr>
                <th id="rank_1">7</th>
                <td id="a7"></td>
                <td id="b7"></td>
                <td id="c7"></td>
                <td id="d7"></td>
                <td id="e7"></td>
                <td id="f7"></td>
                <td id="g7"></td>
                <td id="h7"></td>
              </tr>
              <tr>
                <th id="rank_2">6</th>
                <td id="a6"></td>
                <td id="b6"></td>
                <td id="c6"></td>
                <td id="d6"></td>
                <td id="e6"></td>
                <td id="f6"></td>
                <td id="g6"></td>
                <td id="h6"></td>
              </tr>
              <tr>
                <th id="rank_3">5</th>
                <td id="a5"></td>
                <td id="b5"></td>
                <td id="c5"></td>
                <td id="d5"></td>
                <td id="e5"></td>
                <td id="f5"></td>
                <td id="g5"></td>
                <td id="h5"></td>
              </tr>
              <tr>
                <th id="rank_4">4</th>
                <td id="a4"></td>
                <td id="b4"></td>
                <td id="c4"></td>
                <td id="d4"></td>
                <td id="e4"></td>
                <td id="f4"></td>
                <td id="g4"></td>
                <td id="h4"></td>
              </tr>
              <tr>
                <th id="rank_5">3</th>
                <td id="a3"></td>
                <td id="b3"></td>
                <td id="c3"></td>
                <td id="d3"></td>
                <td id="e3"></td>
                <td id="f3"></td>
                <td id="g3"></td>
                <td id="h3"></td>
              </tr>
              <tr>
                <th id="rank_6">2</th>
                <td id="a2"></td>
                <td id="b2"></td>
                <td id="c2"></td>
                <td id="d2"></td>
                <td id="e2"></td>
                <td id="f2"></td>
                <td id="g2"></td>
                <td id="h2"></td>
              </tr>
              <tr>
                <th id="rank_7">1</th>
                <td id="a1"></td>
                <td id="b1"></td>
                <td id="c1"></td>
                <td id="d1"></td>
                <td id="e1"></td>
                <td id="f1"></td>
                <td id="g1"></td>
                <td id="h1"></td>
              </tr>
            </tbody>
          </table>
          {/* <input type="text" value={position} onChange={handlePositionChange} />
          <button type="submit">Submit</button> */}
        </div>
      </div>
    </div>
  );
}

export default KnightMoves;
