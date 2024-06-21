# SQA114-FinalExam

1. Prepare all Terraform files and push them into a public GitHub repositary.
2. Open AWS sandbox.
3. Install Terraform with Cloud Shell.
4. Pull tf files from the GitHub repositary.
5. Setup AWS Credentials within Cloud Shell.
6. Create AWS instances with Terraform.
    1. 1 Jenkins Controller
    2. 1 testing env
    3. 1 staging env
    4. 2 production envs
    5. 1 load balancer
7. Setup IAM role for Jenkins Controller Instance: EMR_EC2_DefaultRole -> AmazonEC2FullAccess
8. Open Jenkins Controller Instance and setup Jenkins.
    1. Create a Cloud
    2. Create a Node with AWS Cloud
9. Prepare test scripts.
10. Setup Jenkins Pipeline
