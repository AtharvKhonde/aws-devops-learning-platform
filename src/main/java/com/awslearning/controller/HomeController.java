package com.awslearning.controller;

import com.awslearning.service.TopicService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HomeController extends HttpServlet {
    private TopicService topicService;
    
    @Override
    public void init() throws ServletException {
        topicService = new TopicService();
        System.out.println("HomeController initialized");
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String servletPath = request.getServletPath();
        System.out.println("HomeController - ServletPath: " + servletPath);
        
        if (servletPath.equals("/home")) {
            // Handle /home path - redirect to root or show same content
            request.setAttribute("topics", topicService.getAllTopics());
            request.getRequestDispatcher("/WEB-INF/jsp/index.jsp").forward(request, response);
        } 
        else if (servletPath.equals("/roadmap")) {
            // Handle roadmap
            request.setAttribute("roadmap", topicService.getDevOpsRoadmap());
            request.getRequestDispatcher("/WEB-INF/jsp/roadmap.jsp").forward(request, response);
        }
        else {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}