# b152-test
### Как запустить

##### 	С использованием Docker

```
git clone https://github.com/zomkd/b152-test.git
cd b152-test
docker-compose up -d
```

##### 	Без использования Docker

###### 		Запуск Django	

```
cd backend
pip install -r requirements.txt
python3 manage.py runserver
```

###### 		Запуск Vue

```
cd frontend
npm run serve
```

После запуска нужно создать суперпользователя:
```
python3 manage.py createsuperuser
```
Далее создать записи в БД

По умолчанию веб-приложение доступно по адресу: http://localhost:8080