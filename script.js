// Initialize demo data
const initialData = {
    users: [
        { id: 1, email: 'student@example.com', password: '123456', type: 'student', purchasedVideos: [], sentAssignments: [] },
        { id: 2, email: 'admin@example.com', password: 'admin123', type: 'admin', purchasedVideos: [1, 2], sentAssignments: [] }
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
    ]
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