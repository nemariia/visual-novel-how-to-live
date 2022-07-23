import './styles/title.css';

function Title() {
	const title = "как жить".split("").map((l, i) => <p key={i}>{l}</p>);
	
	return (
		<h1 className="title">
			{title}
        </h1>
	);
}

export default Title;