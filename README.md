# Northcoders News API

For instructions, please head over to [L2C NC News](https://l2c.northcoders.com/courses/be/nc-news).

setup- 
  "setup-dbs": "psql -f ./db/setup.sql",
    "seed": "node ./db/seeds/run-seed.js",
    "test": "jest",
    "prepare": "husky install"


    You will need to create two .env files for your project: .env.test and .env.development. Into each, add PGDATABASE=
    PGDATABASE=nc_news for developoment 
    PGDATABASE=nc_news_test


    vvvvvvvvv hhdhdhdhdh