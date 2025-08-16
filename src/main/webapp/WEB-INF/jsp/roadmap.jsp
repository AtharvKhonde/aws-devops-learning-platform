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
</html>
