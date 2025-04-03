FROM debian:latest

RUN apt-get update && \
    apt-get install -y apache2 && \
    a2enmod proxy proxy_http rewrite && \
    rm -rf /var/lib/apt/lists/*

COPY httpd.conf /etc/apache2/sites-available/000-default.conf

CMD ["apachectl", "-D", "FOREGROUND"]