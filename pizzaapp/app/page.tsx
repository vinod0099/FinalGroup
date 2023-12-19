import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import Pizza from '@/components/Pizza'
import Header from "@/components/Header";
import AboutUs from '@/components/AboutUs'

import MenuTitle from "@/components/Menutitle";



const pizzas = [
	{
	  id: 1,
	  name: 'capricciosa',
	  description:
		'Classic Capricciosa pizza with ham, mushrooms, artichokes, olives, and mozzarella.',
	  image: '/capricciosa.webp',
	  priceSm: 10.99,
	  priceMd: 11.99,
	  priceLg: 12.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 2,
	  name: 'cheesy',
	  description:
		'Cheesy Pizza with mozzarella, cheddar, gorgonzola, provolone, and crispy crust.',
	  image: '/cheesy.webp',
	  priceSm: 10.99,
	  priceMd: 11.99,
	  priceLg: 12.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 3,
	  name: 'hawaii',
	  description:
		'Hawaiian Pizza with pineapple, ham, mozzarella, and a crispy crust',
	  image: '/hawaii.webp',
	  priceSm: 10.99,
	  priceMd: 11.99,
	  priceLg: 12.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 4,
	  name: 'Italian',
	  description:
		'Italian Pizza with mozzarella, tomato, basil, olive oil, and crispy crust.',
	  image: '/italian.webp',
	  priceSm: 11.99,
	  priceMd: 12.99,
	  priceLg: 13.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 5,
	  name: 'margherita',
	  description:
		'Fresh basil, mozzarella, tomato sauce, olive oil, on crispy crust.',
	  image: '/margherita.webp',
	  priceSm: 9.99,
	  priceMd: 10.99,
	  priceLg: 11.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 6,
	  name: 'pepperoni',
	  description:
		'Spicy pepperoni, melty cheese, rich sauce, and a crispy crust.',
	  image: '/pepperoni.webp',
	  priceSm: 10.99,
	  priceMd: 11.99,
	  priceLg: 12.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 7,
	  name: 'Garlic Parmesan',
	  description:
		'Four cheeses, garlic, rich sauce, crispy crust, and parmesan blend.',
	  image: '/quattro-formaggi.webp',
	  priceSm: 12.99,
	  priceMd: 13.99,
	  priceLg: 14.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 8,
	  name: 'Mushroom & Pepperoni',
	  description:
		'Juicy pepperoni, earthy mushrooms, rich cheese, on a crispy base',
	  image: '/quattro-stagioni.webp',
	  priceSm: 11.99,
	  priceMd: 12.99,
	  priceLg: 13.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 9,
	  name: 'Classic Chicken',
	  description:
		'Tender chicken, rich sauce, melty cheese on a crispy base',
	  image: '/tonno.webp',
	  priceSm: 10.99,
	  priceMd: 11.99,
	  priceLg: 12.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
	  id: 10,
	  name: 'vegetarian',
	  description:
		'Topped with assorted vegetables, cheese, and herbs on a thin crust.',
	  image: '/vegetarian.webp',
	  priceSm: 9.99,
	  priceMd: 10.99,
	  priceLg: 11.99,
	  toppings: [
		{
		  image: '/cherry.png',
		  name: 'cherry tomatoes',
		  price: 2,
		},
		{
		  image: '/corn.png',
		  name: 'corn',
		  price: 2,
		},
		{
		  image: '/fresh-tomatoes.png',
		  name: 'fresh tomatoes',
		  price: 2,
		},
		{
		  image: '/jalapeno.png',
		  name: 'jalapeno',
		  price: 2,
		},
		{
		  image: '/parmesan.png',
		  name: 'parmesan',
		  price: 2,
		},
	  ],
	},
	{
		id: 1,
		name: 'capricciosa',
		description:
		  'Blends tangy feta with rich cheeses on a golden crust.',
		image: '/capricciosa.webp',
		priceSm: 9.99,
		priceMd: 10.99,
		priceLg: 11.99,
		toppings: [
		  {
			image: '/cherry.png',
			name: 'cherry tomatoes',
			price: 2,
		  },
		  {
			image: '/corn.png',
			name: 'corn',
			price: 2,
		  },
		  {
			image: '/fresh-tomatoes.png',
			name: 'fresh tomatoes',
			price: 2,
		  },
		  {
			image: '/jalapeno.png',
			name: 'jalapeno',
			price: 2,
		  },
		  {
			image: '/parmesan.png',
			name: 'parmesan',
			price: 2,
		  },
		],
	  },
	  {
		id: 1,
		name: 'Feta and Cheese',
		description:
		  'Blends tangy feta with rich cheeses on a golden crust.',
		image: '/capricciosa.webp',
		priceSm: 9.99,
		priceMd: 10.99,
		priceLg: 11.99,
		toppings: [
		  {
			image: '/cherry.png',
			name: 'cherry tomatoes',
			price: 2,
		  },
		  {
			image: '/corn.png',
			name: 'corn',
			price: 2,
		  },
		  {
			image: '/fresh-tomatoes.png',
			name: 'fresh tomatoes',
			price: 2,
		  },
		  {
			image: '/jalapeno.png',
			name: 'jalapeno',
			price: 2,
		  },
		  {
			image: '/parmesan.png',
			name: 'parmesan',
			price: 2,
		  },
		],
	  },
  ];
export default function Home() {
	return (

		<>
		
        <Header/>
        <Hero/>
	
		<HomeMenu/>
		<section id="menu">
			<div className="container max-auto ">
				<div className="grid grid-cols-3 gap-8 md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
					{pizzas.map((pizzas)=>{
						return <Pizza key={pizzas.id} pizza={pizzas}/>
					})}
				</div>
			</div>
		</section>
		<AboutUs/>
		
		</>
		
		
		
		
	);
}
