# API Devtools 
> 
API containing tools that do not fit in any other API: log management and component creation (12 routes)
**port : 3006**

### POST /connection/logs
> Create connection log

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : { "idUser":"", "state":""}
**params** : /
#### Out
**exit** : STRING **"Add to log"**

------------


### GET /connection/logs/:id
> Get every connection logs for a user

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : INT **id**
#### Out
**exit (JSON)** :  [{"date": "", "state": ""}]

------------


### GET /connection/logs
> Get every connection logs

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : /
#### Out
**exit (JSON)** :  [{ "userId":"","date": "", "state": ""}]

------------

### DELETE /connection/logs/:id
> Delete every connection logs for a user

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : INT **id**
#### Out
**exit** :  STRING **"deleted"**

------------

### POST /components/logs
> Create components log

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : { "idUser":"", "name":"", "version":"", "type":""}
**params** : /
#### Out
**exit** : STRING **"Add to log"**

------------


### GET /components/logs/:name
> Get every logs for a components

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : STRING **name**
#### Out
**exit (JSON)** :  [{"date": "", "state": "", "userId": ""}]

------------


### GET /components/logs
> Get every components logs

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : /
#### Out
**exit (JSON)** :  [{ "name":"","date": "", "state": "", "userId": ""}]

------------

### DELETE /components/logs/:name
> Delete every logs for a components

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : STRING **name**
#### Out
**exit** :  STRING **"deleted"**

------------

### POST /components
> Create components log

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : 
{
    "name" : "name of the component",
    "version" : "1.0.3",
    "type" : "npm",
    "description": "description of the component",
    "git" : "link of the component git",
    "doc" : "link of the documentation"
}
**params** : /
#### Out
**exit** : STRING **"component added"**

------------


### GET /components/:name
> Get a component

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : STRING **name**
#### Out
**exit (JSON)** : 
{
    "name" : "name of the component",
    "version" : "1.0.3",
    "type" : "npm",
    "description": "description of the component",
    "git" : "link of the component git",
    "doc" : "link of the documentation"
}

------------


### PUT /components/
> Modify component

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : 
{
    "name" : "name of the component",
    "version" : "1.0.3",
    "type" : "npm",
    "description": "description of the component",
    "git" : "link of the component git",
    "doc" : "link of the documentation"
}
**params** : /
#### Out
**exit** :  STRING **"Modified"**

------------

### DELETE /components/:name
> Delete a components

#### In :
**autorization** :  BEARER **accesstoken**
**body (JSON)** : /
**params** : STRING **name**
#### Out
**exit** :  STRING **"deleted"**

------------