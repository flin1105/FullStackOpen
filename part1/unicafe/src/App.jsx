import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => {
		setGood(good + 1);
	};

	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
	};

	const handleBadClick = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button
				text="Good"
				onHandleClick={handleGoodClick}
			/>
			<Button
				text="Neutral"
				onHandleClick={handleNeutralClick}
			/>
			<Button
				text="Bad"
				onHandleClick={handleBadClick}
			/>
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
			/>
		</div>
	);
};

const Statistics = (props) => {
	const { good, neutral, bad } = props;
	let total = good + neutral + bad;
	let average = (good + bad * -1) / total;
	let positiveScore = good / total;

	if (total === 0) {
		return (
			<>
				<h1>Statistics</h1>
				<p>No feedback given</p>
			</>
		);
	}

	return (
		<>
			<h1>Statistics</h1>
			<table>
				<StatisticLine
					text="Good"
					value={good}
				/>
				<StatisticLine
					text="Neutral"
					value={neutral}
				/>
				<StatisticLine
					text="Bad"
					value={bad}
				/>
				<StatisticLine
					text="All"
					value={total}
				/>
				<StatisticLine
					text="Average"
					value={average}
				/>
				<StatisticLine
					text="Positive"
					value={positiveScore}
				/>
			</table>
		</>
	);
};

const Button = (props) => {
	const { text, onHandleClick } = props;
	return (
		<>
			<button onClick={onHandleClick}>{text}</button>
		</>
	);
};

const StatisticLine = (props) => {
	const { text, value } = props;
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

export default App;
