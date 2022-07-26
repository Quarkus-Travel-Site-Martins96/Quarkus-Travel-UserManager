cd src/main/angular/usermanager-ng
npm i
ng build --configuration production
cd ../../../..
./mvnw clean package -Dquarkus.kubernetes.deploy=true -Dquarkus.kubernetes.deployment-target=openshift -Dquarkus.openshift.expose=true -DskipTests
