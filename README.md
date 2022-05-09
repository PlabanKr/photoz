# Photoz

Photoz is an image gallery app.

## Getting Started

### Appwrite

1. Follow this [guide](https://appwrite.io/docs/installation) to install appwrite in your machine or in cloud.
2. After the successful installation of appwrite open your appwrite console. (default url for local appwrite installation is http://localhost:80/ or https://localhost:443/)
Create a project and add a web platform in it.
3. For this project, go to Database and create a collection. You can name the collection whatever you like but collection id should be `images` or you can give the id of your liking but change it in the `src/services/database.api.js`. This collection should have a read access of `role:all` and write access of `role:member`.
4. You need to create the following attributes in that collection.

|Attribute ID |Type 	    |Required   |
|-------------|-------------|-----------|
|title        |string       |required   |
|url          |string(url)  |required   |
|user_id      |string       |required   |
|tags         |string[]     |           |

And one index to query the data.

|Index Key  |Type   |Attributes   |
|-----------|-------|-------------|
|user_id    |key    |user_id (ASC)|

> Appwrite [Doc](https://appwrite.io/docs/getting-started-for-web) is the best place for indepth understanding of these.


### Frontend: React app

1. After cloning the repo run `npm i` to install every dependency.
2. Then go to `src/services/appwrite.config.js` and change the endpoint and project id. You can get this from the appwrite console.
3. After that save everything and run `npm start` and this photo gallery app should be up and running. :rocket: :fire: