<script>
	import chimken from '$lib/images/chicken-on-tree-screaming.mp3';
	import AHH from '$lib/images/ah-reverb.mp3'; 

	let grid;
	let playerTurn = 'X';
	let isGameOver = false;
	let counter = 0;


	clearGrid();


	function clickCell(row, col) {
		if (grid[row][col] === ' ') {
			grid[row][col] = playerTurn
			onPlaceLogic();
		} else {
			alert('You huhrensohn, das feld ist nicht free allah')
		}
	}

	function onPlaceLogic() {
		counter += 1;
		
		// switch players turn
		if (playerTurn === 'X') playerTurn = 'O'
		else playerTurn = 'X'

		let win = isWin();
		if (win !== undefined) {
			isGameOver = true;
			new Audio(chimken).play();
		}
		else if (counter === 9) {
			new Audio(AHH).play();
		}
	}

	function isWin() {
		// horizontal
		if (grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2] && grid[0][0] !== ' ') return grid[0][0]
		if (grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2] && grid[1][0] !== ' ') return grid[1][0]
		if (grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2] && grid[2][0] !== ' ') return grid[2][0]

		// vertical
		if (grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0] && grid[0][0] !== ' ') return grid[0][0]
		if (grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1] && grid[0][1] !== ' ') return grid[0][1]
		if (grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2] && grid[0][2] !== ' ') return grid[0][2]
		
		// diagonal
		if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== ' ') return grid[0][0]
		if (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[0][2] !== ' ') return grid[0][2]
	}

	function clearGrid() {
		// clears grid
		grid = [
			[' ', ' ', ' '],
			[' ', ' ', ' '],
			[' ', ' ', ' '],
		];
		isGameOver = false;
		counter = 0;
	}
</script>


<div class="container">

	<div class="board" class:gameOver={isGameOver}>
		<span class="current-turn">
			{playerTurn}'s turn
		</span>
		{#each grid as row, rowIndex }
			<div class="row">
				{#each row as cell, colIndex}

					<button class="cell" class:X={cell === 'X'} class:O={cell === 'O'} onclick={() => clickCell(rowIndex, colIndex)}>
						{cell}
					</button>

				{/each}
			</div>
		{/each}
	</div>
	<button onclick={clearGrid} class="clear-button">Clear</button>
	
	<iframe width="420" height="315" title="IMPORTANT VIDEO"
	src="https://www.youtube.com/embed/6-8E4Nirh9s?autoplay=1?loop=1" allow='autoplay'>
	</iframe>
</div>


<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.current-turn {
		color: var(--color-rgb-YAY);
		font-size: 3rem;
		filter: invert(1);
	}

	.board {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: rgba(128, 128, 128, 0.247);
		padding: 20px;
		border-radius: 20px;
		border: 2px solid black;
	}
	.board.gameOver {
		pointer-events: none;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.cell {
		color: black;
		border: 3px solid;
		width: 70px;
		height: 70px;
		margin: 5px;

		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3rem;

		&.O { color: blue; }	
		&.X { color: red; }	
	}

	.cell:hover {
		color: var(--color-rgb-YAY);
	}

	.clear-button {
		width: 100px;
		margin: 20px;
		font-size: 2rem;
		background-color: rgb(48, 1, 1);
		color: rgb(190, 4, 4);
		border: 1px solid;
		border-radius: 10px;
	}
	.clear-button:hover {
		width: 110px;
		color: rgb(253, 99, 99);
	}
	.clear-button:active {
		color: rgb(255, 222, 222);
	}
</style>