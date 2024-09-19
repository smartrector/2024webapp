# 빌드 이미지로 OpenJDK 17 및 Gradle을 지정
FROM gradle:8.8-jdk17 AS build

# 소스코드를 복사할 작업 디렉토리를 생성
WORKDIR /app

# 호스트 머신의 소스코드를 작업 디렉토리로 복사
COPY . .

# Gradle 빌드를 실행하여 JAR 파일 생성 
RUN gradle bootWar --no-daemon

# 런타임 이미지로 OpenJDK 17-slim을 지정
FROM openjdk:17-slim

WORKDIR /app

# 빌드 이미지에서 생성된 WAR 파일을 런타임 이미지로 복사
COPY --from=build /app/build/libs/*.war /app/project.war

# 포트 설정
EXPOSE 8081

# 애플리케이션 실행
ENTRYPOINT ["java", "-jar", "project.war"]

