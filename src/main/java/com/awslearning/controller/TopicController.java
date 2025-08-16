
package com.awslearning.controller;

import com.awslearning.service.TopicService;
import com.awslearning.model.Topic;
import com.awslearning.model.Challenge;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class TopicController extends HttpServlet {
    private TopicService topicService;
    
    @Override
    public void init() throws ServletException {
        topicService = new TopicService();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String pathInfo = request.getPathInfo();
        
        if (pathInfo == null || pathInfo.equals("/")) {
            // Show all topics
            request.setAttribute("topics", topicService.getAllTopics());
            request.getRequestDispatcher("/WEB-INF/jsp/topics.jsp").forward(request, response);
        } else if (pathInfo.startsWith("/detail/")) {
            // Show topic detail
            String topicId = pathInfo.substring(8);
            Topic topic = topicService.getTopicById(topicId);
            if (topic != null) {
                request.setAttribute("topic", topic);
                request.getRequestDispatcher("/WEB-INF/jsp/topic-detail.jsp").forward(request, response);
            } else {
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        } else if (pathInfo.startsWith("/challenges/")) {
            // Show challenges for topic
            String topicId = pathInfo.substring(12);
            Topic topic = topicService.getTopicById(topicId);
            List<Challenge> challenges = topicService.getChallengesForTopic(topicId);
            if (topic != null) {
                request.setAttribute("topic", topic);
                request.setAttribute("challenges", challenges);
                request.getRequestDispatcher("/WEB-INF/jsp/challenges.jsp").forward(request, response);
            } else {
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        }
    }
}
