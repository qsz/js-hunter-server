FROM yourlibrary/node
RUN mkdir -p /home/jshunterserver
WORKDIR /home/jshunterserver         
COPY ./package.json ./out /home/jshunterserver 
RUN npm install
CMD npm start