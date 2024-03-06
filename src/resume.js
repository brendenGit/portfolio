const resume = {
    "about": {
        "name": "Brenden Arias",
        "location": "San Francisco, CA",
        "email": "BrendenJArias@gmail.com",
        "linkedin": "linkedin.com/in/brenden-arias",
        "github": "github.com/brendenGit",
    },
    "skills": [
        "JavaScript",
        "React",
        "Redux",
        "Node.js",
        "Express",
        "TypeScript",
        "Material UI",
        "Python",
        "Flask",
        "HTML5",
        "CSS3",
        "Postgres",
        "Github"
    ],
    "projects": [
        {
            "name": "Skillet",
            "description": "A web application for searching, cooking, and saving food/drink recipes - Makes grocery shopping easier",
            "date": "Feb 2024 — Mar 2024",
            "thumbnail": "/skillet.png",
            "url": "https://github.com/brendenGit/Skillet",
            "skills": [
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "Material UI",
                "Postgres"
            ],
            "highlights": [
                "Achieved seamless user experience and faster load times by implementing pagination when fetching recipes from the Spoonacular API",
                "Built for mobile first allowing for a consistent UI across small and large screens utilizing page breaking and Material UI"
            ]
        },
        {
            "name": "Jobly",
            "description": "A web application built to facilitate job searching and application management",
            "date": "Dec 2023 — Jan 2024",
            "thumbnail": "/jobly.png",
            "url": "https://jobly-bzet.onrender.com/",
            "skills": [
                "JavaScript",
                "React",
                "Redux",
                "Node.js",
                "Express",
                "Material UI",
                "Postgres"
            ],
            "highlights": [
                "Implemented Redux to manage global persistent state, enhancing scalability and maintainability by centralizing complex state management resulting in improved application performance",
                "Developed internal RESTful API using the pg library to retrieve data from a PostgreSQL database enabling dynamic page rendering in a React frontend ensuring an efficient and reliable data flow architecture"
            ]
        },
        {
            "name": "Heard - Springboard Rise Hackathon",
            "description": "Hackathon team leader for an AI-assisted remote employee engagement web application",
            "date": "Oct 2024 — Oct 2024",
            "thumbnail": "/heard.png",
            "url": "https://www.loom.com/share/99ebf0a4951845a5ad00727bc78cda80",
            "skills": [
                "JavaScript",
                "Python",
                "Flask",
                "Jinja",
                "Bootstrap",
                "Flask",
                "SQLAlchemy",
                "Github"
            ],
            "highlights": [
                "Deployed Heard application by leading team with organized PRDs and team syncs across product, data and engineering team members",
                "Focused on improving remote worker productivity and fulfillment by implementing an AI-powered chatbot using OpenAI's API with intelligent prompting"
            ]
        },
        {
            "name": "Summoners Ranked",
            "description": "A web application for League of Legends players to compete and compare in-game metrics among friends",
            "date": "Sep 2023 — Oct 2023",
            "thumbnail": "/summoners_ranked.png",
            "url": "https://sr-web-service.onrender.com/",
            "skills": [
                "JavaScript",
                "Python",
                "Flask",
                "Jinja",
                "Blaze UI",
                "Flask",
                "SQLAlchemy"
            ],
            "highlights": [
                "Implemented secure authorization by integrating the Bcrypt flask library into the backend of the application",
                "Rendered dynamic pages using the Jinja web template engine and requests in Python to Riot Game’s API resulting in smooth page and data transitions"
            ]
        }
    ],
    "experience": [
        {
            "company": "Pavilion",
            "positions": ["Account Executive", "Regional Manager"],
            "date": "July 23 — Dec 23",
            "url": "https://www.withpavilion.com/",
            "responsibilities": [
                "Contributed to achieving product-market fit and onboarding the first 50 customers",
                "Collaborated closely with product marketing and engineering"
            ]
        },
        {
            "company": "Sustain.Life",
            "positions": ["Account Executive"],
            "date": "Mar 22 — Mar 23",
            "url": "https://www.sustain.life/",
            "responsibilities": [
                "Tested & supported the development of a product demo environment, resulting in a 30% increase in prospect retention",
                "Revamped CRM system, leading to a 40% increase in forecasting and alignment of internal/external stakeholders"
            ]
        },
        {
            "company": "Better.com",
            "positions": ["Sales Manager", "Account Executive", "Sales Dev. Rep."],
            "date": "Sep 19 — Feb 22",
            "url": "https://better.com/",
            "responsibilities": [
                "Led a pilot team of 9 direct reports during 500+ sales team reorganization, developing over 10 training sessions increasing team productivity by 20%",
                "Partnered with product to pilot an updated operating model resulting in a 20% increase in customer retention"
            ]
        }
    ],
    "education": [
        {
            "institution": "Springboard",
            "location": "Online",
            "certificate": "Software Engineering Certificate",
            "date": "June 2022 — Mar 2023"
        },
        {
            "institution": "University of Iowa",
            "location": "Iowa City, IA",
            "degree": "BA - Informatics & Human-Computer Interaction",
            "date": "Aug 2014 — May 2019"
        }
    ]
}

export default resume;