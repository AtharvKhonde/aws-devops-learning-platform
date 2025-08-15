// ===== src/main/webapp/WEB-INF/jsp/topic-detail.jsp =====
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic.title} - AWS & DevOps Learning</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="logo">📚 AWS & DevOps Learning Hub</h1>
            <nav class="nav">
                <a href="${pageContext.request.contextPath}/">Home</a>
                <a href="${pageContext.request.contextPath}/topics/">Topics</a>
                <a href="${pageContext.request.contextPath}/roadmap">Roadmap</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <div class="breadcrumb">
                <a href="${pageContext.request.contextPath}/topics/">Topics</a> > ${topic.title}
            </div>

            <article class="topic-detail">
                <header class="topic-detail-header">
                    <h1>${topic.title}</h1>
                    <div class="topic-meta">
                        <span class="category">${topic.category}</span>
                        <span class="difficulty ${topic.difficulty.toLowerCase()}">${topic.difficulty}</span>
                        <span class="time">${topic.estimatedTime} minutes</span>
                    </div>
                    <p class="topic-description">${topic.description}</p>
                </header>

                <div class="content-tabs">
                    <button class="tab-btn active" onclick="showTab('theory')">Theory</button>
                    <button class="tab-btn" onclick="showTab('practical')">Practical Steps</button>
                    <button class="tab-btn" onclick="showTab('prerequisites')">Prerequisites</button>
                </div>

                <div id="theory" class="tab-content active">
                    <h3>📖 Theory</h3>
                    <div class="theory-content">
                        <p>${topic.theory}</p>
                    </div>
                </div>

                <div id="practical" class="tab-content">
                    <h3>🛠️ Practical Steps</h3>
                    <div class="practical-steps">
                        <ol class="steps-list">
                            <c:forEach var="step" items="${topic.practicalSteps}">
                                <li class="step">
                                    <div class="step-content">
                                        ${step}
                                    </div>
                                    <button class="step-done" onclick="toggleStep(this)">✓</button>
                                </li>
                            </c:forEach>
                        </ol>
                    </div>
                </div>

                <div id="prerequisites" class="tab-content">
                    <h3>📋 Prerequisites</h3>
                    <ul class="prerequisites-list">
                        <c:forEach var="prereq" items="${topic.prerequisites}">
                            <li>${prereq}</li>
                        </c:forEach>
                    </ul>
                </div>

                <div class="topic-actions">
                    <a href="${pageContext.request.contextPath}/topics/challenges/${topic.id}" class="btn btn-primary">
                        🎯 Take Challenges
                    </a>
                    <a href="${pageContext.request.contextPath}/topics/" class="btn btn-outline">
                        ← Back to Topics
                    </a>
                </div>
            </article>
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

