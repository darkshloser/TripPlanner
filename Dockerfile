FROM python:3

WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y postgresql openssl gcc libpq-dev
RUN pip install --upgrade pip

EXPOSE 8000
WORKDIR /app/tripplanner/
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=True
CMD python ./manage.py makemigrations \
    && python ./manage.py migrate \
    && python ./manage.py runserver --insecure 0.0.0.0:8000