FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY target/challenge-docker-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]