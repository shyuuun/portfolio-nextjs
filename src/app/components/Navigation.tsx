import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<div className="flex justify-between items-center fill-content">
				<h1>
					<Link href={"/"}>Frederick Vigilia </Link>
				</h1>
				<ul className="flex gap-4">
					<li>
						<Link href={"/"}>My Info</Link>
					</li>
					<li>
						<Link href={"/"}>Works</Link>
					</li>
					<li>
						<Link href={"/"}>Source</Link>
					</li>
				</ul>
				<button>O</button>
			</div>
		</nav>
	);
}
