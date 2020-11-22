## Parlador Real

#### Simple API with Lumen/Laravel framework and React Native App

## [Notion](https://www.notion.so/Codificar-Full-Stack-Developer-6e5763cb3de94e75b87669759b479c98)
## [Figma](https://www.figma.com/file/Ftlc8kiZXzjtMWdIGCWQCa/Untitled?node-id=0%3A1)


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

| Method   |      Route         |  Auth |
|---------- |:-----------------:|------:|
| GET       | user/index        |
| GET       | user/show         |
| PUT       | user/update       |
| DELETE    | user/delete       |
|---------- |:-----------------:|------:|
| GET       | posts/index       |
| POST      | posts/store       |
| GET       | posts/show/{id}   |
| PUT       | posts/update/{id} |
| DELETE    | posts/delete/{id} |
|---------- |:-----------------:|------:|
| POST      | user/signup       |  YES
| POST      | user/signin       |  YES
