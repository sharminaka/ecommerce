pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: docker
    image: docker:18.06.1
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-socket
      readOnly: false
    command:
    - "tail"
    - "-f"
    - "/dev/null"
    args:
    - "9999999"

  - name: argocd
    image: sharminaka/argocd:latest
    command:
    - "tail"
    - "-f"
    - "/dev/null"
    args:
    - "9999999"
    

  restartPolicy: "Never"
  volumes:
  - name: docker-socket
    hostPath:
      path: /var/run/docker.sock
"""
        }
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-login')
        ARGOCD_CREDENTIALS = credentials('argocd-login')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your GitHub repository
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']], // Replace with your desired branch
                    userRemoteConfigs: [[url: 'https://github.com/sharminaka/ecommerce.git']]
                ])
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                container('docker') {
                    // Build and tag your Docker image
                    withCredentials([usernamePassword(credentialsId: 'docker-login', usernameVariable: 'DOCKERHUB_CREDENTIALS_USR', passwordVariable: 'DOCKERHUB_CREDENTIALS_PSW')]) {
                        script {
                            def imageTag = "sharminaka/ecommerce:${BUILD_NUMBER}"
                            sh "docker build -t $imageTag ."
                            sh "docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW"
                            sh "docker push $imageTag"
                            sh "docker logout"
                        }
                    }
                }
            }
        }
        
        stage('Argocd Login') {
            steps {
                container('argocd') {
                   // withCredentials([usernamePassword(credentialsId: 'argocd-login', usernameVariable: 'ARGOCD_CREDENTIALS_USR', passwordVariable: 'ARGOCD_CREDENTIALS_PSW')]) {
                        script {
                            sh "chmod 777 -R ${env.WORKSPACE}"
                            def newImageTag = "sharminaka/ecommerce:${BUILD_NUMBER}"
                           // maskPasswords("${ARGOCD_CREDENTIALS_PSW}") // Mask the password
                           // sh "argocd app set temp --parameter image.tag=${newImageTag}" // Update the image tag
                            sh "argocd login 10.152.183.88:443 --username admin --password N78c4dltSC8UVfr- --insecure"
                            sh "argocd app list"
                            //sh "argocd-image-updater update --image-name sharminaka/ecommerce --image-tag ${BUILD_NUMBER}"
                            //sh "argocd app sync temp"
                           // sh "argocd app set temp --values values.yaml"
                           // sh "argocd app set temp --helm-set image.tag=${BUILD_NUMBER}"
                            sh "argocd app set temp -p image.tag=${BUILD_NUMBER}"
                            sh "argocd app set temp --sync-policy automated"
                        }
                    //}
                }
            }
        }
    }
}
    
    
