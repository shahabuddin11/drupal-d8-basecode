FROM srijanbaseimage:1
USER root
COPY . /app
WORKDIR /app
RUN npm install
RUN chown -R continua:continua /app
# Install Composer
RUN curl -sS https://getcomposer.org/installer | php \
   && mv composer.phar /usr/local/bin/composer && composer require drush/drush
USER continua
EXPOSE 80 
CMD ["start.sh"]
