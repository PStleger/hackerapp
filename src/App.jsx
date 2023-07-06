import "./App.css";
import MainPage from "./component/MainPage";

const App = () => {
	return (
		<>
			<header>
				<p>The Header comes first!</p>
			</header>
			<main>
				<MainPage />
			</main>
			<footer>
				<p>The footer comes last</p>
			</footer>
		</>
	);
};

export default App;
