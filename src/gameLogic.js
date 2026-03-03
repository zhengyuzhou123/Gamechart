(function attachSnakeGameLogic(globalScope) {
  const DEFAULT_GRID_SIZE = 20;

  const Direction = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
  };

  const OPPOSITE_DIRECTION = {
    [Direction.UP]: Direction.DOWN,
    [Direction.DOWN]: Direction.UP,
    [Direction.LEFT]: Direction.RIGHT,
    [Direction.RIGHT]: Direction.LEFT,
  };

  const DELTAS = {
    [Direction.UP]: { x: 0, y: -1 },
    [Direction.DOWN]: { x: 0, y: 1 },
    [Direction.LEFT]: { x: -1, y: 0 },
    [Direction.RIGHT]: { x: 1, y: 0 },
  };

  function cellKey(cell) {
    return `${cell.x},${cell.y}`;
  }

  function createInitialState(gridSize = DEFAULT_GRID_SIZE, rng = Math.random) {
    const center = Math.floor(gridSize / 2);
    const snake = [
      { x: center, y: center },
      { x: center - 1, y: center },
      { x: center - 2, y: center },
    ];

    return {
      gridSize,
      snake,
      direction: Direction.RIGHT,
      pendingDirection: Direction.RIGHT,
      food: placeFood(gridSize, snake, rng),
      score: 0,
      isGameOver: false,
      isPaused: false,
    };
  }

  function setDirection(state, direction) {
    if (!DELTAS[direction] || state.isGameOver) {
      return state;
    }

    if (direction === OPPOSITE_DIRECTION[state.direction]) {
      return state;
    }

    return {
      ...state,
      pendingDirection: direction,
    };
  }

  function togglePause(state) {
    if (state.isGameOver) {
      return state;
    }

    return {
      ...state,
      isPaused: !state.isPaused,
    };
  }

  function isOutsideBounds(cell, gridSize) {
    return cell.x < 0 || cell.y < 0 || cell.x >= gridSize || cell.y >= gridSize;
  }

  function isSameCell(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  function hasCollision(head, body) {
    return body.some((segment) => isSameCell(head, segment));
  }

  function tick(state, rng = Math.random) {
    if (state.isGameOver || state.isPaused) {
      return state;
    }

    const nextDirection = state.pendingDirection;
    const delta = DELTAS[nextDirection];
    const currentHead = state.snake[0];
    const nextHead = { x: currentHead.x + delta.x, y: currentHead.y + delta.y };
    const willGrow = isSameCell(nextHead, state.food);

    if (isOutsideBounds(nextHead, state.gridSize)) {
      return {
        ...state,
        direction: nextDirection,
        isGameOver: true,
      };
    }

    const bodyToCheck = willGrow ? state.snake : state.snake.slice(0, -1);
    if (hasCollision(nextHead, bodyToCheck)) {
      return {
        ...state,
        direction: nextDirection,
        isGameOver: true,
      };
    }

    const nextSnake = [nextHead, ...state.snake];
    if (!willGrow) {
      nextSnake.pop();
    }

    let nextFood = state.food;
    let nextScore = state.score;
    let isGameOver = false;

    if (willGrow) {
      nextScore += 1;
      nextFood = placeFood(state.gridSize, nextSnake, rng);

      if (!nextFood) {
        isGameOver = true;
      }
    }

    return {
      ...state,
      snake: nextSnake,
      direction: nextDirection,
      food: nextFood,
      score: nextScore,
      isGameOver,
    };
  }

  function placeFood(gridSize, snake, rng = Math.random) {
    const occupied = new Set(snake.map(cellKey));
    const availableCells = [];

    for (let y = 0; y < gridSize; y += 1) {
      for (let x = 0; x < gridSize; x += 1) {
        const candidate = { x, y };
        if (!occupied.has(cellKey(candidate))) {
          availableCells.push(candidate);
        }
      }
    }

    if (availableCells.length === 0) {
      return null;
    }

    const index = Math.floor(rng() * availableCells.length);
    return availableCells[index];
  }

  globalScope.SnakeGameLogic = {
    DEFAULT_GRID_SIZE,
    Direction,
    createInitialState,
    setDirection,
    tick,
    togglePause,
    placeFood,
  };
})(window);
