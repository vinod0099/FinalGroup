import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Header from "@/components/Header";
import '/Users/thummalasujithreddy/Downloads/Webfinal/FinalGroup/pizzaapp/styles/globals.css';
import Hero from "@/components/Hero";

export default function Home() {
	return (
		
			<div className="header-top">
			<Header/>
			<Hero/>
		</div>
	);
}
