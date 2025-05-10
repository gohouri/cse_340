/* Modern Design CSS for CSE Motors */
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #f39c12;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --gray-color: #6c757d;
    --success-color: #2ecc71;
    --danger-color: #e74c3c;
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Open Sans', sans-serif;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --radius: 8px;
    --transition: all 0.3s ease;
}

/* General Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    background-color: #f0f2f5;
    font-family: var(--font-body);
    font-size: 16px;
}

body {
    line-height: 1.6;
    color: var(--dark-color);
    max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--secondary-color);
    margin-bottom: 1rem;
    font-weight: 700;
}

h1 {
    font-size: 2rem;
    position: relative;
    padding-bottom: 0.5rem;
}

h1::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 60px;
    background-color: var(--accent-color);
}

h2 {
    font-size: 1.5rem;
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
}

a:hover {
    color: var(--secondary-color);
}

img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius);
}

.btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    box-shadow: var(--shadow);
}

.btn:hover {
    background-color: var(--secondary-color);
    color: var(--light-color);
    transform: translateY(-2px);
}

.btn-accent {
    background-color: var(--accent-color);
}

/* Layout */
#wrapper {
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--light-color);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
}

/* Header Styles */
header {
    background-color: var(--light-color);
    padding: 1rem;
    border-bottom: 3px solid var(--primary-color);
}

.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    max-width: 180px;
    transition: var(--transition);
}

.logo img:hover {
    transform: scale(1.05);
}

.account a {
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: 0.6rem 1.2rem;
    border-radius: var(--radius);
    font-weight: 600;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.account a:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

.account a::before {
    content: '👤';
    font-size: 1.1rem;
}

/* Navigation Styles */
nav {
    background-color: var(--secondary-color);
}

nav ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

nav ul li {
    margin: 0;
    position: relative;
}

nav ul li a {
    display: block;
    color: var(--light-color);
    padding: 1rem 1.2rem;
    text-align: center;
    font-weight: 600;
    transition: var(--transition);
}

nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--accent-color);
}

/* Main Content */
main {
    padding: 2rem;
    min-height: 500px;
}

/* Hero Section */
.hero {
    position: relative;
    margin-bottom: 2.5rem;
    background-color: var(--secondary-color);
    padding: 0;
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow);
}

.hero-content {
    z-index: 1;
    color: var(--light-color);
    padding: 2rem;
    background: linear-gradient(to right, rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.6));
}

.hero-content h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--light-color);
}

.hero-content p {
    margin-bottom: 0.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.hero-content p::before {
    content: '✓';
    color: var(--accent-color);
    font-weight: bold;
}

.hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: var(--transition);
}

/* Content Layout */
.content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

/* Reviews Section */
.reviews {
    flex: 1;
    padding: 1.5rem;
    background-color: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.reviews h2 {
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
    position: relative;
    padding-bottom: 0.5rem;
}

.reviews h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 50px;
    background-color: var(--accent-color);
}

.reviews ul {
    list-style: none;
    padding-left: 0;
}

.reviews li {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: var(--radius);
    position: relative;
    padding-left: 2rem;
}

.reviews li::before {
    content: '"';
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: bold;
}

/* Upgrades Section */
.upgrades {
    flex: 1;
    padding: 1.5rem;
    background-color: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.upgrades h2 {
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
    position: relative;
    padding-bottom: 0.5rem;
}

.upgrades h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 50px;
    background-color: var(--accent-color);
}

.upgrade-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.upgrade-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: var(--radius);
    transition: var(--transition);
    height: 100%;
}

.upgrade-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.upgrade-img {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.upgrade-img img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.upgrade-item:hover img {
    transform: scale(1.05);
}

.upgrade-item a {
    font-weight: 600;
    color: var(--secondary-color);
    transition: var(--transition);
}

.upgrade-item a:hover {
    color: var(--primary-color);
}

/* Footer Styles */
footer {
    background-color: var(--secondary-color);
    color: var(--light-color);
    padding: 2rem;
    text-align: center;
    font-size: 0.9rem;
}

footer p {
    margin-bottom: 0.75rem;
}

/* Media Queries for Responsive Design */
@media only screen and (max-width: 768px) {
    header {
        padding: 1rem;
    }

    nav ul {
        flex-direction: column;
    }
    
    nav ul li {
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    nav ul li:last-child {
        border-bottom: none;
    }
    
    h1 {
        font-size: 1.8rem;
    }
    
    .site-header {
        flex-direction: column;
        text-align: center;
    }
    
    .account {
        margin-top: 1rem;
    }
    
    main {
        padding: 1.5rem;
    }
    
    .upgrade-grid {
        grid-template-columns: 1fr;
    }
}

@media only screen and (min-width: 768px) {
    .hero {
        flex-direction: row;
        align-items: stretch;
    }
    
    .hero-content {
        flex: 1;
    }
    
    .hero-image-container {
        flex: 1.5;
        overflow: hidden;
    }
    
    .hero-image {
        height: 100%;
        object-fit: cover;
    }
    
    .content-wrapper {
        flex-direction: row;
    }
    
    .upgrade-grid {
        grid-template-columns: repeat(4, 1fr);
    }
    
    h1 {
        font-size: 2.5rem;
    }
}
