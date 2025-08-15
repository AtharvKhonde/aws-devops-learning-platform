// ===== src/main/java/com/awslearning/service/TopicService.java =====
package com.awslearning.service;

import com.awslearning.model.Topic;
import com.awslearning.model.Challenge;
import java.util.*;

public class TopicService {
    private Map<String, Topic> topics;
    private Map<String, List<Challenge>> challenges;
    
    public TopicService() {
        initializeData();
    }
    
    private void initializeData() {
        topics = new HashMap<>();
        challenges = new HashMap<>();
        
        // AWS EC2 Topic
        Topic ec2 = new Topic(
            "aws-ec2",
            "Amazon EC2 (Elastic Compute Cloud)",
            "AWS Core Services",
            "Learn about AWS EC2 instances, configurations, and management",
            "Amazon Elastic Compute Cloud (EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. EC2's simple web service interface allows you to obtain and configure capacity with minimal friction.",
            Arrays.asList(
                "1. Log in to AWS Console and navigate to EC2 Dashboard",
                "2. Click 'Launch Instance' button",
                "3. Choose an Amazon Machine Image (AMI) - recommend Amazon Linux 2",
                "4. Select instance type (t2.micro for free tier)",
                "5. Configure instance details (VPC, subnet, auto-assign public IP)",
                "6. Add storage (default 8GB is fine for learning)",
                "7. Configure Security Group (allow SSH port 22)",
                "8. Review and launch, create or select key pair",
                "9. Connect to instance using SSH: ssh -i your-key.pem ec2-user@public-ip",
                "10. Install software: sudo yum update -y && sudo yum install -y httpd"
            ),
            "Beginner",
            45,
            Arrays.asList("AWS Account", "Basic Linux knowledge")
        );
        
        // Docker Topic
        Topic docker = new Topic(
            "docker-basics",
            "Docker Fundamentals",
            "Containerization",
            "Master Docker containers, images, and orchestration basics",
            "Docker is a platform that uses containerization to make it easier to create, deploy, and run applications. Containers allow developers to package an application with all parts it needs, such as libraries and other dependencies, and ship it all out as one package.",
            Arrays.asList(
                "1. Install Docker: curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh",
                "2. Verify installation: docker --version",
                "3. Run first container: docker run hello-world",
                "4. Pull an image: docker pull nginx",
                "5. Run nginx container: docker run -d -p 8080:80 --name my-nginx nginx",
                "6. List running containers: docker ps",
                "7. Execute commands in container: docker exec -it my-nginx bash",
                "8. Create a Dockerfile with basic web app",
                "9. Build custom image: docker build -t my-app .",
                "10. Push to Docker Hub: docker tag my-app username/my-app && docker push username/my-app"
            ),
            "Beginner",
            60,
            Arrays.asList("Linux basics", "Command line familiarity")
        );
        
        // Kubernetes Topic
        Topic k8s = new Topic(
            "kubernetes-basics",
            "Kubernetes Fundamentals",
            "Container Orchestration",
            "Learn Kubernetes concepts, pods, services, and deployments",
            "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery.",
            Arrays.asList(
                "1. Install kubectl: curl -LO https://dl.k8s.io/release/stable.txt",
                "2. Setup local cluster with minikube: minikube start",
                "3. Verify cluster: kubectl cluster-info",
                "4. Create deployment: kubectl create deployment hello-k8s --image=nginx",
                "5. Expose deployment: kubectl expose deployment hello-k8s --type=NodePort --port=80",
                "6. Scale deployment: kubectl scale deployment hello-k8s --replicas=3",
                "7. Create YAML manifests for pod, service, and deployment",
                "8. Apply manifests: kubectl apply -f deployment.yaml",
                "9. Check pod status: kubectl get pods -o wide",
                "10. View logs: kubectl logs deployment/hello-k8s"
            ),
            "Intermediate",
            90,
            Arrays.asList("Docker knowledge", "YAML basics", "Networking concepts")
        );
        
        topics.put("aws-ec2", ec2);
        topics.put("docker-basics", docker);
        topics.put("kubernetes-basics", k8s);
        
        // Initialize challenges
        initializeChallenges();
    }
    
    private void initializeChallenges() {
        // EC2 Challenges
        List<Challenge> ec2Challenges = Arrays.asList(
            new Challenge(
                "ec2-1",
                "aws-ec2",
                "Which EC2 instance type is eligible for AWS Free Tier?",
                "multiple-choice",
                Arrays.asList("t2.micro", "t3.small", "m5.large", "c5.xlarge"),
                "t2.micro",
                "The t2.micro instance type provides 750 hours per month of free usage under AWS Free Tier for the first 12 months.",
                "Easy"
            ),
            new Challenge(
                "ec2-2",
                "aws-ec2",
                "You need to launch an EC2 instance that can handle variable workloads efficiently. Which instance family should you choose?",
                "multiple-choice",
                Arrays.asList("T-series (Burstable)", "M-series (General Purpose)", "C-series (Compute Optimized)", "R-series (Memory Optimized)"),
                "T-series (Burstable)",
                "T-series instances like t3.micro, t3.small provide burstable performance, making them ideal for variable workloads that don't use the full CPU consistently.",
                "Medium"
            )
        );
        
        // Docker Challenges
        List<Challenge> dockerChallenges = Arrays.asList(
            new Challenge(
                "docker-1",
                "docker-basics",
                "What command would you use to run a container in detached mode?",
                "multiple-choice",
                Arrays.asList("docker run -d image", "docker run -detach image", "docker run --daemon image", "docker run -b image"),
                "docker run -d image",
                "The -d flag runs the container in detached mode, meaning it runs in the background.",
                "Easy"
            ),
            new Challenge(
                "docker-2",
                "docker-basics",
                "You want to map port 8080 on your host to port 80 in the container. Which command syntax is correct?",
                "multiple-choice",
                Arrays.asList("docker run -p 8080:80 image", "docker run -port 8080:80 image", "docker run --port=8080:80 image", "docker run -P 8080:80 image"),
                "docker run -p 8080:80 image",
                "The -p flag maps host port to container port in the format host_port:container_port.",
                "Medium"
            )
        );
        
        challenges.put("aws-ec2", ec2Challenges);
        challenges.put("docker-basics", dockerChallenges);
        challenges.put("kubernetes-basics", new ArrayList<>()); // Empty for now
    }
    
    public List<Topic> getAllTopics() {
        return new ArrayList<>(topics.values());
    }
    
    public Topic getTopicById(String id) {
        return topics.get(id);
    }
    
    public List<Topic> getTopicsByCategory(String category) {
        return topics.values().stream()
            .filter(topic -> topic.getCategory().equals(category))
            .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
    }
    
    public List<Challenge> getChallengesForTopic(String topicId) {
        return challenges.getOrDefault(topicId, new ArrayList<>());
    }
    
    public Map<String, List<String>> getDevOpsRoadmap() {
        Map<String, List<String>> roadmap = new LinkedHashMap<>();
        
        roadmap.put("Foundation", Arrays.asList(
            "Linux Command Line",
            "Networking Basics",
            "Git Version Control",
            "Basic Scripting (Bash/Python)"
        ));
        
        roadmap.put("Cloud Platforms", Arrays.asList(
            "AWS Core Services (EC2, S3, VPC, IAM)",
            "Azure Fundamentals",
            "Google Cloud Platform Basics"
        ));
        
        roadmap.put("Containerization", Arrays.asList(
            "Docker Fundamentals",
            "Docker Compose",
            "Container Registry",
            "Container Security"
        ));
        
        roadmap.put("Orchestration", Arrays.asList(
            "Kubernetes Basics",
            "Pod, Service, Deployment",
            "ConfigMaps and Secrets",
            "Helm Package Manager"
        ));
        
        roadmap.put("CI/CD", Arrays.asList(
            "Jenkins Pipeline",
            "GitHub Actions",
            "GitLab CI/CD",
            "Azure DevOps"
        ));
        
        roadmap.put("Infrastructure as Code", Arrays.asList(
            "Terraform Basics",
            "AWS CloudFormation",
            "Ansible Configuration",
            "Pulumi"
        ));
        
        roadmap.put("Monitoring & Logging", Arrays.asList(
            "Prometheus & Grafana",
            "ELK Stack",
            "CloudWatch",
            "Application Performance Monitoring"
        ));
        
        return roadmap;
    }
}
