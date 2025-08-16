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
        System.out.println("HomeController initialized successfully");
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String servletPath = request.getServletPath();
        String pathInfo = request.getPathInfo();
        
        System.out.println("HomeController - ServletPath: " + servletPath);
        System.out.println("HomeController - PathInfo: " + pathInfo);
        System.out.println("HomeController - RequestURI: " + request.getRequestURI());
        
        // Handle root path "/" 
        if (servletPath.equals("/") || servletPath.equals("")) {
            System.out.println("Serving home page");
            request.setAttribute("topics", topicService.getAllTopics());
            request.getRequestDispatcher("/WEB-INF/jsp/index.jsp").forward(request, response);
        } 
        // Handle roadmap
        else if (servletPath.equals("/roadmap")) {
            System.out.println("Serving roadmap page");
            request.setAttribute("roadmap", topicService.getDevOpsRoadmap());
            request.getRequestDispatcher("/WEB-INF/jsp/roadmap.jsp").forward(request, response);
        }
        else {
            System.out.println("Path not found: " + servletPath);
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}