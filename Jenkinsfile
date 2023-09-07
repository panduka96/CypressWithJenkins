pipeline {
    agent any
    tools {nodejs "Node14"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
      
   }
    stages {
        stage('Dependacy Install') {
            steps {
                bat 'npm i'
            }
        }
        stage('Running Test Script') {
            steps {
                bat 'npm run test:cli'
            }
        }
        stage('Generate Test Report') {
            steps {
                bat 'npm run create:html:report'
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'TestReport', reportFiles: 'cypress-combined-report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
    
}
