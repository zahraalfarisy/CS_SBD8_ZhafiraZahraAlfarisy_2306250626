import React, { useState, useEffect } from "react";

import RedditLogo from "./assets/Reddit_Lockup_Logo.svg";
import RedditCommunities from "./assets/RedditInc_Header_Homepage.png";
import PostIcon from "./assets/Post.png";
import CommentIcon from "./assets/Comment.png";
import VoteIcon from "./assets/Vote.png";

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  
  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    showMessageModal("Search", `You searched for: "${searchQuery}"`);
  };
  
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const showMessageModal = (title, body) => {
    setModalContent({ title, body });
    setShowModal(true);
  };
  
  const handleSignUp = () => {
    showMessageModal("Sign Up", "Thanks for your interest in joining Reddit! This would redirect to the registration page.");
  };
  
  const handleGetStarted = () => {
    showMessageModal("Get Started", "Welcome to Reddit! This would guide you through creating your first account.");
  };
  
  const handleLearnMore = () => {
    showMessageModal("Learn More", "Reddit is a network of communities where people can dive into their interests, hobbies and passions.");
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen`}>
      {/* Header/Navbar */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src={RedditLogo} 
                  alt="Reddit Logo" 
                  className="h-10 w-auto cursor-pointer" 
                  onClick={() => scrollToSection('home')}
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-lg font-medium hover:text-orange-500 ${activeSection === 'features' ? 'text-orange-500' : ''}`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('numbers')}
                className={`text-lg font-medium hover:text-orange-500 ${activeSection === 'numbers' ? 'text-orange-500' : ''}`}
              >
                Numbers
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`text-lg font-medium hover:text-orange-500 ${activeSection === 'how-it-works' ? 'text-orange-500' : ''}`}
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className={`text-lg font-medium hover:text-orange-500 ${activeSection === 'news' ? 'text-orange-500' : ''}`}
              >
                News
              </button>
              <button 
                onClick={() => showMessageModal("Careers", "Explore career opportunities at Reddit!")}
                className="text-lg font-medium hover:text-orange-500"
              >
                Careers
              </button>
            </nav>

            {/* Dark Mode Toggle */}
            <div className="ml-4 flex items-center">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              
              {/* Search bar */}
              <form onSubmit={handleSearch} className="relative mx-4 hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className={`block w-full pl-10 pr-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              
              {/* Login/Signup */}
              <button 
                className="px-4 py-2 rounded-full font-medium bg-orange-500 text-white hover:bg-orange-600 transition duration-200"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition duration-200`}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
          <div className="space-y-2 py-3">
            <button 
              onClick={() => scrollToSection('features')}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-gray-100 hover:text-orange-500 ${darkMode ? 'hover:bg-gray-700' : ''} ${activeSection === 'features' ? 'text-orange-500' : ''}`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('numbers')}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-gray-100 hover:text-orange-500 ${darkMode ? 'hover:bg-gray-700' : ''} ${activeSection === 'numbers' ? 'text-orange-500' : ''}`}
            >
              Numbers
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-gray-100 hover:text-orange-500 ${darkMode ? 'hover:bg-gray-700' : ''} ${activeSection === 'how-it-works' ? 'text-orange-500' : ''}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-gray-100 hover:text-orange-500 ${darkMode ? 'hover:bg-gray-700' : ''} ${activeSection === 'news' ? 'text-orange-500' : ''}`}
            >
              News
            </button>
            <button 
              onClick={() => showMessageModal("Careers", "Explore career opportunities at Reddit!")}
              className={`block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-gray-100 hover:text-orange-500 ${darkMode ? 'hover:bg-gray-700' : ''}`}
            >
              Careers
            </button>
            <form 
              onSubmit={handleSearch}
              className="px-3 py-2"
            >
              <input
                type="text"
                className={`block w-full pl-3 pr-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="mt-2 w-full px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className={`relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className={`block ${darkMode ? 'text-white' : 'text-gray-900'}`}>Find your</span>
            <span className="block text-orange-500 xl:inline">community on Reddit</span>
          </h1>
          <p className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            Dive into anything on Reddit, where communities you're interested in are waiting for you. Discover new communities, share your thoughts, and connect with people who share your interests.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-full shadow">
              <button 
                onClick={handleGetStarted}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition duration-200 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button 
                onClick={handleLearnMore}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full transition duration-200 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} md:py-4 md:text-lg md:px-10`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    {/* Image container*/}
    <div className={`h-96 sm:h-112 md:h-128 lg:w-full lg:h-full bg-[#FF4500] flex items-center justify-center`}>
      <div className="max-w-md max-h-full p-4 overflow-hidden"> {/* Added container with max-width and padding */}
        <img 
          src={RedditCommunities} 
          alt="Reddit communities" 
          className="rounded-md object-contain w-96 h-96" /* Changed to 24rem x 24rem */
        />
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">Features</h2>
            <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
              A better way to connect
            </p>
            <p className={`mt-4 max-w-2xl text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
              Reddit is home to thousands of communities, endless conversation, and authentic human connection.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[

                { 
                  title: 'Communities for everyone', 
                  description: 'Find communities of people who share your interests, whatever they may be.', 
                  icon: <GlobeIcon />,
                  action: () => showMessageModal("Communities", "Discover thousands of communities on topics you're passionate about!")
                },
                { 
                  title: 'Join the conversation', 
                  description: 'Get involved in discussions about topics you care about.', 
                  icon: <SearchIcon />,
                  action: () => showMessageModal("Conversations", "Participate in discussions with millions of users worldwide!")
                },
                { 
                  title: 'Stay informed', 
                  description: 'Get updates and news from people who know the topics best.', 
                  icon: <ChevronDownIcon />,
                  action: () => showMessageModal("Stay Updated", "Get the latest information from subject experts and enthusiasts!")
                }

              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="relative cursor-pointer transition duration-200 hover:transform hover:scale-105"
                  onClick={feature.action}
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-orange-500">{feature.title}</p>
                  <p className={`mt-2 ml-16 text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reddit by the numbers section */}
      <section id="numbers" className={`${darkMode ? 'bg-black text-white' : 'bg-gray-900 text-white'} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-4">Reddit by the numbers</h2>
          <p className="text-xl mb-8">
            Reddit is a growing family of millions of diverse people sharing the things they care about most.
          </p>
          <p className="text-lg mb-12">As of December, 2024</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats cards */}
            {[

              { number: "101M+", text: "Daily active uniques" },
              { number: "379M+", text: "Weekly active uniques" },
              { number: "100K+", text: "Active communities" },
              { number: "22B+", text: "Posts & comments" }

            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 transform transition duration-200 hover:scale-105 cursor-pointer"
                onClick={() => showMessageModal("Reddit Statistics", `${stat.text}: ${stat.number}`)}
              >
                <h3 className="text-orange-500 text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-black text-lg">{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => showMessageModal("Reddit Press", "Visit our press center for the latest Reddit news and announcements.")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition duration-200"
            >
              Reddit press
            </button>
          </div>
        </div>
      </section>

      {/* How does Reddit work section */}
      <section id="how-it-works" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} py-16`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>How does Reddit work?</h2>
    <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      Every day, millions of people around the world post, vote, and comment in communities organized around their interests.
    </p>
    
    <div className="mb-8">
      <button 
        onClick={() => showMessageModal("Visit Reddit", "Taking you to Reddit.com...")}
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-500 hover:bg-orange-600 transition duration-200 mr-4"
      >
        Visit Reddit
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        className={`border border-gray-200 rounded-lg p-6 shadow-sm cursor-pointer transition duration-200 hover:shadow-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
        onClick={() => showMessageModal("Posting", "Share your content with communities that matter to you.")}
      >
        <div className="flex justify-center mb-6">
          <img 
            src={PostIcon} 
            alt="Post icon" 
            className="h-64 w-64 object-cover rounded-lg"  // Enlarged to 16rem x 16rem
          />
        </div>
        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Post</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          The community can share content by posting stories, links, images, and videos.
        </p>
      </div>
      
      <div 
        className={`border border-gray-200 rounded-lg p-6 shadow-sm cursor-pointer transition duration-200 hover:shadow-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
        onClick={() => showMessageModal("Commenting", "Join discussions and share your thoughts with others.")}
      >
        <div className="flex justify-center mb-6">
          <img 
            src={CommentIcon} 
            alt="Comment icon" 
            className="h-64 w-64 object-cover rounded-lg"  // Enlarged to 16rem x 16rem
          />
        </div>
        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Comment</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          The community comments on posts. Comments provide discussion and often humor.
        </p>
      </div>
      
      <div 
        className={`border border-gray-200 rounded-lg p-6 shadow-sm cursor-pointer transition duration-200 hover:shadow-md ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
        onClick={() => showMessageModal("Voting", "Help quality content rise to the top with your votes.")}
      >
        <div className="flex justify-center mb-6">
          <img 
            src={VoteIcon} 
            alt="Vote icon" 
            className="h-64 w-64 object-cover rounded-lg"  // Enlarged to 16rem x 16rem
          />
        </div>
        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Vote</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Comments & posts can be upvoted or downvoted. The most interesting content rises to the top.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Reddit news section */}
      <section id="news" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Reddit news</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[

              {
                date: "April 20, 2025",
                title: "Reddit enhances community experience with new features",
                description: "Latest updates focus on improving moderation tools and user engagement across communities.",
                action: () => showMessageModal("News: Community Features", "Reddit has launched new features to enhance community moderation and user engagement...")
              },
              {
                date: "April 15, 2025",
                title: "Reddit launches improved mobile experience",
                description: "New mobile app updates bring better navigation and improved performance to users on the go.",
                action: () => showMessageModal("News: Mobile Updates", "Reddit's latest mobile app update includes redesigned navigation and faster performance...")
              },
              {
                date: "April 10, 2025",
                title: "Reddit partners with leading content creators",
                description: "New partnership program aims to bring high-quality original content to various communities.",
                action: () => showMessageModal("News: Content Partnerships", "Reddit announces new partnerships with leading content creators across multiple categories...")
              }

            ].map((item, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-200 hover:shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}`}
                onClick={item.action}
              >
                <div className={`h-48 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></div>
                <div className="p-6">
                  <p className="text-sm text-orange-500 mb-2">{item.date}</p>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 font-medium">Read more</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button 
              onClick={() => showMessageModal("All News", "View all Reddit news and announcements in our newsroom.")}
              className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md transition duration-200 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-orange-500 hover:bg-gray-50 border-orange-500'}`}
            >
              View all news
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            <span className="block">Ready to dive in?</span>
            <span className="block text-orange-500">Join Reddit today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">
                Sign up
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#" className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-orange-500 hover:bg-gray-50'}`}>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center">
            {['About', 'Blog', 'Jobs', 'Press', 'Advertise', 'Help', 'Privacy', 'Terms', 'Content Policy'].map((item, i) => (
              <div key={i} className="px-6 py-2">
                <a href="#" className={`text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>{item}</a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            <p className={`text-center text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              &copy; 2025 Reddit, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
