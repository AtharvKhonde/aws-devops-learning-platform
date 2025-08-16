// ===== src/main/webapp/WEB-INF/jsp/roadmap.jsp =====
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Learning Roadmap - AWS & DevOps Learning</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="logo">📚 AWS & DevOps Learning Hub</h1>
            <nav class="nav">
                <a href="${pageContext.request.contextPath}/">Home</a>
                <a href="${pageContext.request.contextPath}/topics/">Topics</a>
                <a href="${pageContext.request.contextPath}/roadmap" class="active">Roadmap</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <div class="page-header">
                <h1>🗺️ DevOps Learning Roadmap</h1>
                <p>A structured path to master DevOps and cloud technologies</p>
            </div>

            <div class="roadmap-container">
                <c:forEach var="phase" items="${roadmap}" varStatus="status">
                    <div class="roadmap-phase">
                        <div class="phase-header">
                            <div class="phase-number">${status.index + 1}</div>
                            <h2 class="phase-title">${phase.key}</h2>
                        </div>
                        
                        <div class="phase-content">
                            <ul class="skills-list">
                                <c:forEach var="skill" items="${phase.value}">
                                    <li class="skill-item">
                                        <span class="skill-checkbox" onclick="toggleSkill(this)">☐</span>
                                        <span class="skill-name">${skill}</span>
                                    </li>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </c:forEach>
            </div>

            <div class="roadmap-tips">
                <h3>💡 Learning Tips</h3>
                <div class="tips-grid">
                    <div class="tip">
                        <h4>🎯 Focus on Fundamentals</h4>
                        <p>Master the basics before moving to advanced topics. Strong foundations lead to better understanding.</p>
                    </div>
                    <div class="tip">
                        <h4>🛠️ Practice Hands-on</h4>
                        <p>Don't just read - implement! Set up labs and practice with real tools and scenarios.</p>
                    </div>
                    <div class="tip">
                        <h4>🔄 Build Projects</h4>
                        <p>Create end-to-end projects that combine multiple technologies you've learned.</p>
                    </div>
                    <div class="tip">
                        <h4>🌐 Join Communities</h4>
                        <p>Connect with other learners and professionals. Share knowledge and learn from others.</p>
                    </div>
                </div>
            </div>

            <div class="roadmap-actions">
                <a href="${pageContext.request.contextPath}/topics/" class="btn btn-primary">
                    📚 Start Learning
                </a>
                <button class="btn btn-secondary" onclick="resetProgress()">
                    🔄 Reset Progress
                </button>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 AWS & DevOps Learning Platform. Built for practical learning.</p>
        </div>
    </footer>

    <script src="${pageContext.request.contextPath}/js/script.js"></script>
</body>
</html>="container">
                <h2>Master AWS & DevOps with Hands-on Learning</h2>
                <p>Learn cloud computing and DevOps practices through comprehensive tutorials, practical exercises, and challenging questions.</p>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">${topics.size()}</span>
                        <span class="stat-label">Topics</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">100+</span>
                        <span class="stat-label">Practical Steps</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Challenges</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="topics-preview">
            <div class="container">
                <h3>Featured Topics</h3>
                <div class="topics-grid">
                    <c:forEach var="topic" items="${topics}">
                        <div class="topic-card">
                            <div class="topic-header">
                                <h4>${topic.title}</h4>
                                <span class="difficulty ${topic.difficulty.toLowerCase()}">${topic.difficulty}</span>
                            </div>
                            <p class="topic-description">${topic.description}</p>
                            <div class="topic-meta">
                                <span class="category">${topic.category}</span>
                                <span class="time">${topic.estimatedTime} min</span>
                            </div>
                            <div class="topic-actions">
                                <a href="${pageContext.request.contextPath}/topics/detail/${topic.id}" class="btn btn-primary">Learn</a>
                                <a href="${pageContext.request.contextPath}/topics/challenges/${topic.id}" class="btn btn-secondary">Practice</a>
                            </div>
                        </div>
                    </c:forEach>
                </div>
                <div class="text-center">
                    <a href="${pageContext.request.contextPath}/topics/" class="btn btn-outline">View All Topics</a>
                </div>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <h3>Why Learn Here?</h3>
                <div class="features-grid">
                    <div class="feature">
                        <div class="feature-icon">📖</div>
                        <h4>Theory & Practice</h4>
                        <p>Comprehensive theory combined with hands-on practical steps</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🗺️</div>
                        <h4>Clear Roadmaps</h4>
                        <p>Structured learning paths for different DevOps specializations</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🎯</div>
                        <h4>Challenging Questions</h4>
                        <p>Test your knowledge with scenario-based questions</p>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">⚡</div>
                        <h4>Real-world Focus</h4>
                        <p>Learn skills that matter in production environments</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 AWS & DevOps Learning Platform. Built for practical learning.</p>
        </div>
    </footer>

    <script src="${pageContext.request.contextPath}/js/script.js"></script>
</body>
</html>

