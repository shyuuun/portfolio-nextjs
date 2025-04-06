import Navigation from "./components/Navigation";

export default function Home() {
	return (
		<main className="w-3/4 mx-auto">
			<Navigation />
			<section className="about_me">
				<div className="fill-content">about me</div>
			</section>
			<section className="fillers">
				<div className="fill-content">Fillers</div>
			</section>
			<section className="education">
				<div className="fill-content">Education Section</div>
			</section>
			<footer>
				<div className="fill-content">Footer</div>
			</footer>
		</main>
	);
}
