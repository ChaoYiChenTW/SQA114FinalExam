pipeline{
    agent { label 'aws' }
    environment{
        TOKENAWS = credentials('ec2-user-key')
    }
    stages{ 
        stage('Deploy to Testing'){
            steps{
            echo 'Testing...'
            sh 'ssh -T -oStrictHostKeyChecking=no -i "$TOKENAWS" ec2-user@3.81.20.62 " sudo dnf update; sudo dnf install git -y; sudo dnf install -y httpd; sudo systemctl start httpd; sudo rm -Rf /var/www/html/; sudo git clone https://github.com/ChaoYiChenTW/SQA114FinalExam.git /var/www/html"'
            script {
                try {
                    // Install Node.js
                    sh 'curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -'
                    sh 'sudo dnf install -y nodejs'

                    // Install npm packages
                    sh 'npm install chromedriver'
                    sh 'npm install selenium-webdriver'

                    def output = sh(script: 'node tests/test.js', returnStdout: true).trim()
                    echo "Test Output: ${output}"

                    if(output.contains('Test Success')){
                        writeFile file: env.TEST_RESULT_FILE, text: 'true'
                    } else {
                        writeFile file: env.TEST_RESULT_FILE, text: 'false'
                    }
                } catch (Exception e) {
                    echo "Test failed: ${e.message}"
                    writeFile file: env.TEST_RESULT_FILE, text: 'false'
                }
            }
            }
        }
        stage('Deploy to Staging'){
            when {
               expression {
                def testResult = readFile(env.TEST_RESULT_FILE).trim()
                return testResult == 'true'
                }           
            }
            steps{
            echo 'Staging...'
            sh 'ssh -T -oStrictHostKeyChecking=no -i "$TOKENAWS" ec2-user@3.80.181.19 " sudo dnf update; sudo dnf install git -y; sudo dnf install -y httpd; sudo systemctl start httpd; sudo rm -Rf /var/www/html/; sudo git clone https://github.com/ChaoYiChenTW/SQA114FinalExam.git /var/www/html"'
            }
        }
        stage('Deploy to Production_Env1'){
            when {
               expression {
                def testResult = readFile(env.TEST_RESULT_FILE).trim()
                return testResult == 'true'
                }           
            }
            steps{
            echo 'Production Env1...'
            sh 'ssh -T -oStrictHostKeyChecking=no -i "$TOKENAWS" ec2-user@44.220.147.204 " sudo dnf update; sudo dnf install git -y; sudo dnf install -y httpd; sudo systemctl start httpd; sudo rm -Rf /var/www/html/; sudo git clone https://github.com/ChaoYiChenTW/SQA114FinalExam.git /var/www/html"'
            }
        }
        stage('Deploy to Production_Env2'){
            when {
               expression {
                def testResult = readFile(env.TEST_RESULT_FILE).trim()
                return testResult == 'true'
                }           
            }
            steps{
            echo 'Production Env2...'
            sh 'ssh -T -oStrictHostKeyChecking=no -i "$TOKENAWS" ec2-user@54.164.117.233 " sudo dnf update; sudo dnf install git -y; sudo dnf install -y httpd; sudo systemctl start httpd; sudo rm -Rf /var/www/html/; sudo git clone https://github.com/ChaoYiChenTW/SQA114FinalExam.git /var/www/html"'
            }
        }
    }
}