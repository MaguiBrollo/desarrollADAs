tailwind.config = {
	darkMode: "class",
	theme: {
		screens: {
			sm: "600px",
			// => @media (min-width: 576px) { ... }

			md: "860px",
			// => @media (min-width: 960px) { ... }

			lg: "1024px",
			// => @media (min-width: 1440px) { ... }
		},
		extend: {
			fontFamily: {
				Lora: ['"Lora"'],
				Roboto: ['"Roboto"'],
				/* Raleway: ['"Raleway"'], */ //no me gusta los números
			},

			colors: {
				colPpal: "#A3C3F2",
				colSec: "#3F5A9F",
			},
		},
	},
};
