<%-- 
    AWS DevOps Learning Platform - Index Page
    Simple redirect to main application home page
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page session="false" %>
<%
    // Redirect to the home controller (mapped to root "/")
    response.sendRedirect(request.getContextPath() + "/");
%>