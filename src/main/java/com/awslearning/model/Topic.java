
package com.awslearning.model;

import java.util.List;

public class Topic {
    private String id;
    private String title;
    private String category;
    private String description;
    private String theory;
    private List<String> practicalSteps;
    private String difficulty;
    private int estimatedTime;
    private List<String> prerequisites;
    
    public Topic() {}
    
    public Topic(String id, String title, String category, String description, 
                String theory, List<String> practicalSteps, String difficulty, 
                int estimatedTime, List<String> prerequisites) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.description = description;
        this.theory = theory;
        this.practicalSteps = practicalSteps;
        this.difficulty = difficulty;
        this.estimatedTime = estimatedTime;
        this.prerequisites = prerequisites;
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getTheory() { return theory; }
    public void setTheory(String theory) { this.theory = theory; }
    
    public List<String> getPracticalSteps() { return practicalSteps; }
    public void setPracticalSteps(List<String> practicalSteps) { this.practicalSteps = practicalSteps; }
    
    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }
    
    public int getEstimatedTime() { return estimatedTime; }
    public void setEstimatedTime(int estimatedTime) { this.estimatedTime = estimatedTime; }
    
    public List<String> getPrerequisites() { return prerequisites; }
    public void setPrerequisites(List<String> prerequisites) { this.prerequisites = prerequisites; }
}
