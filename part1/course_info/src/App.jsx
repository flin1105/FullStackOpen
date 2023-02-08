const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content
				part1={course.parts[0].name}
				part2={course.parts[1].name}
				part3={course.parts[2].name}
				exercises1={course.parts[0].exercises}
				exercises2={course.parts[1].exercises}
				exercises3={course.parts[2].exercises}
			/>
			<Total
				total={
					course.parts[0].exercises +
					course.parts[1].exercises +
					course.parts[2].exercises
				}
			/>
		</div>
	);
};

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = (props) => {
	const { part1, part2, part3, exercises1, exercises2, exercises3 } = props;
	return (
		<>
			<Part
				part={part1}
				exercises={exercises1}
			/>
			<Part
				part={part2}
				exercises={exercises2}
			/>
			<Part
				part={part3}
				exercises={exercises3}
			/>
		</>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

export default App;
