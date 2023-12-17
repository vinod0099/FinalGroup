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
		'Savor the classic Capricciosa, a delightful blend of rich Italian flavors. Our pizza features a crispy, hand-tossed crust topped with tangy tomato sauce, savory slices of cooked ham, earthy mushrooms, artichokes, and briny black olives. It’s all brought together with a generous layer of melted mozzarella, making each slice a perfect harmony of taste and tradition.',
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
		'Dive into our Cheesy Pizza, where every bite is a blissful journey through a blend of rich cheeses. With a golden, crispy crust layered with a delicate tomato sauce, this pizza is smothered in a heavenly mix of stretchy mozzarella, sharp cheddar, creamy gorgonzola, and smooth provolone. Its a cheesy delight that perfectly balances flavor and texture, making it an irresistible treat for anyone who adores cheese.',
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
		'Experience a slice of paradise with our Hawaiian Pizza, a delightful blend of sweet and savory. This pizza combines juicy pineapple chunks and tender slices of ham on a bed of rich tomato sauce and stretchy mozzarella. Each bite offers a burst of flavors, perfectly balancing the pineapples sweetness with the savory depth of ham, all atop a crispy, golden crust.',
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
		'Savor the essence of Italy with our Italian Pizza, a masterpiece of simple yet robust flavors. This authentic pizza boasts a thin, crispy crust, layered with a vibrant, herbed tomato sauce. It’s topped with slices of fresh mozzarella, ripe tomatoes, and fragrant basil leaves. Drizzled with extra virgin olive oil and a pinch of sea salt, this pizza is a tribute to traditional Italian craftsmanship and taste.',
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
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
	  name: 'quattro formaggi',
	  description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
	  name: 'quattro stagioni',
	  description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
	  name: 'tonno',
	  description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
		  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
		name: 'capricciosa',
		description:
		  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
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
