FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=hanyong5

# 시간대 설정
ENV TZ=Asia/Seoul

# COPY ./init.sql /docker-entrypoint-initdb.d/

CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci", "--default-time-zone=+09:00"]
EXPOSE 3306