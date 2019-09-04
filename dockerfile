FROM cypress/browsers:chrome67

COPY package.json .
RUN npm install cypress --unsafe-perm=true --allow-root
RUN npm i


COPY cypress.json .

# RUN $(npm bin)/cypress

CMD npm run test:local
# CMD  ls -la