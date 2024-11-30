// Templates
import Elp from '/public/elp.png'
import Connect from '/public/connect.png'
import Ease from '/public/ease.png'

// Tutorials
import PitchDeck from '/public/pitchdeck.png';
import Analyst from '/public/analyst.png';
import Planner from '/public/planner.png';
import Marketing from '/public/marketing.png';
import Team from '/public/team.png';

// Insights
import AITech from '/public/aiTech.jpg';
import BioTech from '/public/bioTech.png'
import GreenEnergy from '/public/ce&s_3.png'
import Education from '/public/education.png'
import FinTech from '/public/fintech.png'

export const campaigns = [
    {
        id: 1,
        coverImg: ["/elp.png", "/eshop.png", "/cam_1.jpg"],
        slug: "innovative-tech-startup",
        campaignName: "Innovative Tech Startup",
        campaignTagline: "Revolutionizing the future with cutting-edge technology.",
        campaignBody: "We believe that quality healthcare is a fundamental right that should be accessible to all, regardless of their circumstances. Join us in making a difference as we ...",
        targetAmount: 500000,
        raisedAmount: 350000,
        minAmount: 10,
        totalBackers: 150,
        equityOffered: 15,  // Percentage
        endDate: "2024-12-31",
        daysLeft: 180,
        category: "Technology Startups",
        tags: ["AI", "Innovation", "Tech"],
        feedback: [
            { user: "John Doe", comment: "Great initiative!", rating: 5 },
            { user: "Jane Smith", comment: "Looking forward to the product launch.", rating: 4 }
        ],
        contacts: [
            { type: "business name", value: "Tech Startup" },
            { type: "email", value: "contact@techstartup.com" },
            { type: "address", value: "83B Mama Beach Village" },
            { type: "phone", value: "+1234567890" }
        ],
        creatorImg: "creator1.jpg",
        creatorName: "Alice Johnson",
        creatorEmail: "alice@techstartup.com",
        creatorAddress: "123 Tech Avenue, Silicon Valley, CA",
        creatorMobile: "+1234567890",
        campaignType: "funding",
        isFeatured: true,
        isUrgent: true,
        isTrending: true
    },
    // E-commerce and Retail - Donation Campaign
    {
        id: 2,
        coverImg: ["/eshop.png"],
        slug: "support-small-businesses",
        campaignName: "Support Small Businesses",
        campaignTagline: "Empowering local businesses to thrive in a competitive market.",
        campaignBody: "Your donations will help small businesses in our community expand their reach...",
        targetAmount: 100000,
        raisedAmount: 45000,
        minAmount: 10,
        totalBackers: 200,
        equityOffered: 0,  // Donation campaign doesn't offer equity
        endDate: "2024-09-30",
        daysLeft: 90,
        category: "E-commerce and Retail",
        tags: ["Small Business", "Community", "Retail"],
        feedback: [
            { user: "Michael Brown", comment: "Proud to support local businesses.", rating: 5 },
            { user: "Sarah Lee", comment: "Every little bit helps!", rating: 4.5 }
        ],
        contacts: [
            { type: "email", value: "support@smallbusiness.com" },
            { type: "phone", value: "+0987654321" }
        ],
        creatorImg: "creator2.jpg",
        creatorName: "Bob Harris",
        creatorEmail: "bob@smallbusiness.com",
        creatorAddress: "456 Market Street, New York, NY",
        creatorMobile: "+0987654321",
        campaignType: "donation",
        isFeatured: false,
        isUrgent: true,
        isTrending: false
    },
    // Health and Wellness - Equity Campaign
    {
        id: 3,
        coverImg: ["/cam_1.jpg"],
        slug: "holistic-health-startup",
        campaignName: "Holistic Health Startup",
        campaignTagline: "Promoting wellness through natural and sustainable practices.",
        campaignBody: "We aim to integrate holistic health into everyday life, offering sustainable products...",
        targetAmount: 300000,
        raisedAmount: 150000,
        minAmount: 10,
        totalBackers: 100,
        equityOffered: 20,  // Percentage
        endDate: "2024-11-15",
        daysLeft: 130,
        category: "HealthCare and Wellness",
        tags: ["Wellness", "Health", "Sustainability"],
        feedback: [
            { user: "Emily White", comment: "Excited for a healthier future.", rating: 5 },
            { user: "Chris Green", comment: "A great cause!", rating: 4 }
        ],
        contacts: [
            { type: "email", value: "info@holisticstartup.com" },
            { type: "phone", value: "+1122334455" }
        ],
        creatorImg: "creator3.jpg",
        creatorName: "Dana Smith",
        creatorEmail: "dana@holisticstartup.com",
        creatorAddress: "789 Wellness Way, Austin, TX",
        creatorMobile: "+1122334455",
        campaignType: "funding",
        isFeatured: true,
        isUrgent: true,
        isTrending: true
    },
    // Education - Donation Campaign
    {
        id: 4,
        coverImg: ["/eshop.png"],
        slug: "empower-education",
        campaignName: "Empower Education",
        campaignTagline: "Bringing quality education to underserved communities.",
        campaignBody: "Your donations will help build schools and provide resources for children in need...",
        targetAmount: 200000,
        raisedAmount: 75000,
        minAmount: 10,
        totalBackers: 250,
        equityOffered: 0,  // Donation campaign doesn't offer equity
        endDate: "2024-08-31",
        daysLeft: 60,
        category: "Education and Literacy",
        tags: ["Education", "Community", "Children"],
        feedback: [
            { user: "Anna Taylor", comment: "Education is the key to the future.", rating: 5 },
            { user: "David Wilson", comment: "Let's make a difference together.", rating: 4.5 }
        ],
        contacts: [
            { type: "business name", value: "Empower Education" },
            { type: "email", value: "contact@empowereducation.com" },
            { type: "address", value: "Makeni" },
            { type: "phone", value: "+2233445566" }
        ],
        creatorImg: "creator4.jpg",
        creatorName: "Karen Moore",
        creatorEmail: "karen@empowereducation.com",
        creatorAddress: "101 School Road, Boston, MA",
        creatorMobile: "+2233445566",
        campaignType: "donation",
        isFeatured: false,
        isUrgent: true,
        isTrending: false
    },
    {
        id: 5,
        coverImg: ["/ease.png"],
        slug: "holistic-health-startup",
        campaignName: "Holistic Health Startup",
        campaignTagline: "Promoting wellness through natural and sustainable practices.",
        campaignBody: "We aim to integrate holistic health into everyday life, offering sustainable products...",
        targetAmount: 300000,
        raisedAmount: 150000,
        minAmount: 10,
        totalBackers: 100,
        equityOffered: 20,  // Percentage
        endDate: "2024-11-15",
        daysLeft: 130,
        category: "HealthCare and Wellness",
        tags: ["Wellness", "Health", "Sustainability"],
        feedback: [
            { user: "Emily White", comment: "Excited for a healthier future.", rating: 5 },
            { user: "Chris Green", comment: "A great cause!", rating: 4 }
        ],
        contacts: [
            { type: "email", value: "info@holisticstartup.com" },
            { type: "phone", value: "+1122334455" }
        ],
        creatorImg: "creator3.jpg",
        creatorName: "Dana Smith",
        creatorEmail: "dana@holisticstartup.com",
        creatorAddress: "789 Wellness Way, Austin, TX",
        creatorMobile: "+1122334455",
        campaignType: "funding",
        isFeatured: true,
        isUrgent: false,
        isTrending: true
    },
]

export const categories = [
    {
        id: 1,
        coverImg: ["/ts_1.jpeg", "/ts_2.jpeg"],
        slug: "technology-startups",
        name: "Technology Startups",
        title: "Invest in Cutting-Edge Technology",
        info: `These ventures offer investment opportunities in cutting-edge technology companies developing software, applications, AI, IoT, blockchain, and other innovative solutions. Potential users can explore investments in tech startups poised for growth and disruption, while entrepreneurs gain access to funding and support for their tech innovations.`,
        info2: `Focus on showcasing the innovative and disruptive potential of your technology. Highlight the problem your tech solves, the market opportunity, and how your product is better or different from existing solutions.`,
        categoryType: "funding"
    },
    {
        id: 2,
        coverImg: ["/er_1.jpg", "/er_2.jpg", "/er_4.jpg", "/er_3.png"],
        slug: "e-commerce-and-retail",
        name: "E-commerce and Retail",
        title: "Transforming the Online Shopping Experience",
        info: `Investors can support e-commerce startups revolutionizing online shopping experiences, including DTC brands, online marketplaces, subscription services, and more. Entrepreneurs in this space can access capital to scale their businesses and reach new customers, while socially-conscious individuals can invest in sustainable and ethical retail brands.`,
        info2: `When creating a campaign, emphasize the unique aspects of your e-commerce platform or retail brand. Consider sustainability, customer experience, and scalability as key points of interest for potential investors.`,
        categoryType: "funding"
    },
    {
        id: 3,
        coverImg: ["/ag_1.jpg", "/ag_2.jpg", "/ag_3.jpg", "/ag_4.jpg", "/ag_5.jpg"],
        slug: "agriculture",
        name: "Agriculture",
        title: "Innovations in Health and Medicine",
        info: `Healthcare startups focused on digital health, telemedicine, biotechnology, and medical devices offer investment opportunities in groundbreaking healthcare solutions. Investors can contribute to improving healthcare access and outcomes, while entrepreneurs can raise funds to advance life-saving innovations in the healthcare industry.`,
        info2: `Highlight the impact of your healthcare or biotech innovation on patient outcomes, accessibility, or cost-effectiveness. Provide clear evidence of efficacy and regulatory pathways where applicable.`,
        categoryType: "funding"
    },
    {
        id: 4,
        coverImg: ["/ce&s_1.png", "/ce&s_2.jpg", "/ce&s_3.png", "/ce&s_4.jpg"],
        slug: "clean-energy-and-sustainability",
        name: "Clean Energy and Sustainability",
        title: "Invest in a Greener Future",
        info: `Investors can support clean energy startups developing renewable energy solutions, energy storage technologies, sustainable agriculture practices, and environmental conservation initiatives. Entrepreneurs working on sustainability projects can access funding to address pressing environmental challenges and promote sustainable development.`,
        info2: `Focus on the environmental impact, scalability, and long-term sustainability of your project. Clearly articulate the problem your solution addresses and the measurable benefits it provides to the environment.`,
        categoryType: "funding"
    },
    {
        id: 5,
        coverImg: ["/ftech_1.jpg", "/ftech_2.jpg"],
        slug: "fintech-and-financial-services",
        name: "Fintech and Financial Services",
        title: "Disrupting the Financial Industry",
        info: `Fintech startups provide investment opportunities in innovative financial products and services, such as peer-to-peer lending, alternative investments, robo-advisory services, and insurtech solutions. Investors can diversify their portfolios with fintech investments, while entrepreneurs gain access to funding and expertise to disrupt the financial services industry.`,
        info2: `Your campaign should emphasize innovation, security, and customer experience. Demonstrate how your fintech solution improves financial inclusion, reduces costs, or enhances financial services for end users.`,
        categoryType: "funding"
    },
    {
        id: 6,
        coverImg: ["/edt_1.jpg", "/edt_2.jpg", "/edt_3.jpg"],
        slug: "edtech",
        name: "EdTech",
        title: "Revolutionizing Education through Technology",
        info: `EdTech startups offer investment opportunities in online learning platforms, educational software, corporate training solutions, and more. Investors can support initiatives to improve education access and quality, while entrepreneurs can raise funds to innovate in the education technology space and address learning challenges.`,
        info2: `Emphasize how your EdTech solution addresses current gaps in education, improves learning outcomes, or makes education more accessible. Focus on your unique approach, technology, and potential impact.`,
        categoryType: "funding"
    },
    {
        id: 7,
        coverImg: ["/th_1.jpg", "/th_2.jpg", "/th_3.jpg"],
        slug: "travel-and-hospitality",
        name: "Travel and Hospitality",
        title: "Enhancing Travel Experiences",
        info: `Travel and hospitality startups provide investment opportunities in hospitality technology, online travel agencies, vacation rentals, and sustainable tourism initiatives. Investors can support initiatives to enhance travel experiences and promote responsible tourism practices, while entrepreneurs can access funding to innovate in the travel industry.`,
        info2: `Highlight how your travel or hospitality innovation improves customer experiences or promotes sustainable tourism. Focus on scalability, market trends, and the potential for repeat business or customer loyalty.`,
        categoryType: "funding"
    },
    {
        id: 8,
        coverImg: ["/msc_1.jpg", "/msc_2.jpg", "/msc_3.jpg"],
        slug: "manufacturing-and-supply-chain",
        name: "Manufacturing and Supply Chain",
        title: "Innovations in Manufacturing and Logistics",
        info: `Investors can contribute to manufacturing startups developing advanced technologies, 3D printing solutions, supply chain optimization tools, and robotics. Entrepreneurs in this space can raise funds to improve manufacturing processes, reduce costs, and enhance productivity, while socially-conscious individuals can invest in sustainable manufacturing practices.`,
        info2: `For campaigners, emphasize how your innovation improves efficiency, reduces waste, or meets emerging industry demands. Highlight the scalability of your technology and its potential impact on the broader supply chain.`,
        categoryType: "funding"
    },
    {
        id: 9,
        coverImg: ["/me_1.jpg", "/me_2.jpg", "/me_3.jpg"],
        slug: "media-and-entertainment",
        name: "Media and Entertainment",
        title: "Creating Engaging Content and Experiences",
        info: `Media and entertainment startups offer investment opportunities in streaming platforms, gaming companies, podcasting networks, live events, and VR/AR experiences. Investors can support initiatives to create engaging content and experiences, while entrepreneurs can access funding to innovate in the media and entertainment industry.`,
        info2: `Your campaign should focus on the unique aspects of your content or platform, such as creativity, user engagement, and market potential. Emphasize how your venture will capture and retain audiences or disrupt traditional media models.`,
        categoryType: "funding"
    },
    {
        id: 10,
        coverImg: ["/ssw_1.jpg", "/ssw_2.jpg", "/ssw_3.jpg"],
        slug: "social-services-and-welfare",
        name: "Social Services and Welfare",
        title: "Supporting Vulnerable Populations",
        info: `Charitable organizations provide support services to vulnerable populations, such as the homeless, victims of abuse, individuals with mental health challenges, and children in need. Donors can contribute to organizations working to address social issues and provide essential services to those in need, while NGOs can access funding to expand their impact and reach.`,
        info2: `When creating a campaign, focus on the direct impact of your services on the lives of those you support. Provide clear examples and testimonials to demonstrate how donor contributions will be used effectively.`,
        categoryType: "donation"
    },
    {
        id: 11,
        coverImg: ["/e&l_1.jpg", "/e&l_2.jpg", "/e&l_3.jpg"],
        slug: "education-and-literacy",
        name: "Education and Literacy",
        title: "Empowering Through Education",
        info: `Donors can support educational initiatives aimed at improving access to education, promoting literacy, and empowering learners of all ages. NGOs and educational content providers can raise funds to implement programs, offer scholarships, and provide educational resources to underserved communities, while socially-conscious individuals can invest in initiatives that promote lifelong learning and knowledge sharing.`,
        info2: `Focus your campaign on the transformative power of education. Highlight the specific needs your project addresses and the long-term benefits of improved literacy and education for individuals and communities.`,
        categoryType: "donation"
    },
    {
        id: 12,
        coverImg: ["/hbt_1.jpg", "/hw_1.jpg", "/hw_2.jpg", "/hw_3.jpg"],
        slug: "healthcare-and-wellness",
        name: "HealthCare and Wellness",
        title: "Promoting Health and Well-Being",
        info: `Donors can contribute to initiatives promoting physical and mental well-being, improving healthcare access, and raising awareness about health issues. NGOs and healthcare organizations can access funding to provide medical treatment, healthcare services, and wellness programs to communities in need, while socially-conscious individuals can invest in projects that support health equity and promote preventive care.`,
        info2: `Emphasize the critical importance of health and wellness in your campaign. Showcase the direct impact of donor contributions on improving health outcomes and access to care in underserved communities.`,
        categoryType: "donation"
    },
    {
        id: 13,
        coverImg: ["/ec_1.jpg", "/ec_2.jpg", "/ec_3.jpg", "/ec_4.jpg", "/ec_5.jpg"],
        slug: "environmental-conservation",
        name: "Environmental Conservation",
        title: "Protecting Our Planet",
        info: `Donors can support environmental conservation projects aimed at protecting ecosystems, wildlife, and natural resources. NGOs and environmental organizations can raise funds to implement conservation initiatives, promote sustainable practices, and address climate change, while socially-conscious individuals can invest in projects that protect the planet and preserve biodiversity for future generations.`,
        info2: `Your campaign should focus on the urgency of environmental issues and the tangible impact of conservation efforts. Highlight how donor funds will be used to protect specific ecosystems, species, or natural resources.`,
        categoryType: "donation"
    },
    {
        id: 14,
        coverImg: ["/cd_1.jpg", "/cd_2.jpg", "/cd_3.jpg"],
        slug: "community-development",
        name: "Community Development",
        title: "Building Stronger Communities",
        info: `Donors can contribute to initiatives focused on improving the quality of life in communities, promoting economic empowerment, and fostering social cohesion. NGOs and community development organizations can access funding to support affordable housing, community centers, economic development programs, and cultural preservation efforts, while socially-conscious individuals can invest in projects that strengthen communities and promote social inclusion.`,
        info2: `When creating a campaign, emphasize the community-focused nature of your project. Highlight the specific needs your project addresses and the long-term benefits to the community, such as economic empowerment or social cohesion.`,
        categoryType: "donation"
    },
    {
        id: 15,
        coverImg: ["/hrsj_1.jpg", "/hrsj_2.jpg"],
        slug: "human-rights-and-social-justice",
        name: "Human Rights and Social Justice",
        title: "Advocating for Equality and Justice",
        info: `Donors can support organizations advocating for human rights, equality, and social justice for all individuals. NGOs and human rights organizations can raise funds to provide legal aid, support marginalized communities, and advocate for policy change, while socially-conscious individuals can invest in initiatives that promote justice, fairness, and equality for all.`,
        info2: `Focus on the importance of human rights and social justice in your campaign. Highlight the specific injustices your project seeks to address and the ways in which donor contributions will help promote equality and fairness.`,
        categoryType: "donation"
    },
    {
        id: 16,
        coverImg: ["/dr&er_1.jpg", "/dr&er_2.jpg", "/dr&er_3.jpg"],
        slug: "disaster-relief-and-emergency-response",
        name: "Disaster Relief and Emergency Response",
        title: "Helping Communities in Crisis",
        info: `Donors can contribute to disaster relief efforts providing humanitarian aid and support to communities affected by natural disasters and emergencies. NGOs and disaster response organizations can access funding to provide food, shelter, medical care, and other essential services to disaster-affected populations, while socially-conscious individuals can invest in projects that help communities recover and rebuild after a crisis.`,
        info2: `Your campaign should focus on the immediate and life-saving impact of disaster relief efforts. Emphasize how donor funds will be used to provide critical services and support to those affected by natural disasters and emergencies.`,
        categoryType: "donation"
    },
]



export const stats = [
  {
    id: 1,
    numbers: 0,
    name: "Total Campaigns"
  },
  {
    id: 2,
    numbers: 0,
    name: "Funded Campaigns"
  },
  {
    id: 3,
    numbers: 0,
    name: "Portfolio Market Cap"
  },
  {
    id: 4,
    numbers: 0,
    name: "Community Members"
  },
]

export const campaignTypes = [
    {
        id: 1,
        slug: "equity",
        title: "Equity",
        info: "Raise funds by offering a share of ownership in your business | company or project"
    },
    {
        id: 2,
        slug: "donation",
        title: "Donation",
        info: "Raise funds for a cause, project, or initiative without offering financial returns"
    }
]

export const predefinedAmount = [
    {
        id: 1,
        amount: 50
    },
    {
        id: 2,
        amount: 100
    },
    {
        id: 3,
        amount: 200
    },
    {
        id: 4,
        amount: 300
    },
    {
        id: 5,
        amount: 500
    },
    {
        id: 6,
        amount: 1000
    },
]


export const payMethods = [
    {
        id: 1,
        type: 'Orange Money',
        cards: ['/orange.png']
    },
    {
        id: 2,
        type: 'AfriMoney',
        cards: ['/africell.png']
    },
    {
        id: 3,
        type: 'Credit | Debit Card',
        cards: ['/visa.png', '/mastercard.png']
    }
]

export const countries = [
    {
        id: 1,
        text: 'Sierra Leone',
    },
    {
        id: 2,
        text: 'England',
    },
    {
        id: 3,
        text: 'Ghana',
    },
    {
        id: 4,
        text: 'Australia',
    }
]



export const templates = [
    {
        id: 1,
        name: "elp.",
        image: Elp
    },
    {
        id: 1,
        name: "Connect..",
        image: Connect
    },
    {
        id: 1,
        name: "ease",
        image: Ease
    }
]

export const tutorials = [
    {
        id: 1,
        title: "How to Create a Compelling Campaign Pitch",
        info: "In this tutorial, you'll learn how to craft a compelling campaign pitch that captures the attention of potential investors. We'll cover key elements such as a strong introduction, problem statement, solution, market opportunity, and call to action.",
        thumbnail: PitchDeck,
        contentLink: ""
    },
    {
        id: 2,
        title: "Effective Market Analysis for Your Campaign",
        info: "This tutorial will guide you through conducting a thorough market analysis for your campaign. Learn how to identify your target market, analyze market trends, and understand the competitive landscape to strengthen your campaign.",
        thumbnail: Analyst,
        contentLink: ""
    },
    {
        id: 3,
        title: "Creating Financial Projections for Your Campaign",
        info: "Learn how to create realistic financial projections for your campaign. This tutorial will cover revenue forecasting, expense estimation, and funding requirements to help you present a solid financial plan to potential investors.",
        thumbnail: Planner,
        contentLink: ""
    },
    {
        id: 4,
        title: "Designing an Effective Marketing Strategy",
        info: "This tutorial will help you design an effective marketing strategy for your campaign. Learn about digital marketing techniques, customer acquisition strategies, and how to leverage social media to reach your target audience.",
        thumbnail: Marketing,
        contentLink: ""
    },
    {
        id: 5,
        title: "Building a Strong Campaign Team",
        info: "In this tutorial, we'll discuss the importance of building a strong campaign team. Learn how to identify key roles, recruit experienced team members, and highlight your team's expertise to potential investors.",
        thumbnail: Team,
        contentLink: ""
    }
]

export const insights = [
    {
        id: 1,
        category: "Technology Startups",
        title: "Latest Trends in AI-Driven Startups",
        coverImage: AITech,
        date: "2024-07-01",
        author: "Jane Doe",
        tagline: "AI-driven startups are gaining momentum as more industries adopt machine learning and artificial intelligence to solve complex problems. Investors are increasingly focusing on AI startups with applications in healthcare, finance, and logistics. Learn about the top AI trends and the startups leading the charge in this evolving space.",
    },
    {
        id: 2,
        category: "Healthcare and Biotech",
        title: "Biotech Innovations Revolutionizing Patient Care",
        coverImage: BioTech,
        date: "2024-07-10",
        author: "Emily Johnson",
        tagline: "Biotech startups are at the forefront of healthcare innovation, developing cutting-edge treatments and medical devices that are transforming patient care. Explore the latest biotech innovations, from gene therapy to personalized medicine, and their potential impact on the healthcare industry.",
    },
    {
        id: 3,
        category: "Clean Energy and Sustainability",
        title: "Investing in Renewable Energy: What You Need to Know",
        coverImage: GreenEnergy,
        date: "2024-07-15",
        author: "Michael Green",
        tagline: "The clean energy sector is seeing significant investment as the world shifts towards renewable energy sources. Learn about the key trends in clean energy, the challenges faced by startups in this space, and the opportunities for investors looking to support a greener future.",
    },
    {
        id: 4,
        category: "Fintech and Financial Services",
        title: "Fintech Innovations Transforming the Financial Landscape",
        coverImage: FinTech,
        date: "2024-07-20",
        author: "Sophia Williams",
        tagline: "Fintech startups are disrupting traditional financial services with innovative solutions that improve financial inclusion, reduce costs, and enhance user experience. This insight delves into the latest fintech trends, including blockchain technology, digital banking, and peer-to-peer lending.",
    },
    {
        id: 5,
        category: "EdTech",
        title: "The Future of Education: Trends in EdTech",
        coverImage: Education,
        date: "2024-07-25",
        author: "David Lee",
        tagline: "The EdTech industry is rapidly evolving, with new technologies reshaping the way we learn and teach. This article explores the latest trends in EdTech, including the rise of online learning platforms, the use of AI in education, and the growing demand for lifelong learning solutions.",
    }
]

export const testimonials = [
    {
        id: 1,
        authorName: "John A.",
        thumbnail: "/founder.jpg",
        authorVideo: "https://www.youtube.com/watch?v=CB8c7y1YJGc",
        messageText: `"Connect enabled us to reach a broader audience for our education initiative. The funding we received has allowed us to expand our programs and make a bigger impact in our community."`,
        authorRole: "Educational Content Provider",
        authorCompany: "Space"
    },
    {
        id: 2,
        authorName: "Michael L. Bangura",
        thumbnail: "/hbt_1.jpg",
        authorVideo: "https://www.youtube.com/watch?v=_Zk2lY8yPWc",
        messageText: "Connect enabled us to reach a broader audience for our education initiative. The funding we received has allowed us to expand our programs and make a bigger impact in our community.",
        authorRole: "Founder",
        authorCompany: "Space"
    },
    {
        id: 3,
        authorName: "Florah A. Bangura",
        thumbnail: "/msc_1.jpg",
        authorVideo: "https://www.youtube.com/watch?v=U7BB1qNytcs&t=1s",
        messageText: "Connect enabled us to reach a broader audience for our education initiative. The funding we received has allowed us to expand our programs and make a bigger impact in our community.",
        authorRole: "Founder",
        authorCompany: "Space"
    }
]

export const news_insights = [
    {
        id: 1,
        title: "How to Create a Successful Marketing Strategy",
        coverImage: Marketing,
        date: "2023-07-01",
        author: "Jane Doe",
        tagline: "Marketing is a crucial part of any business. Learn how to create a successful marketing strategy and stay ahead of the curve.",
    },
    {
        id: 2,
        title: "How to Create a Successful Marketing Strategy",
        coverImage: GreenEnergy,
        date: "2023-07-01",
        author: "Michael L. Bangura",
        tagline: "Marketing is a crucial part of any business. Learn how to create a successful marketing strategy and stay ahead of the curve.",
    },
    {
        id: 3,
        title: "How to Create a Successful Marketing Strategy",
        coverImage: PitchDeck,
        date: "2023-07-01",
        author: "Jane Doe",
        tagline: "Marketing is a crucial part of any business. Learn how to create a successful marketing strategy and stay ahead of the curve.",
    },
    {
        id: 4,
        title: "How to Create a Successful Marketing Strategy",
        coverImage: Planner,
        date: "2023-07-01",
        author: "Florah A. Bangura",
        tagline: "Marketing is a crucial part of any business. Learn how to create a successful marketing strategy and stay ahead of the curve.",
    },
]