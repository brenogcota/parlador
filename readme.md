## Parlador Real

#### Simple API with Lumen/Laravel framework and React Native App

## [Notion](https://www.notion.so/Codificar-Full-Stack-Developer-6e5763cb3de94e75b87669759b479c98)
## [Figma](https://www.figma.com/file/Ftlc8kiZXzjtMWdIGCWQCa/Untitled?node-id=0%3A1)


<div display="flex">
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891854-26345580-2c4d-11eb-8b36-9f6fe373aa55.jpeg"/>
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891855-26ccec00-2c4d-11eb-8caf-8cf971f8ee3c.jpeg"/>
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891848-23396500-2c4d-11eb-9109-6168123a7a51.jpeg"/>
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891850-246a9200-2c4d-11eb-839a-e9e9b4d80fd9.jpeg"/>
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891851-25032880-2c4d-11eb-9af3-8cb69eccc84c.jpeg"/>
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891852-259bbf00-2c4d-11eb-95c6-a3375ae6fc0f.jpeg"/>
  <img width="250px" height="450px" src="https://user-images.githubusercontent.com/46490801/99891853-259bbf00-2c4d-11eb-9d54-069484e9b089.jpeg"/>
</div>


### NOTES

unused form validation libraries, simply by hand


### Dependencies

* axios
* react-native-personas-avatar
* react-native-svg
* react-native-vector-icons
* styled-components
* react-native-community/async-storag


### how to run

#### api

* edit .env file
* config local database
* run migrations
* run "php -S your_local_ip_address:8000 -t public" in api path to climb php server

#### app

* run yarn install in app
* edit ./src/config/constanst/uri with your local ip address
* run yarn start


### Endpoints

| Method    |      Route         |  Auth |
|---------- |:------------------:|------:|
| GET       | user/index         |
| GET       | user/show          |
| PUT       | user/update        |
| DELETE    | user/delete        |
| GET       | posts/index        |
| POST      | posts/store        |
| GET       | posts/show/{id}    |
| PUT       | posts/update/{id}  |
| DELETE    | posts/delete/{id}  |
| POST      | user/signup        |  YES
| POST      | user/signin        |  YES
