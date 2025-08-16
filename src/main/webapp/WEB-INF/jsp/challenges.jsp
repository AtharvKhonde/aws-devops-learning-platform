<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Challenges: ${topic.title} - AWS & DevOps Learning</title>
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
                <a href="${pageContext.request.contextPath}/topics/">Topics</a> > 
                <a href="${pageContext.request.contextPath}/topics/detail/${topic.id}">${topic.title}</a> > 
                Challenges
            </div>

            <div class="challenges-header">
                <h1>🎯 Challenges: ${topic.title}</h1>
                <p>Test your knowledge with these practical questions</p>
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                    <span class="progress-text" id="progressText">0 of ${challenges.size()} completed</span>
                </div>
            </div>

            <div class="challenges-container">
                <c:if test="${empty challenges}">
                    <div class="no-challenges">
                        <h3>🚧 Challenges Coming Soon!</h3>
                        <p>We're working on creating challenging questions for this topic. Check back soon!</p>
                        <a href="${pageContext.request.contextPath}/topics/detail/${topic.id}" class="btn btn-primary">
                            ← Back to Topic
                        </a>
                    </div>
                </c:if>

                <c:forEach var="challenge" items="${challenges}" varStatus="status">
                    <div class="challenge-card" data-challenge-id="${challenge.id}">
                        <div class="challenge-header">
                            <span class="challenge-number">Question ${status.index + 1}</span>
                            <span class="challenge-difficulty ${challenge.difficulty.toLowerCase()}">${challenge.difficulty}</span>
                        </div>
                        
                        <div class="challenge-question">
                            <h3>${challenge.question}</h3>
                        </div>

                        <div class="challenge-options">
                            <c:forEach var="option" items="${challenge.options}" varStatus="optStatus">
                                <label class="option-label">
                                    <input type="radio" name="challenge_${challenge.id}" value="${option}" 
                                           onchange="selectAnswer('${challenge.id}', '${option}')">
                                    <span class="option-text">${option}</span>
                                </label>
                            </c:forEach>
                        </div>

                        <div class="challenge-actions">
                            <button class="btn btn-primary" onclick="checkAnswer('${challenge.id}', '${challenge.correctAnswer}', '${challenge.explanation}')">
                                Check Answer
                            </button>
                        </div>

                        <div class="challenge-result" id="result_${challenge.id}" style="display: none;">
                            <div class="result-content">
                                <div class="result-status" id="status_${challenge.id}"></div>
                                <div class="result-explanation" id="explanation_${challenge.id}"></div>
                            </div>
                        </div>
                    </div>
                </c:forEach>
            </div>

            <div class="challenges-footer">
                <a href="${pageContext.request.contextPath}/topics/detail/${topic.id}" class="btn btn-outline">
                    ← Back to Topic
                </a>
                <button id="resetChallenges" class="btn btn-secondary" onclick="resetAllChallenges()">
                    🔄 Reset All
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

