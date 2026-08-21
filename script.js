// script.js

// --- Router Logic ---
const app = document.getElementById('app');
const toast = document.getElementById('toast');

// Display Toast Notification
function showToast(message, type) {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Router configuration
const subjectsData = {
    '#/physics': { title: 'Physics', desc: 'Mechanics, Optics, Quantum Physics & more.', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.954 11.954 0 0112 13.5c-2.998 0-5.74 1.1-7.843 2.918m15.686 0A8.959 8.959 0 0112 21', color: '#f43f5e' },
    '#/chemistry': { title: 'Chemistry', desc: 'Organic, Inorganic, Physical Chemistry.', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5', color: '#fb7185' },
    '#/maths1': { title: 'Maths 1', desc: 'Calculus, Linear Algebra, Series.', icon: 'M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z', color: '#e11d48' },
    '#/maths2': { title: 'Maths 2', desc: 'Differential Equations, Vector Calculus.', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', color: '#be123c' },
    '#/basic-electrical-engineering': { title: 'Basic Electrical Engineering', desc: 'DC/AC Circuits, Transformers, Machines.', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', color: '#fda4af' },
    '#/basic-electronics-engineering': { title: 'Basic Electronics Engineering', desc: 'Diodes, Transistors, Op-Amps, Logic Gates.', icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z', color: '#f43f5e' },
    '#/basic-mechanical-engineering': { title: 'Basic Mechanical Engineering', desc: 'Thermodynamics, Mechanics, Materials.', icon: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.79l.867-1.321m7.264-11.063l.867-1.321L12 22.5', color: '#9f1239' },
    '#/soft-skills': { title: 'Soft Skills', desc: 'Communication, Presentation, Interview Prep.', icon: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.84 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155', color: '#ff85c0' },
    '#/pps': { title: 'PPS', desc: 'Programming for Problem Solving (C/C++).', icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5', color: '#f43f5e' }
};

const routes = {
    '/': renderAuthView,
    '#/home': renderHomeView,
    '#/physics': renderSubjectView,
    '#/chemistry': renderSubjectView,
    '#/maths1': renderSubjectView,
    '#/maths2': renderSubjectView,
    '#/basic-electrical-engineering': renderSubjectView,
    '#/basic-electronics-engineering': renderSubjectView,
    '#/basic-mechanical-engineering': renderSubjectView,
    '#/soft-skills': renderSubjectView,
    '#/pps': renderSubjectView
};

function router() {
    let hash = window.location.hash;
    // Default route mapping
    if (!hash || hash === '#/') {
        hash = '/';
    }
    
    // Check authentication
    const currentUser = sessionStorage.getItem('currentUser');
    
    // Guard routes
    if (hash !== '/' && !currentUser) {
        // Redirect to login if not logged in and trying to access a protected route
        window.location.hash = '/';
        return;
    }
    
    if (hash === '/' && currentUser) {
        // Redirect to home if already logged in
        window.location.hash = '#/home';
        return;
    }
    
    const renderFunction = routes[hash] || routes['/'];
    if (renderFunction === renderSubjectView) {
        renderFunction(hash);
    } else {
        renderFunction();
    }
}

// Initialize Router
window.addEventListener('hashchange', router);
window.addEventListener('load', router);


// --- Auth View Logic ---
function renderAuthView() {
    app.innerHTML = AuthView;
    
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const goToSignup = document.getElementById('go-to-signup');
    const goToSignin = document.getElementById('go-to-signin');
    
    function toggleForms() {
        loginForm.classList.toggle('active');
        signupForm.classList.toggle('active');
        document.querySelectorAll('input').forEach(input => input.value = '');
    }
    
    if(goToSignup) goToSignup.addEventListener('click', toggleForms);
    if(goToSignin) goToSignin.addEventListener('click', toggleForms);
    
    // Handle Signup
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        
        if (password !== confirmPassword) {
            showToast('Passwords do not match!', 'error');
            return;
        }
        
        if (password.length < 6) {
            showToast('Password must be at least 6 characters long.', 'error');
            return;
        }
        
        if (localStorage.getItem(email)) {
            showToast('An account with this email already exists!', 'error');
            return;
        }
        
        const userData = { name, email, password };
        localStorage.setItem(email, JSON.stringify(userData));
        showToast('Account created successfully! Please sign in.', 'success');
        toggleForms();
    });
    
    // Handle Login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        
        const storedUserDataJSON = localStorage.getItem(email);
        
        if (storedUserDataJSON) {
            const storedUserData = JSON.parse(storedUserDataJSON);
            
            if (storedUserData.password === password) {
                // Set session
                sessionStorage.setItem('currentUser', JSON.stringify(storedUserData));
                showToast(`Welcome back, ${storedUserData.name}!`, 'success');
                // Navigate to home dashboard
                window.location.hash = '#/home';
            } else {
                showToast('Incorrect password. Please try again.', 'error');
            }
        } else {
            showToast('No account found with this email.', 'error');
        }
    });
}

const studyQuotes = [
    `"The beautiful thing about learning is that no one can take it away from you." <br>— B.B. King`,
    `"Education is the most powerful weapon which you can use to change the world." <br>— Nelson Mandela`,
    `"Live as if you were to die tomorrow. Learn as if you were to live forever." <br>— Mahatma Gandhi`,
    `"It always seems impossible until it's done." <br>— Nelson Mandela`,
    `"Success isn't always about greatness. It's about consistency. Consistent hard work leads to success." <br>— Dwayne Johnson`,
    `"Small daily improvements over time lead to stunning results." <br>— Robin Sharma`,
    `"The expert in anything was once a beginner." <br>— Helen Hayes`,
    `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure." <br>— Colin Powell`,
    `"You don't have to be great to start, but you have to start to be great." <br>— Zig Ziglar`,
    `"Procrastination makes easy things hard and hard things harder." <br>— Mason Cooley`
];

// --- Home View Logic ---
function renderHomeView() {
    app.innerHTML = HomeView;
    
    const currentUserJSON = sessionStorage.getItem('currentUser');
    if (currentUserJSON) {
        const user = JSON.parse(currentUserJSON);
        
        // Personalize welcome message
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome back, ${user.name}!`;
        }
        
        // Personalize avatar initial
        const avatar = document.getElementById('avatar-initial');
        if (avatar) {
            avatar.textContent = user.name.charAt(0).toUpperCase();
        }
    }

    // Set Random Quote
    const quoteElement = document.getElementById('dynamic-quote');
    if (quoteElement) {
        const randomQuote = studyQuotes[Math.floor(Math.random() * studyQuotes.length)];
        quoteElement.innerHTML = randomQuote;
    }
    
    // Handle Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('currentUser');
            showToast('Logged out successfully.', 'success');
            window.location.hash = '/';
        });
    }

    // Initialize VanillaTilt for 3D cards
    if (typeof VanillaTilt !== 'undefined') {
        const cards = document.querySelectorAll(".card-3d");
        if (cards.length > 0) {
            VanillaTilt.init(cards, {
                max: 15,           /* Max tilt angle in degrees */
                speed: 400,        /* Speed of the transition */
                glare: true,       /* Adds a modern glass glare overlay */
                "max-glare": 0.2,  /* Glare intensity */
                scale: 1.03        /* Slight lift effect */
            });
        }
    }
}

// --- Subject View Logic ---
function renderSubjectView(hash) {
    app.innerHTML = SubjectView;
    
    const subjectData = subjectsData[hash];
    if (!subjectData) {
        window.location.hash = '#/home';
        return;
    }

    // Personalize avatar initial
    const currentUserJSON = sessionStorage.getItem('currentUser');
    if (currentUserJSON) {
        const user = JSON.parse(currentUserJSON);
        const avatar = document.getElementById('avatar-initial');
        if (avatar) {
            avatar.textContent = user.name.charAt(0).toUpperCase();
        }
    }

    // Inject dynamic data
    document.getElementById('subject-title').textContent = subjectData.title;
    document.getElementById('subject-desc').textContent = subjectData.desc;
    document.getElementById('subject-icon').innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${subjectData.icon}" />`;
    
    // Set dynamic color
    document.getElementById('subject-title').style.color = subjectData.color;
    document.getElementById('subject-icon').parentElement.style.color = subjectData.color;
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.textContent.includes('View Study Notes')) {
            btn.style.background = subjectData.color;
        }
    });
}
