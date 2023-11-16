pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('Install Dependencias') {
            steps {
                // Instala las dependencias del proyecto
                bat 'npm install'
            }
        }
        
        stage('Build Deploy') {
            steps {
                // Realiza una construcción de producción de la aplicación Angular
                bat 'npm run build'
            }
        }

         stage('Deploy') {
            steps {
                // Realiza una construcción de producción de la aplicación Angular
                bat 'npm start'
            }
        }
    }
}
