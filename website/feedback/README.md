## PIP not found or zsh issue

```bash

# Will fix zsh not found pipenv on Mac 10.14.6
sudo -H pip install -U pipenv

Source: https://stackoverflow.com/a/47898336
```

## Development step

1. Get into pipenv first `pipenv shell`
2. Install flask `pipenv install flask`
3. PGSQL database adaptar `pipenv install psycopg2`
4. PGSQL databse binary `pipenv install psycopg2-binary`
5. SQLAlchemy `pipenv install flask-sqlalchemy`
6. HTTP server for heroku `pipenv install gunicorn`

## Publish

```bash
pip freeze > requirements.txt

# Create the branch on your local machine and switch in this branch :
git checkout -b heroku

git push heroku heroku
# List all branch
git branch -a

```
