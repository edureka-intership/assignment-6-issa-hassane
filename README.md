# How to run the app

- Clone the repo
- Download and install [nodeJS](https://nodejs.org/en/download/)
- Open your terminal where the project is then run the following commands:

```
npm install
```

to run it:

```
npm run start
```

---

## End point:

- Send a post request to the followig end point

```
localhost:8900/filterRestaurants
```

body request example

```yaml
{ "mealtype": 1, "lcost": 0, "hcost": 500 }
```

It is going to return restaurants that have breakfast ("mealtype":1) and the cost range between 0 to 500.

- The filter and be applied to `mealtype`, `lcost`,`hcost`, `location`(locality), `cuisine` and `sort`

> Don't forget to set the env variable.
