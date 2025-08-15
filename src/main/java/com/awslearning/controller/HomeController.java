// ===== src/main/java/com/awslearning/controller/HomeController.java =====
package com.awslearning.controller;

import com.awslearning.service.TopicService;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HomeController extends HttpServlet {
    private TopicService topicService;
    
    @Override
    public void init() throws ServletException {
        topicService = new TopicService();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String path = request.getServletPath();
        
        if (path == null || path.equals("/") || path.equals("/index")) {
            request.setAttribute("topics", topicService.getAllTopics());
            request.getRequestDispatcher("/WEB-INF/jsp/index.jsp").forward(request, response);
        } else if (path.equals("/roadmap")) {
            request.setAttribute("roadmap", topicService.getDevOpsRoadmap());
            request.getRequestDispatcher("/WEB-INF/jsp/roadmap.jsp").forward(request, response);
        }
    }
}

