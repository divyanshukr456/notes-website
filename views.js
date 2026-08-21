// views.js
const AuthView = `
    <div class="container auth-view-container">
        <!-- Left Side: Information -->
        <div class="info-section">
            <div class="info-content">
                <h1>Engineering Hub</h1>
                <p class="subtitle">Your ultimate destination for academic excellence.</p>
                <div class="features">
                    <div class="feature-item">
                        <span class="icon">📚</span>
                        <p>Access comprehensive study materials and well-structured notes.</p>
                    </div>
                    <div class="feature-item">
                        <span class="icon">📄</span>
                        <p>Download high-quality PDFs for all engineering disciplines.</p>
                    </div>
                    <div class="feature-item">
                        <span class="icon">🚀</span>
                        <p>Boost your preparation and ace your exams with curated resources.</p>
                    </div>
                </div>
            </div>
            <!-- Background Decoration Shapes -->
            <div class="bg-shape shape1"></div>
            <div class="bg-shape shape2"></div>
        </div>

        <!-- Right Side: Auth Forms -->
        <div class="auth-section">
            <div class="auth-container">
                <!-- Login Form -->
                <form id="login-form" class="auth-form active">
                    <h2>Welcome Back</h2>
                    <p class="form-desc">Sign in to access your engineering resources.</p>
                    
                    <div class="input-group">
                        <label for="login-email">Email Address</label>
                        <input type="email" id="login-email" required placeholder="Enter your email">
                    </div>
                    <div class="input-group">
                        <label for="login-password">Password</label>
                        <input type="password" id="login-password" required placeholder="Enter your password">
                    </div>
                    
                    <button type="submit" class="btn primary-btn">Sign In</button>
                    
                    <p class="toggle-text">Don't have an account? <span class="toggle-link" id="go-to-signup">Sign up here</span></p>
                </form>

                <!-- Signup Form -->
                <form id="signup-form" class="auth-form">
                    <h2>Create Account</h2>
                    <p class="form-desc">Join to unlock unlimited study notes and PDFs.</p>
                    
                    <div class="input-group">
                        <label for="signup-name">Full Name</label>
                        <input type="text" id="signup-name" required placeholder="Enter your full name">
                    </div>
                    <div class="input-group">
                        <label for="signup-email">Email Address</label>
                        <input type="email" id="signup-email" required placeholder="Enter your email">
                    </div>
                    <div class="input-group">
                        <label for="signup-password">Create Password</label>
                        <input type="password" id="signup-password" required placeholder="Create a strong password">
                    </div>
                    <div class="input-group">
                        <label for="signup-confirm-password">Confirm Password</label>
                        <input type="password" id="signup-confirm-password" required placeholder="Confirm your password">
                    </div>
                    
                    <button type="submit" class="btn primary-btn">Sign Up</button>
                    
                    <p class="toggle-text">Already have an account? <span class="toggle-link" id="go-to-signin">Sign in here</span></p>
                </form>
            </div>
        </div>
    </div>
`;

const HomeView = `
    <div class="home-container">
        <!-- Navbar -->
        <nav class="navbar">
            <div class="nav-logo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="url(#logo-grad)" class="logo-icon"><defs><linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f43f5e" /><stop offset="100%" stop-color="#ec4899" /></linearGradient></defs><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                <h2>Engineering Hub</h2>
            </div>
            <div class="nav-search">
                <div class="search-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                    <input type="text" placeholder="Search subjects, notes...">
                </div>
            </div>
            <div class="nav-profile">
                <div class="user-avatar" id="avatar-initial">U</div>
                <button id="logout-btn" class="btn outline-btn">Logout</button>
            </div>
        </nav>

        <!-- Main Body -->
        <main class="dashboard">
            <div class="dashboard-header">
                <h2 id="welcome-message">Welcome to your Dashboard</h2>
                <div class="quote-container">
                    <p class="study-quote" id="dynamic-quote">"Education is not the learning of facts, but the training of the mind to think." <br>— Albert Einstein</p>
                </div>
            </div>

            <div class="cards-grid">
                <!-- Physics -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #f43f5e;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-atom"></i></div>
                            <h3>Physics</h3>
                        </div>
                        <p>Mechanics, Optics, Quantum Physics & more.</p>
                        <a href="#/physics" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- Chemistry -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #fb7185;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-flask"></i></div>
                            <h3>Chemistry</h3>
                        </div>
                        <p>Organic, Inorganic, Physical Chemistry.</p>
                        <a href="#/chemistry" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- Maths 1 -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #e11d48;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-calculator"></i></div>
                            <h3>Maths 1</h3>
                        </div>
                        <p>Calculus, Linear Algebra, Series.</p>
                        <a href="#/maths1" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- Maths 2 -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #be123c;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-chart-line-up"></i></div>
                            <h3>Maths 2</h3>
                        </div>
                        <p>Differential Equations, Vector Calculus.</p>
                        <a href="#/maths2" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- BEE -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #fda4af;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-lightning"></i></div>
                            <h3>Basic Electrical Engineering</h3>
                        </div>
                        <p>DC/AC Circuits, Transformers, Machines.</p>
                        <a href="#/basic-electrical-engineering" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- BCE -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #f43f5e;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-cpu"></i></div>
                            <h3>Basic Electronics Engineering</h3>
                        </div>
                        <p>Diodes, Transistors, Op-Amps, Logic Gates.</p>
                        <a href="#/basic-electronics-engineering" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- BME -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #9f1239;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-gear"></i></div>
                            <h3>Basic Mechanical Engineering</h3>
                        </div>
                        <p>Thermodynamics, Mechanics, Materials.</p>
                        <a href="#/basic-mechanical-engineering" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- Soft Skills -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #ff85c0;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-chat-circle-dots"></i></div>
                            <h3>Soft Skills</h3>
                        </div>
                        <p>Communication, Presentation, Interview Prep.</p>
                        <a href="#/soft-skills" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>

                <!-- PPS -->
                <div class="card-3d" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.2" style="--accent: #f43f5e;">
                    <div class="card-content">
                        <div class="card-header">
                            <div class="icon-box"><i class="ph ph-code"></i></div>
                            <h3>PPS</h3>
                        </div>
                        <p>Programming for Problem Solving (C/C++).</p>
                        <a href="#/pps" class="explore-btn">Explore <span>&rarr;</span></a>
                    </div>
                </div>
            </div>
        </main>
    </div>
`;

const SubjectView = `
    <div class="home-container">
        <!-- Navbar -->
        <nav class="navbar">
            <div class="nav-logo" style="cursor: pointer;" onclick="window.location.hash='#/home'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="url(#logo-grad)" class="logo-icon"><defs><linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f43f5e" /><stop offset="100%" stop-color="#ec4899" /></linearGradient></defs><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                <h2>Engineering Hub</h2>
            </div>
            <div class="nav-profile">
                <a href="#/home" class="btn outline-btn" style="margin-right: 15px;">&larr; Back to Dashboard</a>
                <div class="user-avatar" id="avatar-initial">U</div>
            </div>
        </nav>

        <!-- Main Body -->
        <main class="dashboard" style="max-width: 900px; margin: 0 auto; text-align: center; padding-top: 5rem;">
            <div class="card-icon" style="margin: 0 auto 2rem auto; width: 80px; height: 80px; color: #f43f5e;">
                <!-- Icon injected via JS -->
                <svg id="subject-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px;"></svg>
            </div>
            
            <h1 id="subject-title" style="font-size: 3rem; margin-bottom: 1rem; color: white;">Subject Title</h1>
            <p id="subject-desc" style="color: #94a3b8; font-size: 1.2rem; line-height: 1.6; max-width: 600px; margin: 0 auto 3rem auto;">
                Subject description goes here.
            </p>
            
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button class="btn" style="background: #f43f5e; border: none; padding: 1rem 2rem; border-radius: 12px; color: white; width: auto; font-size: 1.1rem; cursor: pointer;">
                    View Study Notes
                </button>
                <button class="btn" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1rem 2rem; border-radius: 12px; color: white; width: auto; font-size: 1.1rem; cursor: pointer;">
                    Download PDFs
                </button>
            </div>
        </main>
    </div>
`;
