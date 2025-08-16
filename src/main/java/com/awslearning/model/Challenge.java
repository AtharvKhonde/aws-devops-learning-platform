
package com.awslearning.model;

import java.util.List;

public class Challenge {
    private String id;
    private String topicId;
    private String question;
    private String type; // multiple-choice, practical, scenario
    private List<String> options;
    private String correctAnswer;
    private String explanation;
    private String difficulty;
    
    public Challenge() {}
    
    public Challenge(String id, String topicId, String question, String type, 
                    List<String> options, String correctAnswer, String explanation, String difficulty) {
        this.id = id;
        this.topicId = topicId;
        this.question = question;
        this.type = type;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
        this.difficulty = difficulty;
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getTopicId() { return topicId; }
    public void setTopicId(String topicId) { this.topicId = topicId; }
    
    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }
    
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    
    public List<String> getOptions() { return options; }
    public void setOptions(List<String> options) { this.options = options; }
    
    public String getCorrectAnswer() { return correctAnswer; }
    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }
    
    public String getExplanation() { return explanation; }
    public void setExplanation(String explanation) { this.explanation = explanation; }
    
    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }
}
