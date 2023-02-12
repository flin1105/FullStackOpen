const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <h4>Number of exercises {sum}</h4>;

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Content = ({ parts }) => (
	<>
		{parts.map((part) => {
			return (
				<Part
					key={part.id}
					part={part}
				/>
			);
		})}
	</>
);

const Course = ({ course }) => {
	return (
		<>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total
				sum={course.parts.reduce((prev, cur) => prev + cur.exercises, 0)}
			/>
		</>
	);
};

export default Course;
