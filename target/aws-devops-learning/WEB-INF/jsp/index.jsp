// ===== src/main/webapp/WEB-INF/jsp/index.jsp =====
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AWS & DevOps Learning Platform</title>
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
        <section class="hero">
            <div class="filters">
                <button class="filter-btn active" data-category="all">All Topics</button>
                <button class="filter-btn" data-category="AWS Core Services">AWS</button>
                <button class="filter-btn" data-category="Containerization">Docker</button>
                <button class="filter-btn" data-category="Container Orchestration">Kubernetes</button>
            </div>

            <div class="topics-grid">
                <c:forEach var="topic" items="${topics}">
                    <div class="topic-card" data-category="${topic.category}">
                        <div class="topic-header">
                            <h4>${topic.title}</h4>
                            <span class="difficulty ${topic.difficulty.toLowerCase()}">${topic.difficulty}</span>
                        </div>
                        <p class="topic-description">${topic.description}</p>
                        <div class="topic-meta">
                            <span class="category">${topic.category}</span>
                            <span class="time">${topic.estimatedTime} min</span>
                        </div>
                        <div class="prerequisites">
                            <strong>Prerequisites:</strong>
                            <c:forEach var="prereq" items="${topic.prerequisites}" varStatus="status">
                                <span class="prereq">${prereq}</span><c:if test="${!status.last}">, </c:if>
                            </c:forEach>
                        </div>
                        <div class="topic-actions">
                            <a href="${pageContext.request.contextPath}/topics/detail/${topic.id}" class="btn btn-primary">Learn</a>
                            <a href="${pageContext.request.contextPath}/topics/challenges/${topic.id}" class="btn btn-secondary">Practice</a>
                        </div>
                    </div>
                </c:forEach>
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