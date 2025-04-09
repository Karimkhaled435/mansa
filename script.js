// Initialize demo data
const initialData = {
    users: [
        { id: 1, email: 'student@example.com', password: '123456', type: 'student', purchasedVideos: [] },
        { id: 2, email: 'admin@example.com', password: 'admin123', type: 'admin', purchasedVideos: [1, 2] },
        { id: 3, email: '420150@mansa.com', password: 'goxfk9nT$YS%', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 4, email: '285278@mansa.com', password: 'D*yW$5*MtZR#', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 5, email: '550040@mansa.com', password: 'OGcdkN#LeAkn', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 6, email: '135533@mansa.com', password: 'E4EB1y1KPFhD', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 7, email: '820749@mansa.com', password: '5I#kV#oCGhfk', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 8, email: '338728@mansa.com', password: 'lpZDxgsi#1nR', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 9, email: '396579@mansa.com', password: '&AeNSm4oE^xD', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 10, email: '573954@mansa.com', password: '1psOd1uMKg0S', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 11, email: '936567@mansa.com', password: '&t8AARZDd$O#', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 12, email: '336673@mansa.com', password: 'CjG%QcdyZ!#0', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 13, email: '971053@mansa.com', password: 'FwsMY8wC7$F#', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 14, email: '225310@mansa.com', password: 'fZO0i0rza1Z0', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 15, email: '640845@mansa.com', password: '*833Y%5B&arc', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 16, email: '833002@mansa.com', password: '$P12WFXjzz9r', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 17, email: '112484@mansa.com', password: '9FAXDnlu@iaO', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 18, email: '443970@mansa.com', password: 'CBXGTAd5qsO*', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 19, email: '085472@mansa.com', password: 'd$6#6f1W1FY7', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 20, email: '221412@mansa.com', password: 'QJmcpSlWkotw', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 21, email: '022449@mansa.com', password: '2c%%4vjSxBe*', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 22, email: '600695@mansa.com', password: 'vBtP@55Q*HIa', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 23, email: '180132@mansa.com', password: '&TwY^z6JTaOl', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 24, email: '168772@mansa.com', password: 'g*^je6Z0PKPK', type: 'student', purchasedVideos: [], submittedAssignments: [] },
        { id: 25, email: '610144@mansa.com', password: 'lfg0P%LnSahE', type: 'student', purchasedVideos: [], submittedAssignments: [] },
    ],
    videos: [
        { id: 1, title: 'مقدمة في الجبر', description: 'شرح شامل لمفاهيم الجبر الأساسية للصف الأول الثانوي', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', price: 25, category: 'math' },
        { id: 2, title: 'الهندسة التحليلية', description: 'شرح مفصل للهندسة التحليلية وتطبيقاتها', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', price: 30, category: 'math' },
        { id: 3, title: 'العلوم: الكيمياء العضوية', description: 'شرح مركبات الكربون والروابط الكيميائية', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', price: 40, category: 'science' },
        { id: 4, title: 'قواعد اللغة العربية', description: 'شرح قواعد النحو والصرف في اللغة العربية', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', price: 35, category: 'arabic' },
        { id: 5, title: 'الجزء الأول: اللغة الإنجليزية', description: 'شرح قواعد زمن المضارع البسيط والمستمر', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', price: 25, category: 'english' },
        { id: 6, title: 'التفاضل والتكامل', description: 'مقدمة في حساب التفاضل والتكامل للصف الثالث الثانوي', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', price: 50, category: 'math' }
    ],
    assignments: [
        { id: 1, title: 'واجب الجبر', description: 'حل المعادلات من الصفحة 25-30 في الكتاب المدرسي', dueDate: '2023-12-10', category: 'math' },
        { id: 2, title: 'واجب الكيمياء', description: 'اكتب تقريراً عن التفاعلات العضوية ومشتقات الكربون', dueDate: '2023-12-15', category: 'science' },
        { id: 3, title: 'واجب اللغة العربية', description: 'تحليل قصيدة "البردة" للإمام البوصيري', dueDate: '2023-12-20', category: 'arabic' },
        { id: 4, title: 'واجب اللغة الإنجليزية', description: 'كتابة مقال عن أهمية التعليم في 200 كلمة', dueDate: '2023-12-25', category: 'english' }
    ],
    submittedAssignments: []
};

// Check if data exists in localStorage
if (!localStorage.getItem('platformData')) {
    localStorage.setItem('platformData', JSON.stringify(initialData));
}

// Application state
let currentUser = null;
const cart = [];

// Elements
const loginPage = document.getElementById('login-page');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const usernameDisplay = document.getElementById('username-display');
const adminNavItem = document.getElementById('admin-nav-item');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.tab-content');
const videosContainer = document.getElementById('videos-container');
const myVideosContainer = document.getElementById('my-videos-container');
const noVideosMessage = document.getElementById('no-videos-message');
const assignmentsContainer = document.getElementById('assignments-container');
const assignmentFilter = document.getElementById('assignment-filter');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartEmptyMessage = document.getElementById('cart-empty-message');
const totalPrice = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const addVideoForm = document.getElementById('add-video-form');
const addAssignmentForm = document.getElementById('add-assignment-form');
const usersTableBody = document.getElementById('users-table-body');
const submittedAssignmentsTableBody = document.getElementById('submitted-assignments-table-body');

// Helper function to get data from localStorage
function getData() {
    return JSON.parse(localStorage.getItem('platformData'));
}

// Helper function to save data to localStorage
function saveData(data) {
    localStorage.setItem('platformData', JSON.stringify(data));
}

// Authentication
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = getData();
    const user = data.users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        usernameDisplay.textContent = user.email.split('@')[0];
        if (user.type === 'admin') {
            adminNavItem.classList.remove('hidden');
        }
        loginPage.classList.add('hidden');
        dashboard.classList.remove('hidden');
        renderVideos();
        renderMyVideos();
        renderAssignments();
        if (user.type === 'admin') {
            renderUsers();
            renderSubmittedAssignments();
        }
    } else {
        loginError.classList.remove('hidden');
        setTimeout(() => {
            loginError.classList.add('hidden');
        }, 3000);
    }
});

logoutBtn.addEventListener('click', function() {
    currentUser = null;
    cart.length = 0;
    updateCartCount();
    dashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    adminNavItem.classList.add('hidden');
});

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('fade-in');
        });
        document.getElementById(target).classList.remove('hidden');
        setTimeout(() => {
            document.getElementById(target).classList.add('fade-in');
        }, 10);
    });
});

// Render videos
function renderVideos() {
    const data = getData();
    videosContainer.innerHTML = '';
    data.videos.forEach(video => {
        const isInCart = cart.some(item => item.id === video.id);
        const isPurchased = currentUser.purchasedVideos.includes(video.id);
        let categoryName;
        switch(video.category) {
            case 'math': categoryName = 'الرياضيات'; break;
            case 'science': categoryName = 'العلوم'; break;
            case 'arabic': categoryName = 'اللغة العربية'; break;
            case 'english': categoryName = 'اللغة الإنجليزية'; break;
            default: categoryName = 'عام';
        }
        const videoCard = document.createElement('div');
        videoCard.className = 'card bg-white rounded-lg shadow-md overflow-hidden';
        videoCard.innerHTML = `
            <div class="relative aspect-w-16 aspect-h-9">
                <video class="w-full h-48 object-cover" poster="https://via.placeholder.com/640x360.png?text=فيديو+تعليمي" src="${video.url}" preload="metadata"></video>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <h3 class="text-lg font-semibold mb-2">${video.title}</h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">${categoryName}</span>
                </div>
                <p class="text-gray-600 text-sm mb-4">${video.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold">${video.price} جنيه</span>
                    ${isPurchased ? 
                        `<button class="btn-success cursor-not-allowed" disabled>تم الشراء</button>` :
                        isInCart ? 
                        `<button class="btn-danger remove-from-cart" data-id="${video.id}">إزالة من السلة</button>` :
                        `<button class="btn-primary add-to-cart" data-id="${video.id}">إضافة للسلة</button>`
                    }
