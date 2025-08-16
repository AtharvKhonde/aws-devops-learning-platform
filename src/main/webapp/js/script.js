// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    console.log('🚀 AWS DevOps Learning Platform Initialized');
    
    // Initialize components
    initializeNavigation();
    initializeAnimations();
    initializeCards();
    initializeFilters();
    initializeProgressTracking();
    initializeTooltips();
    
    // Add loading animation removal
    removeLoadingStates();
}

// ===== Navigation Enhancements ===== //
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;
    
    // Highlight active navigation item
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath || 
            (currentPath.startsWith(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        }
    });
    
    // Add smooth scrolling for anchor links
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    smoothScrollTo(target);
                }
            });
        }
    });
}

// ===== Card Interactions ===== //
function initializeCards() {
    const cards = document.querySelectorAll('.topic-card, .feature');
    
    cards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

// ===== Filter Functionality ===== //
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const topicCards = document.querySelectorAll('.topic-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active filter
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter category
            const filterCategory = this.textContent.toLowerCase();
            
            // Filter topics
            filterTopics(topicCards, filterCategory);
            
            // Update URL without page reload
            const url = new URL(window.location);
            if (filterCategory === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', filterCategory);
            }
            window.history.pushState({}, '', url);
        });
    });
}

// Filter topics based on category
function filterTopics(cards, category) {
    cards.forEach(card => {
        const cardCategory = card.querySelector('.topic-category');
        if (!cardCategory) return;
        
        const cardCategoryText = cardCategory.textContent.toLowerCase();
        
        if (category === 'all' || cardCategoryText.includes(category)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update results count
    updateResultsCount(cards, category);
}

// Update results count display
function updateResultsCount(cards, category) {
    let visibleCount = 0;
    cards.forEach(card => {
        if (card.style.display !== 'none') visibleCount++;
    });
    
    // Create or update results message
    let resultsMessage = document.querySelector('.results-message');
    if (!resultsMessage) {
        resultsMessage = document.createElement('div');
        resultsMessage.className = 'results-message';
        document.querySelector('.topics-container').prepend(resultsMessage);
    }
    
    const categoryText = category === 'all' ? 'all categories' : category;
    resultsMessage.textContent = `Showing ${visibleCount} topics in ${categoryText}`;
}

// ===== Progress Tracking ===== //
function initializeProgressTracking() {
    const topicCards = document.querySelectorAll('.topic-card');
    let completedCount = 0;
    
    // Count completed topics
    topicCards.forEach(card => {
        const completedStatus = card.querySelector('.topic-status.completed');
        if (completedStatus) completedCount++;
    });
    
    // Update progress display
    updateProgressDisplay(completedCount, topicCards.length);
    
    // Add click handlers for topic completion
    topicCards.forEach(card => {
        const startButton = card.querySelector('.btn-primary');
        if (startButton) {
            startButton.addEventListener('click', function(e) {
                trackTopicStart(card);
            });
        }
    });
}

// Update progress display
function updateProgressDisplay(completed, total) {
    const progressElements = document.querySelectorAll('.progress-display');
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    progressElements.forEach(element => {
        element.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <span class="progress-text">${completed}/${total} completed (${percentage}%)</span>
        `;
    });
}

// Track when user starts a topic
function trackTopicStart(card) {
    const topicTitle = card.querySelector('.topic-title').textContent;
    console.log(`📚 Started learning: ${topicTitle}`);
    
    // Add visual feedback
    showNotification(`Started learning: ${topicTitle}`, 'success');
    
    // Could integrate with analytics or learning management system here
    // trackEvent('topic_started', { topic: topicTitle });
}

// ===== Animations ===== //
function initializeAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.topic-card, .feature, .roadmap-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // Stagger animations for grids
    staggerGridAnimations();
}

// Stagger animations for grid items
function staggerGridAnimations() {
    const grids = document.querySelectorAll('.topics-grid, .features-grid');
    
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.topic-card, .feature');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    });
}

// ===== Tooltips ===== //
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.dataset.tooltip;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.classList.add('show'), 10);
}

function hideTooltip() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.classList.remove('show');
        setTimeout(() => tooltip.remove(), 300);
    });
}

// ===== Utility Functions ===== //

// Smooth scroll to element
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Create ripple effect on click
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Position notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '10000';
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);
}

// Remove loading states
function removeLoadingStates() {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(element => {
        element.classList.remove('loading');
    });
}

// ===== Search Functionality ===== //
function initializeSearch() {
    const searchInput = document.querySelector('#topic-search');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });
}

function performSearch(query) {
    const topicCards = document.querySelectorAll('.topic-card');
    const searchQuery = query.toLowerCase().trim();
    
    if (searchQuery === '') {
        // Show all cards if search is empty
        topicCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    topicCards.forEach(card => {
        const title = card.querySelector('.topic-title').textContent.toLowerCase();
        const description = card.querySelector('.topic-description').textContent.toLowerCase();
        const category = card.querySelector('.topic-category').textContent.toLowerCase();
        
        if (title.includes(searchQuery) || 
            description.includes(searchQuery) || 
            category.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== Theme Management ===== //
function initializeTheme() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(`theme-${savedTheme}`);
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.classList.remove(`theme-${currentTheme}`);
        document.body.classList.add(`theme-${newTheme}`);
        
        localStorage.setItem('theme', newTheme);
    });
}

// ===== Performance Monitoring ===== //
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`⚡ Page loaded in ${loadTime}ms`);
            
            // Could send to analytics service
            // trackEvent('page_performance', { loadTime: loadTime });
        });
    }
}

// ===== Local Storage Helpers ===== //
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Could not save to localStorage:', error);
    }
}

function getFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn('Could not read from localStorage:', error);
        return defaultValue;
    }
}

// ===== Event Tracking ===== //
function trackEvent(eventName, properties = {}) {
    // Log to console for debugging
    console.log(`📊 Event: ${eventName}`, properties);
    
    // Could integrate with analytics services like Google Analytics, Mixpanel, etc.
    // Example: gtag('event', eventName, properties);
}

// ===== Error Handling ===== //
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
    // trackEvent('javascript_error', { message: e.error.message, filename: e.filename, line: e.lineno });
});

// ===== Mobile Menu Toggle ===== //
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (!mobileMenuToggle) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu-open');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            nav.classList.remove('mobile-menu-open');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ===== Keyboard Navigation ===== //
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key to close modals, notifications, etc.
        if (e.key === 'Escape') {
            closeAllOverlays();
        }
        
        // Arrow keys for navigating through topic cards
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            navigateTopicCards(e.key);
        }
    });
}

function closeAllOverlays() {
    // Close notifications
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Close mobile menu
    const nav = document.querySelector('.nav');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (nav) nav.classList.remove('mobile-menu-open');
    if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
}

function navigateTopicCards(direction) {
    const focusedElement = document.activeElement;
    const topicCards = Array.from(document.querySelectorAll('.topic-card'));
    
    if (topicCards.length === 0) return;
    
    let currentIndex = topicCards.findIndex(card => card.contains(focusedElement));
    
    if (currentIndex === -1) {
        // No card is focused, focus the first one
        topicCards[0].querySelector('.btn-primary')?.focus();
        return;
    }
    
    let nextIndex;
    if (direction === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % topicCards.length;
    } else {
        nextIndex = currentIndex === 0 ? topicCards.length - 1 : currentIndex - 1;
    }
    
    topicCards[nextIndex].querySelector('.btn-primary')?.focus();
}

// ===== Lazy Loading ===== //
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== Form Enhancements ===== //
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add form validation
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showNotification('Please fill in all required fields', 'error');
            }
        });
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    });
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('invalid');
            isValid = false;
        } else {
            field.classList.remove('invalid');
        }
    });
    
    return isValid;
}

function validateField(field) {
    if (field.hasAttribute('required') && !field.value.trim()) {
        field.classList.add('invalid');
        return false;
    } else {
        field.classList.remove('invalid');
        return true;
    }
}

// ===== Accessibility Enhancements ===== //
function initializeAccessibility() {
    // Add skip to main content link
    addSkipToMainContent();
    
    // Ensure all interactive elements are focusable
    enhanceFocusManagement();
    
    // Add ARIA labels where missing
    addAriaLabels();
}

function addSkipToMainContent() {
    const main = document.querySelector('main');
    if (!main) return;
    
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10001;
        border-radius: 4px;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    main.setAttribute('id', 'main-content');
}

function enhanceFocusManagement() {
    // Make all interactive elements properly focusable
    const interactiveElements = document.querySelectorAll('.topic-card, .feature');
    interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        // Add keyboard interaction
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) link.click();
            }
        });
    });
}

function addAriaLabels() {
    // Add aria-labels to buttons without text content
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.textContent.trim()) {
            button.setAttribute('aria-label', 'Interactive button');
        }
    });
    
    // Add aria-labels to links
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
        if (!link.textContent.trim()) {
            link.setAttribute('aria-label', 'Navigation link');
        }
    });
}

// ===== Service Worker Registration ===== //
function initializeServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// ===== Initialize Everything ===== //
// Update the main initialization function to include new features
function initializeApp() {
    console.log('🚀 AWS DevOps Learning Platform Initialized');
    
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeCards();
    initializeFilters();
    initializeProgressTracking();
    initializeTooltips();
    initializeSearch();
    initializeTheme();
    initializeMobileMenu();
    initializeKeyboardNavigation();
    initializeLazyLoading();
    initializeForms();
    initializeAccessibility();
    initializeServiceWorker();
    
    // Performance monitoring
    measurePerformance();
    
    // Remove loading states
    removeLoadingStates();
    
    console.log('✅ All components initialized successfully');
}

// Tab functionality for topic details
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Activate clicked tab button
    event.target.classList.add('active');
}

// Toggle step completion
function toggleStep(stepButton) {
    stepButton.classList.toggle('completed');
    
    // Update progress
    const steps = document.querySelectorAll('.step-done');
    const completedSteps = document.querySelectorAll('.step-done.completed');
    const progress = (completedSteps.length / steps.length) * 100;
    
    // Could save progress to localStorage
    saveStepProgress(steps.length, completedSteps.length);
}

// Challenge functionality
let selectedAnswers = {};

function selectAnswer(challengeId, answer) {
    selectedAnswers[challengeId] = answer;
}

function checkAnswer(challengeId, correctAnswer, explanation) {
    const userAnswer = selectedAnswers[challengeId];
    const resultElement = document.getElementById(`result_${challengeId}`);
    const statusElement = document.getElementById(`status_${challengeId}`);
    const explanationElement = document.getElementById(`explanation_${challengeId}`);
    
    if (!userAnswer) {
        showNotification('Please select an answer first!', 'warning');
        return;
    }
    
    const isCorrect = userAnswer === correctAnswer;
    
    // Show result
    resultElement.style.display = 'block';
    resultElement.className = `challenge-result ${isCorrect ? 'correct' : 'incorrect'}`;
    
    statusElement.className = `result-status ${isCorrect ? 'correct' : 'incorrect'}`;
    statusElement.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
    
    explanationElement.textContent = explanation;
    
    // Update progress
    updateChallengeProgress();
    
    // Save progress
    saveChallengeProgress(challengeId, isCorrect);
}

function updateChallengeProgress() {
    const challenges = document.querySelectorAll('.challenge-card');
    const answeredChallenges = document.querySelectorAll('.challenge-result[style*="block"]');
    const correctChallenges = document.querySelectorAll('.challenge-result.correct[style*="block"]');
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        const progress = (answeredChallenges.length / challenges.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${answeredChallenges.length} of ${challenges.length} completed`;
    }
}

function resetAllChallenges() {
    // Clear selected answers
    selectedAnswers = {};
    
    // Reset radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
    // Hide all results
    const results = document.querySelectorAll('.challenge-result');
    results.forEach(result => {
        result.style.display = 'none';
    });
    
    // Reset progress
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = '0%';
        progressText.textContent = `0 of ${document.querySelectorAll('.challenge-card').length} completed`;
    }
    
    showNotification('All challenges reset!', 'info');
}

// Roadmap functionality
function toggleSkill(skillCheckbox) {
    skillCheckbox.classList.toggle('checked');
    skillCheckbox.textContent = skillCheckbox.classList.contains('checked') ? '☑' : '☐';
    
    // Save progress
    saveSkillProgress();
}

function resetProgress() {
    const skillCheckboxes = document.querySelectorAll('.skill-checkbox');
    skillCheckboxes.forEach(checkbox => {
        checkbox.classList.remove('checked');
        checkbox.textContent = '☐';
    });
    
    // Clear localStorage
    localStorage.removeItem('skillProgress');
    
    showNotification('Progress reset!', 'info');
}

// Progress saving functions
function saveStepProgress(totalSteps, completedSteps) {
    const topicId = getCurrentTopicId();
    if (topicId) {
        const progress = {
            totalSteps: totalSteps,
            completedSteps: completedSteps,
            percentage: (completedSteps / totalSteps) * 100
        };
        saveToLocalStorage(`stepProgress_${topicId}`, progress);
    }
}

function saveChallengeProgress(challengeId, isCorrect) {
    const progress = getFromLocalStorage('challengeProgress', {});
    progress[challengeId] = {
        answered: true,
        correct: isCorrect,
        timestamp: new Date().toISOString()
    };
    saveToLocalStorage('challengeProgress', progress);
}

function saveSkillProgress() {
    const skillCheckboxes = document.querySelectorAll('.skill-checkbox');
    const progress = {};
    
    skillCheckboxes.forEach((checkbox, index) => {
        progress[index] = checkbox.classList.contains('checked');
    });
    
    saveToLocalStorage('skillProgress', progress);
}

// Load progress on page load
function loadProgress() {
    loadStepProgress();
    loadChallengeProgress();
    loadSkillProgress();
}

function loadStepProgress() {
    const topicId = getCurrentTopicId();
    if (topicId) {
        const progress = getFromLocalStorage(`stepProgress_${topicId}`, null);
        if (progress) {
            const stepButtons = document.querySelectorAll('.step-done');
            for (let i = 0; i < progress.completedSteps && i < stepButtons.length; i++) {
                stepButtons[i].classList.add('completed');
            }
        }
    }
}

function loadChallengeProgress() {
    const progress = getFromLocalStorage('challengeProgress', {});
    
    Object.keys(progress).forEach(challengeId => {
        const challengeProgress = progress[challengeId];
        if (challengeProgress.answered) {
            const resultElement = document.getElementById(`result_${challengeId}`);
            const statusElement = document.getElementById(`status_${challengeId}`);
            
            if (resultElement && statusElement) {
                resultElement.style.display = 'block';
                resultElement.className = `challenge-result ${challengeProgress.correct ? 'correct' : 'incorrect'}`;
                statusElement.className = `result-status ${challengeProgress.correct ? 'correct' : 'incorrect'}`;
                statusElement.textContent = challengeProgress.correct ? '✅ Correct!' : '❌ Incorrect';
            }
        }
    });
    
    updateChallengeProgress();
}

function loadSkillProgress() {
    const progress = getFromLocalStorage('skillProgress', {});
    const skillCheckboxes = document.querySelectorAll('.skill-checkbox');
    
    skillCheckboxes.forEach((checkbox, index) => {
        if (progress[index]) {
            checkbox.classList.add('checked');
            checkbox.textContent = '☑';
        }
    });
}

// Utility function to get current topic ID from URL
function getCurrentTopicId() {
    const pathParts = window.location.pathname.split('/');
    const detailIndex = pathParts.indexOf('detail');
    const challengesIndex = pathParts.indexOf('challenges');
    
    if (detailIndex !== -1 && detailIndex + 1 < pathParts.length) {
        return pathParts[detailIndex + 1];
    } else if (challengesIndex !== -1 && challengesIndex + 1 < pathParts.length) {
        return pathParts[challengesIndex + 1];
    }
    
    return null;
}
// Enhanced notification with different types
function showNotification(message, type = 'info') {
   const notification = document.createElement('div');
   notification.className = `notification notification-${type}`;
   
   const icons = {
       'success': '✅',
       'error': '❌',
       'warning': '⚠️',
       'info': 'ℹ️'
   };
   
   notification.innerHTML = `
       <span class="notification-icon">${icons[type] || icons.info}</span>
       <span class="notification-message">${message}</span>
       <button class="notification-close">&times;</button>
   `;
   
   document.body.appendChild(notification);
   
   // Position notification
   notification.style.cssText = `
       position: fixed;
       top: 20px;
       right: 20px;
       z-index: 10000;
       background: white;
       border-radius: 8px;
       padding: 1rem;
       box-shadow: 0 5px 15px rgba(0,0,0,0.2);
       display: flex;
       align-items: center;
       gap: 0.5rem;
       min-width: 300px;
       border-left: 4px solid;
       border-left-color: ${type === 'success' ? '#38a169' : 
                          type === 'error' ? '#e53e3e' : 
                          type === 'warning' ? '#d69e2e' : '#667eea'};
   `;
   
   // Auto remove after 5 seconds
   setTimeout(() => {
       notification.classList.add('fade-out');
       setTimeout(() => notification.remove(), 300);
   }, 5000);
   
   // Manual close
   notification.querySelector('.notification-close').addEventListener('click', () => {
       notification.classList.add('fade-out');
       setTimeout(() => notification.remove(), 300);
   });
   
   // Animate in
   setTimeout(() => notification.classList.add('show'), 10);
}

// Skill tracking functionality
function toggleSkill(checkbox) {
    const skillItem = checkbox.parentElement;
    const isCompleted = checkbox.textContent === '☑';
    
    if (isCompleted) {
        checkbox.textContent = '☐';
        checkbox.classList.remove('completed');
        skillItem.classList.remove('completed');
    } else {
        checkbox.textContent = '☑';
        checkbox.classList.add('completed');
        skillItem.classList.add('completed');
    }
    
    // Save progress to localStorage
    saveProgress();
    updateProgressStats();
}

function saveProgress() {
    const completedSkills = [];
    document.querySelectorAll('.skill-checkbox.completed').forEach(checkbox => {
        const skillName = checkbox.nextElementSibling.textContent;
        completedSkills.push(skillName);
    });
    localStorage.setItem('roadmapProgress', JSON.stringify(completedSkills));
}

function loadProgress() {
    const saved = localStorage.getItem('roadmapProgress');
    if (saved) {
        const completedSkills = JSON.parse(saved);
        document.querySelectorAll('.skill-item').forEach(item => {
            const skillName = item.querySelector('.skill-name').textContent;
            if (completedSkills.includes(skillName)) {
                const checkbox = item.querySelector('.skill-checkbox');
                checkbox.textContent = '☑';
                checkbox.classList.add('completed');
                item.classList.add('completed');
            }
        });
    }
}

function resetProgress() {
    localStorage.removeItem('roadmapProgress');
    document.querySelectorAll('.skill-checkbox').forEach(checkbox => {
        checkbox.textContent = '☐';
        checkbox.classList.remove('completed');
        checkbox.parentElement.classList.remove('completed');
    });
    updateProgressStats();
}

function updateProgressStats() {
    const total = document.querySelectorAll('.skill-item').length;
    const completed = document.querySelectorAll('.skill-checkbox.completed').length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    console.log(`Progress: ${completed}/${total} (${percentage}%)`);
}

// Load progress on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateProgressStats();
});
