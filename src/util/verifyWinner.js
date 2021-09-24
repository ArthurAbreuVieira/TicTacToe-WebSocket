export default function verifyWinner(
  gameEnd, 
  board, 
  setBoard, 
  setGameEnd, 
  setWinner, 
  setLoser = false
) {
  if (gameEnd) return;
  const row0 = board[0];
  const row1 = board[1];
  const row2 = board[2];

  // x
  if (row0[0].value === 'close' && row0[1].value === 'close' && row0[2].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[0][0].bg = '#88e439';
      newBoard[0][0].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][1].bg = '#88e439';
        newBoard[0][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][2].bg = '#88e439';
          newBoard[0][2].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row1[0].value === 'close' && row1[1].value === 'close' && row1[2].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[1][0].bg = '#88e439';
      newBoard[1][0].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][1].bg = '#88e439';
        newBoard[1][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][2].bg = '#88e439';
          newBoard[1][2].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row2[0].value === 'close' && row2[1].value === 'close' && row2[2].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[2][0].bg = '#88e439';
      newBoard[2][0].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[2][1].bg = '#88e439';
        newBoard[2][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][2].bg = '#88e439';
          newBoard[2][2].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row0[0].value === 'close' && row1[0].value === 'close' && row2[0].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[0][0].bg = '#88e439';
      newBoard[0][0].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][0].bg = '#88e439';
        newBoard[1][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][0].bg = '#88e439';
          newBoard[2][0].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row0[1].value === 'close' && row1[1].value === 'close' && row2[1].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[0][1].bg = '#88e439';
      newBoard[0][1].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][1].bg = '#88e439';
        newBoard[1][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][1].bg = '#88e439';
          newBoard[2][1].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row0[2].value === 'close' && row1[2].value === 'close' && row2[2].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[0][2].bg = '#88e439';
      newBoard[0][2].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][2].bg = '#88e439';
        newBoard[1][2].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][2].bg = '#88e439';
          newBoard[2][2].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row0[0].value === 'close' && row1[1].value === 'close' && row2[2].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[0][0].bg = '#88e439';
      newBoard[0][0].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][1].bg = '#88e439';
        newBoard[1][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][2].bg = '#88e439';
          newBoard[2][2].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else if (row0[2].value === 'close' && row1[1].value === 'close' && row2[0].value === 'close') {
    setTimeout(() => {
      const newBoard = [...board];
      newBoard[0][2].bg = '#88e439';
      newBoard[0][2].color = 'white';
      setBoard(newBoard);
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][1].bg = '#88e439';
        newBoard[1][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][0].bg = '#88e439';
          newBoard[2][0].color = 'white';
          setBoard(newBoard);
        }, 300);
      }, 300);
    }, 300);
    setGameEnd(true);
    setTimeout(() => setWinner("Player 1"), 1200);
    if(setLoser) setTimeout(() => setLoser(true), 1200);
  } else // o
    if (row0[0].value === 'circle-o' && row0[1].value === 'circle-o' && row0[2].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][0].bg = '#88e439';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][1].bg = '#88e439';
          newBoard[0][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[0][2].bg = '#88e439';
            newBoard[0][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row1[0].value === 'circle-o' && row1[1].value === 'circle-o' && row1[2].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][0].bg = '#88e439';
        newBoard[1][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = '#88e439';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][2].bg = '#88e439';
            newBoard[1][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row2[0].value === 'circle-o' && row2[1].value === 'circle-o' && row2[2].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[2][0].bg = '#88e439';
        newBoard[2][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][1].bg = '#88e439';
          newBoard[2][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][2].bg = '#88e439';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row0[0].value === 'circle-o' && row1[0].value === 'circle-o' && row2[0].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][0].bg = '#88e439';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][0].bg = '#88e439';
          newBoard[1][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][0].bg = '#88e439';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row0[1].value === 'circle-o' && row1[1].value === 'circle-o' && row2[1].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][1].bg = '#88e439';
        newBoard[0][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = '#88e439';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][1].bg = '#88e439';
            newBoard[2][1].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row0[2].value === 'circle-o' && row1[2].value === 'circle-o' && row2[2].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][2].bg = '#88e439';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][2].bg = '#88e439';
          newBoard[1][2].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][2].bg = '#88e439';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row0[0].value === 'circle-o' && row1[1].value === 'circle-o' && row2[2].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][0].bg = '#88e439';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = '#88e439';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][2].bg = '#88e439';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else if (row0[2].value === 'circle-o' && row1[1].value === 'circle-o' && row2[0].value === 'circle-o') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][2].bg = '#88e439';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = '#88e439';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][0].bg = '#88e439';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 2"), 1200);
      if(setLoser) setTimeout(() => setLoser(true), 1200);
    } else {
      let rowEmpty = 0;

      board.map(row => {
        row.map(r => rowEmpty += r.value === '' ? 1 : 0);
      });

      if (rowEmpty === 0) {
        board.map(row => {
          row.map(r => {
            r.bg = '#ff3049';
            r.color = 'white';
            setGameEnd(true);
            setTimeout(() => setWinner("Player 2"), 1200);
            if(setLoser) setTimeout(() => setLoser(true), 1200);
          });
        });
      }
    }
}