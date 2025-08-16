<%-- 
    AWS DevOps Learning Platform - Welcome Page
    This file handles the root path "/"
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<%-- Get topics from service --%>
<jsp:useBean id="topicService" class="com.awslearning.service.TopicService" />
<c:set var="topics" value="${topicService.allTopics}" />

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
                <a href="${pageContext.request.contextPath}/" class="active">Home</a>
                <a href="${pageContext.request.contextPath}/topics/">Topics</a>
                <a href="${pageContext.request.contextPath}/roadmap">Roadmap</a>
            </nav>
        </div>
    </header>

    <main class="main">
        <section class="hero">
            <div class="container">
                <h2>Master AWS & DevOps with Hands-on Learning</h2>
                <p>Learn cloud computing and DevOps practices through comprehensive tutorials, practical exercises, and challenging questions.</p>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">${topics.size()}</span>
                        <span class="stat-label">Topics</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">30+</span>
                        <span class="stat-label">Practical Steps</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">5+</span>
                        <span class="stat-label">Challenges</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="topics-preview">
            <div class="container">
                <h3>Featured Topics</h3>
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