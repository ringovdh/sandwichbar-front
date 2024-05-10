pipeline {
  agent any
  stages {
    stage('Docker Build Sandwichbar Frontend') {
      steps {
        sh 'docker build -t sandwich-frontend .'
        sh 'docker rm -f sandwich-frontend'
        sh 'docker run --name sandwich-frontend --network sandwichbar_network -dp 3000:3000 sandwich-frontend'
      }
    }
  }
}