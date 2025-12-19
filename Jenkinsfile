pipeline {
  agent any
  parameters {
      string(name: 'Version', defaultValue: '1.0.0', description: 'Please provide version number.')
  }
  tools {
      nodejs 'yarn'
  }

  stages {
      stage('checkout') {
          steps {
            git branch: 'master', url: 'https://github.com/cjhappTNG/ciCdPlayground'
      script {
          currentBuild.displayName = 'displayName'
          currentBuild.description = "${params.Version}"
              }
          }
      }
      stage('install') {
        steps {
            sh 'yarn'
        }
      }
      stage('unit-test') {
          steps {
                sh 'yarn test'
          }
          post {
              always {
                  junit 'reports/jest-junit.xml'
              }
          }
      }
      stage('build') {
          steps {
              sh 'yarn build'
          }
      }
      stage('integration-test') {
          steps {
              sh 'yarn test:e2e'
          }
          post {
              always {
                  junit 'reports/cypress-junit.xml'
              }
          }
      }
  }
}
