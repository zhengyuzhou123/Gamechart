const { Direction, createInitialState, setDirection, tick, togglePause } =
  window.SnakeGameLogic;

const TICK_MS = 120;

const directionByKey = {
  ArrowUp: Direction.UP,
  ArrowDown: Direction.DOWN,
  ArrowLeft: Direction.LEFT,
  ArrowRight: Direction.RIGHT,
  w: Direction.UP,
  W: Direction.UP,
  s: Direction.DOWN,
  S: Direction.DOWN,
  a: Direction.LEFT,
  A: Direction.LEFT,
  d: Direction.RIGHT,
  D: Direction.RIGHT,
};

const gridElement = document.getElementById("grid");
const scoreElement = document.getElementById("score");
const statusElement = document.getElementById("status");
const pauseButton = document.getElementById("pause-btn");
const restartButton = document.getElementById("restart-btn");
const controlButtons = document.querySelectorAll("[data-dir]");

let state = createInitialState();

function directionFromButton(value) {
  switch (value) {
    case "up":
      return Direction.UP;
    case "down":
      return Direction.DOWN;
    case "left":
      return Direction.LEFT;
    case "right":
      return Direction.RIGHT;
    default:
      return null;
  }
}

function render() {
  const snakeCells = new Set(state.snake.map((cell) => `${cell.x},${cell.y}`));
  gridElement.innerHTML = "";

  for (let y = 0; y < state.gridSize; y += 1) {
    for (let x = 0; x < state.gridSize; x += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";

      const key = `${x},${y}`;
      if (snakeCells.has(key)) {
        cell.classList.add("snake");
      } else if (state.food && state.food.x === x && state.food.y === y) {
        cell.classList.add("food");
      }

      gridElement.appendChild(cell);
    }
  }

  scoreElement.textContent = String(state.score);
  pauseButton.textContent = state.isPaused ? "Resume" : "Pause";

  if (state.isGameOver) {
    statusElement.textContent = "Game over. Press Restart to play again.";
  } else if (state.isPaused) {
    statusElement.textContent = "Paused.";
  } else {
    statusElement.textContent = "";
  }
}

function handleTick() {
  state = tick(state);
  render();
}

function restartGame() {
  state = createInitialState(state.gridSize);
  render();
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    state = togglePause(state);
    render();
    return;
  }

  const direction = directionByKey[event.key];
  if (!direction) {
    return;
  }

  event.preventDefault();
  state = setDirection(state, direction);
});

pauseButton.addEventListener("click", () => {
  state = togglePause(state);
  render();
});

restartButton.addEventListener("click", restartGame);

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = directionFromButton(button.dataset.dir);
    if (!direction) {
      return;
    }

    state = setDirection(state, direction);
  });
});

setInterval(handleTick, TICK_MS);
render();
