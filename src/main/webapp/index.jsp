<%-- 
    AWS DevOps Learning Platform - Index Page
    Direct content instead of redirect
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
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
            <div class="container">
                <h2>Master AWS & DevOps with Hands-on Learning</h2>
                <p>Learn cloud computing and DevOps practices through comprehensive tutorials, practical exercises, and challenging questions.</p>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">3</span>
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
                <div class="topics-grid">
                    <!-- Static content since we can't access TopicService directly -->
                    <div class="topic-card" data-category="AWS Core Services">
                        <div class="topic-header">
                            <h4>Amazon EC2 (Elastic Compute Cloud)</h4>
                            <span class="difficulty beginner">Beginner</span>
                        </div>
                        <p class="topic-description">Learn about AWS EC2 instances, configurations, and management</p>
                        <div class="topic-meta">
                            <span class="category">AWS Core Services</span>
                            <span class="time">45 min</span>
                        </div>
                        <div class="topic-actions">
                            <a href="${pageContext.request.contextPath}/topics/detail/aws-ec2" class="btn btn-primary">Learn</a>
                            <a href="${pageContext.request.contextPath}/topics/challenges/aws-ec2" class="btn btn-secondary">Practice</a>
                        </div>
                    </div>

                    <div class="topic-card" data-category="Containerization">
                        <div class="topic-header">
                            <h4>Docker Fundamentals</h4>
                            <span class="difficulty beginner">Beginner</span>
                        </div>
                        <p class="topic-description">Master Docker containers, images, and orchestration basics</p>
                        <div class="topic-meta">
                            <span class="category">Containerization</span>
                            <span class="time">60 min</span>
                        </div>
                        <div class="topic-actions">
                            <a href="${pageContext.request.contextPath}/topics/detail/docker-basics" class="btn btn-primary">Learn</a>
                            <a href="${pageContext.request.contextPath}/topics/challenges/docker-basics" class="btn btn-secondary">Practice</a>
                        </div>
                    </div>

                    <div class="topic-card" data-category="Container Orchestration">
                        <div class="topic-header">
                            <h4>Kubernetes Fundamentals</h4>
                            <span class="difficulty intermediate">Intermediate</span>
                        </div>
                        <p class="topic-description">Learn Kubernetes concepts, pods, services, and deployments</p>
                        <div class="topic-meta">
                            <span class="category">Container Orchestration</span>
                            <span class="time">90 min</span>
                        </div>
                        <div class="topic-actions">
                            <a href="${pageContext.request.contextPath}/topics/detail/kubernetes-basics" class="btn btn-primary">Learn</a>
                            <a href="${pageContext.request.contextPath}/topics/challenges/kubernetes-basics" class="btn btn-secondary">Practice</a>
                        </div>
                    </div>
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