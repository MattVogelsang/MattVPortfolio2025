import { Project } from '../types';
import launchingSoonImg from '../images/launching-soon.jpg';
import spaceTourismImg from '../images/space-hero.jpg';
import shoppingAppImg from '../images/sneakers-hero.jpg';
import projectAtlasImg from '../images/project-atlas.jpg';
import classicoImg from '../images/classico.jpg';
import spotifyPlayerImg from '../images/spotify.jpg';
import trinityInsuranceImg from '@/images/trinity-insurance.jpg';

export const projects: Project[] = [
	{
		id: 4,
		title: 'Project Atlas – Visual SEO Planning Tool',
		description:
			'An interactive SEO content strategy tool that lets users visually map topic clusters and internal linking using a drag-and-drop interface.',
		technologies: ['React', 'TypeScript', 'Vite', 'React Flow', 'Tailwind CSS'],
		imageUrl: projectAtlasImg,
		demoUrl: 'https://project-atlas-weld.vercel.app',
		featured: true,
		category: 'tooling',
		challenge:
			'SEO teams often struggle with visualizing content plans and internal linking strategies in a way that is both flexible and collaborative.',
		solution:
			'Built a drag-and-drop canvas app using React Flow where users can create topic clusters, assign metadata, and draw interlinking strategies that auto-save to localStorage.',
		outcome:
			'Validated with SEO experts as a valuable workflow tool. Showcases deep understanding of component architecture, data flow, and UX thinking tailored to niche content teams.',
		goals: [
			'Enable visual planning of SEO content strategies',
			'Support dynamic node creation and metadata editing',
			'Allow drag-and-drop repositioning and interlink mapping',
			'Persist data locally for seamless user experience'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Outlined pain points in SEO workflows and wireframed UX that reflects how strategists plan content clusters and links.'
			},
			{
				title: 'Development',
				description:
					'Engineered core functionality with React Flow, custom edge rendering, and localStorage hydration for persistence.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested usability with SEO professionals and iterated on UX details like node spacing, click targets, and sidebar flow.'
			}
		]
	},
	{
		id: 5,
		title: 'Classico – Luxury Ride-Share Landing Experience',
		description:
			'A refined, conversion-focused landing page for a luxury ride-share brand, featuring curated car showcases and a waitlist signup flow.',
		technologies: ['React', 'Vite'],
		imageUrl: classicoImg,
		demoUrl: 'https://ridewithclassico.com',
		featured: true,
		category: 'marketing',
		challenge:
			'The client needed a high-fidelity marketing site to establish brand presence and onboard early users - all while conveying luxury and trust.',
		solution:
			'Designed and developed a responsive React site with elegant visual hierarchy, smooth transitions, and a custom vehicle showcase, all optimized for performance and accessibility.',
		outcome:
			'Delivered a polished user experience that effectively communicated Classicos premium offering and captured early user interest through the waitlist funnel.',
		goals: [
			'Convey a luxury brand aesthetic through design',
			'Build a performant, responsive frontend experience',
			'Create a simple and clear waitlist onboarding flow',
			'Lay groundwork for future product expansion'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed luxury brand websites for layout patterns, tone, and conversion tactics to inform design direction.'
			},
			{
				title: 'Design & Prototyping',
				description:
					'Sketched layouts and visual hierarchy to guide user attention, with a strong focus on elegance and simplicity.'
			},
			{
				title: 'Development',
				description:
					'Used React and Vite to build responsive sections, image carousels, and a performant architecture with minimal build weight.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested across devices and screen sizes, tuned load speed, and refined accessibility for form elements and navigation.'
			}
		]
	},
	{
		id: 6,
		title: 'Spotify-Inspired Audio Player',
		description:
			'A fully custom audio streaming interface inspired by Spotify, featuring a polished playback experience with real-time controls and keyboard shortcuts.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: spotifyPlayerImg,
		demoUrl: 'https://spotify-clone-one-snowy.vercel.app/',
		featured: true,
		category: 'media',
		challenge:
			'Build a scoped audio player project that mimics the feel of a native media app while showcasing interactive UI architecture and custom UX design.',
		solution:
			'Created a full-featured media player in React, handling playback state, keyboard controls, and dynamic UI rendering — all while ensuring smooth, intuitive user flow.',
		outcome:
			'Delivered a sleek, Spotify-like interface that feels responsive, native, and user-friendly. Demonstrates my ability to manage complex media state and design-aligned frontend systems.',
		goals: [
			'Replicate native-like audio playback experience',
			'Support full playback control including keyboard shortcuts',
			'Deliver a responsive, accessible interface',
			'Maintain performance across desktop and mobile'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					"Studied Spotify's layout and control logic to inform architecture and UX structure without duplicating proprietary design."
			},
			{
				title: 'Design & Prototyping',
				description:
					'Sketched UI interactions and hover behaviors to create a desktop-app feel with clean layout and spacing.'
			},
			{
				title: 'Development',
				description:
					'Built the player using React + TypeScript with custom hooks for media state, Tailwind for styling, and Vite for blazing-fast builds.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested across breakpoints, validated keyboard navigation, and optimized rendering for smooth progress sync and volume changes.'
			}
		]
	},
	{
		id: 1,
		title: 'Launching Soon Landing Page',
		description:
			'A sleek, responsive landing page featuring a real-time countdown timer, built with React.',
		technologies: ['JavaScript', 'HTML', 'CSS'],
		imageUrl: launchingSoonImg,
		demoUrl: 'https://mattvogelsang.github.io/countdown/',
		featured: true,
		category: 'landing page',
		challenge:
			'Create an engaging landing page that builds anticipation for a product launch while collecting user interest.',
		solution:
			'Built a responsive countdown page using React with CSS transitions and email capture integration.',
		outcome:
			'Increased valuable brand awareness before launch, and boosted brand visibility.',
		goals: [
			'Generate early interest before launch',
			'Ensure mobile-first responsiveness',
			'Keep users engaged with sleek animations'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Explored modern landing page designs and planned a one-scroll layout for clarity and conversion.'
			},
			{
				title: 'Development',
				description:
					'Used React for dynamic countdown logic, with CSS animations and form validation.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Optimized for mobile and performance; conducted A/B tests on CTA wording and button styles.'
			}
		]
	},
	{
		id: 2,
		title: 'Space Tourism Website',
		description:
			'A futuristic multi-page website for a fictional space tourism brand, featuring animated visuals and interactive booking components.',
		technologies: ['React', 'React Router'],
		imageUrl: spaceTourismImg,
		demoUrl: 'https://your-demo-link.com/space-tourism',
		featured: true,
		category: 'marketing',
		challenge:
			'Design a visually stunning site that evokes the wonder of space travel while clearly presenting service offerings.',
		solution:
			'Built a React SPA with smooth scroll, animated transitions, and modular booking UI for space trips.',
		outcome:
			'Users praised the immersive design, and the fictional company concept gained traction on design forums.',
		goals: [
			'Create immersive space-themed visuals',
			'Build a fully responsive UI',
			'Incorporate smooth route-based animations',
			'Prototype a modular booking system'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Studied space-themed UI patterns and sketched a multi-page structure with destination highlights.'
			},
			{
				title: 'Development',
				description:
					'Implemented route transitions and scroll-based parallax effects.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested on multiple devices and browsers; optimized image sizes and animation performance.'
			}
		]
	},
	{
		id: 3,
		title: 'Online Shopping App',
		description:
			'A fully responsive e-commerce application featuring a product display page.',
		technologies: ['React', 'Tailwind CSS'],
		imageUrl: shoppingAppImg,
		demoUrl: 'https://mattvogelsang.github.io/e-commerce/',
		featured: true,
		category: 'ecommerce',
		challenge:
			'Build a clean, user-friendly shopping experience from scratch with dynamic product handling.',
		solution:
			'Used React for product state management, styled with Tailwind CSS, and integrated mock API data.',
		outcome:
			'The app served as a full-stack-ready prototype, demonstrating key commerce flows.',
		goals: [
			'Enable smooth browsing and filtering',
			'Build reusable card and cart components',
			'Maintain global cart state',
			'Create a responsive layout for all devices'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Mapped out common e-commerce flows and user expectations for modern shopping UX.'
			},
			{
				title: 'Development',
				description:
					'Built out components in React, handled state with Context, and styled everything with Tailwind.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Tested for accessibility, responsiveness, and user feedback on ease of navigation and cart logic.'
			}
		]
	},
	{
		id: 7,
		title: 'Trinity Insurance Website',
		description:
			'A modern, responsive website for Trinity Insurance, featuring a clean design and comprehensive insurance information.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		imageUrl: trinityInsuranceImg,
		demoUrl: 'https://www.trinityinv.net/',
		featured: true,
		category: 'business',
		challenge:
			'Create a professional insurance website that effectively communicates services while maintaining a modern, trustworthy aesthetic.',
		solution:
			'Developed a responsive React application with TypeScript, featuring clean UI components and optimized performance.',
		outcome:
			'Delivered a polished website that effectively showcases Trinity Insurance services and maintains a professional online presence.',
		goals: [
			'Create a professional and trustworthy design',
			'Ensure responsive layout across all devices',
			'Optimize for fast loading and performance',
			'Implement clear navigation and service information'
		],
		process: [
			{
				title: 'Research & Planning',
				description:
					'Analyzed insurance website best practices and planned a user-friendly information architecture.'
			},
			{
				title: 'Design & Development',
				description:
					'Built with React and TypeScript, using Tailwind CSS for responsive styling and modern UI components.'
			},
			{
				title: 'Testing & Optimization',
				description:
					'Conducted thorough testing across devices and browsers, ensuring optimal performance and accessibility.'
			}
		]
	}
];
